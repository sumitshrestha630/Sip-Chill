import july4Img    from '../../assets/fourth of july.webp';
import cupImg      from '../../assets/essential for cups.webp';
import whitesImg   from '../../assets/cool off.webp';
import cocktailImg from '../../assets/summer cocktails.webp';
import caymusImg   from '../../assets/made by caymus.webp';
import newSipsImg  from '../../assets/new sips.webp';

const COLLECTIONS = [
  { id: 'july4',     label: 'Fourth of July Party Picks', img: july4Img    },
  { id: 'cup',       label: 'Essentials for The Cup',     img: cupImg      },
  { id: 'whites',    label: 'Cool Off With Crisp Whites', img: whitesImg   },
  { id: 'cocktails', label: 'Summer Cocktails',           img: cocktailImg },
  { id: 'caymus',    label: 'Made by Caymus',             img: caymusImg   },
  { id: 'new',       label: 'New sips to try',            img: newSipsImg  },
];

const Collections = () => (
  <section className="sc-collections">
    <div className="sc-collections-inner">
      <div className="sc-collections-header">
        <p className="eyebrow" style={{ marginBottom: 8 }}>Curated for you</p>
        <h2 className="sc-collections-title">Holiday Weekend <em>Ready</em></h2>
      </div>
      <div className="sc-collections-track">
        {COLLECTIONS.map(c => (
          <button key={c.id} className="sc-coll-card">
            <div className="sc-coll-img">
              <img src={c.img} alt={c.label} />
            </div>
            <span className="sc-coll-label">{c.label}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Collections;
