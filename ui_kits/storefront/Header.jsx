// Sticky header — logo, nav, search, cart, account.
const Header = ({ cartCount, onCartClick }) => (
  <header className="sf-header">
    <div className="sf-header-inner">
      <nav className="sf-nav">
        <a href="#shop">Shop</a>
        <a href="#wine">Natural wine</a>
        <a href="#spirits">Spirits</a>
        <a href="#finder">Wine finder</a>
        <a href="#events">Events</a>
      </nav>
      <a className="sf-logo" href="#"><img src="../../assets/logo-wordmark.svg" alt="Sip & Chill"/></a>
      <div className="sf-actions">
        <button className="sf-icon-btn" aria-label="Search"><Icon name="search"/></button>
        <button className="sf-icon-btn" aria-label="Account"><Icon name="user"/></button>
        <button className="sf-icon-btn" aria-label="Cart" onClick={onCartClick}>
          <Icon name="cart"/>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </div>
  </header>
);

// Hero — headline + supporting copy + two prominent bottles.
const Hero = () => (
  <section className="sf-hero">
    <div className="sf-hero-glow"></div>
    <div className="sf-hero-glow bottom"></div>
    <div className="sf-grain"></div>
    <div className="sf-hero-inner">
      <div>
        <div className="eyebrow">Sip &amp; Chill · neighborhood bottle shop</div>
        <h1>Bottles, picked<br/>with <em>care</em>.</h1>
        <p>Walk in, or we'll deliver before dinner. A small, careful selection from the kind of people who'd pour you one if you stopped by.</p>
        <div className="sf-hero-actions">
          <button className="btn btn-primary">Shop the picks <Icon name="arrow-right" size={16}/></button>
          <button className="btn btn-ghost">Take the wine quiz →</button>
        </div>
      </div>
      <div className="sf-hero-side">
        <div className="sf-hero-bottle b3"><Bottle color="forest" label="spirit" w={140}/></div>
        <div className="sf-hero-bottle b1"><Bottle color="burgundy" label="white" w={170}/></div>
        <div className="sf-hero-bottle b2"><Bottle color="amber" label="spirit" w={150}/></div>
      </div>
    </div>
  </section>
);

// Category strip — sticky-ish filter chips above the grid.
const CategoryStrip = ({ activeCat, setActiveCat }) => (
  <section className="sf-cats">
    <div className="sf-cats-inner">
      <span className="sf-cats-label">Browse</span>
      <button className={`cat-chip ${activeCat === "all" ? "active" : ""}`} onClick={() => setActiveCat("all")}>All</button>
      {SHOP_DATA.categories.map(c => (
        <button key={c.id} className={`cat-chip ${activeCat === c.id ? "active" : ""}`} onClick={() => setActiveCat(c.id)}>
          <Icon name={c.icon} size={14}/>
          {c.label}
        </button>
      ))}
      <button className="cat-chip" style={{marginLeft: "auto"}}><Icon name="filter" size={14}/> Filters</button>
    </div>
  </section>
);

window.Header = Header;
window.Hero = Hero;
window.CategoryStrip = CategoryStrip;
