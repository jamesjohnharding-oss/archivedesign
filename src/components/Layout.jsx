import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLogo = ({ dark }) => (
  <Link to="/" className="logo">
    <svg
      className="logo-mark"
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
        stroke={dark ? "rgba(247,244,238,0.75)" : "#1A5C6B"}
        strokeWidth="1.5"
      />
      <line x1="6" y1="5" x2="6" y2="31.5" stroke={dark ? "rgba(247,244,238,0.75)" : "#1A5C6B"} strokeWidth="1.5" />
      <line x1="6" y1="5" x2="22" y2="5" stroke={dark ? "rgba(247,244,238,0.75)" : "#1A5C6B"} strokeWidth="1.5" />
      <line x1="22" y1="5" x2="22" y2="31.5" stroke={dark ? "rgba(247,244,238,0.75)" : "#1A5C6B"} strokeWidth="1.5" />
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

export default function Layout({ children, darkNav: darkNavProp, ctaLabel: ctaLabelProp, ctaHref: ctaHrefProp }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const path = location.pathname || "/";
  const isForArchitects = path === "/for-architects";
  const isAbout = path === "/about";
  const isDashboard = path.startsWith("/dashboard");
  const darkNav = darkNavProp ?? isDashboard;
  const ctaLabel = ctaLabelProp ?? (isDashboard ? "View public profile" : "Get Started");
  const ctaHref = ctaHrefProp ?? (isDashboard ? "/profile" : (path === "/for-architects" ? "/for-architects#apply" : "/#apply"));
  const navClass = darkNav ? "nav-dark" : "";

  const handleWaitlistClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const scrollToSection = () =>
      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth", block: "center" });
    if (path === "/") {
      scrollToSection();
    } else {
      navigate("/");
      setTimeout(scrollToSection, 80);
    }
  };

  const primaryCtaHref = ctaHref ?? (path === "/for-architects" ? "/for-architects#apply" : "/#apply");
  const primaryCtaClass = darkNav ? "btn-primary btn-primary-amber" : "btn-primary";

  return (
    <div>
      <div className="top-bar" />

      <nav className={navClass}>
        <div className="nav-inner">
          <NavLogo dark={darkNav} />

          <ul className="nav-links">
            <li>
              <Link
                to="/for-homeowners"
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
            <a
              href="/#apply"
              className="btn-waitlist"
              onClick={handleWaitlistClick}
            >
              Join Waitlist
            </a>
            <Link
              to={primaryCtaHref}
              className={primaryCtaClass}
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
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
            <a
              href="/#apply"
              className="btn-waitlist"
              onClick={handleWaitlistClick}
            >
              Join Waitlist
            </a>
            <Link
              to={primaryCtaHref}
              className={primaryCtaClass}
              onClick={() => setMenuOpen(false)}
            >
              {ctaLabel}
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
