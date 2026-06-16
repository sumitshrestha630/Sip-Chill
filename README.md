# Sip & Chill — Design System

> A modern, upscale neighborhood liquor store and boutique wine shop. Premium lounge feel: rich charcoal, warm amber, clean bone-white. Welcoming and knowledgeable — never pretentious.

---

## Brand at a glance

**Sip & Chill** is a neighborhood spirits and wine destination — equal parts curated bottle shop and warm, third-place lounge. The brand sits in a sweet spot between *natural-wine indie* and *whisky-bar establishment*: confident enough to recommend, relaxed enough that you'd hang out there on a Tuesday.

The brand serves three connected products:

1. **E-commerce storefront** — browse and buy bottles for local delivery or in-store pickup. Mobile-first. Filterable by category (Bourbon, Craft Beer, Natural Wine…), region, price, and producer.
2. **Wine & Spirits Finder** — a short, conversational quiz that recommends bottles based on mood, occasion, and flavor preference. Designed to demystify, not gate-keep.
3. **Tastings & Events** — a dedicated section announcing weekly in-store tastings and mixology events, with RSVPs and waitlists.

## Sources

This design system was built from a brand brief only. No codebase, Figma, or existing assets were provided. Where this matters:

- **Fonts are substitutions.** Display: *Cormorant Garamond* (lounge-editorial serif). Body: *Manrope* (warm geometric sans). Mono: *JetBrains Mono*. All loaded from Google Fonts. **Flag to user → please confirm or supply brand fonts.**
- **Logo is original** — drawn as an SVG mark using the brand's amber/charcoal palette. Replace with the real mark when available.
- **Iconography uses Lucide** via CDN, chosen for its consistent 1.5px stroke and elegant warmth.

---

## CONTENT FUNDAMENTALS

The voice is **welcoming, knowledgeable, and relaxed — never pretentious**. Think of the best sommelier or bartender you've met: someone who knows their stuff but talks to you like a friend, not a textbook.

### Voice principles

| Do | Don't |
|---|---|
| "A bright, snappy Sancerre that drinks like a sea breeze." | "An expression of terroir-driven Sauvignon Blanc from the Loire Valley AOC." |
| "Try this if you like…" | "Connoisseurs will appreciate…" |
| "Funky, in a good way." | "Notes of barnyard and brett." |
| "We're open till 9." | "Operating hours: 0900–2100." |
| "Pick it up on your way home." | "Schedule your collection appointment." |

### Specifics

- **Person.** "We" for the shop, "you" for the customer. Never "one" or "the customer." Names of staff are okay ("Marco's pick this week").
- **Casing.** Sentence case everywhere — buttons, nav, headings. **Never ALL CAPS** except in `.eyebrow` micro-labels (e.g. `THIS WEEK`, `STAFF PICK`).
- **Tone calibration.** Confident but never lecturing. If you find yourself writing "elegant" or "sophisticated," delete it. The design carries the elegance; the copy stays human.
- **Numbers.** Prices use `$` (no `.00` on whole dollars: `$28`, not `$28.00`). ABV uses `%` with no space: `14.5%`. Vintages bare: `2021`, not `'21`.
- **Punctuation.** En-dashes for ranges (`$20–35`). Oxford comma. Em-dashes — like this — for asides.
- **No emoji.** Anywhere. We use small typographic ornaments (`·`, `—`) and the icon library instead.
- **No exclamation points** except inside event copy ("Free pours all night!"). One per page, max.

### Example copy snippets

> **Hero headline.** Bottles, picked with care. Delivered to your door.
>
> **Quiz intro.** Tell us how you're feeling. We'll pour you something good.
>
> **Empty cart.** Cart's empty. Want a suggestion?
>
> **Out of stock.** Just sold the last one. Want us to let you know when it's back?
>
> **Event blurb.** Thursday, 7pm — Marco walks us through five Sicilian reds. $15, includes a pour of each. Twelve seats.

---

## VISUAL FOUNDATIONS

The aesthetic is a **dimly-lit lounge after sundown**: warm amber light on aged wood and brass, with crisp bone-white accents like fresh linen napkins. Confident, calm, never showy.

### Color

Dark-mode first; a light mode exists but is secondary. The palette is built around three ideas:

- **Charcoals** form the room — `--ink` for the deepest background, `--charcoal` for cards, `--smoke` for elevated surfaces, `--ash` for hover states. Warm undertones (oklch hue ≈ 60) keep them from feeling clinical.
- **Amber** is the brand voice — `--amber` is the primary action color, `--amber-bright` is hover (it "glows"), `--amber-deep` is pressed (the spirit "ages"). Used sparingly: buttons, links, key prices, brand mark. Never as a full background.
- **Bones & creams** are the text — `--bone` for primary, `--cream` for secondary, `--slate` for muted. Off-whites have a slight warm tint so they feel like candlelight rather than fluorescent.

Accents (`--burgundy`, `--forest`, `--rust`) appear only in category contexts — burgundy for wine, forest for botanicals/spirits, rust for whiskey/old-fashioneds.

### Type

A two-family system. **Cormorant Garamond** for display — italic by default in headlines, evoking handwritten menus and old labels. **Manrope** for everything else — clean, modern, with just enough warmth to belong. Display is set tight (`-0.02em`); body is set generous (`1.45` line height, `1.65` for long-form).

Numbers always use tabular figures. Prices in the amber color whenever they're the focal element.

### Spacing & layout

4pt base scale. Generous by default — `--s-8` (32px) between sections on mobile, `--s-16`–`--s-24` (64–96px) on desktop. Cards breathe; we never stuff a grid edge to edge. Max content width: 1200px desktop, 640px reading column.

Mobile-first. The grid collapses to a single column under 640px; product grids go 2-up at mobile, 3-up at tablet, 4-up at desktop.

