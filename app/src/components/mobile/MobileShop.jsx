import Icon from '../Icon';
import Bottle from '../Bottle';
import TabBar from './TabBar';
import { SHOP_DATA } from '../../data/shop';
import logoWordmark from '../../assets/logo-wordmark.svg';

const MobileShop = ({ goTo }) => {
  const picks = SHOP_DATA.products.filter(p => p.pick).slice(0, 4);
  const upcoming = SHOP_DATA.events.slice(0, 2);
  return (
    <div className="m-app">
      <div className="m-scroll">
        <header className="m-topbar">
          <img className="m-logo" src={logoWordmark} alt="Sip & Chill"/>
          <div style={{ display: "flex", gap: 4 }}>
            <button className="m-icon-btn"><Icon name="search" size={20}/></button>
            <button className="m-icon-btn"><Icon name="cart" size={20}/><span className="m-cart-dot"></span></button>
          </div>
        </header>

        <section className="m-hero">
          <div className="m-hero-eyebrow">Open till 9 · Court St</div>
          <h1>Bottles,<br/>picked with <em>care</em>.</h1>
          <p>Browse the shelves, or let us pour you something good.</p>
        </section>

        <div className="m-cats">
          {SHOP_DATA.categories.slice(0, 5).map(c => (
            <button key={c.id} className="m-cat">
              <Icon name={c.icon} size={22} className="icon"/>
              <div>
                <div className="name">{c.label}</div>
                <div className="count">{Math.floor(20 + Math.random() * 80)} bottles</div>
              </div>
            </button>
          ))}
        </div>

        <div className="m-quiz-card" onClick={() => goTo("quiz-intro")}>
          <div className="eyebrow">Not sure what to pour?</div>
          <h3>Tell us how you're feeling.</h3>
          <p>Five quick questions. We'll pour you something good.</p>
          <div className="arrow"><Icon name="arrow-right" size={20}/></div>
        </div>

        <div className="m-section">
          <div className="m-section-h">
            <h2>Staff <em>picks</em></h2>
            <a className="link" href="#">See all →</a>
          </div>
        </div>
        <div className="m-grid">
          {picks.map(p => (
            <article key={p.id} className="m-prod">
              <div className="m-prod-img">
                {p.pick && <div className="m-prod-pick">{p.pick}</div>}
                <Bottle color={p.color} label={p.label} w={64}/>
              </div>
              <div className="m-prod-body">
                <div className="m-prod-cat">{p.cat}</div>
                <div className="m-prod-name">{p.name}</div>
                <div className="m-prod-sub">{p.sub}</div>
                <div className="m-prod-bottom">
                  <span className="m-prod-price">${p.price}</span>
                  <button className="m-prod-add"><Icon name="plus" size={14}/></button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="m-section">
          <div className="m-section-h">
            <h2>This <em>week</em></h2>
            <a className="link" href="#" onClick={e => { e.preventDefault(); goTo("events"); }}>All events →</a>
          </div>
        </div>
        {upcoming.map((e, i) => (
          <article key={i} className="m-event">
            <div className="m-event-date"><div className="d">{e.day}</div><div className="m">{e.mon}</div></div>
            <div>
              <div className="m-event-cat">{e.cat}</div>
              <div className="m-event-title">{e.title}</div>
              <div className="m-event-blurb">{e.blurb}</div>
              <div className="m-event-foot">
                <span className="seats">{e.seats}</span>
                <button className={e.wait ? "wait" : ""}>{e.price}</button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <TabBar active="shop" goTo={goTo}/>
    </div>
  );
};

export default MobileShop;
