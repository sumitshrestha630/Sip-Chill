import Icon from '../Icon';
import storefrontImg from '../../assets/storefront.png';

const Hero = () => (
  <section className="sf-hero sf-hero-photo" style={{ backgroundImage: `url(${storefrontImg})` }}>
    <div className="sf-hero-photo-overlay" />
    <div className="sf-grain"></div>
    <div className="sf-hero-inner sf-hero-inner-centered">
      <div className="sf-hero-text">
        <div className="eyebrow">Sip N Chill Daiquiri · Monroe, LA</div>
        <h1>Monroe's favorite<br/><em>daiquiris</em> &amp; spirits.</h1>
        <p>On Sterlington Rd near Highway 165 — walk in for a fresh daiquiri or browse an incredible selection of wines, liquors, and beers.</p>
        <div className="sf-hero-actions">
          <button className="btn btn-primary">Shop the selection <Icon name="arrow-right" size={16}/></button>
          <button className="btn btn-ghost">See our daiquiris →</button>
        </div>
        <div className="sf-hero-meta">
          <span><Icon name="map-pin" size={14}/> 1314 Sterlington Rd, Monroe LA</span>
          <span><Icon name="clock" size={14}/> Opens 9 AM</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
