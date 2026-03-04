import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | Archive Design";
  }, []);

  return (
    <PageShell>
      <div className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="page-error-code" aria-hidden="true">
          404
        </div>
        <span className="page-eyebrow">Page not found</span>
        <h1 className="page-h1">
          This page isn&apos;t part of <em>the plan.</em>
        </h1>
        <p className="page-body">
          The link you followed may have moved or no longer exists. But we can
          help you find something better. Archive Design matches homeowners with
          architect-designed homes that already fit — so you can move forward with
          clarity and confidence.
        </p>
        <div className="page-actions">
          <Link to="/for-homeowners" className="btn-primary">
            I&apos;m a Homeowner
          </Link>
          <Link to="/for-architects" className="btn-secondary">
            I&apos;m an Architect
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
