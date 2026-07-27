import mikesImg    from '../../assets/mikeshard.jpeg';
import shottysImg  from '../../assets/shotty shot.jpeg';
import blantonsImg from '../../assets/blantons gold.jpeg';
import dusseImg    from '../../assets/dusse xo.jpeg';
import aceImg      from '../../assets/aceofspades.jpeg';
import crownImg    from '../../assets/crownxr18.jpeg';
import cutwaterImg from '../../assets/cutwater.jpeg';
import taylorImg   from '../../assets/ehtaylor.jpeg';

const TRENDING = [
  { id: 'mikes-hard',   name: "Mike's Hard 12pk",   sub: 'Hard Lemonade',              tag: 'Back in stock', img: mikesImg    },
  { id: 'shottys',      name: 'Shottys Shots',       sub: 'Ready-to-Drink',             tag: 'New',           img: shottysImg  },
  { id: 'blantons-gold',name: "Blanton's Gold",      sub: 'Single Barrel Bourbon',      tag: 'Limited',       img: blantonsImg },
  { id: 'dusse-xo',     name: 'Dussé XO',            sub: 'Cognac',                     tag: 'Premium',       img: dusseImg    },
  { id: 'ace-spades',   name: 'Ace of Spades',       sub: 'Champagne',                  tag: 'Hot right now', img: aceImg      },
  { id: 'crown-xr',     name: 'Crown XR 18 Years',   sub: 'Canadian Whisky',            tag: 'Rare find',     img: crownImg    },
  { id: 'cutwater',     name: 'Cutwater',             sub: 'Spirits & Canned Cocktails', tag: 'New',           img: cutwaterImg },
  { id: 'eh-taylor',    name: 'E.H. Taylor',          sub: 'Small Batch Bourbon',        tag: 'Limited',       img: taylorImg   },
];

const Trending = () => (
  <section className="sc-trending">
    <div className="sc-trending-inner">
      <div className="sc-trending-header">
        <div>
          <p className="eyebrow" style={{ marginBottom: 8 }}>What everyone's grabbing</p>
          <h2 className="sc-trending-title">New &amp; <em>Trending</em></h2>
        </div>
        <button className="sf-section-link">See all →</button>
      </div>
      <div className="sc-trending-track">
        {TRENDING.map(p => (
          <div key={p.id} className="sc-trend-card">
            <div className="sc-trend-img">
              <img src={p.img} alt={p.name} />
              <span className="sc-trend-tag">{p.tag}</span>
            </div>
            <div className="sc-trend-body">
              <div className="sc-trend-name">{p.name}</div>
              <div className="sc-trend-sub">{p.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Trending;
