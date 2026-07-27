import diaq          from '../../assets/diaq.png';

import wineAisle      from '../../assets/e9e8551f-0d15-4309-98ba-7d511b155e84.jpeg';
import storeWide      from '../../assets/7b0e953d-d806-48ed-bd84-cdf0a656ffd7.jpeg';
import spiritsWall    from '../../assets/6201843c-9a95-467d-b0a3-e426d4b00165.jpeg';
import bourbonWall    from '../../assets/06cf7c93-c9b8-4da2-a150-51bd17c5078e.jpeg';
import wineRack       from '../../assets/4d371992-195d-4609-82fc-c4f1dd248b9b.jpeg';
import docHolliday    from '../../assets/3cab7960-3c72-4c9d-99ea-8348ea121a87.jpeg';
import beerCooler     from '../../assets/d76ad1c9-13a6-4c31-8226-17e5f6f0d8e0.jpeg';
import beerSection    from '../../assets/2e41517d-0c0c-46c4-9e9f-ff4f8bbf5a04.jpeg';
import tequilaShelf   from '../../assets/60f702ec-7838-4f4e-b417-a635a0f55fd1.jpeg';
import tieredDisplay  from '../../assets/150f325d-7ee9-421f-b1f0-4b5e08ff3b0f.jpeg';
import cognacShelf    from '../../assets/58d811ae-a3a2-41e7-bcd4-e582c8acfaf6.jpeg';

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
        <GalCell tall  img={wineAisle}     cap="Our selection"        sub="Wines, spirits & more"                  tag="In-store" />
        <GalCell       img={storeWide}     cap="Inside the shop"      sub="1314 Sterlington Rd"                    tag="Store" />
        <GalCell wide  img={diaq}          cap="Fresh daiquiris"      sub="Made in-house · order at the counter"  tag="Signature" />
        <GalCell       img={spiritsWall}   cap="Spirits wall"         sub="Rum, vodka & more" />
        <GalCell tall  img={bourbonWall}   cap="The shelves"          sub="Incredible selection" />
        <GalCell       img={wineRack}      cap="Wine section"         sub="Hundreds of labels" />
        <GalCell       img={docHolliday}   cap="Rare finds"           sub="Premium & collectible"                  tag="Premium" />
        <GalCell       img={beerCooler}    cap="Cold beer & more"     sub="Fully stocked coolers" />
        <GalCell wide  img={beerSection}   cap="Beer & RTDs"          sub="All your favorites, ice-cold" />
        <GalCell       img={tequilaShelf}  cap="Tequila selection"    sub="Blanco to añejo" />
        <GalCell       img={tieredDisplay} cap="Featured spirits"     sub="Handpicked by our team"                 tag="Staff pick" />
        <GalCell       img={cognacShelf}   cap="Cognac & premium"     sub="Martell, Hennessy & more" />
      </div>
    </div>
  </section>
);

export default Gallery;
