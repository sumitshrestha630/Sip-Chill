import { useState } from 'react';
import Icon from '../Icon';
import Bottle from '../Bottle';

const CartDrawer = ({ open, onClose, items, setQty }) => {
  const [mode, setMode] = useState("delivery");
  const subtotal = items.reduce((s, i) => s + i.p.price * i.qty, 0);
  const fee = mode === "delivery" ? 5 : 0;
  return (
    <>
      <div className={`sf-overlay ${open ? "open" : ""}`} onClick={onClose}></div>
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="cart-head">
          <h3>Your cart</h3>
          <button className="sf-icon-btn" onClick={onClose}><Icon name="close"/></button>
        </div>
        {items.length === 0 ? (
          <div className="cart-empty">
            <Icon name="cart" size={32}/>
            <p className="quote">Cart's empty.<br/>Want a suggestion?</p>
            <button className="btn btn-primary" onClick={onClose}>Browse the shelves</button>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {items.map(i => (
                <div className="cart-item" key={i.p.id}>
                  <div className="cart-thumb"><Bottle color={i.p.color} label={i.p.label} w={42}/></div>
                  <div>
                    <h4 className="cart-item-name">{i.p.name}</h4>
                    <div className="cart-item-sub">{i.p.sub}</div>
                    <div className="qty">
                      <button onClick={() => setQty(i.p.id, i.qty - 1)}><Icon name="minus" size={12}/></button>
                      <span>{i.qty}</span>
                      <button onClick={() => setQty(i.p.id, i.qty + 1)}><Icon name="plus" size={12}/></button>
                    </div>
                  </div>
                  <div className="cart-item-price">${i.p.price * i.qty}</div>
                </div>
              ))}
            </div>
            <div className="cart-foot">
              <div className="cart-mode">
                <button className={mode === "delivery" ? "active" : ""} onClick={() => setMode("delivery")}>
                  <Icon name="truck" size={14}/> Delivery
                </button>
                <button className={mode === "pickup" ? "active" : ""} onClick={() => setMode("pickup")}>
                  <Icon name="store" size={14}/> Pickup
                </button>
              </div>
              <div className="cart-total"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="cart-total"><span>{mode === "delivery" ? "Local delivery" : "In-store pickup"}</span><span>{fee ? `$${fee}` : "Free"}</span></div>
              <div className="cart-grand"><span className="l">Total</span><span className="v">${subtotal + fee}</span></div>
              <button className="btn btn-primary cart-checkout">
                Checkout · ${subtotal + fee} <Icon name="arrow-right" size={16}/>
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
