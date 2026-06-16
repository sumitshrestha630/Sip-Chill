# Storefront — Sip & Chill

Desktop-first (responsive down to tablet) e-commerce storefront.

## Screens

`index.html` is the home page and an end-to-end click-through:
- Sticky header with cart counter
- Hero with primary CTAs
- Category chip strip (filters the grid below)
- Product grid with hover lift + add-to-cart
- Editorial strip ("Tell us how you're feeling.")
- Tastings & events feed
- Footer with shop / visit / about columns
- Cart drawer (slides from right) with delivery/pickup toggle, qty steppers, totals

## Components

- `Header.jsx` — `Header`, `Hero`, `CategoryStrip`
- `ProductGrid.jsx` — `ProductCard`, `ProductGrid`, `Editorial`, `Events`, `Footer`
- `CartDrawer.jsx` — `CartDrawer`
- `App.jsx` — composition + cart state

Shared with the mobile kit (one level up):
- `../Icons.jsx` — `<Icon name="…"/>` for the Lucide set used everywhere
- `../Bottle.jsx` — stylized SVG bottle placeholder; swap for real photography
- `../data.js` — sample catalog (`SHOP_DATA.products`, `categories`, `events`)

## Interactions

- Click any product or its `+` to add to cart (drawer auto-opens)
- Cart drawer: change qty (0 removes), toggle Delivery / Pickup
- Category chips filter the grid
- All other links are decorative
