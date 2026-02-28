import React, { useState } from "react";

export default function EarlyAccessSignup() {
  const [joined, setJoined] = useState(false);

  function handleWaitlist(e) {
    e && e.preventDefault();
    setJoined(true);
  }

  return (
    <>
      {!joined ? (
        <form className="waitlist-form" onSubmit={handleWaitlist}>
          <div className="waitlist-input-row">
            <input
              type="email"
              className="waitlist-input"
              placeholder="your@email.com"
              required
              aria-label="Email address"
            />
            <button type="submit" className="btn-waitlist-submit">
              Join Waitlist
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="waitlist-disclaimer">No spam. Unsubscribe anytime. We'll only contact you when we're ready for you.</p>
        </form>
      ) : (
        <div className="waitlist-success visible" id="waitlist-success" aria-live="polite">
          <div className="success-dot" />
          <p>You're on the list. We'll be in touch soon.</p>
        </div>
      )}
    </>
  );
}
