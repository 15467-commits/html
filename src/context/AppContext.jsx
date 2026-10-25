// ════════════════════════════════════════════════════════════════════════════
// AppContext.jsx — Global shared state
// ════════════════════════════════════════════════════════════════════════════

import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { STAGE, AGE } from '../constants';
import { omdbSearch, omdbDetails } from '../utils/api';

// ──────────────────── LESSON 5 ────────────────────
// TODO: Import callGroq from '../utils/api'
import { callGroq } from '../utils/api';
import { MAX_CHAT_HISTORY, FILTER_WORDS } from '../constants';
// TODO: Import MAX_CHAT_HISTORY and FILTER_WORDS from '../constants'
// ──────────────────── END ─────────────────────────


const AppContext = createContext(null);

export function AppProvider({ children }) {

  // ── Theme (Lesson 2) ────────────────────────────────────────────────────
  const [theme, setTheme] = useState(() => localStorage.getItem('cv_theme') || 'dark');
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : '';
    localStorage.setItem('cv_theme', theme);
  }, [theme]);

  // ── User profile (Lesson 2) ─────────────────────────────────────────────
  const [userName,       setUserName]       = useState('');
  const [userAge,        setUserAge]        = useState(AGE.ADULT);
  const [userMood,       setUserMood]       = useState('');
  const [userCategories, setUserCategories] = useState([]);
  const [userLanguage,   setUserLanguage]   = useState(['Any Language']);

  const userAgeRef = useRef(AGE.ADULT);
  useEffect(() => { userAgeRef.current = userAge; }, [userAge]);

  // ── Chat state (Lesson 2) ───────────────────────────────────────────────
  const [stage,       setStage]       = useState(STAGE.NAME);
  const [chatMsgs,    setChatMsgs]    = useState([]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const msgCounter = useRef(0);
  const newId = () => `msg-${++msgCounter.current}`;

  const addMsg = useCallback((role, content) =>
    setChatMsgs(prev => [...prev, { id: newId(), role, content }]), []);

  const resetModalRef = useRef(null);
  const resetChat = useCallback(() => {
    setChatMsgs([]);
    setUserName(''); setUserAge(AGE.ADULT); userAgeRef.current = AGE.ADULT;
    setUserMood(''); setUserCategories([]); setUserLanguage(['Any Language']);
    setIsBotTyping(false); setStage(STAGE.NAME);
    if (resetModalRef.current) resetModalRef.current();
  }, []);

  // ─────────────────────────── LESSON 4 START ──────────────────────────────
  const searchForStrip = useCallback(async (query) => {
    if (!query.trim()) return [];
    try { return (await omdbSearch(query)).slice(0, 12); }
    catch { return []; }
  }, []);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal,     setShowModal]     = useState(false);

  resetModalRef.current = () => setShowModal(false);

  const openMovie = useCallback((movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
    if (movie?.imdbID) {
      omdbDetails(movie.imdbID)
        .then(full => { if (full) setSelectedMovie(full); })
        .catch(() => {});
    }
  }, []);
  // ─────────────────────────── LESSON 4 END ────────────────────────────────


  // ──────────────────── LESSON 5 ────────────────────
  const [chatHistory, setChatHistory] = useState([]);

  const pushHistory = useCallback((role, content) => {
    setChatHistory(prev => {
      const next = [...prev, { role, content }];
      return next.length > MAX_CHAT_HISTORY ? next.slice(-MAX_CHAT_HISTORY) : next;
    });
  }, []);

  const callAI = useCallback(async (userMessage) => {
    const currentAge = userAgeRef.current;
    const messages = [
      { role: 'system', content: buildSystemPrompt(userName, currentAge, userCategories, userMood, userLanguage) },
      ...chatHistory,
      { role: 'user', content: userMessage },
    ];

    const result = await callGroq(messages);

    if (result.success) {
      pushHistory('user', userMessage);
      pushHistory('assistant', result.reply);
      return result.reply;
    }

    return ({
      no_key: 'No API key — add your Groq key to .env.',
      auth: 'Invalid API key — check .env.',
      rate_limit: "I'm a bit overloaded. Wait a moment and try again!",
      all_models_failed: 'All AI models are busy. Try again in a minute!',
      server_error: 'The AI service is temporarily unavailable. Please try again in a moment.',
      empty_reply: 'The AI returned an empty response. Please try again.',
      timeout: 'Request timed out. Try again!',
      network_error: 'No internet — check your connection.',
    })[result.error] || 'Something went wrong. Please try again!';
  }, [userName, userCategories, userMood, userLanguage, chatHistory, pushHistory]);

  const callAIWithSearch = useCallback(async (userMessage) => {
    const reply = await callAI(userMessage);
    return { reply: reply || '', movieResults: [], hasAgeSwitchOffer: false };
  }, [callAI]);

  const isRestricted = useCallback(
    query => FILTER_WORDS.some(w => query.toLowerCase().includes(w)),
    []
  );

  const switchAge = useCallback((newAge) => {
    setUserAge(newAge);
    userAgeRef.current = newAge;
    addMsg('bot', `Switched to ${{ [AGE.KIDS]: '🔥 Trending mode', [AGE.TEEN]: '🎞️ Nostalgic mode', [AGE.ADULT]: '⭐ Popular mode' }[newAge]}! What would you like to watch?`);
  }, [addMsg]);
  // ──────────────────── END ─────────────────────────


  const value = {
    theme, setTheme,
    userName, setUserName, userAge, setUserAge,
    userMood, setUserMood, userCategories, setUserCategories,
    userLanguage, setUserLanguage,
    stage, setStage, chatMsgs, setChatMsgs, addMsg,
    isBotTyping, setIsBotTyping, resetChat,
    // Lesson 4
    searchForStrip, selectedMovie, showModal, setShowModal, openMovie,
    // Lesson 5
    callAI, callAIWithSearch, switchAge, isRestricted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside <AppProvider>');
  return ctx;
}

