function RecommendationCard({ recommendation }) {
  if (!recommendation) {
    return (
      <section className="panel recommendation-panel empty">
        <h2>Your Travel Match Will Appear Here</h2>
        <p className="panel-subtitle">
          Complete all four steps to unlock a personalised travel idea.
        </p>
      </section>
    );
  }

  return (
    <section className="panel recommendation-panel">
      <p className="eyebrow accent">Recommended Experience</p>
      <h2>{recommendation.title}</h2>
      <p className="recommendation-description">{recommendation.description}</p>

      <div className="tag-row">
        {recommendation.tags.map((tag) => (
          <span key={tag} className="info-tag">{tag}</span>
        ))}
      </div>
    </section>
  );
}

export default RecommendationCard;
