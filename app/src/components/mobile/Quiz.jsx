import Icon from '../Icon';
import Bottle from '../Bottle';
import TabBar from './TabBar';
import { SHOP_DATA } from '../../data/shop';

const QUIZ_QUESTIONS = [
  {
    q: "What's the occasion?",
    em: "tonight",
    opts: [
      { v: "casual", label: "Just a quiet night in", sub: "Solo or with one person" },
      { v: "dinner", label: "Cooking dinner for friends", sub: "Need something to pour with food" },
      { v: "party", label: "A party — bring the bottles", sub: "Several people, lots of glasses" },
      { v: "gift", label: "A gift for someone", sub: "We'll help you pick" }
    ]
  },
  {
    q: "What are you in the mood for?",
    em: "mood",
    opts: [
      { v: "wine", label: "Wine", sub: "Red, white, orange, fizzy" },
      { v: "spirit", label: "Something stronger", sub: "Whiskey, mezcal, gin, amaro" },
      { v: "beer", label: "A few good beers", sub: "Craft, lagers, sours" },
      { v: "surprise", label: "Surprise me", sub: "We'll go off-script" }
    ]
  },
  {
    q: "How adventurous are we feeling?",
    em: "vibe",
    opts: [
      { v: "classic", label: "Stick with what works", sub: "Reliable, familiar" },
      { v: "middle", label: "Open to suggestions", sub: "A bit new, not too weird" },
      { v: "wild", label: "Show me the weird stuff", sub: "Funky, natural, off-the-beaten-path" }
    ]
  },
  {
    q: "What's the budget per bottle?",
    em: "budget",
    opts: [
      { v: "low", label: "Under $25", sub: "The Tuesday-night sweet spot" },
      { v: "mid", label: "$25 – $50", sub: "A nice weekend pour" },
      { v: "high", label: "$50 – $100", sub: "Special occasion" },
      { v: "any", label: "No limit, wow me", sub: "We won't take this lightly" }
    ]
  },
  {
    q: "And finally — sweet, dry, or in between?",
    em: "sweet, dry",
    opts: [
      { v: "dry", label: "Bone dry", sub: "Crisp, mineral, savory" },
      { v: "balanced", label: "In the middle", sub: "A little bit of both" },
      { v: "sweet", label: "Lean sweeter", sub: "Fruit-forward, smooth" }
    ]
  }
];

export const QuizIntro = ({ goTo }) => (
  <div className="m-app">
    <div className="m-quiz">
      <div className="eyebrow" style={{ marginBottom: 18, color: "var(--amber)" }}>Wine &amp; Spirits Finder</div>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1.0, color: "var(--bone)", margin: "0 0 16px", fontWeight: 500, letterSpacing: "-0.02em" }}>
        Tell us how you're <em style={{ fontStyle: "italic", color: "var(--amber)" }}>feeling</em>.
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.5, color: "var(--cream)", margin: "0 0 32px", maxWidth: 300 }}>
        Five quick questions. No jargon, no homework. We'll pour you something good based on the mood, the meal, and how adventurous you're feeling tonight.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start", flex: 1, justifyContent: "flex-end" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-2)", fontSize: 13 }}>
          <Icon name="clock" size={16}/> About a minute
        </div>
        <button style={{ background: "var(--amber)", color: "var(--ink)", padding: "16px 28px", borderRadius: 999, fontSize: 15, fontWeight: 600, border: "none", display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => goTo("quiz-step", 0)}>
          Start the quiz <Icon name="arrow-right" size={16}/>
        </button>
        <button style={{ background: "none", border: "none", color: "var(--amber)", fontSize: 13, fontWeight: 500, padding: "8px 0", cursor: "pointer" }} onClick={() => goTo("shop")}>
          Skip — I'll just browse →
        </button>
      </div>
    </div>
    <TabBar active="quiz" goTo={goTo}/>
  </div>
);

