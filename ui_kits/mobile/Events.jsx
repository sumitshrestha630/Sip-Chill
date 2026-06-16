// Events list screen — full month's calendar of tastings and mixology classes.
const EventsScreen = ({ goTo }) => {
  const [tab, setTab] = React.useState("all");
  return (
    <div className="m-app">
      <div className="m-scroll" style={{paddingTop: 54}}>
        <header className="m-topbar">
          <div>
            <div style={{fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-3)", fontWeight: 600}}>November · 2026</div>
            <div style={{fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 28, color: "var(--bone)", lineHeight: 1, marginTop: 4, fontWeight: 500}}>Tastings &amp; events</div>
          </div>
          <button className="m-icon-btn"><Icon name="calendar" size={20}/></button>
        </header>

        <div style={{display: "flex", gap: 8, padding: "16px 20px 20px", overflowX: "auto"}}>
          {[
            { id: "all", label: "All" },
            { id: "tasting", label: "Tastings" },
            { id: "mixology", label: "Mixology" },
            { id: "class", label: "Classes" }
          ].map(t => (
            <button key={t.id} className="cat-chip" style={{
              padding: "8px 16px", borderRadius: 999, fontSize: 13, fontWeight: 500,
              border: `1px solid ${tab === t.id ? "var(--amber)" : "var(--border-2)"}`,
              background: tab === t.id ? "var(--amber)" : "transparent",
              color: tab === t.id ? "var(--ink)" : "var(--fg-2)",
              flexShrink: 0, cursor: "pointer"
            }} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {SHOP_DATA.events.map((e, i) => (
          <article key={i} className="m-event">
            <div className="m-event-date"><div className="d">{e.day}</div><div className="m">{e.mon}</div></div>
            <div>
              <div className="m-event-cat">{e.cat}</div>
              <div className="m-event-title">{e.title}</div>
              <div className="m-event-blurb">{e.blurb}</div>
              <div className="m-event-foot">
                <span className="seats">{e.seats}</span>
                <button className={e.wait ? "wait" : ""}>{e.price}</button>
              </div>
            </div>
          </article>
        ))}

        <div style={{padding: "24px 20px", textAlign: "center", color: "var(--fg-3)", fontSize: 12}}>
          <Icon name="map-pin" size={14} style={{verticalAlign: "middle", marginRight: 4}}/> All events at 412 Court St, Brooklyn
        </div>
      </div>
      <TabBar active="events" goTo={goTo}/>
    </div>
  );
};

window.EventsScreen = EventsScreen;
