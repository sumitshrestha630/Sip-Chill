const Bottle = ({ color = "burgundy", label = "white", w = 80 }) => {
  const palettes = {
    burgundy: { body: "oklch(0.40 0.10 25)", bodyDark: "oklch(0.28 0.10 25)", cap: "#2a1f1c" },
    amber:    { body: "oklch(0.46 0.10 60)", bodyDark: "oklch(0.30 0.08 60)", cap: "#1c1612" },
    forest:   { body: "oklch(0.34 0.05 145)", bodyDark: "oklch(0.22 0.04 145)", cap: "#13201a" },
    rust:     { body: "oklch(0.42 0.11 40)", bodyDark: "oklch(0.28 0.09 40)", cap: "#1f1410" },
    clear:    { body: "oklch(0.62 0.06 195)", bodyDark: "oklch(0.42 0.05 195)", cap: "#1a1612" }
  };
  const p = palettes[color] || palettes.burgundy;
  const isSparkling = label === "sparkling";
  const isBeer = label === "beer";
  const h = Math.round(w * 2.5);
  const neckW = isBeer ? 0.55 : 0.32;
  const shoulderY = isBeer ? 0.28 : 0.34;
  const uid = `${color}-${label}`;
  return (
    <svg width={w} height={h} viewBox="0 0 100 250" style={{ display: "block", filter: "drop-shadow(0 18px 22px rgba(0,0,0,0.45))" }}>
      <defs>
        <linearGradient id={`bg-${uid}`} x1="0" x2="1">
          <stop offset="0" stopColor={p.bodyDark}/>
          <stop offset="0.45" stopColor={p.body}/>
          <stop offset="1" stopColor={p.bodyDark}/>
        </linearGradient>
        <linearGradient id={`hi-${uid}`} x1="0.2" x2="0.5">
          <stop offset="0" stopColor="rgba(255,255,255,0)"/>
          <stop offset="0.5" stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="1" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      <rect x={50 - neckW * 50 / 2 - 1} y="8" width={neckW * 50 + 2} height={isSparkling ? 24 : 18} fill={p.cap} rx="1"/>
      {isSparkling && <rect x={50 - neckW * 50 / 2 - 3} y="32" width={neckW * 50 + 6} height="20" fill="#d4af6a"/>}
      <rect x={50 - neckW * 50 / 2} y={isSparkling ? 32 : 24} width={neckW * 50} height={shoulderY * 250 - (isSparkling ? 32 : 24)} fill={`url(#bg-${uid})`}/>
      <path d={`M 18 ${shoulderY * 250 + 12} C 18 ${shoulderY * 250}, ${50 - neckW * 50 / 2} ${shoulderY * 250}, ${50 - neckW * 50 / 2} ${shoulderY * 250 - 4} L ${50 + neckW * 50 / 2} ${shoulderY * 250 - 4} C ${50 + neckW * 50 / 2} ${shoulderY * 250}, 82 ${shoulderY * 250}, 82 ${shoulderY * 250 + 12} L 82 238 Q 82 246, 74 246 L 26 246 Q 18 246, 18 238 Z`} fill={`url(#bg-${uid})`}/>
      <rect x="28" y={shoulderY * 250 + 18} width="14" height="200" fill={`url(#hi-${uid})`} rx="6" opacity="0.5"/>
      <rect x="26" y={shoulderY * 250 + 60} width="48" height="80" fill="oklch(0.95 0.012 85)" stroke="oklch(0.78 0.13 75)" strokeWidth="0.5"/>
      <line x1="32" y1={shoulderY * 250 + 75} x2="68" y2={shoulderY * 250 + 75} stroke="oklch(0.40 0.10 25)" strokeWidth="0.6"/>
      <line x1="32" y1={shoulderY * 250 + 95} x2="62" y2={shoulderY * 250 + 95} stroke="oklch(0.22 0.014 60)" strokeWidth="0.4" opacity="0.5"/>
      <line x1="32" y1={shoulderY * 250 + 102} x2="56" y2={shoulderY * 250 + 102} stroke="oklch(0.22 0.014 60)" strokeWidth="0.4" opacity="0.5"/>
      <line x1="32" y1={shoulderY * 250 + 122} x2="50" y2={shoulderY * 250 + 122} stroke="oklch(0.40 0.10 25)" strokeWidth="0.4" opacity="0.4"/>
    </svg>
  );
};

export default Bottle;
