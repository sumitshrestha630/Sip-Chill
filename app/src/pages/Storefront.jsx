import { useState } from 'react';
import Header from '../components/storefront/Header';
import Hero from '../components/storefront/Hero';
import CategoryStrip from '../components/storefront/CategoryStrip';
import ProductGrid from '../components/storefront/ProductGrid';
import Gallery from '../components/storefront/Gallery';
import TikTokCarousel from '../components/storefront/TikTokCarousel';
import Editorial from '../components/storefront/Editorial';
import Events from '../components/storefront/Events';
import Reviews from '../components/storefront/Reviews';
import Footer from '../components/storefront/Footer';
import CartDrawer from '../components/storefront/CartDrawer';
import Location from '../components/storefront/Location';
import PromoBanner from '../components/storefront/PromoBanner';


const Storefront = () => {
  const [activeCat, setActiveCat] = useState('all');
  const [cartOpen, setCartOpen] = useState(false);
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
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <CategoryStrip activeCat={activeCat} setActiveCat={setActiveCat} />
      <ProductGrid activeCat={activeCat} onAdd={addItem} />
      <Gallery />
      <TikTokCarousel />
      <Editorial />
      <Events />
      <Reviews />
      <Location />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setQty={setQty} />
    </>
  );
};

export default Storefront;
