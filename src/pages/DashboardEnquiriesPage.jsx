import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

const InboxIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6L12 13L2 6" />
  </svg>
);

export default function DashboardEnquiriesPage() {
  useEffect(() => {
    document.title = "Enquiries | Archive Design";
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside
        className="dashboard-sidebar"
        style={{
          background: "var(--teal-dark)",
          padding: "32px 0",
        }}
      >
        <div style={{ padding: "0 20px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(247,244,238,0.57)",
              display: "block",
              marginBottom: 24,
            }}
          >
            Studio Romer
          </span>
          <nav>
            <Link
              to="/dashboard/enquiries"
              className="dashboard-nav-item dashboard-nav-item--active"
            >
              <span className="dashboard-nav-dot" />
              Enquiries
            </Link>
            <Link to="/dashboard/listings" className="dashboard-nav-item">
              Listings
            </Link>
            <Link to="/dashboard/profile" className="dashboard-nav-item">
              Profile
            </Link>
            <Link to="/dashboard/analytics" className="dashboard-nav-item">
              Analytics
            </Link>
            <Link to="/dashboard/settings" className="dashboard-nav-item">
              Settings
            </Link>
          </nav>
          <div
            style={{
              height: 1,
              background: "rgba(247,244,238,0.08)",
              margin: "24px 0",
            }}
          />
          <div style={{ paddingLeft: 8 }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                color: "rgba(247,244,238,0.57)",
                display: "block",
                marginBottom: 12,
              }}
            >
              Listings
            </span>
            <Link
              to="/dashboard/listings/1"
              className="dashboard-nav-item"
              style={{ paddingLeft: 20 }}
            >
              <span className="dashboard-nav-dot" />
              Northcote House
            </Link>
            <Link
              to="/dashboard/listings/2"
              className="dashboard-nav-item"
              style={{ paddingLeft: 20 }}
            >
              <span className="dashboard-nav-dot" />
              Fitzroy Terrace
            </Link>
          </div>
        </div>
      </aside>

      {/* Content area */}
      <PageShell dark watermark>
        <div
          style={{
            padding: "80px var(--gutter)",
            position: "relative",
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
              color: "var(--teal)",
              marginBottom: 24,
            }}
          >
            <InboxIcon />
          </div>
          <span className="page-eyebrow page-eyebrow--dark">Enquiries</span>
          <h1
            className="page-h1 page-h1--light"
            style={{
              color: "var(--white)",
              fontSize: "clamp(26px, 3vw, 40px)",
            }}
          >
            No enquiries <em>yet.</em>
          </h1>
          <p className="page-body page-body--light" style={{ maxWidth: 480 }}>
            When homeowners connect with your designs, they&apos;ll appear here.
            In the meantime, make sure your project listings are complete and up
            to date — considered details attract considered clients.
          </p>
          <div className="page-actions">
            <Link to="/dashboard/listings" className="btn-primary btn-primary-amber">
              Edit Listings
            </Link>
            <Link
              to="/profile"
              className="btn-secondary btn-secondary-outline-white"
            >
              View Public Profile
            </Link>
          </div>
        </div>
      </PageShell>
    </div>
  );
}
