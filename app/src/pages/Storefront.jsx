import { useState } from 'react';
import Header from '../components/storefront/Header';
import HeroV2 from '../components/storefront/HeroV2';
import CategoryStrip from '../components/storefront/CategoryStrip';
import ProductGrid from '../components/storefront/ProductGrid';
import Gallery from '../components/storefront/Gallery';
import TikTokCarousel from '../components/storefront/TikTokCarousel';
import DaiquiriDrawer from '../components/storefront/DaiquiriDrawer';
import Collections from '../components/storefront/Collections';
import Trending from '../components/storefront/Trending';
import Editorial from '../components/storefront/Editorial';
import Reviews from '../components/storefront/Reviews';
import Footer from '../components/storefront/Footer';
import CartDrawer from '../components/storefront/CartDrawer';
import Location from '../components/storefront/Location';
import PromoBanner from '../components/storefront/PromoBanner';


const Storefront = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [cartOpen, setCartOpen] = useState(false);
  const [daiqOpen, setDaiqOpen] = useState(false);
  const [items, setItems] = useState([]);

  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  const addItem = (p) => {
    setItems(prev => {
      const idx = prev.findIndex(x => x.p.id === p.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { p, qty: 1 }];
    });
    setCartOpen(true);
  };

  const setQty = (id, qty) => {
    if (qty <= 0) { setItems(prev => prev.filter(i => i.p.id !== id)); return; }
    setItems(prev => prev.map(i => i.p.id === id ? { ...i, qty } : i));
  };

  return (
    <>
      <PromoBanner />
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} onDaiquiriClick={() => setDaiqOpen(true)} />
      <HeroV2 />
      <Collections />
      <Trending />
      <div id="shop">
        <CategoryStrip activeCat={activeCat} setActiveCat={setActiveCat} />
        <ProductGrid activeCat={activeCat} onAdd={addItem} />
      </div>
      <Gallery />
      <TikTokCarousel />
      <Editorial />
      <Reviews />
      <Location />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setQty={setQty} />
      <DaiquiriDrawer open={daiqOpen} onClose={() => setDaiqOpen(false)} />
    </>
  );
};

export default Storefront;
