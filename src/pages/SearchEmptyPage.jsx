import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageShell from "../components/PageShell";

// Placeholder homes for Popular Homes section (no CMS yet)
const POPULAR_HOMES = [
  {
    id: 1,
    studio: "Studio Romer",
    city: "Melbourne",
    title: "Northcote House",
    beds: "3",
    price: "$800K–$1.2M",
    style: "Contemporary",
  },
  {
    id: 2,
    studio: "Atelier Jones",
    city: "Sydney",
    title: "Bondi Pavilion",
    beds: "4",
    price: "$1.2M–$1.8M",
    style: "Coastal",
  },
  {
    id: 3,
    studio: "Makers Lane",
    city: "Brisbane",
    title: "Paddington Terrace",
    beds: "2",
    price: "$600K–$900K",
    style: "Heritage",
  },
];

export default function SearchEmptyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    document.title = "No Results Found | Archive Design";
  }, []);

  const handleResetFilters = () => {
    setSearchParams({});
    setQuery("");
  };

  return (
    <PageShell>
      <div style={{ paddingTop: 40, paddingBottom: 80 }}>
        {/* Search bar */}
        <div className="container" style={{ marginBottom: 48 }}>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search homes..."
              className="search-input"
              aria-label="Search"
            />
            <button type="submit" className="btn-primary">
              Search
            </button>
          </form>
        </div>

        {/* Empty state content */}
        <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
          <span className="page-eyebrow">No results</span>
          <h1 className="page-h1">
            We couldn&apos;t find an <em>exact match.</em>
          </h1>
          <p className="page-body">
            There may not be a home that fits those exact filters — but the
            right one might still be here. Try adjusting your criteria, or
            explore our most considered designs below.
          </p>
          <div className="page-actions">
            <button onClick={handleResetFilters} className="btn-primary">
              Reset Filters
            </button>
            <Link to="/browse" className="btn-secondary">
              Browse All Homes
            </Link>
          </div>
        </div>

        {/* Popular Homes section */}
        <div className="container" style={{ paddingTop: 64 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.2em",
                color: "var(--amber-text)",
                textTransform: "uppercase",
              }}
            >
              POPULAR HOMES
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: "var(--border)",
              }}
            />
          </div>
          <div className="popular-homes-grid">
            {POPULAR_HOMES.map((home) => (
              <Link
                key={home.id}
                to={`/homes/${home.id}`}
                className="popular-home-card"
              >
                <div className="popular-home-card-image" />
                <div className="popular-home-card-body">
                  <span className="popular-home-card-eyebrow">
                    {home.studio} · {home.city}
                  </span>
                  <h3 className="popular-home-card-title">{home.title}</h3>
                  <p className="popular-home-card-meta">
                    {home.beds} beds · {home.price} · {home.style}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
