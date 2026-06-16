import Icon from '../Icon';

const HIGHLIGHTS = [
  { icon: 'martini',  label: 'Daiquiris' },
  { icon: 'flame',    label: 'Spirits'   },
  { icon: 'wine',     label: 'Wine'      },
  { icon: 'beer',     label: 'Beer'      },
  { icon: 'calendar', label: 'Events'    },
];

const Location = () => (
  <section className="sf-location" id="location">
    <div className="sf-location-inner">

      <div className="sf-location-map">
        <iframe
          title="Sip N Chill Daiquiri on Google Maps"
          src="https://maps.google.com/maps?q=1314+Sterlington+Rd,+Monroe,+LA+71203&t=&z=16&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="sf-location-info">
        <div className="eyebrow" style={{ marginBottom: 12 }}>Find us</div>
        <h2>Come visit us in <em>Monroe</em></h2>
        <p>Walk in any day of the week for fresh-made daiquiris or browse one of the best spirit selections in North Louisiana.</p>

        <div className="sf-location-highlights">
          {HIGHLIGHTS.map(h => (
            <div key={h.label} className="sf-loc-chip">
              <Icon name={h.icon} size={16} />
              {h.label}
            </div>
          ))}
        </div>

        <div className="sf-location-details">
          <div className="sf-loc-row">
            <Icon name="map-pin" size={16} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <div>1314 Sterlington Rd</div>
              <div style={{ color: 'var(--fg-3)', fontSize: 13 }}>Monroe, LA 71203</div>
            </div>
          </div>
          <div className="sf-loc-row">
            <Icon name="clock" size={16} style={{ flexShrink: 0 }} />
            <div>
              <div>Mon – Sat &nbsp;9 AM – 9 PM</div>
              <div style={{ color: 'var(--fg-3)', fontSize: 13 }}>Closed Sunday</div>
            </div>
          </div>
          <a
            href="tel:+13187377260"
            className="sf-loc-row sf-loc-phone"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            (318) 737-7260
          </a>
        </div>

        <div className="sf-location-actions">
          <a
            href="https://maps.google.com/?q=1314+Sterlington+Rd+Monroe+LA+71203"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Get directions <Icon name="arrow-right" size={15} />
          </a>
          <a
            href="tel:+13187377260"
            className="btn btn-secondary"
          >
            Call us
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default Location;
