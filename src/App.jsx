import React, { useState } from "react";

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
  const [joined, setJoined] = useState(false);

  function handleWaitlist(e) {
    e && e.preventDefault();
    setJoined(true);
  }

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
            <a href="#" className="btn-ghost">Log in</a>
            <a href="#waitlist" className="btn-waitlist">Join Waitlist</a>
            <a href="#" className="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                500+ Australian homeowners
              </div>

              <h1 className="hero-headline">
                Find an architect<br />
                whose work<br />
                <em>already fits.</em>
              </h1>

              <p className="hero-sub">We match considered homeowners with architects whose proven designs already align with your vision and budget — avoiding blank-page uncertainty.</p>

              <div className="hero-actions">
                <a href="#" className="btn-primary">Find Your Architect</a>
                <a href="#" className="btn-secondary">For Architects</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-exterior" />
                  <span className="img-tag">Exterior</span>
                </div>
              </div>
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-kitchen" />
                  <span className="img-tag">Kitchen</span>
                </div>
              </div>
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-living" />
                  <span className="img-tag">Living</span>
                </div>
              </div>
              <div className="img-card">
                <div className="img-card-inner">
                  <div className="img-placeholder scene-garden" />
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
              <p className="section-sub">A transparent pathway to your architect-designed home.</p>
            </div>

            <div className="steps">
              <div className="step">
                <div className="step-number">01</div>
                <h3 className="step-title">Explore Proven Designs</h3>
                <p className="step-body">Browse a curated library of built Australian homes to identify the aesthetic and functional qualities you love.</p>
              </div>
              <div className="step">
                <div className="step-number">02</div>
                <h3 className="step-title">Get Matched on Fit</h3>
                <p className="step-body">We connect you with the specific architects behind the work you admire, ensuring immediate alignment.</p>
              </div>
              <div className="step">
                <div className="step-number">03</div>
                <h3 className="step-title">Tailor to Your Site</h3>
                <p className="step-body">Engage your architect to adapt their proven design principles to your specific site, budget, and lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="value-props">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Alignment creates<br />better architecture.</h2>
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
                      <span className="value-item-title">Start from work you already love</span>
                    </div>
                    <p className="value-item-body">Eliminate the risk of misinterpretation by pointing to a proven design as your starting point.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Avoid starting from zero</span>
                    </div>
                    <p className="value-item-body">Save months of schematic design time by adapting established principles rather than reinventing the wheel.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Clarity on scope and expectations</span>
                    </div>
                    <p className="value-item-body">See tangible examples of what your budget can achieve before you commit to fees.</p>
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
                    <p className="value-item-body">Connect with educated homeowners who specifically approached you because they love your past work.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Replace speculative enquiries</span>
                    </div>
                    <p className="value-item-body">Filter out the noise of unqualified leads and focus on clients who are ready to build.</p>
                  </li>
                  <li className="value-item">
                    <div className="value-item-header">
                      <span className="check"><svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg></span>
                      <span className="value-item-title">Turn built work into repeat projects</span>
                    </div>
                    <p className="value-item-body">Leverage your IP. Your portfolio becomes a passive engine for generating new, aligned commissions.</p>
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

        <section className="final-cta">
          <div className="final-cta-inner">
            <h2 className="final-cta-headline">Start in the right place.</h2>
            <p className="final-cta-sub">Don't begin your project with a blank page. Begin with confidence.</p>
            <div className="final-cta-actions">
              <a href="#" className="btn-primary">Find Your Architect</a>
              <a href="#" className="btn-secondary">Browse Homes</a>
            </div>
            <div className="amber-dot-anchor" />
          </div>
        </section>

        <section className="waitlist" id="waitlist">
          <div className="waitlist-inner">
            <div className="waitlist-mark">
              <svg width="40" height="46" viewBox="0 0 40 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.75" width="38.5" height="44.5" stroke="#F7F4EE" strokeWidth="1.5"/>
                <line x1="9" y1="7" x2="9" y2="45.5" stroke="#F7F4EE" strokeWidth="1.5"/>
                <line x1="9" y1="7" x2="31" y2="7" stroke="#F7F4EE" strokeWidth="1.5"/>
                <line x1="31" y1="7" x2="31" y2="45.5" stroke="#F7F4EE" strokeWidth="1.5"/>
                <circle cx="20" cy="45.5" r="3.5" fill="#E8952A"/>
              </svg>
            </div>

            <div className="waitlist-content">
              <span className="waitlist-label">Early Access</span>
              <h2 className="waitlist-headline">Be first through the door.</h2>
              <p className="waitlist-sub">Archive Design is launching soon across Australia. Join the waitlist and we'll introduce you to the right architect the moment we open.</p>
            </div>

            {!joined ? (
              <form className="waitlist-form" onSubmit={handleWaitlist}>
                <div className="waitlist-input-row">
                  <input type="email" className="waitlist-input" placeholder="your@email.com" required aria-label="Email address" />
                  <button type="submit" className="btn-waitlist-submit">
                    Join Waitlist
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
                <p className="waitlist-disclaimer">No spam. Unsubscribe anytime. We'll only contact you when we're ready for you.</p>
              </form>
            ) : (
              <div className="waitlist-success visible" id="waitlist-success" aria-live="polite">
                <div className="success-dot" />
                <p>You're on the list. We'll be in touch soon.</p>
              </div>
            )}

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
