import { useMemo } from "react";
import { motion } from "framer-motion";
import { Image, DollarSign, Sparkles, Shield, Home, Ruler, Paintbrush, Leaf, User } from "lucide-react";


/**
 * Archivedesign.ai Landing — React + Tailwind + Framer Motion
 * Brand palette refined directly from uploaded logo colors.
 */
const BRAND = {
  primary: "#003B49", // dark teal/blue from text in logo
  primaryMuted: "#EDE6D9", // light cream background from logo
  accent: "#F15A24", // bright orange icon from logo
  text: "#003B49", // reuse dark teal for text
  textMuted: "#4B4B4B",
  surface: "#FFFFFF",
  surfaceAlt: "#FAF9F6",
  logoUrl: import.meta.env.BASE_URL + 'archivedesignai-logo.png',
  logoAlt: 'Archivedesign.ai logo'
};

const steps = [
  { title: "Explore Proven Designs", body: "Browse a curated library of built Australian homes to identify the aesthetic and functional qualities you love." },
  { title: "Get Matched on Fit", body: "We connect you with the specific architects behind the work you admire, ensuring immediate alignment." },
  { title: "Tailor to Your Site", body: "Engage your architect to adapt their proven design principles to your specific site, budget, and lifestyle." },
];

export default function ArchivedesignLanding() {
  const styleVars = useMemo(() => ({
    "--brand-primary": BRAND.primary,
    "--brand-primary-muted": BRAND.primaryMuted,
    "--brand-accent": BRAND.accent,
    "--brand-text": BRAND.text,
    "--brand-text-muted": BRAND.textMuted,
    "--brand-surface": BRAND.surface,
    "--brand-surface-alt": BRAND.surfaceAlt,
  }), []);

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
        "url": "https://archivedesign.ai/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://archivedesign.ai/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "name": "Architect Matching Service",
        "description": "Matching considered homeowners with architects whose proven designs align with their vision and budget.",
        "areaServed": "Australia",
        "provider": {
          "@type": "Organization",
          "name": "Archive Design"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does the architect matching work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We match homeowners with architects based on proven designs they admire, ensuring alignment from the start."
            }
          },
          {
            "@type": "Question",
            "name": "Is this service available in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our service focuses on Australian residential architects and homeowners."
            }
          },
          {
            "@type": "Question",
            "name": "How do architects benefit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Architects connect with pre-aligned clients who love their past work, leading to better projects."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen w-full bg-[color:var(--brand-primary-muted)] text-[color:var(--brand-text)]" style={styleVars}>
      {/* Nav */}
      <header
        className="sticky top-0 z-40 border-b border-black/5"
        style={{ backgroundColor: "#fef6e2" }}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={BRAND.logoUrl}
              alt={BRAND.logoAlt}
              className="h-16 md:h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-80">How It Works</a>
            <a href="#alignment" className="hover:opacity-80">Why Us</a>
            <a href="#how" className="hover:opacity-80">For Homeowners</a>
            <a href="#architect-partnership" className="hover:opacity-80">For Architects</a>
            <a href="#signup" className="hover:opacity-80">Early Access</a>
          </nav>
          <a href="#signup" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium border border-black/10 shadow-sm hover:shadow transition-all" style={{ background: "var(--brand-accent)", color: "white" }}>Join waitlist</a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          {/* decorative background blob */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div
              className="h-64 w-64 md:h-[28rem] md:w-[28rem] rounded-full blur-3xl opacity-20"
              style={{ background: "var(--brand-accent)" }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 pt-14 pb-16 md:pt-24 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
            {/* Left column: text */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
                Find an architect whose work already fits.
              </h1>
              <p className="mt-5 text-base md:text-lg text-[color:var(--brand-text-muted)] max-w-prose">
                We match considered homeowners with architects whose proven designs already align with your vision and budget—avoiding blank-page uncertainty.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#signup"
                  className="inline-flex justify-center items-center rounded-2xl px-5 py-3 font-medium shadow hover:shadow-md transition-all"
                  style={{ background: "var(--brand-accent)", color: "white" }}
                >
                  Find Your Architect
                </a>
                <a
                  href="#architect-partnership"
                  className="inline-flex justify-center items-center rounded-2xl px-5 py-3 font-medium border border-black/10 hover:bg-black/5 transition-all"
                >
                  For Architects
                </a>
              </div>
              <div className="mt-6 text-sm text-[color:var(--brand-text-muted)]">Trusted by 500+ Australian homeowners</div>
            </motion.div>

            {/* Right column: image grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full">
                <div className="row-span-2 rounded-2xl bg-gray-200"></div>
                <div className="rounded-2xl bg-gray-200"></div>
                <div className="rounded-2xl bg-gray-200"></div>
                <div className="rounded-2xl bg-gray-200"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-24 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
            <p className="mt-3 text-[color:var(--brand-text-muted)]">A transparent pathway to your architect-designed home.</p>
            <div className="relative mt-8">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-300 transform -translate-y-1/2 z-0"></div>
              <ol className="relative z-10 grid md:grid-cols-3 gap-6">
                {steps.map((s, i) => (
                  <motion.li key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-3xl p-5 border border-black/10 bg-white shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full grid place-content-center font-semibold" style={{ background: "var(--brand-accent)", color: "white" }}>{i + 1}</div>
                      <h3 className="font-semibold">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-[color:var(--brand-text-muted)] leading-relaxed">{s.body}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Alignment split */}
        <section id="alignment" className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-semibold">Alignment creates better architecture.</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-10">
              <div>
                <ul className="space-y-6">
                  <li>
                    <h3 className="font-semibold">Start from work you already love</h3>
                    <p className="mt-2 text-sm text-gray-600">Eliminate the risk of misinterpretation by pointing to a proven design as your starting point.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Avoid starting from zero</h3>
                    <p className="mt-2 text-sm text-gray-600">Save months of schematic design time by adapting established principles rather than reinventing the wheel.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Clarity on scope and expectations</h3>
                    <p className="mt-2 text-sm text-gray-600">See tangible examples of what your budget can achieve before you commit to fees.</p>
                  </li>
                </ul>
                <a href="#how" className="mt-6 inline-block text-sm text-blue-600 hover:underline">Learn more about the process →</a>
              </div>
              <div className="md:border-l md:border-gray-300 md:pl-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-6 w-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
                    <User className="h-3 w-3" />
                  </div>
                  <h3 className="font-semibold">For Architects</h3>
                </div>
                <ul className="space-y-6">
                  <li>
                    <h3 className="font-semibold">Meet pre-aligned clients</h3>
                    <p className="mt-2 text-sm text-gray-600">Connect with educated homeowners who specifically approached you because they love your past work.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Replace speculative enquiries</h3>
                    <p className="mt-2 text-sm text-gray-600">Filter out the noise of unqualified leads and focus on clients who are ready to build.</p>
                  </li>
                  <li>
                    <h3 className="font-semibold">Turn built work into repeat projects</h3>
                    <p className="mt-2 text-sm text-gray-600">Leverage your IP. Your portfolio becomes a passive engine for generating new, aligned commissions.</p>
                  </li>
                </ul>
                <a href="#architect-partnership" className="mt-6 inline-block text-sm text-blue-600 hover:underline">Partner with us →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Architect partnership hero */}
        <section id="architect-partnership" className="py-16 md:py-20 bg-gray-900 text-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
          <div className="relative max-w-6xl mx-auto px-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium mb-4">ARCHITECT PARTNERSHIP</div>
            <h2 className="text-2xl md:text-3xl font-semibold">Fewer Leads. Better Projects.</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Join a curated network of Australia's best residential architects. We filter for serious homeowners who value design quality, not just the lowest fee.</p>
            <div className="mt-7 flex justify-center gap-3">
              <a href="#signup" className="inline-flex items-center rounded-2xl px-5 py-3 font-medium bg-orange-500 text-white hover:bg-orange-600 transition">Apply as an Architect</a>
              <a href="#criteria" className="inline-flex items-center rounded-2xl px-5 py-3 font-medium border border-white/20 text-white hover:bg-white/10 transition">View Criteria</a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="scroll-mt-24 py-16 md:py-20 bg-[color:var(--brand-surface)]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Start in the right place.</h2>
            <p className="mt-3 text-[color:var(--brand-text-muted)]">Don't begin your project with a blank page. Begin with confidence.</p>
            <div className="mt-7 flex justify-center gap-3">
              <a href="#signup" className="inline-flex items-center rounded-2xl px-5 py-3 font-medium shadow hover:shadow-md transition-all" style={{ background: "var(--brand-accent)", color: "white" }}>Find Your Architect</a>
              <a href="#how" className="inline-flex items-center rounded-2xl px-5 py-3 font-medium border border-black/10 hover:bg-black/5 transition-all">Browse Homes</a>
            </div>
          </div>
        </section>

        {/* BEGIN: Get early access (do not modify) */}
        <section id="signup" className="scroll-mt-24 py-16 md:py-20 bg-[color:var(--brand-surface)]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold">Get early access</h2>
            <p className="mt-3 text-[color:var(--brand-text-muted)]">Join the waitlist and we'll notify you when invites open. We respect your inbox.</p>
            <form
              action="https://formspree.io/f/xdklvqrv"
              method="POST"
              className="mt-6 mx-auto max-w-xl flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="you@home.com.au"
                className="flex-1 rounded-2xl px-4 py-3 border border-black/10 focus:outline-none focus:ring-2"
              />
              <button
                type="submit"
                className="rounded-2xl px-5 py-3 font-medium shadow hover:shadow-md transition-all"
                style={{ background: "var(--brand-accent)", color: "white" }}
              >
                Join waitlist
              </button>
            </form>

            <p className="mt-2 text-xs text-[color:var(--brand-text-muted)]">By subscribing you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
          </div>
        </section>
        {/* END: Get early access (do not modify) */}
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-black/5 bg-[color:var(--brand-surface)]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/favicon.png" alt="Archivedesign favicon" className="h-6 w-6 rounded-md shadow-sm" />
            <span className="text-sm text-[color:var(--brand-text-muted)]">
              © {new Date().getFullYear()} Archive Design AI
            </span>
          </div>
          <p className="text-xs text-[color:var(--brand-text-muted)] mt-1">
            Proudly made in Sydney, Australia 🇦🇺
          </p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hover:opacity-80">Contact</a>
            <a href="#" className="hover:opacity-80">For Architects</a>
            <a href="#" className="hover:opacity-80">For Builders</a>
            <a href="#" className="hover:opacity-80">LinkedIn</a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
