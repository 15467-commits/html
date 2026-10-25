import { useApp } from "../context/AppContext";

function ProfileCard() {
  const { profile } = useApp();

  const firstLetter = profile.studentName
    ? profile.studentName.slice(0, 1).toUpperCase()
    : "S";

  return (
    <section
      className="card profile-card"
      style={{ borderTop: `8px solid ${profile.themeColor}` }}
    >
      <div className="section-title center-text">
        <h2>Live Profile Preview</h2>
        <p>This card updates instantly using shared state.</p>
      </div>

      <div
        className="profile-badge"
        style={{ backgroundColor: profile.themeColor }}
      >
        {firstLetter}
      </div>

      <h3>{profile.studentName}</h3>

      <div className="detail-list">
        <p><strong>Grade:</strong> {profile.grade}</p>
        <p><strong>Favorite Course:</strong> {profile.favoriteCourse}</p>
        <p><strong>Goal:</strong> {profile.goal}</p>
      </div>
    </section>
  );
}

export default ProfileCard;
