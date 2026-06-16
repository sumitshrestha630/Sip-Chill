// Root storefront app — composes header, hero, grid, editorial, events, footer + cart drawer.
const App = () => {
  const [activeCat, setActiveCat] = React.useState("all");
  const [cartOpen, setCartOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    { p: SHOP_DATA.products.find(x => x.id === "tessier"), qty: 1 },
    { p: SHOP_DATA.products.find(x => x.id === "pulaski"), qty: 1 }
  ]);
  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  const addItem = (p) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.p.id === p.id);
      if (i >= 0) {
        const next = [...prev]; next[i] = { ...next[i], qty: next[i].qty + 1 }; return next;
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
    <div data-screen-label="01 Storefront home">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)}/>
      <Hero/>
      <CategoryStrip activeCat={activeCat} setActiveCat={setActiveCat}/>
      <ProductGrid activeCat={activeCat} onAdd={addItem}/>
      <Editorial/>
      <Events/>
      <Footer/>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={items} setQty={setQty}/>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
