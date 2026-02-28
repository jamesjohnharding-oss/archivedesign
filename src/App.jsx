import React from "react";
import EarlyAccessSignup from "./components/EarlyAccessSignup";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Archive Design",
      "url": "https://archivedesign.ai/",
      "logo": "https://archivedesign.ai/logo.png"
    },
    {
      "@type": "WebSite",
      "name": "Archive Design",
      "url": "https://archivedesign.ai/"
    }
  ]
};

export default function ArchivedesignLanding() {

  return (
    <div>
      <div className="top-bar" />

      <nav>
        <div className="nav-inner">
          <a className="logo" href="#">
            <svg className="logo-mark" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.75" y="0.75" width="26.5" height="30.5" stroke="#1A5C6B" strokeWidth="1.5" />
              <line x1="6" y1="5" x2="6" y2="31.5" stroke="#1A5C6B" strokeWidth="1.5" />
              <line x1="6" y1="5" x2="22" y2="5" stroke="#1A5C6B" strokeWidth="1.5" />
              <line x1="22" y1="5" x2="22" y2="31.5" stroke="#1A5C6B" strokeWidth="1.5" />
              <circle cx="14" cy="31.5" r="2.5" fill="#E8952A" />
            </svg>
            <div>
              <span className="logo-text">ARCHIVE</span>
              <span className="logo-sub">DESIGN</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#">For Homeowners</a></li>
            <li><a href="#">For Architects</a></li>
            <li><a href="#">About</a></li>
          </ul>

          <div className="nav-actions">
            <a href="#waitlist" className="btn-waitlist">Join Waitlist</a>
            <a href="#" className="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <h1 className="hero-headline">
                Find an architect<br/>
                whose work<br/>
                <em>already fits.</em>
              </h1>

              <p className="hero-sub">We match you with architects whose work already fits your vision and budget so you can design with confidence from day one.</p>

              <div className="hero-actions">
                <a href="#" className="btn-primary">Find Your Architect</a>
                <a href="#" className="btn-secondary">For Architects</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-exterior">
                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }} viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <line x1="0" y1="128" x2="240" y2="128" stroke="rgba(247,244,238,0.20)" strokeWidth="0.75"/>
                      <rect x="28" y="62" width="130" height="66" stroke="rgba(247,244,238,0.50)" strokeWidth="1"/>
                      <line x1="18" y1="62" x2="168" y2="62" stroke="rgba(247,244,238,0.55)" strokeWidth="1.2"/>
                      <rect x="90" y="38" width="68" height="24" stroke="rgba(247,244,238,0.35)" strokeWidth="0.75"/>
                      <rect x="44" y="82" width="52" height="26" stroke="rgba(247,244,238,0.40)" strokeWidth="0.75"/>
                      <line x1="70" y1="82" x2="70" y2="108" stroke="rgba(247,244,238,0.22)" strokeWidth="0.5"/>
                      <rect x="116" y="90" width="32" height="38" stroke="rgba(247,244,238,0.35)" strokeWidth="0.75"/>
                      <line x1="116" y1="128" x2="148" y2="128" stroke="rgba(232,149,42,0.80)" strokeWidth="1.5"/>
                      <rect x="162" y="78" width="50" height="50" stroke="rgba(247,244,238,0.28)" strokeWidth="0.75"/>
                      <rect x="170" y="88" width="20" height="18" stroke="rgba(247,244,238,0.30)" strokeWidth="0.5"/>
                      <line x1="28" y1="128" x2="18" y2="140" stroke="rgba(247,244,238,0.12)" strokeWidth="0.5"/>
                      <line x1="158" y1="128" x2="168" y2="140" stroke="rgba(247,244,238,0.12)" strokeWidth="0.5"/>
                      <line x1="18" y1="140" x2="168" y2="140" stroke="rgba(247,244,238,0.10)" strokeWidth="0.5"/>
                      <circle cx="113" cy="113" r="2" fill="rgba(232,149,42,0.90)"/>
                      <line x1="185" y1="62" x2="185" y2="128" stroke="rgba(247,244,238,0.10)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <span className="img-tag">Exterior</span>
                </div>
              </div>
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-kitchen">
                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }} viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect x="22" y="22" width="196" height="136" stroke="rgba(158,94,0,0.45)" strokeWidth="1.2"/>
                      <rect x="72" y="72" width="96" height="36" stroke="rgba(158,94,0,0.55)" strokeWidth="1"/>
                      <line x1="72" y1="90" x2="168" y2="90" stroke="rgba(158,94,0,0.22)" strokeWidth="0.5"/>
                      <rect x="22" y="22" width="196" height="26" stroke="rgba(158,94,0,0.30)" strokeWidth="0.75"/>
                      <circle cx="88" cy="35" r="7" stroke="rgba(158,94,0,0.40)" strokeWidth="0.75"/>
                      <circle cx="88" cy="35" r="3.5" stroke="rgba(158,94,0,0.28)" strokeWidth="0.5"/>
                      <circle cx="108" cy="35" r="5.5" stroke="rgba(158,94,0,0.40)" strokeWidth="0.75"/>
                      <circle cx="108" cy="35" r="2.5" stroke="rgba(158,94,0,0.28)" strokeWidth="0.5"/>
                      <rect x="148" y="26" width="32" height="18" stroke="rgba(158,94,0,0.38)" strokeWidth="0.75"/>
                      <circle cx="164" cy="35" r="3" stroke="rgba(158,94,0,0.30)" strokeWidth="0.5"/>
                      <line x1="22" y1="130" x2="22" y2="158" stroke="rgba(158,94,0,0.35)" strokeWidth="0.75"/>
                      <path d="M22 130 A28 28 0 0 1 50 158" stroke="rgba(158,94,0,0.28)" strokeWidth="0.75" fill="none"/>
                      <line x1="218" y1="68" x2="218" y2="112" stroke="rgba(232,149,42,0.70)" strokeWidth="2"/>
                      <line x1="213" y1="68" x2="218" y2="68" stroke="rgba(232,149,42,0.55)" strokeWidth="1"/>
                      <line x1="213" y1="112" x2="218" y2="112" stroke="rgba(232,149,42,0.55)" strokeWidth="1"/>
                      <line x1="22" y1="168" x2="218" y2="168" stroke="rgba(158,94,0,0.20)" strokeWidth="0.5"/>
                      <line x1="22" y1="164" x2="22" y2="172" stroke="rgba(158,94,0,0.20)" strokeWidth="0.5"/>
                      <line x1="218" y1="164" x2="218" y2="172" stroke="rgba(158,94,0,0.20)" strokeWidth="0.5"/>
                      <circle cx="204" cy="152" r="7" stroke="rgba(158,94,0,0.25)" strokeWidth="0.75"/>
                      <line x1="204" y1="144" x2="204" y2="160" stroke="rgba(158,94,0,0.35)" strokeWidth="0.75"/>
                      <line x1="200" y1="150" x2="208" y2="150" stroke="rgba(158,94,0,0.25)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <span className="img-tag" style={{ color: "#9E5E00", background: "rgba(253,243,227,0.92)" }}>Kitchen</span>
                </div>
              </div>
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-living">
                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }} viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <line x1="0" y1="138" x2="240" y2="138" stroke="rgba(26,92,107,0.30)" strokeWidth="1"/>
                      <rect x="20" y="42" width="200" height="96" stroke="rgba(26,92,107,0.40)" strokeWidth="1"/>
                      <rect x="20" y="138" width="200" height="10" fill="rgba(26,92,107,0.10)" stroke="rgba(26,92,107,0.30)" strokeWidth="0.75"/>
                      <line x1="20" y1="42" x2="220" y2="42" stroke="rgba(26,92,107,0.50)" strokeWidth="1.2"/>
                      <rect x="20" y="42" width="58" height="96" stroke="rgba(26,92,107,0.22)" strokeWidth="0.5"/>
                      <line x1="49" y1="42" x2="49" y2="138" stroke="rgba(26,92,107,0.28)" strokeWidth="0.5"/>
                      <line x1="20" y1="90" x2="78" y2="90" stroke="rgba(26,92,107,0.20)" strokeWidth="0.5"/>
                      <line x1="78" y1="42" x2="78" y2="138" stroke="rgba(232,149,42,0.60)" strokeWidth="1.5"/>
                      <rect x="78" y="60" width="4" height="78" fill="rgba(26,92,107,0.14)"/>
                      <rect x="78" y="42" width="142" height="18" stroke="rgba(26,92,107,0.22)" strokeWidth="0.5" fill="rgba(26,92,107,0.04)"/>
                      <rect x="130" y="42" width="36" height="8" stroke="rgba(26,92,107,0.40)" strokeWidth="0.75" fill="rgba(255,255,255,0.45)"/>
                      <path d="M130 50 L118 138" stroke="rgba(232,149,42,0.18)" strokeWidth="6" strokeLinecap="round"/>
                      <path d="M166 50 L178 138" stroke="rgba(232,149,42,0.12)" strokeWidth="4" strokeLinecap="round"/>
                      <rect x="95" y="108" width="60" height="22" rx="3" stroke="rgba(26,92,107,0.30)" strokeWidth="0.75"/>
                      <rect x="95" y="108" width="60" height="8" rx="2" stroke="rgba(26,92,107,0.20)" strokeWidth="0.5" fill="rgba(26,92,107,0.06)"/>
                      <line x1="20" y1="42" x2="28" y2="34" stroke="rgba(26,92,107,0.20)" strokeWidth="0.5"/>
                      <line x1="32" y1="42" x2="40" y2="34" stroke="rgba(26,92,107,0.20)" strokeWidth="0.5"/>
                      <line x1="44" y1="42" x2="52" y2="34" stroke="rgba(26,92,107,0.20)" strokeWidth="0.5"/>
                      <line x1="56" y1="42" x2="64" y2="34" stroke="rgba(26,92,107,0.20)" strokeWidth="0.5"/>
                    </svg>
                  </div>
                  <span className="img-tag" style={{ color: "#1A5C6B", background: "rgba(235,244,246,0.92)" }}>Living</span>
                </div>
              </div>
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-garden">
                    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }} viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                      <rect x="16" y="16" width="208" height="148" stroke="rgba(232,149,42,0.35)" strokeWidth="0.75"/>
                      <rect x="38" y="38" width="130" height="84" stroke="rgba(232,149,42,0.70)" strokeWidth="1.2"/>
                      <rect x="98" y="58" width="50" height="44" stroke="rgba(232,149,42,0.45)" strokeWidth="0.75" fill="rgba(232,149,42,0.06)"/>
                      <rect x="178" y="52" width="32" height="60" rx="4" stroke="rgba(26,92,107,0.70)" strokeWidth="1" fill="rgba(26,110,128,0.20)"/>
                      <line x1="178" y1="72" x2="210" y2="72" stroke="rgba(26,92,107,0.35)" strokeWidth="0.5"/>
                      <line x1="178" y1="92" x2="210" y2="92" stroke="rgba(26,92,107,0.35)" strokeWidth="0.5"/>
                      <rect x="38" y="122" width="28" height="42" stroke="rgba(232,149,42,0.30)" strokeWidth="0.5"/>
                      <line x1="52" y1="164" x2="52" y2="180" stroke="rgba(232,149,42,0.30)" strokeWidth="0.5"/>
                      <line x1="38" y1="80" x2="16" y2="80" stroke="rgba(232,149,42,0.50)" strokeWidth="1"/>
                      <line x1="16" y1="76" x2="16" y2="84" stroke="rgba(232,149,42,0.50)" strokeWidth="1"/>
                      <circle cx="22" cy="36" r="10" stroke="rgba(232,149,42,0.28)" strokeWidth="0.75"/>
                      <line x1="22" y1="26" x2="22" y2="46" stroke="rgba(232,149,42,0.20)" strokeWidth="0.5"/>
                      <line x1="12" y1="36" x2="32" y2="36" stroke="rgba(232,149,42,0.20)" strokeWidth="0.5"/>
                      <circle cx="22" cy="150" r="8" stroke="rgba(232,149,42,0.25)" strokeWidth="0.75"/>
                      <line x1="22" y1="142" x2="22" y2="158" stroke="rgba(232,149,42,0.18)" strokeWidth="0.5"/>
                      <line x1="14" y1="150" x2="30" y2="150" stroke="rgba(232,149,42,0.18)" strokeWidth="0.5"/>
                      <circle cx="196" cy="150" r="12" stroke="rgba(232,149,42,0.28)" strokeWidth="0.75"/>
                      <line x1="196" y1="138" x2="196" y2="162" stroke="rgba(232,149,42,0.18)" strokeWidth="0.5"/>
                      <line x1="184" y1="150" x2="208" y2="150" stroke="rgba(232,149,42,0.18)" strokeWidth="0.5"/>
                      <path d="M16 16 Q 60 8 120 12 Q 180 16 224 16" stroke="rgba(232,149,42,0.12)" strokeWidth="0.5" fill="none"/>
                      <circle cx="16" cy="80" r="2.5" fill="rgba(232,149,42,0.90)"/>
                      <line x1="218" y1="152" x2="218" y2="164" stroke="rgba(232,149,42,0.50)" strokeWidth="0.75"/>
                      <path d="M215 156 L218 148 L221 156" stroke="rgba(232,149,42,0.50)" strokeWidth="0.75" fill="none"/>
                    </svg>
                  </div>
                  <span className="img-tag">Landscape</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <div className="section-header">
              <span className="section-label">The Process</span>
              <h2 className="section-title">How it works</h2>
              <p className="section-sub">You don't need to trawl portfolios.<br/>You need someone who understands what you're building — and why.</p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <h3 className="step-title">Share your brief</h3>
                <p className="step-body">Tell us about your site, budget, lifestyle and what you're drawn to.</p>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <h3 className="step-title">We curate your shortlist</h3>
                <p className="step-body">From our archive of built and unbuilt homes, we identify projects that closely match your requirements.</p>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <h3 className="step-title">Begin aligned</h3>
                <p className="step-body">We introduce you to a shortlist of matched architects. Start your project with shared references and realistic budget parameters</p>
              </div>
            </div>
          </div>
        </section>

        <section className="value-props">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Alignment creates<br/>better architecture.</h2>
            </div>

            <div className="value-cols">
              <div className="value-col">
                <div className="value-col-header">
                  <svg className="door-icon" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="0.75" width="30.5" height="34.5" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <line x1="6.5" y1="5.5" x2="6.5" y2="35.25" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <line x1="6.5" y1="5.5" x2="25.5" y2="5.5" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <line x1="25.5" y1="5.5" x2="25.5" y2="35.25" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <circle cx="16" cy="35.25" r="2.5" fill="#E8952A"/>
                  </svg>
                  <span className="value-col-title">For Homeowners</span>
                </div>

                <ul className="value-list">
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Start with the right partner</span>
                    </div>
                    <p className="value-item-body">You may only commission an architect once. Starting with the right partner changes everything and leads to better architecture.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Avoid painful misalignment</span>
                    </div>
                    <p className="value-item-body">Too many projects unravel after early drawings when budgets don't align, expectations differ, or communication styles clash. We reduce that risk before you commit.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Replace uncertainty with clarity</span>
                    </div>
                    <p className="value-item-body">See real examples of what similar budgets have delivered and meet architects whose work already fits your brief.</p>
                  </li>
                </ul>
                <a href="#" className="text-link">Learn more about the process</a>
              </div>

              <div className="value-col">
                <div className="value-col-header">
                  <svg className="door-icon" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.75" y="0.75" width="30.5" height="34.5" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <line x1="6.5" y1="5.5" x2="6.5" y2="35.25" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <line x1="6.5" y1="5.5" x2="25.5" y2="5.5" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <line x1="25.5" y1="5.5" x2="25.5" y2="35.25" stroke="#1A5C6B" strokeWidth="1.5"/>
                    <circle cx="16" cy="35.25" r="2.5" fill="#E8952A"/>
                  </svg>
                  <span className="value-col-title">For Architects</span>
                </div>

                <ul className="value-list">
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Meet pre-aligned clients</span>
                    </div>
                    <p className="value-item-body">Connect with educated homeowners who approached you because they value your work.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Replace speculative enquiries</span>
                    </div>
                    <p className="value-item-body">Reduce the noise of speculative leads and focus on clients who are ready to build.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Turn work into repeat projects</span>
                    </div>
                    <p className="value-item-body">Leverage your IP. Your portfolio (built and unbuilt) becomes a passive engine for generating new commissions.</p>
                  </li>
                </ul>
                <a href="#" className="text-link">Partner with us</a>
              </div>
            </div>
          </div>
        </section>

        <section className="architect-band">
          <div className="architect-band-inner">
            <div className="band-pill">Architect Partnership</div>
            <h2 className="band-headline">Fewer Leads.<br/>Better Projects.</h2>
            <p className="band-sub">Join a curated network of Australia's best residential architects. We filter for serious homeowners who value design quality, not just the lowest fee.</p>
            <div className="band-actions">
              <a href="#" className="btn-band-primary">Apply as an Architect</a>
              <a href="#" className="btn-band-secondary">View Criteria</a>
            </div>
          </div>
        </section>

        <section className="waitlist" id="waitlist">
          <div className="waitlist-inner">

            <div className="waitlist-mark">
              <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="38.5" height="44.5" stroke="#F7F4EE" strokeWidth="1.5" />
                <line x1="9" y1="7" x2="9" y2="45.5" stroke="#F7F4EE" strokeWidth="1.5" />
                <line x1="9" y1="7" x2="31" y2="7" stroke="#F7F4EE" strokeWidth="1.5" />
                <line x1="31" y1="7" x2="31" y2="45.5" stroke="#F7F4EE" strokeWidth="1.5" />
                <circle cx="20" cy="45.5" r="3.5" fill="#E8952A" />
              </svg>
            </div>

            <div className="waitlist-content">
              <span className="waitlist-label">Early Access</span>
              <h2 className="waitlist-headline">Be first through the door.</h2>
              <p className="waitlist-sub">Archive Design is launching soon across Australia. Join the waitlist and we'll introduce you to the right architect the moment we open.</p>
            </div>

            <EarlyAccessSignup />

          </div>
        </section>

        <footer>
          <div className="footer-inner">
            <a className="logo footer-logo" href="#">
              <svg width="22" height="24" viewBox="0 0 28 32" fill="none">
                <rect x="0.75" y="0.75" width="26.5" height="30.5" stroke="rgba(247,244,238,0.6)" strokeWidth="1.5"/>
                <line x1="6" y1="5" x2="6" y2="31.5" stroke="rgba(247,244,238,0.6)" strokeWidth="1.5"/>
                <line x1="6" y1="5" x2="22" y2="5" stroke="rgba(247,244,238,0.6)" strokeWidth="1.5"/>
                <line x1="22" y1="5" x2="22" y2="31.5" stroke="rgba(247,244,238,0.6)" strokeWidth="1.5"/>
                <circle cx="14" cy="31.5" r="2.5" fill="#E8952A"/>
              </svg>
              <div>
                <span className="logo-text">ARCHIVE</span>
                <span className="logo-sub">DESIGN</span>
              </div>
            </a>
            <span className="footer-note">© 2024 Archive Design. For homeowners and architects across Australia.</span>
          </div>
        </footer>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </main>
    </div>
  );
}
