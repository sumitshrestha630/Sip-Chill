import Icon from '../Icon';
import wineImg from '../../assets/wine.jpg';

const Editorial = () => (
  <section className="sf-edit" id="finder">
    <div className="sf-edit-inner">
      <div className="sf-edit-image">
        <img src={wineImg} alt="Wine selection at Sip N Chill" className="sf-edit-photo" />
      </div>
      <div>
        <div className="eyebrow">Not sure where to start?</div>
        <h2>Tell us how you're <em>feeling</em>.</h2>
        <p>The Wine &amp; Spirits Finder is a short, conversational quiz — five questions, no jargon. We'll pour you something good based on the mood, the meal, and how adventurous you're feeling tonight.</p>
        <div style={{ display: "flex", gap: 14 }}>
          <button className="btn btn-primary">Start the quiz <Icon name="sparkles" size={16}/></button>
          <button className="btn btn-secondary">Browse by region</button>
        </div>
      </div>
    </div>
  </section>
);

export default Editorial;
