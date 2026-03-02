import React, { useState, useCallback, useEffect } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdklvqrv";

export default function WaitlistModal({ isOpen, onClose }) {
  const [success, setSuccess] = useState(false);
  const formWrapRef = React.useRef(null);
  const successRef = React.useRef(null);
  const nameInputRef = React.useRef(null);

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    setSuccess(false);
    if (formWrapRef.current) formWrapRef.current.style.display = "";
    if (successRef.current) successRef.current.classList.remove("visible");
    const t = setTimeout(() => nameInputRef.current?.focus(), 50);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        if (formWrapRef.current) formWrapRef.current.style.display = "none";
        successRef.current?.classList.add("visible");
      } else {
        form.submit();
      }
    } catch (err) {
      form.submit();
    }
  }

  return (
    <div
      className={"modal-overlay" + (isOpen ? " active" : "")}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
      id="waitlistModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      aria-hidden={!isOpen}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      {isOpen && (
      <div className="modal">
        <button
          type="button"
          className="modal-close"
          id="modalClose"
          aria-label="Close"
          onClick={closeModal}
        >
          &#x2715;
        </button>

        <div id="modalFormWrap" ref={formWrapRef}>
          <p className="modal-eyebrow">Early Access</p>
          <h2 className="modal-title" id="modalTitle">
            Join the Waitlist
          </h2>
          <p className="modal-sub">
            We're onboarding a founding cohort of Australian residential
            architects. Leave your details and we'll be in touch when your place
            is ready.
          </p>

          <form
            className="modal-form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            id="waitlistForm"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="field-label" htmlFor="wl-name">
                Practice name
              </label>
              <input
                className="field-input"
                id="wl-name"
                type="text"
                name="name"
                placeholder="Your practice name"
                ref={nameInputRef}
              />
            </div>
            <div>
              <label className="field-label" htmlFor="wl-email">
                Email address
              </label>
              <input
                className="field-input"
                id="wl-email"
                type="email"
                name="email"
                placeholder="your@practice.com.au"
                required
              />
            </div>
            <button className="modal-submit" type="submit">
              Join the waitlist
            </button>
          </form>

          <p className="modal-note">
            No spam. No obligation. We'll only reach out when we have a place
            for you.
          </p>
        </div>

        <div className="modal-success" id="modalSuccess" ref={successRef}>
          <div className="modal-success-icon">
            <svg viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" fill="none" stroke="var(--teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>You're on the list.</h3>
          <p>
            We'll be in touch when your place is ready. In the meantime, feel
            free to explore the platform.
          </p>
        </div>
      </div>
      )}
    </div>
  );
}
