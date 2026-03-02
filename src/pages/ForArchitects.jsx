import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../styles/for-architects.css";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Archive Design",
  url: "https://archivedesign.com.au",
  description: "A curated client matching platform for Australian residential architects.",
  areaServed: "AU",
  serviceType: "Residential Architect Client Matching",
};

const FAQ_ITEMS = [
  {
    q: "How do architects get clients in Australia?",
    a: "Most residential architects in Australia find clients through referrals, editorial coverage, awards, and past-client recommendations. These are valuable channels, but they're largely uncontrollable, and they rarely filter for budget, site conditions, or genuine design alignment. Archive Design offers a different layer: curated introductions grounded in documented work, where the qualification happens before the first conversation is ever had.",
  },
  {
    q: "Is Archive Design a lead generation platform?",
    a: "No. Lead generation platforms optimise for volume: more enquiries, more contacts, more pipeline. Archive Design is built around a different premise: that fit matters more than flow. We don't sell leads, rank practices by popularity, or operate an open directory. Introductions happen only when a homeowner's site, brief and budget genuinely align with your documented approach. If that distinction is meaningful to you, Archive Design is worth exploring.",
  },
  {
    q: "Can I upload unbuilt residential projects?",
    a: "Yes, and we actively encourage it. Showcasing unbuilt architecture is not peripheral to Archive Design. It's central to how the matching works. Unbuilt residential projects often reveal a practice's spatial direction and design ambition more clearly than completed work. Planning submissions, concept schemes, competition entries and alternate designs all contribute to a richer, more nuanced matching profile. The more complete your archive, built and unbuilt, the more precisely we can work.",
  },
  {
    q: "Do homeowners on Archive Design understand architectural fees?",
    a: "Yes. Homeowners join Archive Design because they are specifically seeking architect-designed homes and they understand the investment that entails. They are not price-shopping. They are looking for a practice whose spatial approach, material sensibility and site-responsiveness fit the project they have in mind. That level of pre-qualification is precisely what distinguishes Archive Design from conventional residential architect marketing channels.",
  },
  {
    q: "How selective is the network?",
    a: "Deliberately selective. Every architect application is assessed against clear criteria; we only accept practices whose work, positioning and residential focus fit what the platform is built for. We are building a curated network of residential practices across Australia, not an open directory. The selectivity is intentional and reciprocal: we are selective about which architects join, and equally selective about the homeowners we admit. That mutual selectivity is what makes the introductions worth making.",
  },
];

const Chk = () => (
  <span className="chk">
    <svg viewBox="0 0 14 14">
      <polyline points="2,7 5,10 12,3" />
    </svg>
  </span>
);

