// Sample catalog used by the storefront and mobile kits.
window.SHOP_DATA = {
  categories: [
    { id: "wine", label: "Natural wine", icon: "leaf", tint: "burgundy" },
    { id: "bourbon", label: "Bourbon", icon: "flame", tint: "rust" },
    { id: "mezcal", label: "Mezcal", icon: "flame", tint: "forest" },
    { id: "beer", label: "Craft beer", icon: "beer", tint: "amber" },
    { id: "amaro", label: "Amaro", icon: "wine", tint: "rust" },
    { id: "nonalc", label: "Non-alc", icon: "leaf", tint: "forest" }
  ],
  products: [
    { id: "tessier", name: "Domaine Tessier", sub: "Sancerre · 2021 · 750ml", cat: "Natural wine", catId: "wine", price: 32, abv: "12.5%", region: "Loire, FR", color: "burgundy", pick: "Staff pick", blurb: "Bright, snappy. Drinks like a sea breeze.", stock: 18, label: "white" },
    { id: "pulaski", name: "Old Pulaski", sub: "Single barrel · 12yr", cat: "Bourbon", catId: "bourbon", price: 78, abv: "46%", region: "Kentucky, US", color: "amber", blurb: "Caramel, leather, the long road home.", stock: 6, label: "spirit" },
    { id: "cuish", name: "Cuish Espadín", sub: "Mezcal · Oaxaca · 750ml", cat: "Mezcal", catId: "mezcal", price: 64, abv: "45%", region: "Oaxaca, MX", color: "forest", blurb: "Quiet smoke. Pour it neat, then thank us.", stock: 3, label: "spirit" },
    { id: "casteller", name: "Casteller Cava", sub: "Brut · NV · 750ml", cat: "Natural wine", catId: "wine", price: 22, abv: "11.5%", region: "Catalonia, ES", color: "amber", blurb: "Friday-night Spanish bubbles.", stock: 24, label: "sparkling" },
    { id: "elbisonte", name: "El Bisonte IPA", sub: "Hazy IPA · 4-pack", cat: "Craft beer", catId: "beer", price: 18, abv: "6.8%", region: "Brooklyn, NY", color: "amber", blurb: "Juicy, lightly bitter, criminally drinkable.", stock: 12, label: "beer" },
    { id: "novara", name: "Novara Rosso", sub: "Nebbiolo · 2019 · 750ml", cat: "Natural wine", catId: "wine", price: 41, abv: "13.5%", region: "Piedmont, IT", color: "burgundy", pick: "Marco's pick", blurb: "Tar, roses, the good kind of grip.", stock: 9, label: "red" },
    { id: "ardgowan", name: "Ardgowan 10", sub: "Single malt · 10yr · 700ml", cat: "Scotch", catId: "bourbon", price: 89, abv: "43%", region: "Highlands, UK", color: "amber", blurb: "Honey and hay. Quiet rain on the window.", stock: 4, label: "spirit" },
    { id: "matriarca", name: "La Matriarca", sub: "Tepache mezcal · 500ml", cat: "Mezcal", catId: "mezcal", price: 72, abv: "47%", region: "Oaxaca, MX", color: "forest", blurb: "Funky, fruity, fearless.", stock: 5, label: "spirit" }
  ],
  events: [
    { day: "14", mon: "Nov", cat: "Tasting · Thursday 7pm", title: "Five Sicilian reds with Marco", blurb: "Bring an appetite. We'll pour each and tell you what to eat with it.", seats: "9 / 12 seats", price: "$15" },
    { day: "21", mon: "Nov", cat: "Mixology · Friday 8pm", title: "Mezcal & smoke", blurb: "Three drinks built around Oaxacan mezcal. Yes, including the spicy one.", seats: "Waitlist", price: "Join", wait: true },
    { day: "28", mon: "Nov", cat: "Class · Saturday 4pm", title: "Reading a wine label", blurb: "Thirty minutes that'll save you years of squinting at French.", seats: "Free · 20 seats", price: "RSVP" },
    { day: "05", mon: "Dec", cat: "Tasting · Thursday 7pm", title: "Bourbons under $50", blurb: "Six bottles that punch well above their price. No snobbery.", seats: "3 / 12 seats", price: "$15" }
  ]
};
