import { createContext, useContext, useState } from "react";
import { DEFAULT_PROFILE, COURSE_OPTIONS, APP_CONFIG } from "../data/constants";
const AppContext = createContext();

export function AppProvider({ children }) {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
 
  const updateField = (name, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
 
  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
  };
  const value = {
    profile,
    updateField,
    resetProfile,
    courseOptions: COURSE_OPTIONS,
    appTitle: APP_CONFIG.appTitle,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}