export default function ForArchitects() {
  const location = useLocation();
  const faqRef = useRef(null);

  // SEO
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content");
    const prevCanonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
    const prevOgTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content");
    const prevOgDesc = document.querySelector('meta[property="og:description"]')?.getAttribute("content");

    document.title = "Residential Architect Marketing & Client Matching Australia | Archive Design";
    const desc = "Archive Design is a curated client matching platform for residential architects in Australia. Stop chasing misaligned enquiries. Upload built and unbuilt work and receive introductions to homeowners whose brief already fits.";
    const ogDesc = "Stop chasing misaligned enquiries. Archive Design connects Australian residential architects with homeowners whose site, brief and budget already align with your work.";

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.setAttribute("rel", "canonical"); document.head.appendChild(canonical); }
    canonical.setAttribute("href", "https://archivedesign.com.au/for-architects");

    [["og:title", document.title], ["og:description", ogDesc], ["og:type", "website"]].forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el); }
      el.setAttribute("content", content);
    });

    let script = document.getElementById("json-ld-for-architects");
    if (!script) { script = document.createElement("script"); script.id = "json-ld-for-architects"; script.type = "application/ld+json"; document.head.appendChild(script); }
    script.textContent = JSON.stringify(JSON_LD);

    return () => {
      document.title = prevTitle;
      if (meta && prevDesc != null) meta.setAttribute("content", prevDesc);
      if (canonical && prevCanonical != null) canonical.setAttribute("href", prevCanonical);
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && prevOgTitle != null) ogTitle.setAttribute("content", prevOgTitle);
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      if (ogDescEl && prevOgDesc != null) ogDescEl.setAttribute("content", prevOgDesc);
      if (script) script.remove();
    };
  }, []);

  // Smooth-scroll to #apply and focus first field
  useEffect(() => {
    const applyLinks = document.querySelectorAll('a[href="#apply"]');
    const handler = (e) => {
      const target = document.getElementById("apply");
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => document.getElementById("practice")?.focus(), 600);
    };
    applyLinks.forEach((a) => a.addEventListener("click", handler));
    return () => applyLinks.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  // Hash scroll on load
  useEffect(() => {
    if (location.hash !== "#apply") return;
    const target = document.getElementById("apply");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => document.getElementById("practice")?.focus(), 600);
    }
  }, [location.pathname, location.hash]);

  // FAQ accordion
  useEffect(() => {
    const container = faqRef.current;
    if (!container) return;
    const triggers = container.querySelectorAll(".faq-trigger");
    const handler = (e) => {
      const item = e.currentTarget.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      container.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        e.currentTarget.setAttribute("aria-expanded", "true");
      }
    };
    triggers.forEach((t) => t.addEventListener("click", handler));
    return () => triggers.forEach((t) => t.removeEventListener("click", handler));
  }, []);

  // Scroll reveal
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.06 }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function handleApplySubmit(e) {
    e.preventDefault();
    const p = document.getElementById("practice")?.value?.trim();
    const l = document.getElementById("location")?.value?.trim();
    const m = document.getElementById("email")?.value?.trim();
    if (!p) { document.getElementById("practice")?.focus(); return; }
    if (!l) { document.getElementById("location")?.focus(); return; }
    if (!m) { document.getElementById("email")?.focus(); return; }
    alert("Application received. We'll be in touch shortly.");
  }

  return (
    <div className="page-fa">
      {/* ── HERO ── */}
      <section className="fa-hero section--bordered">
        <div className="container">
          <div className="fa-hero-inner">

            <div className="fa-hero-left">
              <span className="eyebrow">Residential Architect Marketing · Australia</span>
              <h1 className="heading-xl fa-hero-headline">
                A Better Way to Find<br />
                Residential Architecture<br />
                <em className="teal">Clients in Australia</em>
              </h1>
              <p className="body-lg hero-sub-fa">
                Most enquiries arrive misaligned: under-budget, site-constrained, or simply not the kind of project you want to do next. Archive Design is a curated client matching platform for residential architects in Australia. We connect you with homeowners whose site, ambition and budget already align with your work, before the first&nbsp;conversation.
              </p>
            </div>

            <div className="fa-hero-right" id="apply">
              <div className="form-card">
                <h2 className="form-card-title">Start Your Application</h2>
                <div className="field">
                  <label className="field-label" htmlFor="practice">Practice Name</label>
                  <input className="field-input" id="practice" type="text" placeholder="Your practice name" />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="location">Location</label>
                  <input className="field-input" id="location" type="text" placeholder="City, State" />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="email">Email</label>
                  <input className="field-input" id="email" type="email" placeholder="your@email.com" required />
                </div>
                <button className="form-submit" type="button" onClick={handleApplySubmit}>
                  Continue Application →
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── BRIDGE ── */}
      <section className="bridge-section section--bordered reveal">
        <div className="container">
          <div className="bridge">
            <div className="bridge-bar" />
            <div>
              <p className="bridge-text">
                The problem isn't that good architects lack visibility.<br />
                It's that visibility attracts the wrong&nbsp;clients.
              </p>
              <p className="bridge-sub">
                Referrals, Instagram, awards, press: these channels generate enquiries. But they don't filter for brief alignment, budget, or the kind of project you actually want to do next. Archive Design does.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── MARKETING WITHOUT THE NOISE ── */}
      <section className="section section--alt section--bordered reveal">
        <div className="container">

          <h2 className="heading-lg" style={{ marginBottom: "40px" }}>
            Residential Architect Marketing<br />Without the Noise
          </h2>

          <div className="two-col-compare">
            <div>
              <p className="compare-col-title">Traditional marketing</p>
              <p className="body-md">
                Constant visibility. Posting, pitching, publishing, networking: broadcast to anyone who might one day build. The reach is broad. The filter is thin. You get enquiries. You just can't predict whether they fit.
              </p>
            </div>
            <div>
              <p className="compare-col-title">Archive Design works differently</p>
              <p className="body-md">
                Instead of broadcasting broadly, you document the work you've already done, built and unbuilt. We read that archive and use it to match you with homeowners whose site, brief and budget already correspond to how you work. The filter comes first.
              </p>
            </div>
          </div>

          <div className="content-box">
            <p className="content-box-title">Homeowners on Archive Design come pre-qualified. They:</p>
            <div className="check-grid">
              <div className="check-grid-item">
                <Chk />
                Want a considered, architect-designed home
              </div>
              <div className="check-grid-item">
                <Chk />
                Understand the cost of good residential architecture
              </div>
              <div className="check-grid-item">
                <Chk />
                Respond to real built and unbuilt work, not rendered mood boards
              </div>
              <div className="check-grid-item">
                <Chk />
                Are matched to a practice based on site, brief and budget alignment
              </div>
            </div>
          </div>

          <p className="closing-line">We optimise for fit, not volume.</p>

        </div>
      </section>


      {/* ── HOW IT WORKS ── */}
      <section className="section section--bordered reveal" id="how">
        <div className="container">

          <div className="section-centred" style={{ marginBottom: "72px" }}>
            <h2 className="heading-lg">How It Works</h2>
            <p className="body-lg" style={{ maxWidth: "var(--w-narrow)", margin: "16px auto 0" }}>
              A considered process. Every practice is assessed against clear criteria. Introductions are made only when the match is genuine.
            </p>
          </div>

          <div className="steps-row-fa">
            <div className="step">
              <div className="step-num">1</div>
              <h3 className="step-title">Apply as a Residential Architect</h3>
              <p className="step-body">
                Tell us about your practice, the residential work you do, and the clients you want to attract. Every application is assessed against clear criteria; we only onboard practices whose work and positioning fit what homeowners on the platform are looking&nbsp;for.
              </p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3 className="step-title">Upload Your Plans (Built &amp; Unbuilt)</h3>
              <p className="step-body">
                Upload PDFs of built homes, unbuilt residential projects, planning submissions, concept designs and competition entries. The more complete your archive, the more precisely we can match you.
              </p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3 className="step-title">Receive Curated Introductions</h3>
              <p className="step-body">
                When a homeowner's site, brief and budget genuinely align with your documented work, we make the introduction. No bidding. No volume. No misaligned projects arriving&nbsp;uninvited.
              </p>
            </div>
          </div>

          <div className="section-cta">
            <a href="#apply" className="btn-primary">Create my profile</a>
          </div>

        </div>
      </section>


      {/* ── ARCHIVE ── */}
      <section className="section section--alt section--bordered reveal">
        <div className="container">

          <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
            Turn Your Archive Into a<br />Client Matching Engine
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px", maxWidth: "680px" }}>
            Your built work shows what you've delivered. Your unbuilt work (concepts, competition entries, schemes that never got off the ground) often reveals more clearly where your design intelligence is headed. Not every great project gets built. But every unbuilt design still says something precise about how you think, what you value, and what kind of residential work you want to pursue&nbsp;next.
          </p>

          <div className="doc-grid">
            <div className="doc-card">
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              </div>
              <p className="doc-card-title">Built Homes</p>
              <p className="doc-card-sub">Completed residential projects</p>
            </div>
            <div className="doc-card">
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
              </div>
              <p className="doc-card-title">Unbuilt Residential Projects</p>
              <p className="doc-card-sub">Concept schemes and proposals</p>
            </div>
            <div className="doc-card">
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              </div>
              <p className="doc-card-title">Planning Submissions</p>
              <p className="doc-card-sub">Development applications</p>
            </div>
            <div className="doc-card">
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" /></svg>
              </div>
              <p className="doc-card-title">Concept Designs</p>
              <p className="doc-card-sub">Early-stage explorations</p>
            </div>
            <div className="doc-card">
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24"><polyline points="22 8 22 12 18 12" /><path d="M20.49 9A9 9 0 1 0 21 12" /></svg>
              </div>
              <p className="doc-card-title">Competition Entries</p>
              <p className="doc-card-sub">Submitted design competitions</p>
            </div>
            <div className="doc-card">
              <div className="doc-card-icon">
                <svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
              </div>
              <p className="doc-card-title">Alternate Schemes</p>
              <p className="doc-card-sub">Alternate designs and rejected schemes</p>
            </div>
          </div>

          <div className="content-box" style={{ textAlign: "center", marginBottom: "36px" }}>
            <p className="box-summary-title">
              The broader your archive, built and unbuilt, the more precise the match.
            </p>
            <p className="body-md" style={{ maxWidth: "600px", margin: "0 auto" }}>
              Showcasing unbuilt architecture is not about recovering lost effort. It's about demonstrating design intelligence that hasn't yet found the right client. Archive Design is one of the few platforms in Australia that gives unbuilt residential work the visibility it deserves, and puts it to work attracting the homeowners most likely to commission&nbsp;it.
            </p>
          </div>

          <div className="section-cta">
            <a href="#apply" className="btn-primary">Create my profile</a>
          </div>

        </div>
      </section>


      {/* ── A DIFFERENT KIND OF PLATFORM ── */}
      <section className="section section--bordered reveal">
        <div className="container">

          <h2 className="heading-lg" style={{ marginBottom: "16px" }}>
            A Different Kind of Architecture Platform
          </h2>
          <p className="body-lg" style={{ marginBottom: "40px", maxWidth: "680px" }}>
            Most architect marketing platforms are built to generate leads. Archive Design was built to do something harder: match residential architects with homeowners who are already aligned, before the enquiry is&nbsp;sent.
          </p>

          <div className="two-cards">
            <div className="not-card not-card--grey">
              <p className="not-card-title">Archive Design is not:</p>
              <ul className="x-list">
                <li><span className="xi">✕</span>A bidding marketplace</li>
                <li><span className="xi">✕</span>A price comparison site</li>
                <li><span className="xi">✕</span>A popularity-ranked or open directory</li>
                <li><span className="xi">✕</span>A "buy leads" or pay-per-enquiry service</li>
                <li><span className="xi">✕</span>A substitute for your own practice reputation</li>
              </ul>
            </div>
            <div className="not-card not-card--white">
              <p className="not-card-title doctrine-line">We optimise for fit, not volume.</p>
              <ul className="check-list" style={{ marginBottom: "24px" }}>
                <li><Chk />Homeowners who understand what residential architecture costs</li>
                <li><Chk />Clients who respond to real built and unbuilt work, not marketing collateral</li>
                <li><Chk />Introductions made only when site, brief and budget are genuinely aligned</li>
                <li><Chk />A curated, selective network, not an open directory anyone can join</li>
              </ul>
              <p className="body-md" style={{ paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
                When a homeowner's site conditions, ambition and budget genuinely correspond to your documented approach, we make the introduction. Not before.
              </p>
            </div>
          </div>

          <div className="section-cta">
            <a href="#apply" className="btn-primary">Create my profile</a>
          </div>

        </div>
      </section>


      {/* ── WHO IT'S FOR ── */}
      <section className="section section--alt section--bordered reveal" id="criteria">
        <div className="container">

          <h2 className="heading-lg" style={{ marginBottom: "40px", maxWidth: "680px" }}>
            Who Archive Design Is For
          </h2>

          <div className="content-box">
            <p className="content-box-title">Archive Design is built for Australian residential architects who:</p>
            <ul className="check-list">
              <li><Chk />Want better-aligned clients, not simply a higher volume of enquiries</li>
              <li><Chk />Understand that brief alignment before the first meeting determines project outcomes</li>
              <li><Chk />Work across custom homes and bespoke residential projects where design intent is non-negotiable</li>
              <li><Chk />Care about site-responsive design, material intelligence, and considered spatial resolution</li>
              <li><Chk />See a long-term client relationship as foundational to producing good residential architecture</li>
            </ul>
            <p className="body-md" style={{ marginTop: "28px", paddingTop: "24px", borderTop: "1px solid var(--border)" }}>
              If you're searching for high-volume residential architecture leads, this is not the right platform. If you want to be found by homeowners who already respond to your spatial language, your material approach, and the kind of work you want to be doing next. It might be exactly the right one.
            </p>
          </div>

        </div>
      </section>


      {/* ── FAQ ── */}
      <section className="section section--bordered reveal" id="faq">
        <div className="container">

          <h2 className="heading-lg" style={{ marginBottom: "48px" }}>
            Frequently Asked Questions
          </h2>

          <div className="faq-list" ref={faqRef}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded="false"
                  aria-controls={`faq-body-${i}`}
                  id={`faq-q-${i}`}
                >
                  <h3>{item.q}</h3>
                  <span className="faq-icon" aria-hidden="true" />
                </button>
                <div
                  className="faq-body"
                  id={`faq-body-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── FINAL CTA ── */}
      <section className="final-cta-section">
        <div className="final-cta-inner reveal">
          <h2 className="heading-lg" style={{ marginBottom: "32px" }}>
            Upload Your Residential<br />Architecture Archive.
          </h2>
          <p className="body-lg" style={{ marginBottom: "36px" }}>
            Stop chasing volume. Start attracting better residential architecture clients in Australia through strategic alignment: homeowners whose site, brief and budget already correspond to the work you want to&nbsp;do.
          </p>
          <a href="#apply" className="btn-band-primary">Create my profile →</a>
          <div className="amber-dot" />
        </div>
      </section>
    </div>
  );
}
