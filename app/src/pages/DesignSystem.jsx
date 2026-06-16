import { useState } from 'react';
import '../styles/design-system.css';
import logoStacked  from '../assets/logo-stacked.svg';
import logoWordmark from '../assets/logo-wordmark.svg';
import logoMark     from '../assets/logo-mark.svg';
import Bottle       from '../components/Bottle';
import Icon         from '../components/Icon';

/* ── Navigation config ──────────────────────────────────── */
const NAV = [
  { group: 'Brand', items: [
    { id: 'brand-hero',  label: 'Hero' },
    { id: 'brand-logos', label: 'Logos' },
    { id: 'brand-icons', label: 'Icons' },
  ]},
  { group: 'Colors', items: [
    { id: 'color-surfaces', label: 'Surfaces' },
    { id: 'color-amber',    label: 'Amber' },
    { id: 'color-bones',    label: 'Bones' },
    { id: 'color-accents',  label: 'Accents' },
    { id: 'color-semantic', label: 'Semantic' },
  ]},
  { group: 'Typography', items: [
    { id: 'type-scale',   label: 'Scale' },
    { id: 'type-display', label: 'Display' },
    { id: 'type-body',    label: 'Body' },
    { id: 'type-special', label: 'Special' },
  ]},
  { group: 'Spacing', items: [
    { id: 'spacing-scale',     label: 'Scale' },
    { id: 'spacing-elevation', label: 'Elevation' },
    { id: 'spacing-radii',     label: 'Radii' },
    { id: 'spacing-shadows',   label: 'Shadows' },
  ]},
  { group: 'Components', items: [
    { id: 'comp-buttons',  label: 'Buttons' },
    { id: 'comp-chips',    label: 'Chips & Badges' },
    { id: 'comp-inputs',   label: 'Inputs' },
    { id: 'comp-cards',    label: 'Product Cards' },
    { id: 'comp-event',    label: 'Event Card' },
    { id: 'comp-gallery',  label: 'Gallery' },
  ]},
];

/* ── Section panels ─────────────────────────────────────── */

function BrandHero() {
  return (
    <>
      <p className="ds-section-title">brand · hero</p>
      <div className="ds-hero">
        <div className="ds-hero-g1" />
        <div className="ds-hero-g2" />
        <div className="ds-grain" />
        <div className="ds-hero-content">
          <div className="ds-hero-eyebrow">Sip &amp; Chill · since 2019</div>
          <div className="ds-hero-h">Bottles, picked with <em>care</em>.</div>
          <div className="ds-hero-p">A neighborhood bottle shop with the patience to recommend. Walk in, or we'll deliver before dinner.</div>
        </div>
      </div>
    </>
  );
}

function BrandLogos() {
  return (
    <>
      <p className="ds-section-title">brand · logos</p>
      <div className="ds-logos-grid">
        <div className="ds-logo-cell">
          <div className="ds-logo-glow" />
          <img src={logoStacked} width={180} height={150} alt="stacked logo" />
          <div className="ds-logo-tag">stacked · primary lockup</div>
        </div>
        <div className="ds-logo-cell">
          <img src={logoWordmark} width={200} height={44} alt="wordmark" />
          <div className="ds-logo-tag">wordmark · horizontal</div>
        </div>
        <div className="ds-logo-cell">
          <img src={logoMark} width={68} height={68} alt="mark" />
          <div className="ds-logo-tag">mark · favicon / avatar</div>
        </div>
      </div>
    </>
  );
}

