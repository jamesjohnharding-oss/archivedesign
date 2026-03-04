import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function AccessRestrictedPage() {
  useEffect(() => {
    document.title = "Access Restricted | Archive Design";
  }, []);

  return (
    <PageShell dark watermark>
      <div className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div className="page-error-code" aria-hidden="true" style={{ color: "rgba(247,244,238,0.28)" }}>
            403
          </div>
          <span className="page-eyebrow page-eyebrow--dark">Access restricted</span>
          <h1 className="page-h1 page-h1--light" style={{ color: "var(--white)" }}>
            This content is for <em>members.</em>
          </h1>
          <p className="page-body page-body--light">
            You may not have permission to view this page. If you&apos;re an
            architect partner, please sign in below. If you&apos;re interested
            in joining Archive, we&apos;d love to hear from you.
          </p>
          <div className="page-actions">
            <Link to="/sign-in" className="btn-primary btn-primary-amber">
              Sign In
            </Link>
            <Link to="/for-architects" className="btn-secondary btn-secondary-outline-white">
              Become an Architect Partner
            </Link>
          </div>
      </div>
    </PageShell>
  );
}
