import { useRef } from 'react';
import Icon from '../Icon';


const VIDEOS = [
  { url: 'https://www.tiktok.com/@sip.n.chill.daiqu/video/7619411909703388447', caption: 'New Patron Cup' },
  { url: 'https://www.tiktok.com/@sip.n.chill.daiqu/video/7606395655069781279', caption: 'Buying Liquor on Friday' },
  { url: 'https://www.tiktok.com/@sip.n.chill.daiqu/video/7618281196035886367', caption: 'Go Crazy' },
  { url: 'https://www.tiktok.com/@sip.n.chill.daiqu/video/7616458484514704654', caption: 'Enjoy' },
];
// ─────────────────────────────────────────────────────────────

function getVideoId(url) {
  return url.match(/video\/(\d+)/)?.[1] ?? null;
}

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.16 8.16 0 0 0 4.77 1.52V6.74a4.84 4.84 0 0 1-1-.05z"/>
  </svg>
);

const PlaceholderCard = ({ index }) => (
  <div className="sf-tt-card sf-tt-placeholder">
    <div className="sf-tt-placeholder-inner">
      <TikTokIcon />
      <span>Video {index + 1}</span>
      <span className="sf-tt-placeholder-hint">Add URL in TikTokCarousel.jsx</span>
    </div>
  </div>
);

const TikTokCarousel = () => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 310, behavior: 'smooth' });
  };

  return (
    <section className="sf-tiktok">
      <div className="sf-section">

        <div className="sf-section-header">
          <div>
            <div className="sf-tiktok-eyebrow">
              <TikTokIcon />
              @sipnchill
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, margin: 0, color: 'var(--bone)', letterSpacing: '-0.02em', fontWeight: 500 }}>
              Catch us <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>in action</em>
            </h2>
          </div>
          <div className="sf-tiktok-controls">
            <button className="sf-tiktok-arrow" onClick={() => scroll(-1)} aria-label="Previous">
              <Icon name="chevron-left" size={20} />
            </button>
            <button className="sf-tiktok-arrow" onClick={() => scroll(1)} aria-label="Next">
              <Icon name="chevron-right" size={20} />
            </button>
            <a
              href="https://www.tiktok.com/@sip.n.chill.daiqu"
              target="_blank"
              rel="noopener"
              className="sf-section-link"
              style={{ borderBottom: 'none', marginLeft: 8 }}
            >
              Follow us <Icon name="arrow-right" size={14} />
            </a>
          </div>
        </div>

        <div className="sf-tt-track" ref={trackRef}>
          {VIDEOS.map((v, i) => {
            const id = getVideoId(v.url);
            return id ? (
              <div key={i} className="sf-tt-card">
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${id}`}
                  className="sf-tt-iframe"
                  allowFullScreen
                  allow="fullscreen"
                  title={v.caption || `TikTok video ${i + 1}`}
                />
                {v.caption && <div className="sf-tt-caption">{v.caption}</div>}
              </div>
            ) : (
              <PlaceholderCard key={i} index={i} />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TikTokCarousel;
