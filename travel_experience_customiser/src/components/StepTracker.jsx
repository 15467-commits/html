function StepTracker({ steps, currentStep }) {
  return (
    <div className="step-tracker">
      {steps.map((step, index) => (
        <div
          key={step.key}
          className={`step-item ${index === currentStep ? "active" : ""} ${index < currentStep ? "done" : ""}`}
        >
          <div className="step-circle">{index + 1}</div>
          <span>{step.label}</span>
        </div>
      ))}
    </div>
  );
}

export default StepTracker;
