import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function ServerErrorPage() {
  useEffect(() => {
    document.title = "We're Fixing Something | Archive Design";
  }, []);

  const handleRefresh = () => window.location.reload();

  return (
    <PageShell>
      <div className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="page-error-code" aria-hidden="true">
          500
        </div>
        <span className="page-eyebrow">Server error</span>
        <h1 className="page-h1">
          Something&apos;s not loading as it <em>should.</em>
        </h1>
        <p className="page-body">
          We&apos;re working to resolve it. Please refresh the page or try again
          in a moment. Good design takes iteration — even online.
        </p>
        <div className="page-actions">
          <button onClick={handleRefresh} className="btn-primary">
            Refresh Page
          </button>
          <Link to="/" className="btn-secondary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
