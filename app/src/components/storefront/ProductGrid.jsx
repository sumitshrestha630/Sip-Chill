import Icon from '../Icon';
import Bottle from '../Bottle';
import { SHOP_DATA } from '../../data/shop';

import wellerImg    from '../../assets/weller.webp';
import macallanImg  from '../../assets/macallan.webp';
import casamigoImg  from '../../assets/casamigo.jpeg';
import woodfordImg  from '../../assets/woodford.jpeg';
import greygooseImg from '../../assets/greygoose.jpeg';
import hendricksImg from '../../assets/hendricks.jpeg';

const IMGS = { weller: wellerImg, macallan: macallanImg, casamigo: casamigoImg, woodford: woodfordImg, greygoose: greygooseImg, hendricks: hendricksImg };

const ProductCard = ({ p, onAdd }) => (
  <article className="product" onClick={() => onAdd(p)}>
    <div className="product-img">
      <div className="product-img-bg"></div>
      {p.pick && <div className="pick-badge">{p.pick}</div>}
      {p.stock <= 5 && !p.pick && <div className="low-badge">{p.stock} left</div>}
      <button className="product-fav" aria-label="Save" onClick={e => e.stopPropagation()}>
        <Icon name="heart" size={18}/>
      </button>
      {IMGS[p.img] && <img src={IMGS[p.img]} alt={p.name} className="product-photo" />}
      <div className="product-img-inner">
        {!IMGS[p.img] && <Bottle color={p.color} label={p.label} w={110}/>}
      </div>
    </div>
    <div className="product-body">
      <div className="product-cat">{p.cat}</div>
      <h3 className="product-name">{p.name}</h3>
      <div className="product-sub">{p.sub}</div>
      <div className="product-bottom">
        <span className="product-price">${p.price}</span>
        <button className="product-add" aria-label="Add to cart" onClick={e => { e.stopPropagation(); onAdd(p); }}>
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
    <section className="sf-section" id="shop">
      <div className="sf-section-header">
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>This week's pours</div>
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

export default ProductGrid;
