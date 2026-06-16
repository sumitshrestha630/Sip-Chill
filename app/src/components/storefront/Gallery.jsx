import diaq   from '../../assets/diaq.png';
import shelf1  from '../../assets/shelf1.jpg';
import landrys from '../../assets/landrys.jpg';
import demo1   from '../../assets/demo1.jpg';
import demo2   from '../../assets/demo2.jpg';
import demo3   from '../../assets/demo3.jpg';

const GalCell = ({ tall, wide, img, fill, tag, cap, sub }) => (
  <div className={`sf-gal-cell${tall ? ' tall' : ''}${wide ? ' wide' : ''}`}>
    {img
      ? <img src={img} alt={cap} className="sf-gal-img" />
      : <div className={`sf-gal-fill ${fill}`} />
    }
    {tag && <div className="sf-gal-tag">{tag}</div>}
    <div className="sf-gal-over">
      <div className="sf-gal-cap">{cap}</div>
      {sub && <div className="sf-gal-sub">{sub}</div>}
    </div>
  </div>
);

const Gallery = () => (
  <section className="sf-gallery">
    <div className="sf-section">
      <div className="sf-section-header">
        <div>
          <div className="eyebrow" style={{ color: 'var(--amber)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
            In the shop
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.02, margin: 0, color: 'var(--bone)', letterSpacing: '-0.02em', fontWeight: 500 }}>
            A look inside <em style={{ fontStyle: 'italic', color: 'var(--amber)' }}>the bottle shop</em>
          </h2>
        </div>
        <a className="sf-section-link" href="#">
          See all photos
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </a>
      </div>

      <div className="sf-gal-grid">
        <GalCell tall  img={shelf1}  cap="Our selection"       sub="Wines, spirits & more"      tag="In-store" />
        <GalCell       img={demo1}   cap="Inside the shop"     sub="1314 Sterlington Rd"        tag="Store" />
        <GalCell wide  img={diaq}    cap="Fresh daiquiris"     sub="Made in-house · order at the counter" tag="Signature" />
        <GalCell       img={demo2}   cap="Spirits wall" />
        <GalCell tall  img={landrys} cap="The shelves"         sub="Incredible selection" />
        <GalCell       img={demo3}   cap="Wine section" />
        <GalCell       fill="gal-botanicals" cap="New arrivals" tag="New" />
      </div>
    </div>
  </section>
);

export default Gallery;
