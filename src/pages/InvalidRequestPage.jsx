import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

export default function InvalidRequestPage() {
  useEffect(() => {
    document.title = "Invalid Request | Archive Design";
  }, []);

  return (
    <PageShell>
      <div className="container" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="page-error-code" aria-hidden="true">
          400
        </div>
        <span className="page-eyebrow">Invalid request</span>
        <h1 className="page-h1">
          We couldn&apos;t process that <em>request.</em>
        </h1>
        <p className="page-body">
          Something about the request wasn&apos;t valid. Please try again, or
          return to the homepage.
        </p>
        <div className="page-actions">
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