function BrandIcons() {
  const icons = ['search','cart','wine','martini','beer','leaf','flame','map-pin','heart','filter','clock','calendar'];
  return (
    <>
      <p className="ds-section-title">brand · icons</p>
      <div className="ds-icon-grid">
        {icons.map(name => (
          <div key={name} className="ds-ico">
            <Icon name={name} size={22} />
            <div className="ds-ico-name">{name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function Swatch({ bg, name, val, light, tag, glow }) {
  return (
    <div className={`ds-sw ${light ? 'ds-sw-light' : 'ds-sw-dark'}`} style={{ background: bg }}>
      {glow && <div className="ds-sw-glow" />}
      {tag && <div className="ds-sw-tag">{tag}</div>}
      <div className="ds-sw-name">{name}</div>
      <div className="ds-sw-val">{val}</div>
    </div>
  );
}

function ColorSurfaces() {
  return (
    <>
      <p className="ds-section-title">color · surfaces</p>
      <div className="ds-sw-row ds-sw-5">
        <Swatch bg="var(--ink)"      name="Ink"      val="--ink" />
        <Swatch bg="var(--charcoal)" name="Charcoal" val="--charcoal" />
        <Swatch bg="var(--smoke)"    name="Smoke"    val="--smoke" />
        <Swatch bg="var(--ash)"      name="Ash"      val="--ash" />
        <Swatch bg="var(--slate)"    name="Slate"    val="--slate" />
      </div>
    </>
  );
}

function ColorAmber() {
  return (
    <>
      <p className="ds-section-title">color · amber</p>
      <div className="ds-sw-row ds-sw-4">
        <Swatch bg="var(--amber)"        name="Amber"       val="--amber · primary"   glow />
        <Swatch bg="var(--amber-bright)" name="Amber Bright" val="--amber-bright · hover" glow />
        <Swatch bg="var(--amber-deep)"   name="Amber Deep"  val="--amber-deep · press" glow />
        <Swatch bg="var(--honey)"        name="Honey"       val="--honey · soft wash" glow light />
      </div>
    </>
  );
}

function ColorBones() {
  return (
    <>
      <p className="ds-section-title">color · bones</p>
      <div className="ds-sw-row ds-sw-3">
        <Swatch bg="var(--bone)"  name="Bone"  val="--bone · fg-1"      light />
        <Swatch bg="var(--cream)" name="Cream" val="--cream · fg-2"     light />
        <Swatch bg="var(--paper)" name="Paper" val="--paper · light bg" light />
      </div>
    </>
  );
}

function ColorAccents() {
  return (
    <>
      <p className="ds-section-title">color · accents</p>
      <div className="ds-sw-row ds-sw-3">
        <Swatch bg="var(--burgundy)" name="Burgundy" val="--burgundy" tag="Wine" />
        <Swatch bg="var(--forest)"   name="Forest"   val="--forest"   tag="Botanicals" />
        <Swatch bg="var(--rust)"     name="Rust"     val="--rust"     tag="Whiskey" />
      </div>
    </>
  );
}

function ColorSemantic() {
  return (
    <>
      <p className="ds-section-title">color · semantic</p>
      <div className="ds-sw-row ds-sw-4">
        <Swatch bg="var(--success)" name="In stock"  val="--success" tag="Success" light />
        <Swatch bg="var(--warning)" name="Low stock" val="--warning" tag="Warning" />
        <Swatch bg="var(--danger)"  name="Sold out"  val="--danger"  tag="Danger" />
        <Swatch bg="var(--info)"    name="Notice"    val="--info"    tag="Info" />
      </div>
    </>
  );
}

function TypeScale() {
  const rows = [
    { tag: 'display',  style: { fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1, fontStyle: 'italic' }, text: 'Pour something good' },
    { tag: 'h2 · 40',  style: { fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1.1 }, text: 'This week at the shop' },
    { tag: 'h4 · 20',  style: { fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 600 }, text: "Marco's natural-wine picks" },
    { tag: 'body · 16', style: { fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--cream)' }, text: "We tasted twelve, kept the four we'd actually pour for friends." },
    { tag: 'meta · 13', style: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)' }, text: 'Thursday · 7pm · Twelve seats' },
  ];
  return (
    <>
      <p className="ds-section-title">type · scale</p>
      {rows.map(r => (
        <div key={r.tag} className="ds-type-row">
          <div className="ds-type-tag">{r.tag}</div>
          <div style={{ color: 'var(--bone)', ...r.style }}>{r.text}</div>
        </div>
      ))}
    </>
  );
}

function TypeDisplay() {
  return (
    <>
      <p className="ds-section-title">type · display</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, fontStyle: 'italic', color: 'var(--bone)', lineHeight: 1, letterSpacing: '-0.02em' }}>
          Bottles, picked with <span style={{ color: 'var(--amber)', fontWeight: 500 }}>care</span>.
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 500, color: 'var(--bone)', lineHeight: 1 }}>
          Cormorant Garamond — display
        </div>
        <div className="ds-type-label">font-display · weights 400/500 · italic preferred for headlines</div>
      </div>
    </>
  );
}

function TypeBody() {
  return (
    <>
      <p className="ds-section-title">type · body</p>
      <div className="ds-type-body-stack">
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'var(--bone)', margin: 0 }}>
          A bright, snappy Sancerre that drinks like a sea breeze — pour it on a Tuesday.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.45, color: 'var(--cream)', margin: 0 }}>
          Manrope is the workhorse: clean, warm enough to sit beside the serif, and great at small sizes. We use it for nearly everything that isn't a headline.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.45, color: 'var(--fg-3)', margin: 0 }}>
          14px · meta, captions, table rows, secondary nav.
        </p>
        <div className="ds-type-label">font-body · 300 / 400 / 500 / 600 / 700</div>
      </div>
    </>
  );
}

