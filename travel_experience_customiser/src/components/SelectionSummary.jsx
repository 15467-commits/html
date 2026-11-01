function SelectionSummary({ selections, onReset }) {
  return (
    <section className="panel summary-panel">
      <div className="summary-header">
        <div>
          <h2>Your Selections</h2>
          <p className="panel-subtitle">These choices shape your travel recommendation.</p>
        </div>
        <button className="ghost-btn" onClick={onReset}>Reset</button>
      </div>

      <div className="summary-list">
        <div className="summary-row">
          <span>Destination Style</span>
          <strong>{selections.destination || "Not selected yet"}</strong>
        </div>
        <div className="summary-row">
          <span>Mood</span>
          <strong>{selections.mood || "Not selected yet"}</strong>
        </div>
        <div className="summary-row">
          <span>Budget Type</span>
          <strong>{selections.budget || "Not selected yet"}</strong>
        </div>
        <div className="summary-row">
          <span>Age Mode</span>
          <strong>{selections.ageMode || "Not selected yet"}</strong>
        </div>
      </div>
    </section>
  );
}

export default SelectionSummary;
