import Icon from '../Icon';
import logoWordmark from '../../assets/logo-wordmark.svg';

const Header = ({ cartCount, onCartClick }) => (
  <header className="sf-header">
    <div className="sf-header-inner">
      <nav className="sf-nav">
        <a href="#shop">Shop</a>
        <a href="#daiquiris">Daiquiris</a>
        <a href="#spirits">Spirits</a>
        <a href="#wine">Wine</a>
        <a href="#events">Events</a>
      </nav>
      <a className="sf-logo" href="#">
        <img src={logoWordmark} alt="Sip & Chill"/>
      </a>
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

export default Header;