### Backgrounds

Mostly flat `--ink` with subtle layering via elevation. We don't use:
- Bluish-purple gradients
- Hand-drawn illustrations
- Repeating pattern wallpaper
- Decorative SVG flourishes

We **do** use:
- **Product photography** — bottles on dark, warm-lit surfaces. Always shot warm (not cool/blue). Slight film grain in hero imagery.
- **Soft amber radial glows** behind the brand mark on hero sections — `radial-gradient(circle, var(--amber) 0%, transparent 60%)` at 8–15% opacity.
- **Hairline rules** in `--border-1` to separate sections; never heavy dividers.

### Animation

Subtle and slow. Default: `220ms cubic-bezier(0.22, 1, 0.36, 1)` — a gentle out-ease. Page transitions are crossfades, never slides. Buttons don't bounce. The only "delight" animation is the amber glow on hover.

- **Hover** — interactive elements lift their opacity/brightness by ~8%, never scale up. Buttons shift to `--amber-bright`.
- **Press** — buttons darken to `--amber-deep` and gain `transform: translateY(1px)`. No shrinking.
- **Focus** — 2px amber outline at 35% opacity, offset 2px.
- **Load** — content fades up 8px over 420ms. Skeletons use a slow amber shimmer.

### Borders, shadows, surfaces

- **Borders** are hairlines (1px, `--border-1`) at 60% opacity so they feel like the edge of a softly-lit shelf, not a hard line.
- **Shadows** are deep and warm-tinted, used only on floating elements (menus, modals, the cart drawer). Never on inline cards — those use elevation via background color shift instead.
- **No glassmorphism / heavy blur.** Occasional `backdrop-filter: blur(8px)` on the sticky header when it overlays imagery, but that's it.
- **Cards** are flat `--smoke` rectangles with `--r-lg` (14px) corners, a `--border-1` outline, and a single `--inset-hairline` top highlight to suggest a polished bar surface.
- **Product cards** sit on `--charcoal` with no border, the image taking most of the height, type below.

### Corner radii

Soft but never cute:
- `--r-sm` (4px) — chips, tags, small badges
- `--r-md` (8px) — inputs, dropdowns
- `--r-lg` (14px) — cards, modals
- `--r-xl` (22px) — hero panels, the cart drawer
- `--r-pill` — category filter chips, primary buttons

### Buttons (quick spec)

- **Primary** — solid `--amber` fill, `--ink` text, pill radius, weight 600, 13px tracking-tight. The brand's "pour me one."
- **Secondary** — transparent fill, 1px `--border-2` outline, `--bone` text. Hover: border goes amber.
- **Ghost** — text only, amber color, no border. For inline actions and tertiary links.
- **Destructive** — `--danger` text on transparent, used only in confirmation modals.

### Imagery direction

- **Bottles** on dark walnut/marble surfaces, lit warm from one side. Shadows visible but soft.
- **Lifestyle** shots: amber-lit interiors, hands pouring, ice in coupes. Never aerial flat-lays.
- **People** are real (staff, customers) — never stock-photo couples clinking glasses.
- **Color grade** consistent across all imagery: warm midtones, slightly crushed shadows, +film grain at 4%. We avoid cool/blue/desaturated shots entirely.

---

## ICONOGRAPHY

We use **Lucide** (loaded from CDN, `lucide.dev`) as the icon system. Reasons:

- Consistent 1.5px stroke matches the hairline aesthetic.
- Wide coverage of commerce + nav icons (cart, search, filter, map-pin, user, etc.).
- Open license, free to use anywhere.

### Rules

- **Stroke width.** Always 1.5px. Never filled icons unless indicating an "active" state (e.g. filled heart for "saved").
- **Sizing.** 16px in dense UI, 20px default, 24px in buttons, 32px+ in hero contexts.
- **Color.** Inherit `currentColor`. In dark UI, icons take on `--fg-1` or `--fg-2` based on hierarchy. The amber color is reserved for brand-specific marks and active states.
- **Brand mark.** Our own SVG (`assets/logo-mark.svg`) — an amber arc evoking a glass rim, used in the header, favicons, and the loading state. Never recolored.
- **Bottle / glass icons.** Lucide's `wine`, `martini`, `beer` icons cover most needs. For specific spirit categories, we use Lucide neutrals (`leaf` for natural wine, `flame` for whiskey) tinted with category accent colors.
- **No emoji.** Anywhere in product.
- **No unicode chars as icons** except `·` and `—` as typographic ornaments in copy.

If you need an icon Lucide doesn't have, ask before adding. Mixing icon sets quickly breaks the system.

---

## Index

```
README.md                     ← you are here
SKILL.md                      ← cross-compatible Claude Code skill manifest
colors_and_type.css           ← the foundation. Import this first.

assets/
  logo-mark.svg               ← amber arc / glass-rim mark
  logo-wordmark.svg           ← full "Sip & Chill" lockup
  logo-stacked.svg            ← mark + wordmark stacked
  favicon.svg
  icons/                      ← link to Lucide via CDN; this folder is reserved

preview/
  card-*.html                 ← Design System tab cards (type, color, spacing, components, brand)

ui_kits/
  storefront/                 ← e-commerce desktop + responsive
  mobile/                     ← mobile shop, wine finder quiz, events
```

### Caveats & open questions

- **Font substitution flagged** — Cormorant Garamond + Manrope are educated guesses. Please supply the real brand fonts if they differ.
- **Logo is original** — replace `assets/logo-*.svg` with the real lockup when available.
- **No real product photography** — UI kits use elegant placeholder bottle blocks. Drop in real shots when ready.
- **Lucide icons via CDN** — if the brand wants a bespoke icon set, this is the place to swap.
