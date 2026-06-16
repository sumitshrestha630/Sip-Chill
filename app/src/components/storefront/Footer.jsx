import Icon from '../Icon';
import logoStacked from '../../assets/logo-stacked.svg';

const Footer = () => (
  <footer className="sf-footer">
    <div className="sf-footer-inner">
      <div>
        <img src={logoStacked} alt="Sip & Chill" style={{ height: 92, marginLeft: -32, marginBottom: 12 }}/>
        <p className="sf-footer-tag">Monroe's favorite daiquiri bar and bottle shop. Incredible selections of wines, liquors, and beers — all in one place on Sterlington Rd.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, color: "var(--cream)", fontSize: 14 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <Icon name="map-pin" size={16} style={{ flexShrink: 0, marginTop: 2 }}/>
            <span>1314 Sterlington Rd<br/>Monroe, LA 71203</span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Icon name="clock" size={16} style={{ flexShrink: 0 }}/>
            <span>Mon–Sat 9 AM – 9 PM</span>
          </div>
          <a href="tel:+13187377260" style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--cream)", borderBottom: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            (318) 737-7260
          </a>
        </div>
      </div>
      <div>
        <h5>Shop</h5>
        <ul>
          <li><a href="#">Daiquiris</a></li>
          <li><a href="#">Wine</a></li>
          <li><a href="#">Whiskey &amp; bourbon</a></li>
          <li><a href="#">Beer</a></li>
          <li><a href="#">Spirits</a></li>
        </ul>
      </div>
      <div>
        <h5>Visit</h5>
        <ul>
          <li><a href="https://maps.google.com/?q=1314+Sterlington+Rd+Monroe+LA" target="_blank" rel="noopener">Get directions</a></li>
          <li><a href="#">Hours &amp; location</a></li>
          <li><a href="#">In-store shopping</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div>
        <h5>More</h5>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Staff picks</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="https://maps.google.com/?q=1314+Sterlington+Rd+Monroe+LA" target="_blank" rel="noopener">Leave a review ★</a></li>
        </ul>
      </div>
    </div>
    <div className="sf-footer-bottom">
      <span>© 2026 Sip N Chill Daiquiri · Monroe, LA · LA License</span>
      <span>You must be 21+ to purchase alcohol. Please drink responsibly.</span>
    </div>
  </footer>
);

export default Footer;
