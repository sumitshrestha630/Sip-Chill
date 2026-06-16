import Icon from '../Icon';

const TabBar = ({ active, goTo }) => (
  <nav className="m-tabs">
    <button className={`m-tab ${active === "shop" ? "active" : ""}`} onClick={() => goTo("shop")}>
      <Icon name="store" size={20}/><span>Shop</span>
    </button>
    <button className={`m-tab ${active === "quiz" ? "active" : ""}`} onClick={() => goTo("quiz-intro")}>
      <Icon name="sparkles" size={20}/><span>Finder</span>
    </button>
    <button className={`m-tab ${active === "events" ? "active" : ""}`} onClick={() => goTo("events")}>
      <Icon name="calendar" size={20}/><span>Events</span>
    </button>
    <button className={`m-tab ${active === "you" ? "active" : ""}`} onClick={() => goTo("you")}>
      <Icon name="user" size={20}/><span>You</span>
    </button>
  </nav>
);

export default TabBar;
