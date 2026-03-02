import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLogo = () => (
  <Link to="/" className="logo">
    <svg
      className="logo-mark"
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
    <div>
      <span className="logo-text">ARCHIVE</span>
      <span className="logo-sub">DESIGN</span>
    </div>
  </Link>
);

const FooterLogo = () => (
  <Link to="/" className="logo footer-logo">
    <svg width="22" height="24" viewBox="0 0 28 32" fill="none">
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="30.5"
        stroke="rgba(247,244,238,0.55)"
        strokeWidth="1.5"
      />
      <line
        x1="6"
        y1="5"
        x2="6"
        y2="31.5"
        stroke="rgba(247,244,238,0.55)"
        strokeWidth="1.5"
      />
      <line
        x1="6"
        y1="5"
        x2="22"
        y2="5"
        stroke="rgba(247,244,238,0.55)"
        strokeWidth="1.5"
      />
      <line
        x1="22"
        y1="5"
        x2="22"
        y2="31.5"
        stroke="rgba(247,244,238,0.55)"
        strokeWidth="1.5"
      />
      <circle cx="14" cy="31.5" r="2.5" fill="#E8952A" />
    </svg>
    <div>
      <span className="logo-text">ARCHIVE</span>
      <span className="logo-sub">DESIGN</span>
    </div>
  </Link>
);

export default function Layout({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const path = location.pathname || "/";
  const isForArchitects = path === "/for-architects";
  const isForHomeowners = path === "/for-homeowners";
  const isAbout = path === "/about";

  return (
    <div>
      <div className="top-bar" />

      <nav>
        <div className="nav-inner">
          <NavLogo />

          <ul className="nav-links">
            <li>
              <Link
                to="/for-homeowners"
                className={isForHomeowners ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                For Homeowners
              </Link>
            </li>
            <li>
              <Link
                to="/for-architects"
                className={isForArchitects ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                For Architects
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isAbout ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <Link
              to="/#apply"
              className="btn-waitlist"
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist
            </Link>
            <Link
              to={path === "/for-architects" ? "/for-architects#apply" : "/#apply"}
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>

          <button
            className="mobile-menu-button"
            aria-label="Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={"mobile-menu" + (menuOpen ? " open" : "")}>
            <Link to="/for-homeowners" onClick={() => setMenuOpen(false)}>
              For Homeowners
            </Link>
            <Link to="/for-architects" onClick={() => setMenuOpen(false)}>
              For Architects
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link
              to="/#apply"
              className="btn-waitlist"
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist
            </Link>
            <Link
              to={path === "/for-architects" ? "/for-architects#apply" : "/#apply"}
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <div className="footer-inner">
          <FooterLogo />
          <span className="footer-note">
            © 2026 Archive Design. For homeowners and architects across Australia.
          </span>
        </div>
      </footer>

    </div>
  );
}
