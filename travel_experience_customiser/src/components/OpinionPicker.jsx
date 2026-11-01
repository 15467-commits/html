function OptionPicker({ title, subtitle, options, selectedValue, onSelect }) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      <p className="panel-subtitle">{subtitle}</p>
      <div className="option-grid">
        {options.map((option) => (
          <button
            key={option}
            className={`option-chip ${selectedValue === option ? "selected" : ""}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}

export default OptionPicker;
