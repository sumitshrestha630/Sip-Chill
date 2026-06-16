import Icon from '../Icon';
import { SHOP_DATA } from '../../data/shop';

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
      <button className="cat-chip" style={{ marginLeft: "auto" }}><Icon name="filter" size={14}/> Filters</button>
    </div>
  </section>
);

export default CategoryStrip;
