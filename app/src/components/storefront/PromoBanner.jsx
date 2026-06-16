import { useState } from 'react';
import Icon from '../Icon';

const MESSAGE = {
  text: "New shipment just landed —",
  highlight: "Blanton's back in stock.",
  cta: "Come in before it's gone.",
};

const PromoBanner = () => {
  const [visible, setVisible] = useState(() =>
    !sessionStorage.getItem('snc_promo_dismissed')
  );
  const [closing, setClosing] = useState(false);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => {
      sessionStorage.setItem('snc_promo_dismissed', '1');
      setVisible(false);
    }, 260);
  };

  if (!visible) return null;

  return (
    <div className={`promo-banner${closing ? ' promo-banner--closing' : ''}`}>
      <div className="promo-banner-inner">
        <span className="promo-banner-dot" />
        <p className="promo-banner-text">
          {MESSAGE.text} <strong>{MESSAGE.highlight}</strong> {MESSAGE.cta}
        </p>
      </div>
      <button className="promo-banner-close" onClick={dismiss} aria-label="Dismiss">
        <Icon name="close" size={14} />
      </button>
    </div>
  );
};

export default PromoBanner;
