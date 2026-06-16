export const SHOP_DATA = {
  categories: [
    { id: "daiquiri", label: "Daiquiris", icon: "martini", tint: "amber" },
    { id: "wine", label: "Wine", icon: "leaf", tint: "burgundy" },
    { id: "bourbon", label: "Whiskey", icon: "flame", tint: "rust" },
    { id: "beer", label: "Beer", icon: "beer", tint: "amber" },
    { id: "mezcal", label: "Spirits", icon: "wine", tint: "forest" },
  ],
  products: [
    { id: "blantons-bourbon", name: "Blanton's Single Barrel", sub: "Bourbon · 750ml", cat: "Whiskey", catId: "bourbon", price: 65, abv: "46.5%", region: "Kentucky, US", color: "amber", pick: "Fan favorite", blurb: "The original single barrel bourbon. Rich vanilla, caramel, and a hint of spice.", stock: 3, label: "spirit" },
    { id: "clase-azul-rep", name: "Clase Azul Reposado", sub: "Tequila · 750ml", cat: "Spirits", catId: "tequila", price: 150, abv: "40%", region: "Jalisco, MX", color: "amber", pick: "Staff pick", blurb: "Ultra-premium agave aged in oak. Complex, smooth, and famously decanted.", stock: 4, label: "spirit" },
    { id: "weller-reserve", name: "Weller Special Reserve", sub: "Wheated Bourbon · 750ml", cat: "Whiskey", catId: "bourbon", price: 45, abv: "45%", region: "Kentucky, US", color: "amber", img: "weller", blurb: "Exceptionally smooth wheated profile. Sweet, balanced, and highly sought after.", stock: 6, label: "spirit" },
    { id: "macallan-12", name: "The Macallan 12 Double Cask", sub: "Single Malt · 750ml", cat: "Whiskey", catId: "scotch", price: 85, abv: "43%", region: "Highlands, UK", color: "amber", pick: "Staff pick", img: "macallan", blurb: "Classic sherry-seasoned oak elegance. Dried fruit, butterscotch, and wood smoke.", stock: 8, label: "spirit" },
    { id: "casamigos-blanco", name: "Casamigos Blanco", sub: "Tequila · 750ml", cat: "Spirits", catId: "tequila", price: 48, abv: "40%", region: "Jalisco, MX", color: "clear", img: "casamigo", blurb: "Crisp and clean with hints of citrus, vanilla, and sweet agave. Perfect for sipping.", stock: 15, label: "spirit" },
    { id: "woodford-res", name: "Woodford Reserve", sub: "Straight Bourbon · 750ml", cat: "Whiskey", catId: "bourbon", price: 38, abv: "45.2%", region: "Kentucky, US", color: "amber", img: "woodford", blurb: "Rich, rounded, and smooth. Chewy caramel, cocoa, and a long, warm finish.", stock: 20, label: "spirit" },
    { id: "grey-goose", name: "Grey Goose", sub: "Vodka · 750ml", cat: "Spirits", catId: "vodka", price: 35, abv: "40%", region: "Cognac, FR", color: "clear", img: "greygoose", blurb: "A clear benchmark for premium vodka. Crisp, round, and delicately floral.", stock: 18, label: "spirit" },
    { id: "hendricks-gin", name: "Hendrick's Gin", sub: "Distilled Gin · 750ml", cat: "Spirits", catId: "gin", price: 38, abv: "44%", region: "Scotland, UK", color: "clear", pick: "Deep's pick", img: "hendricks", blurb: "Unexpectedly infused with rose and cucumber. Bright, botanical, and refreshing.", stock: 12, label: "spirit" }
  ],
  events: [
    { day: "14", mon: "Nov", cat: "Tasting · Thursday 7pm", title: "Five Sicilian reds with Marco", blurb: "Bring an appetite. We'll pour each and tell you what to eat with it.", seats: "9 / 12 seats", price: "$15" },
    { day: "21", mon: "Nov", cat: "Mixology · Friday 8pm", title: "Mezcal & smoke", blurb: "Three drinks built around Oaxacan mezcal. Yes, including the spicy one.", seats: "Waitlist", price: "Join", wait: true },
    { day: "28", mon: "Nov", cat: "Class · Saturday 4pm", title: "Reading a wine label", blurb: "Thirty minutes that'll save you years of squinting at French.", seats: "Free · 20 seats", price: "RSVP" },
    { day: "05", mon: "Dec", cat: "Tasting · Thursday 7pm", title: "Bourbons under $50", blurb: "Six bottles that punch well above their price. No snobbery.", seats: "3 / 12 seats", price: "$15" }
  ]
};
