import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

const LogoMark = () => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.75"
      y="0.75"
      width="26.5"
      height="30.5"
      stroke="#1A5C6B"
      strokeWidth="1.5"
    />
    <line x1="6" y1="5" x2="6" y2="31.5" stroke="#1A5C6B" strokeWidth="1.5" />
    <line x1="6" y1="5" x2="22" y2="5" stroke="#1A5C6B" strokeWidth="1.5" />
    <line x1="22" y1="5" x2="22" y2="31.5" stroke="#1A5C6B" strokeWidth="1.5" />
    <circle cx="14" cy="31.5" r="2.5" fill="#E8952A" />
  </svg>
);

export default function ShortlistEmptyPage() {
  useEffect(() => {
    document.title = "Your Shortlist | Archive Design";
  }, []);

  return (
    <PageShell background="var(--teal-pale)">
      <div
        style={{
          paddingTop: 120,
          paddingBottom: 120,
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 440,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: "var(--white-pure)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <LogoMark />
          </div>
          <span className="page-eyebrow">Your shortlist</span>
          <h1
            className="page-h1"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
          >
            Your shortlist is <em>empty.</em>
          </h1>
          <p className="page-body" style={{ marginBottom: 32 }}>
            Start saving homes that feel right. You can compare them later —
            with clarity.
          </p>
          <div className="page-actions" style={{ justifyContent: "center" }}>
            <Link to="/browse" className="btn-primary">
              Browse Homes
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
