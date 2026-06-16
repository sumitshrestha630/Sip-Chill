import Icon from '../Icon';
import { SHOP_DATA } from '../../data/shop';

const Events = () => (
  <section className="sf-events" id="events">
    <div className="sf-events-inner">
      <div className="sf-section-header" style={{ padding: 0 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>This month at the shop</div>
          <h2>Tastings &amp; <em>events</em></h2>
        </div>
        <button className="sf-section-link">Full calendar <Icon name="calendar" size={14}/></button>
      </div>
      <div className="sf-events-list">
        {SHOP_DATA.events.map((e, i) => (
          <article key={i} className="event">
            <div className="event-date"><div className="d">{e.day}</div><div className="m">{e.mon}</div></div>
            <div>
              <div className="event-cat">{e.cat}</div>
              <div className="event-title">{e.title}</div>
              <div className="event-blurb">{e.blurb}</div>
            </div>
            <div className="event-right">
              <div className="event-seats">{e.seats}</div>
              <button className={e.wait ? "btn btn-secondary" : "btn btn-primary"} style={{ padding: "9px 18px", fontSize: 13 }}>{e.price}</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