// ──────────────────── LESSON 5 ────────────────────
// TODO: Write buildSystemPrompt(name, age, categories, mood, language)
// Return a different system prompt for KIDS, TEEN, and ADULT.
// Include emoji instructions and **double asterisks** for movie titles.
function buildSystemPrompt(name, age, categories, mood, language) {
  const genres   = categories.length ? categories.join(', ') : 'any genre';
  const langLine = language && !language.includes('Any Language') ? `Preferred languages: ${language.join(', ')}` : '';
  const moodLine = mood ? `User mood: "${mood}"` : '';
  const nameTag  = name ? ` User's name is ${name}.` : '';

  if (age === AGE.KIDS) return `CRITICAL RULE — READ THIS FIRST BEFORE ANYTHING ELSE:
You are talking to a CHILD under 13. You MUST ONLY recommend G or PG animated/family films.
FORBIDDEN: any romance, violence, horror, crime, or PG-13+ content.
ONLY ALLOWED: Disney, Pixar, DreamWorks family films.
If asked for forbidden content: one sentence explanation + new line: AGE_SWITCH_OFFER
You are CineBot, a fun AI movie companion for children.${name ? ` Child's name is ${name}.` : ''}
${langLine ? langLine + '\n' : ''}${moodLine ? moodLine + '\n' : ''}
- Wrap every title in **double asterisks**
- Recommend 2-3 movies max
- Use 1-2 fun emojis per response 🎬✨
- Always end with a question`;

  if (age === AGE.TEEN) return `You are CineBot, a fun AI movie companion for teenagers.${nameTag}
Genres: ${genres}.${moodLine ? '\n' + moodLine : ''}${langLine ? '\n' + langLine : ''}
TEEN MODE - PG or PG-13 only.
- Wrap every title in **double asterisks**
- Recommend 2-4 movies
- Use emojis naturally (1-3 per response)
- Always end with a question`;

  return `You are CineBot, a warm enthusiastic AI movie companion.${nameTag}
Genres: ${genres}.${moodLine ? '\n' + moodLine : ''}${langLine ? '\n' + langLine : ''}
- Wrap every title in **double asterisks**
- Recommend 2-4 movies
- Use emojis naturally (1-3 per response)
- Warm conversational tone
- Always end with a question`;
}
// ──────────────────── END ─────────────────────────
