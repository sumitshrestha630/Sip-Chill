import { useState } from 'react';
import Icon from '../Icon';
import logoWordmark from '../../assets/logo-wordmark.svg';

const Header = ({ cartCount, onCartClick, onDaiquiriClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sf-header">
      <div className="sf-header-inner">
        <button className="sf-hamburger" aria-label="Menu" onClick={() => setMenuOpen(o => !o)}>
          <span className={`sf-hamburger-icon${menuOpen ? ' open' : ''}`} />
        </button>

        <a className="sf-logo" href="#" onClick={closeMenu}>
          <img src={logoWordmark} alt="Sip & Chill"/>
        </a>

        <div className="sf-actions">
          <button className="sf-icon-btn sf-search-btn" aria-label="Search"><Icon name="search"/></button>
          <button className="sf-icon-btn" aria-label="Cart" onClick={onCartClick}>
            <Icon name="cart"/>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="sf-nav sf-nav--desktop">
        <a href="#shop">Shop</a>
        <a href="#daiquiris" onClick={e => { e.preventDefault(); onDaiquiriClick?.(); }}>Daiquiris</a>
        <a href="#spirits">Spirits</a>
        <a href="#wine">Wine</a>
        <a href="#events">Events</a>
      </nav>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="sf-nav sf-nav--mobile" onClick={closeMenu}>
          <a href="#shop">Shop</a>
          <a href="#daiquiris" onClick={e => { e.preventDefault(); onDaiquiriClick?.(); closeMenu(); }}>Daiquiris</a>
          <a href="#spirits">Spirits</a>
          <a href="#wine">Wine</a>
          <a href="#events">Events</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
