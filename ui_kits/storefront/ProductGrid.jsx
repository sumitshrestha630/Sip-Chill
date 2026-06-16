// Product card + product grid + the "Marco's pick" editorial strip + events.

const ProductCard = ({ p, onAdd }) => (
  <article className="product" onClick={() => onAdd(p)}>
    <div className="product-img">
      <div className="product-img-bg"></div>
      {p.pick && <div className="pick-badge">{p.pick}</div>}
      {p.stock <= 5 && !p.pick && <div className="low-badge">{p.stock} left</div>}
      <button className="product-fav" aria-label="Save" onClick={(e) => { e.stopPropagation(); }}>
        <Icon name="heart" size={18}/>
      </button>
      <div className="product-img-inner">
        <Bottle color={p.color} label={p.label} w={110}/>
      </div>
    </div>
    <div className="product-body">
      <div className="product-cat">{p.cat}</div>
      <h3 className="product-name">{p.name}</h3>
      <div className="product-sub">{p.sub}</div>
      <div className="product-bottom">
        <span className="product-price">${p.price}</span>
        <button className="product-add" aria-label="Add to cart" onClick={(e) => { e.stopPropagation(); onAdd(p); }}>
          <Icon name="plus" size={18}/>
        </button>
      </div>
    </div>
  </article>
);

const ProductGrid = ({ activeCat, onAdd }) => {
  const products = activeCat === "all"
    ? SHOP_DATA.products
    : SHOP_DATA.products.filter(p => p.catId === activeCat);
  return (
    <section className="sf-section">
      <div className="sf-section-header">
        <div>
          <div className="eyebrow" style={{marginBottom: 12}}>This week's pours</div>
          <h2>Fresh on the <em>shelves</em></h2>
        </div>
        <button className="sf-section-link">See all {products.length}+ bottles <Icon name="arrow-right" size={14}/></button>
      </div>
      <div className="sf-grid">
        {products.map(p => <ProductCard key={p.id} p={p} onAdd={onAdd}/>)}
      </div>
    </section>
  );
};

const Editorial = () => (
  <section className="sf-edit">
    <div className="sf-edit-inner">
      <div className="sf-edit-image">
        <Bottle color="amber" label="spirit" w={140}/>
        <Bottle color="burgundy" label="white" w={130}/>
        <Bottle color="forest" label="spirit" w={120}/>
      </div>
      <div>
        <div className="eyebrow">Not sure where to start?</div>
        <h2>Tell us how you're <em>feeling</em>.</h2>
        <p>The Wine &amp; Spirits Finder is a short, conversational quiz — five questions, no jargon. We'll pour you something good based on the mood, the meal, and how adventurous you're feeling tonight.</p>
        <div style={{display: "flex", gap: 14}}>
          <button className="btn btn-primary">Start the quiz <Icon name="sparkles" size={16}/></button>
          <button className="btn btn-secondary">Browse by region</button>
        </div>
      </div>
    </div>
  </section>
);

const Events = () => (
  <section className="sf-events" id="events">
    <div className="sf-events-inner">
      <div className="sf-section-header" style={{padding: 0}}>
        <div>
          <div className="eyebrow" style={{marginBottom: 12}}>This month at the shop</div>
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
              <button className={e.wait ? "btn btn-secondary" : "btn btn-primary"} style={{padding: "9px 18px", fontSize: 13}}>{e.price}</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="sf-footer">
    <div className="sf-footer-inner">
      <div>
        <img src="../../assets/logo-stacked.svg" alt="Sip & Chill" style={{height: 92, marginLeft: -32, marginBottom: 12}}/>
        <p className="sf-footer-tag">A neighborhood bottle shop on Court St. We open at noon, close at nine, and pour something free on Fridays.</p>
        <div style={{display: "flex", gap: 12, alignItems: "center", color: "var(--cream)", fontSize: 14}}>
          <Icon name="map-pin" size={16}/> 412 Court St, Brooklyn
        </div>
      </div>
      <div>
        <h5>Shop</h5>
        <ul>
          <li><a href="#">Natural wine</a></li>
          <li><a href="#">Bourbon &amp; whiskey</a></li>
          <li><a href="#">Mezcal &amp; agave</a></li>
          <li><a href="#">Craft beer</a></li>
          <li><a href="#">Under $30</a></li>
        </ul>
      </div>
      <div>
        <h5>Visit</h5>
        <ul>
          <li><a href="#">Hours &amp; location</a></li>
          <li><a href="#">Local delivery</a></li>
          <li><a href="#">In-store pickup</a></li>
          <li><a href="#">Private events</a></li>
        </ul>
      </div>
      <div>
        <h5>About</h5>
        <ul>
          <li><a href="#">Our story</a></li>
          <li><a href="#">Staff picks</a></li>
          <li><a href="#">Tastings &amp; events</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>
    </div>
    <div className="sf-footer-bottom">
      <span>© 2026 Sip &amp; Chill · NY License 12345-67</span>
      <span>You must be 21+ to purchase. Please drink responsibly.</span>
    </div>
  </footer>
);

window.ProductGrid = ProductGrid;
window.Editorial = Editorial;
window.Events = Events;
window.Footer = Footer;
