import React, { useState } from "react";

export default function EarlyAccessSignup() {
  const [joined, setJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleWaitlist(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xdklvqrv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setJoined(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to submit. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {!joined ? (
        <form
          className="waitlist-form"
          method="POST"
          action="https://formspree.io/f/xdklvqrv"
          onSubmit={handleWaitlist}
        >
          <div className="waitlist-input-row">
            <input
              type="email"
              name="email"
              className="waitlist-input"
              placeholder="your@email.com"
              required
              aria-label="Email address"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn-waitlist-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Waitlist"}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <p className="waitlist-disclaimer">No spam. Unsubscribe anytime. We'll only contact you when we're ready for you.</p>
          {error && (
            <p style={{ color: "var(--amber)", fontSize: "12px", marginTop: "8px" }}>
              {error}
            </p>
          )}
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
