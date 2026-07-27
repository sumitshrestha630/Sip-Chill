import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import storeBg from '../../assets/storefront.png';

const HeroV2 = () => {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const metaRef  = useRef(null);
  const actionsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(line1Ref.current,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0,   opacity: 1, duration: 0.9 }
    )
    .fromTo(line2Ref.current,
      { yPercent: 110, opacity: 0 },
      { yPercent: 0,   opacity: 1, duration: 0.9 },
      '-=0.65'
    )
    .fromTo(metaRef.current,
      { y: 20, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.7 },
      '-=0.4'
    )
    .fromTo(actionsRef.current,
      { y: 16, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.6 },
      '-=0.4'
    );
  }, []);

  return (
    <section className="sc-hero2" style={{ backgroundImage: `url(${storeBg})` }}>
      <p className="sc-hero2-eyebrow">Monroe, LA · 1314 Sterlington Rd</p>

      <h1 className="sc-hero2-title">
        <span className="sc-hero2-overflow">
          <span ref={line1Ref} className="sc-hero2-line">SIP N'</span>
        </span>
        <span className="sc-hero2-overflow">
          <span ref={line2Ref} className="sc-hero2-line sc-hero2-line--accent">CHILL</span>
        </span>
      </h1>

      <p className="sc-hero2-desc" ref={metaRef}>
        Fresh daiquiris made in-house &amp; an incredible selection<br />
        of wines, spirits, and beers.
      </p>

      <div className="sc-hero2-actions" ref={actionsRef}>
        <a href="#shop" className="sc-hero2-btn">Shop the selection</a>
        <a href="#daiquiris" className="sc-hero2-ghost">See our daiquiris →</a>
      </div>

      <span className="sc-hero2-scroll" aria-hidden="true">↓</span>
    </section>
  );
};

export default HeroV2;
