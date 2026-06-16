import { useState } from 'react';

const AgeGate = ({ children }) => {
  const [verified, setVerified] = useState(() =>
    localStorage.getItem('snc_age_verified') === 'true'
  );
  const [denied, setDenied] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const confirm = () => {
    localStorage.setItem('snc_age_verified', 'true');
    setLeaving(true);
    setTimeout(() => setVerified(true), 420);
  };

  const deny = () => setDenied(true);

  if (verified) return children;

  return (
    <>
      {children}
      <div className={`age-gate${leaving ? ' age-gate--leaving' : ''}`}>
        <div className="sf-grain" />
        <div className="age-gate-card">
          <div className="age-gate-logo">
            Sip <em>&amp;</em> Chill
          </div>
          <div className="age-gate-divider" />

          {denied ? (
            <>
              <h2 className="age-gate-heading">We'll miss you.</h2>
              <p className="age-gate-sub">
                You must be 21 or older to enter this site. Come back when you're of legal drinking age.
              </p>
            </>
          ) : (
            <>
              <h2 className="age-gate-heading">Are you 21 or older?</h2>
              <p className="age-gate-sub">
                You must be of legal drinking age to enter. By clicking "Yes" you confirm you are 21+.
              </p>
              <div className="age-gate-actions">
                <button className="btn btn-primary age-gate-yes" onClick={confirm}>
                  Yes, I'm 21+
                </button>
                <button className="btn btn-ghost age-gate-no" onClick={deny}>
                  No, I'm under 21
                </button>
              </div>
            </>
          )}

          <p className="age-gate-fine">
            Please drink responsibly. Must be 21+ to purchase alcohol.
          </p>
        </div>
      </div>
    </>
  );
};

export default AgeGate;
