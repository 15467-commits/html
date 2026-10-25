import { useApp } from "../context/AppContext";

function SummaryPanel() {
  const { profile, appTitle } = useApp();

  return (
    <section className="card summary-card">
      <div className="section-title">
        <h2>Context Summary</h2>
        <p>Different components can read the same shared data.</p>
      </div>

      <div className="summary-row">
        <span>App Name</span>
        <strong>{appTitle}</strong>
      </div>

      <div className="summary-row">
        <span>Selected Course</span>
        <strong>{profile.favoriteCourse}</strong>
      </div>

      <div className="summary-row">
        <span>Theme Color</span>
        <strong>{profile.themeColor}</strong>
      </div>

      <div
        className="color-preview"
        style={{ backgroundColor: profile.themeColor }}
      ></div>
    </section>
  );
}

export default SummaryPanel;
