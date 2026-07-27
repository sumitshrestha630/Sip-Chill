import Icon from '../Icon';
import { SHOP_DATA } from '../../data/shop';

const DaiquiriDrawer = ({ open, onClose }) => (
  <>
    <div className={`sf-overlay${open ? ' open' : ''}`} onClick={onClose} />
    <aside className={`daiq-drawer${open ? ' open' : ''}`}>
      <div className="daiq-head">
        <div>
          <p className="daiq-eyebrow">Made fresh in-house</p>
          <h3>Daiquiri <em>Menu</em></h3>
        </div>
        <button className="sf-icon-btn" onClick={onClose} aria-label="Close">
          <Icon name="close" size={20} />
        </button>
      </div>

      <div className="daiq-body">
        <p className="daiq-note">Available in 16 oz &amp; 32 oz · All made to order · 21+ to purchase</p>
        <div className="daiq-grid">
          {SHOP_DATA.daiquiris.map(d => (
            <div key={d.id} className="daiq-card">
              <div className="daiq-swatch" style={{ background: d.color }} />
              <div className="daiq-info">
                <div className="daiq-name">
                  {d.name}
                  {d.pick && <span className="daiq-badge">House fav</span>}
                </div>
                <div className="daiq-desc">{d.desc}</div>
                <div className="daiq-price">${d.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="daiq-foot">
        <p className="daiq-foot-note">Order in-store or call <a href="tel:3187377260">(318) 737-7260</a></p>
      </div>
    </aside>
  </>
);

export default DaiquiriDrawer;