function TypeSpecial() {
  return (
    <>
      <p className="ds-section-title">type · special</p>
      <div className="ds-type-spec-grid">
        <div className="ds-type-spec-cell">
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--amber)' }}>
            This week · staff pick
          </div>
          <div className="ds-type-label">.eyebrow</div>
        </div>
        <div className="ds-type-spec-cell">
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: 'var(--bone)' }}>
            "A breeze with a backbone."
          </div>
          <div className="ds-type-label">.quote · display italic</div>
        </div>
        <div className="ds-type-spec-cell">
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 32, fontVariantNumeric: 'tabular-nums', color: 'var(--amber)' }}>
            $28
          </div>
          <div className="ds-type-label">.price-display · amber, tabular</div>
        </div>
        <div className="ds-type-spec-cell">
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--fg-3)', lineHeight: 1.45 }}>
            14.5% · 750ml · Loire, FR
          </div>
          <div className="ds-type-label">.meta</div>
        </div>
      </div>
    </>
  );
}

function SpacingScale() {
  const steps = [
    { name: '--s-1',  px: 4 },  { name: '--s-2',  px: 8 },
    { name: '--s-3',  px: 12 }, { name: '--s-4',  px: 16 },
    { name: '--s-6',  px: 24 }, { name: '--s-8',  px: 32 },
    { name: '--s-12', px: 48 }, { name: '--s-16', px: 64 },
    { name: '--s-24', px: 96 },
  ];
  return (
    <>
      <p className="ds-section-title">spacing · scale</p>
      {steps.map(s => (
        <div key={s.name} className="ds-sp-row">
          <div className="ds-sp-name">{s.name}</div>
          <div className="ds-sp-bar" style={{ width: s.px }} />
          <div className="ds-sp-px">{s.px}px</div>
        </div>
      ))}
    </>
  );
}