export const QuizStep = ({ step, answers, setAnswer, goTo }) => {
  const Q = QUIZ_QUESTIONS[step];
  const total = QUIZ_QUESTIONS.length;
  const current = answers[step];
  const isLast = step === total - 1;
  const renderQ = () => {
    const parts = Q.q.split(Q.em);
    return (
      <h2 className="m-quiz-q">
        {parts[0]}<em>{Q.em}</em>{parts[1]}
      </h2>
    );
  };
  return (
    <div className="m-app">
      <div className="m-quiz">
        <div className="m-quiz-progress">
          {QUIZ_QUESTIONS.map((_, i) => <span key={i} className={i <= step ? "done" : ""}/>)}
        </div>
        <div className="m-quiz-step">Question {step + 1} of {total}</div>
        {renderQ()}
        <div className="m-quiz-options">
          {Q.opts.map(opt => (
            <button key={opt.v} className={`m-quiz-opt ${current === opt.v ? "selected" : ""}`} onClick={() => setAnswer(step, opt.v)}>
              <span>
                <div>{opt.label}</div>
                <div className="sub">{opt.sub}</div>
              </span>
              {current === opt.v && (
                <span className="check">
                  <Icon name="plus" size={12} style={{ transform: "rotate(45deg)" }}/>
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="m-quiz-nav">
          <button className="back" onClick={() => step === 0 ? goTo("quiz-intro") : goTo("quiz-step", step - 1)}>
            <Icon name="chevron-left" size={16} style={{ verticalAlign: "middle" }}/> Back
          </button>
          <button className="next" disabled={!current} style={{ opacity: current ? 1 : 0.4 }}
                  onClick={() => current && (isLast ? goTo("quiz-result") : goTo("quiz-step", step + 1))}>
            {isLast ? "See my picks" : "Continue"} <Icon name="arrow-right" size={16} style={{ verticalAlign: "middle" }}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export const QuizResult = ({ answers, goTo }) => {
  const moodMap = { wine: "tessier", spirit: "pulaski", beer: "elbisonte", surprise: "matriarca" };
  const productId = moodMap[answers[1]] || "tessier";
  const rec = SHOP_DATA.products.find(p => p.id === productId);
  const alt = SHOP_DATA.products.filter(p => p.id !== productId).slice(0, 2);
  return (
    <div className="m-app">
      <div className="m-scroll" style={{ paddingTop: 54 }}>
        <header className="m-topbar" style={{ justifyContent: "space-between" }}>
          <button className="m-icon-btn" onClick={() => goTo("quiz-intro")}><Icon name="chevron-left" size={20}/></button>
          <span style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-3)", fontWeight: 600 }}>Your match</span>
          <button className="m-icon-btn"><Icon name="heart" size={20}/></button>
        </header>
        <div className="m-result">
          <div className="eyebrow">Based on your answers</div>
          <h2>Pour this one.</h2>
          <p className="lead">A {answers[2] === "wild" ? "playfully funky" : answers[2] === "classic" ? "reliably excellent" : "thoughtfully chosen"} bottle for {answers[0] === "dinner" ? "your dinner" : answers[0] === "party" ? "the party" : "tonight"}. Trust us on this.</p>
          <div className="m-result-card">
            <div className="m-result-bottle"><Bottle color={rec.color} label={rec.label} w={110}/></div>
            <h3 className="m-result-name">{rec.name}</h3>
            <div className="m-result-sub">{rec.sub} · {rec.region}</div>
            <p className="m-result-blurb">{rec.blurb}</p>
            <div className="m-result-price">${rec.price}</div>
            <div className="m-result-actions">
              <button className="primary"><Icon name="cart" size={16} style={{ verticalAlign: "middle", marginRight: 6 }}/>Add to cart · ${rec.price}</button>
              <button className="secondary">Tell me more about it</button>
            </div>
          </div>
          <div className="m-result-more">
            <h4>Or try these</h4>
            <div className="m-grid" style={{ padding: 0, gridTemplateColumns: "1fr 1fr" }}>
              {alt.map(p => (
                <article key={p.id} className="m-prod">
                  <div className="m-prod-img"><Bottle color={p.color} label={p.label} w={60}/></div>
                  <div className="m-prod-body">
                    <div className="m-prod-cat">{p.cat}</div>
                    <div className="m-prod-name">{p.name}</div>
                    <div className="m-prod-bottom">
                      <span className="m-prod-price">${p.price}</span>
                      <button className="m-prod-add"><Icon name="plus" size={14}/></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TabBar active="quiz" goTo={goTo}/>
    </div>
  );
};
