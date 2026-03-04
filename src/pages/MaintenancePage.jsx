import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MaintenancePage() {
  useEffect(() => {
    document.title = "We'll Be Back Shortly | Archive Design";
    const prevBg = document.body.style.background;
    document.body.style.background = "var(--teal)";
    return () => {
      document.body.style.background = prevBg;
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--teal)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header — logo only */}
      <header
        style={{
          padding: "28px var(--gutter)",
          paddingLeft: "max(var(--gutter), 20px)",
          paddingRight: "max(var(--gutter), 20px)",
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <svg
            width="22"
            height="24"
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.75"
              y="0.75"
              width="26.5"
              height="30.5"
              stroke="rgba(247,244,238,0.75)"
              strokeWidth="1.5"
            />
            <line
              x1="6"
              y1="5"
              x2="6"
              y2="31.5"
              stroke="rgba(247,244,238,0.75)"
              strokeWidth="1.5"
            />
            <line
              x1="6"
              y1="5"
              x2="22"
              y2="5"
              stroke="rgba(247,244,238,0.75)"
              strokeWidth="1.5"
            />
            <line
              x1="22"
              y1="5"
              x2="22"
              y2="31.5"
              stroke="rgba(247,244,238,0.75)"
              strokeWidth="1.5"
            />
            <circle cx="14" cy="31.5" r="2.5" fill="#E8952A" />
          </svg>
          <div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: "rgba(247,244,238,0.85)",
                textTransform: "uppercase",
              }}
            >
              ARCHIVE
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontSize: 8,
                fontWeight: 400,
                letterSpacing: "0.38em",
                color: "rgba(247,244,238,0.45)",
                textTransform: "uppercase",
              }}
            >
              DESIGN
            </span>
          </div>
        </Link>
      </header>

      {/* Centred content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px var(--gutter)",
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            fontFamily: "var(--font-sans)",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            background: "rgba(247,244,238,0.15)",
            color: "var(--white)",
            borderRadius: "var(--radius-pill)",
            padding: "5px 12px",
            marginBottom: 20,
          }}
        >
          Scheduled maintenance
        </span>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "var(--white)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: 24,
          }}
        >
          We&apos;re refining the <em style={{ fontStyle: "italic", color: "var(--white)" }}>details.</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "var(--white)",
            maxWidth: 480,
            margin: 0,
          }}
        >
          Archive is offline for a short period of scheduled maintenance.
          We&apos;re making some considered improvements and will be back online
          shortly. Thank you for your patience.
        </p>
      </div>

      {/* Bottom — decorative URL */}
      <div
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          color: "rgba(247,244,238,0.45)",
          letterSpacing: "0.06em",
          textAlign: "center",
          paddingBottom: 32,
        }}
      >
        archivedesign.ai
      </div>
    </div>
  );
}