function SpacingElevation() {
  const levels = [
    { bg: 'var(--ink)',      h: 80,  name: 'bg',       role: 'page' },
    { bg: 'var(--charcoal)', h: 92,  name: 'bg-elev-1', role: 'card' },
    { bg: 'var(--smoke)',    h: 104, name: 'bg-elev-2', role: 'elevated card' },
    { bg: 'var(--ash)',      h: 116, name: 'bg-elev-3', role: 'hover / menu', shadow: 'var(--inset-hairline)' },
  ];
  return (
    <>
      <p className="ds-section-title">spacing · elevation</p>
      <div className="ds-elev-row">
        {levels.map(l => (
          <div key={l.name} className="ds-elev-box" style={{ background: l.bg, height: l.h, boxShadow: l.shadow }}>
            <div className="ds-elev-name">{l.name}</div>
            <div className="ds-elev-role">{l.role}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function SpacingRadii() {
  const radii = [
    { name: '--r-xs',   px: '2px',  r: 2 },
    { name: '--r-sm',   px: '4px',  r: 4 },
    { name: '--r-md',   px: '8px',  r: 8 },
    { name: '--r-lg',   px: '14px', r: 14 },
    { name: '--r-xl',   px: '22px', r: 22 },
    { name: '--r-pill', px: 'pill', r: 999 },
  ];
  return (
    <>
      <p className="ds-section-title">spacing · radii</p>
      <div className="ds-radii-grid">
        {radii.map(r => (
          <div key={r.name} className="ds-radii-cell">
            <div className="ds-radii-box" style={{ borderRadius: r.r }} />
            <div className="ds-radii-name">{r.name}</div>
            <div className="ds-radii-px">{r.px}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function SpacingShadows() {
  const shadows = [
    { name: '--shadow-sm', desc: 'inline cards',  shadow: 'var(--shadow-sm)', bg: 'var(--smoke)' },
    { name: '--shadow-md', desc: 'dropdowns',     shadow: 'var(--shadow-md)', bg: 'var(--smoke)' },
    { name: '--shadow-lg', desc: 'modals, drawer', shadow: 'var(--shadow-lg)', bg: 'var(--smoke)' },
    { name: '--glow-amber', desc: 'hover · CTAs', shadow: 'var(--glow-amber)', bg: 'var(--amber)' },
  ];
  return (
    <>
      <p className="ds-section-title">spacing · shadows</p>
      <div className="ds-shadow-grid">
        {shadows.map(s => (
          <div key={s.name} className="ds-shadow-cell">
            <div className="ds-shadow-box" style={{ boxShadow: s.shadow, background: s.bg }} />
            <div className="ds-shadow-name">{s.name}</div>
            <div className="ds-shadow-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function CompButtons() {
  return (
    <>
      <p className="ds-section-title">comp · buttons</p>
      <div className="ds-btn-stack">
        <div className="ds-btn-row">
          <div className="ds-btn-label">primary</div>
          <button className="ds-btn primary">Add to cart</button>
          <button className="ds-btn primary">Pour me one →</button>
          <button className="ds-btn primary sm">RSVP</button>
        </div>
        <div className="ds-btn-row">
          <div className="ds-btn-label">secondary</div>
          <button className="ds-btn secondary">Save for later</button>
          <button className="ds-btn secondary sm">Filter</button>
        </div>
        <div className="ds-btn-row">
          <div className="ds-btn-label">ghost</div>
          <button className="ds-btn ghost">Skip the quiz →</button>
          <button className="ds-btn ghost sm">Clear</button>
        </div>
        <div className="ds-btn-row">
          <div className="ds-btn-label">disabled</div>
          <button className="ds-btn primary" disabled>Out of stock</button>
          <button className="ds-btn secondary" disabled>Unavailable</button>
        </div>
      </div>
    </>
  );
}

function CompChips() {
  return (
    <>
      <p className="ds-section-title">comp · chips &amp; badges</p>
      <div className="ds-chip-row">
        <button className="ds-chip ds-on">All <span style={{ opacity: 0.6, fontSize: 14 }}>×</span></button>
        <button className="ds-chip">Bourbon</button>
        <button className="ds-chip">Natural wine</button>
        <button className="ds-chip">Craft beer</button>
        <button className="ds-chip">Mezcal</button>
        <button className="ds-chip">Under $30</button>
      </div>
      <div className="ds-chip-row">
        <span className="ds-badge amber">Staff pick</span>
        <span className="ds-badge success">In stock</span>
        <span className="ds-badge danger">3 left</span>
        <span className="ds-badge neutral">2021</span>
        <span className="ds-badge neutral">Loire, FR</span>
      </div>
    </>
  );
}

function CompInputs() {
  return (
    <>
      <p className="ds-section-title">comp · inputs</p>
      <div className="ds-input-stack">
        <div className="ds-search">
          <Icon name="search" size={16} className="ds-search-icon" />
          <input className="ds-input" type="text" placeholder="Search bourbons, regions, producers…" readOnly />
        </div>
        <div className="ds-input-row">
          <div className="ds-field">
            <label>Email</label>
            <input className="ds-input" type="email" placeholder="you@example.com" readOnly />
          </div>
          <div className="ds-field">
            <label>ZIP for delivery</label>
            <input className="ds-input ds-focused" defaultValue="11201" readOnly />
          </div>
        </div>
      </div>
    </>
  );
}

function CompCards() {
  const cards = [
    { pick: 'Staff pick', cat: 'Natural wine', name: 'Domaine Tessier', sub: 'Sancerre · 2021 · 750ml', price: '$32', abv: '12.5%', color: 'burgundy' },
    { cat: 'Bourbon',     name: 'Old Pulaski', sub: 'Single barrel · 12yr', price: '$78', abv: '46%', color: 'amber' },
    { pick: '3 left',     cat: 'Mezcal',       name: 'Cuish Espadín', sub: 'Oaxaca · 750ml', price: '$64', abv: '45%', color: 'forest', pickDanger: true },
  ];
  return (
    <>
      <p className="ds-section-title">comp · product cards</p>
      <div className="ds-cards-grid">
        {cards.map(c => (
          <div key={c.name} className="ds-card">
            <div className="ds-card-img">
              {c.pick && <div className="ds-card-pick" style={c.pickDanger ? { color: 'var(--danger)' } : {}}>{c.pick}</div>}
              <Bottle color={c.color} w={60} />
            </div>
            <div className="ds-card-body">
              <div className="ds-card-cat">{c.cat}</div>
              <div className="ds-card-name">{c.name}</div>
              <div className="ds-card-sub">{c.sub}</div>
              <div className="ds-card-foot">
                <span className="ds-card-price">{c.price}</span>
                <span className="ds-card-abv">{c.abv}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function CompEvent() {
  return (
    <>
      <p className="ds-section-title">comp · event card</p>
      <div className="ds-event-stack">
        <div className="ds-event">
          <div className="ds-event-date"><div className="ds-event-d">14</div><div className="ds-event-m">Nov</div></div>
          <div>
            <div className="ds-event-cat">Tasting · Thursday 7pm</div>
            <div className="ds-event-title">Five Sicilian reds with Marco</div>
            <div className="ds-event-blurb">Bring an appetite. We'll pour each one and tell you what to eat with it.</div>
          </div>
          <div className="ds-event-right">
            <div className="ds-event-seats">9 / 12 seats</div>
            <button className="ds-rsvp">RSVP · $15</button>
          </div>
        </div>
        <div className="ds-event">
          <div className="ds-event-date"><div className="ds-event-d">21</div><div className="ds-event-m">Nov</div></div>
          <div>
            <div className="ds-event-cat">Mixology · Friday 8pm</div>
            <div className="ds-event-title">Mezcal &amp; smoke</div>
            <div className="ds-event-blurb">Three drinks built around Oaxacan mezcal. Yes, including the spicy one.</div>
          </div>
          <div className="ds-event-right">
            <div className="ds-event-seats">Waitlist</div>
            <button className="ds-rsvp outline">Join</button>
          </div>
        </div>
      </div>
    </>
  );
}

function GCell({ tall, wide, fillClass, tag, cap, sub, bottleSvg }) {
  return (
    <div className={`ds-g${tall ? ' tall' : ''}${wide ? ' wide' : ''}`}>
      <div className={`ds-g-fill ${fillClass}`}>
        {bottleSvg && <div className={`ds-bsvg${bottleSvg === 'spirit' ? ' spirit' : ''}`} />}
      </div>
      {tag && <div className="ds-g-tag">{tag}</div>}
      <div className="ds-g-over">
        <div className="ds-g-cap">{cap}</div>
        {sub && <div className="ds-g-sub">{sub}</div>}
      </div>
    </div>
  );
}

function CompGallery() {
  return (
    <>
      <p className="ds-section-title">comp · gallery</p>
      <div className="ds-gal-grid">
        <GCell tall fillClass="ds-fill-bottle" bottleSvg="wine" cap="Domaine Tessier Sancerre" sub="Loire Valley · 2021" />
        <GCell fillClass="ds-fill-lounge" tag="Store" cap="Main floor, evening" sub="Sip & Chill HQ" />
        <GCell wide fillClass="ds-fill-bar" cap="The pour bar" sub="Tasting counter · Friday nights" />
        <GCell fillClass="ds-fill-spirits" cap="Spirits wall" />
        <GCell tall fillClass="ds-fill-bottle" bottleSvg="spirit" cap="Old Pulaski Bourbon" sub="Single barrel · 12yr · 46%" />
        <GCell fillClass="ds-fill-shelf" cap="Natural wine shelf" />
        <GCell fillClass="ds-fill-botanicals" tag="New" cap="Botanical spirits" sub="Fresh arrivals" />
      </div>
    </>
  );
}

/* ── Panel map ──────────────────────────────────────────── */
const PANELS = {
  'brand-hero':        BrandHero,
  'brand-logos':       BrandLogos,
  'brand-icons':       BrandIcons,
  'color-surfaces':    ColorSurfaces,
  'color-amber':       ColorAmber,
  'color-bones':       ColorBones,
  'color-accents':     ColorAccents,
  'color-semantic':    ColorSemantic,
  'type-scale':        TypeScale,
  'type-display':      TypeDisplay,
  'type-body':         TypeBody,
  'type-special':      TypeSpecial,
  'spacing-scale':     SpacingScale,
  'spacing-elevation': SpacingElevation,
  'spacing-radii':     SpacingRadii,
  'spacing-shadows':   SpacingShadows,
  'comp-buttons':      CompButtons,
  'comp-chips':        CompChips,
  'comp-inputs':       CompInputs,
  'comp-cards':        CompCards,
  'comp-event':        CompEvent,
  'comp-gallery':      CompGallery,
};

/* ── Page ───────────────────────────────────────────────── */
export default function DesignSystem() {
  const [active, setActive] = useState('brand-hero');
  const Panel = PANELS[active];

  return (
    <div className="ds-layout">
      <nav className="ds-sidebar">
        <div className="ds-sidebar-logo">Sip &amp; Chill</div>
        {NAV.map(({ group, items }) => (
          <div key={group} className="ds-sidebar-group">
            <span className="ds-sidebar-group-label">{group}</span>
            {items.map(({ id, label }) => (
              <button
                key={id}
                className={`ds-sidebar-item${active === id ? ' ds-active' : ''}`}
                onClick={() => setActive(id)}
              >
                {label}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <main className="ds-content">
        <Panel />
      </main>
    </div>
  );
}
