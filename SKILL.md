---
name: sip-and-chill-design
description: Use this skill to generate well-branded interfaces and assets for Sip & Chill — a neighborhood liquor and natural-wine boutique with a warm, lounge-premium aesthetic (charcoal, amber, bone). Contains the brand voice rules, type and color foundations, asset library (logos, icons, bottles), and UI kit components for both the desktop storefront and the mobile shop + Wine Finder quiz + events experience.
user-invocable: true
---

Read the `README.md` file at the root of this skill, then explore the other available files:

- `colors_and_type.css` — the foundation. Always import this first. Defines color tokens (`--ink`, `--charcoal`, `--smoke`, `--amber`, `--amber-bright`, `--bone`, `--cream`, semantic accents), type families (`--font-display` Cormorant Garamond, `--font-body` Manrope, `--font-mono` JetBrains Mono), the type scale (`h1`–`h5`, `.body`, `.eyebrow`, `.quote`, `.price-display`), spacing scale, radii, shadows, and motion tokens.
- `assets/` — logo mark, wordmark, stacked lockup, favicon. Always use these instead of redrawing.
- `preview/` — small reference cards for every foundation and component (color, type, spacing, components, brand). Read these to see how tokens look in practice.
- `ui_kits/storefront/` — desktop e-commerce. Header, hero, category strip, product grid, cart drawer, editorial strip, events feed, footer. Each as a JSX component with shared styling in `storefront.css`.
- `ui_kits/mobile/` — the mobile shop, Wine & Spirits Finder quiz (5 conversational questions → recommendation), and tastings/events list. Rendered inside iOS device frames.
- `ui_kits/Icons.jsx` — `<Icon name="…"/>` for the Lucide-based icon set used everywhere. Use `name="cart"`, `"wine"`, `"flame"`, `"leaf"`, `"map-pin"`, `"sparkles"`, `"chevron-right"`, etc.
- `ui_kits/Bottle.jsx` — stylized SVG bottle placeholder. Use until real photography is available.
- `ui_kits/data.js` — sample catalog of products, categories, and events. Use for placeholder content.

## How to design as Sip & Chill

1. **Dark mode first.** `var(--ink)` page background, `var(--charcoal)` cards, `var(--smoke)` elevated surfaces. Light mode (`var(--paper)`) is secondary.
2. **Amber is the brand signal.** Use `var(--amber)` for primary CTAs, links, key prices, and the brand mark. Hover goes to `--amber-bright`, press goes to `--amber-deep`. Never use it as a full background; it appears in details.
3. **Two-family type.** Headlines and short emotive bits in *Cormorant Garamond italic*. Everything else in Manrope. Numbers always tabular.
4. **Voice: welcoming, knowledgeable, relaxed.** Sentence case. No emoji. No exclamations except inside event copy. "We" for the shop, "you" for the customer. If a sentence reads like an ad, rewrite it like advice from a friend.
5. **Generous spacing.** 4pt scale, default to `--s-8` between sections. Hairline borders (1px at 60% opacity), warm-tinted shadows used only on floating elements.
6. **Lucide icons.** 1.5px stroke, `currentColor`. The brand mark is the only non-Lucide SVG.

## Output modes

- **Visual artifacts (slides, mocks, throwaway prototypes):** copy needed assets out of this skill into the new project, write static HTML files referencing `colors_and_type.css`, and use the existing UI kit components as a starting point. Always `<link>` the foundation CSS at the top.
- **Production code:** read the rules here and apply them. The UI kit JSX is *cosmetic* — do not lift it as production code, but lift its tokens, structure, and visual decisions.

If the user invokes this skill without other guidance, ask what they want to build (storefront page, mobile screen, event flyer, in-store signage, gift card, email?), gather a few specifics (audience, format, dimensions), then act as an expert designer.
