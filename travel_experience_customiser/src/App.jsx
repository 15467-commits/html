import { useMemo, useState } from "react";
import Header from "./components/Header";
import StepTracker from "./components/StepTracker";
import OptionPicker from "./components/OpinionPicker";
import SelectionSummary from "./components/SelectionSummary";
import RecommendationCard from "./components/ReccomendationCard";
import {
  steps,
  destinationOptions,
  moodOptions,
  budgetOptions,
  ageOptions,
  recommendationMap,
} from "./data/travelData";
import "./App.css";

const initialSelections = {
  destination: "",
  mood: "",
  budget: "",
  ageMode: "",
};

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState(initialSelections);

  const stepConfig = [
    {
      key: "destination",
      title: "Choose a Destination Style",
      subtitle: "Pick the kind of travel experience you want first.",
      options: destinationOptions,
    },
    {
      key: "mood",
      title: "Choose the Mood",
      subtitle: "This helps shape the travel vibe and energy.",
      options: moodOptions,
    },
    {
      key: "budget",
      title: "Choose Your Budget Type",
      subtitle: "Select a spending style that matches your plan.",
      options: budgetOptions,
    },
    {
      key: "ageMode",
      title: "Choose the Age Mode",
      subtitle: "Recommendations adjust for kids, teens, or adults.",
      options: ageOptions,
    },
  ];

  const activeStep = stepConfig[currentStep];

  const handleSelect = (value) => {
    setSelections((prev) => ({
      ...prev,
      [activeStep.key]: value,
    }));

    if (currentStep < stepConfig.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setSelections(initialSelections);
    setCurrentStep(0);
  };

  const recommendation = useMemo(() => {
    const { destination, mood, budget, ageMode } = selections;

    if (!destination || !mood || !budget || !ageMode) {
      return null;
    }

    const exactMatch =
      recommendationMap?.[ageMode]?.[destination]?.[mood]?.[budget];

    if (exactMatch) {
      return exactMatch;
    }

    return {
      title: "Custom Travel Blend",
      description:
        "Your travel style is unique. This mix suggests a flexible itinerary with experiences matched to your chosen vibe, budget, and age mode.",
      tags: [destination, mood, budget],
    };
  }, [selections]);

  return (
    <div className="page">
      <Header />

      <StepTracker steps={steps} currentStep={currentStep} />

      <div className="main-layout">
        <div className="left-column">
          <OptionPicker
            title={activeStep.title}
            subtitle={activeStep.subtitle}
            options={activeStep.options}
            selectedValue={selections[activeStep.key]}
            onSelect={handleSelect}
          />

          <div className="nav-panel panel">
            <h2>Flow Controls</h2>
            <p className="panel-subtitle">
              Use these controls to move through the guided setup.
            </p>
            <div className="nav-actions">
              <button
                className="secondary-btn"
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                disabled={currentStep === 0}
              >
                Previous Step
              </button>
              <button
                className="primary-btn"
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, stepConfig.length - 1))}
                disabled={currentStep === stepConfig.length - 1}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>

        <div className="right-column">
          <SelectionSummary selections={selections} onReset={handleReset} />
          <RecommendationCard recommendation={recommendation} />
        </div>
      </div>
    </div>
  );
}

export default App;
