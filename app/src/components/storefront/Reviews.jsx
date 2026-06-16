const REVIEWS = [
  {
    name: "Sanjiv Karki",
    time: "a year ago",
    text: "They have incredible selections of wines, liquors and beers! Fantastic selection and outstanding service — exactly what Monroe needed.",
    title: "Fantastic Selection and Outstanding Service!",
  },
  {
    name: "Suyog Malla",
    badge: "Local Guide",
    time: "a year ago",
    text: "Conveniently located by Highway 165, it offers an impressive selection of beverages for every occasion. The highlight is their daiquiris — refreshing, well-balanced flavors and generous serving sizes.",
    title: "Best daiquiris in Monroe",
  },
  {
    name: "Aakash Poudel",
    time: "a year ago",
    text: "I was searching for a specific bottle of whiskey and the staff, especially Deep, was super helpful. He not only found the bottle but also gave me great recommendations. Fantastic selection.",
    title: "Great staff, great selection",
  },
];

const Stars = () => (
  <div style={{ display: "flex", gap: 3 }}>
    {[1,2,3,4,5].map(i => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--amber)" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
);

const Reviews = () => (
  <section className="sf-reviews">
    <div className="sf-section">
      <div className="sf-section-header">
        <div>
          <div className="eyebrow" style={{ color: 'var(--amber)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
            Google Reviews
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, margin: 0, color: 'var(--bone)', letterSpacing: '-0.02em', fontWeight: 500 }}>
            What Monroe is <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>saying</em>
          </h2>
        </div>
        <div className="sf-reviews-rating">
          <div className="sf-rating-number">5.0</div>
          <Stars />
          <div className="sf-rating-count">25 reviews</div>
        </div>
      </div>

      <div className="sf-reviews-grid">
        {REVIEWS.map(r => (
          <div key={r.name} className="sf-review-card">
            <div className="sf-review-top">
              <div className="sf-review-avatar">{r.name[0]}</div>
              <div>
                <div className="sf-review-name">
                  {r.name}
                  {r.badge && <span className="sf-review-badge">{r.badge}</span>}
                </div>
                <div className="sf-review-time">{r.time}</div>
              </div>
              <Stars />
            </div>
            <div className="sf-review-title">{r.title}</div>
            <p className="sf-review-text">"{r.text}"</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <a
          href="https://maps.google.com/?q=Sip+N+Chill+Daiquiri+Monroe+LA"
          target="_blank"
          rel="noopener"
          className="btn btn-secondary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', borderBottom: 'none' }}
        >
          Read all 25 reviews on Google
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
