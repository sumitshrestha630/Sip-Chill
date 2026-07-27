import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import diaqImg    from '../../assets/diaq.png';
import bourbonImg from '../../assets/06cf7c93-c9b8-4da2-a150-51bd17c5078e.jpeg';
import wineImg    from '../../assets/e9e8551f-0d15-4309-98ba-7d511b155e84.jpeg';
import beerImg    from '../../assets/d76ad1c9-13a6-4c31-8226-17e5f6f0d8e0.jpeg';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  { num: '01', lines: ['FRESH',   'DAIQUIRIS'],   bg: '#E8714F', img: diaqImg,    pos: 'center top'    },
  { num: '02', lines: ['BOURBON', '& WHISKEY'],   bg: '#3CBBA4', img: bourbonImg, pos: 'left center'   },
  { num: '03', lines: ['WINE',    '& BUBBLY'],    bg: '#C07EC8', img: wineImg,    pos: 'center 30%'    },
  { num: '04', lines: ['BEER',    '& TEQUILA'],   bg: '#F0C040', img: beerImg,    pos: 'right center'  },
];

const CategoryCards = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const cards = wrapRef.current.querySelectorAll('.sc-catcard');
    cards.forEach((card, i) => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          delay: i * 0.05,
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="sc-catcards">
      <div className="sc-catcards-inner" ref={wrapRef}>
        {CARDS.map((c) => (
          <a key={c.num} href="#shop" className="sc-catcard" style={{ '--cc-bg': c.bg }}>
            <div className="sc-catcard-left">
              <span className="sc-catcard-num">{c.num}</span>
              <h2 className="sc-catcard-title">
                {c.lines.map((l, i) => <span key={i}>{l}</span>)}
              </h2>
              <span className="sc-catcard-cta">Explore →</span>
            </div>
            <div className="sc-catcard-photo">
              <img src={c.img} alt={c.lines.join(' ')} style={{ objectPosition: c.pos }} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
