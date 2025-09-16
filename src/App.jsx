import { useMemo } from "react";
import { motion } from "framer-motion";

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

const features = [
  { title: "Plan marketplace", body: "Architect-designed plans licensed for single projects and tailored to your site." },
  { title: "Royalties for architects", body: "Creators earn ongoing revenue while homeowners get premium design at lower cost." },
  { title: "Builder-ready", body: "Documentation bundles aligned to Australian standards and local conditions." },
];

const steps = [
  { n: 1, title: "Browse", body: "Explore verified, high-quality residential plans." },
  { n: 2, title: "Match", body: "Filter by block size, style, and budget. Add options." },
  { n: 3, title: "Customize", body: "Engage the original architect for light edits or add-ons." },
  { n: 4, title: "Build", body: "Hand over to your builder with compliant docs ready." },
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
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#features" className="hover:opacity-80">Why us</a>
            <a href="#signup" className="hover:opacity-80">Early access</a>
          </nav>
          <a href="#signup" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium border border-black/10 shadow-sm hover:shadow transition-all" style={{ background: "var(--brand-accent)", color: "white" }}>Join waitlist</a>
        </div>
      </header>

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
              Premium residential plans — faster, smarter, fairly paid.
            </h1>
            <p className="mt-5 text-base md:text-lg text-[color:var(--brand-text-muted)] max-w-prose">
              We connect homeowners and architects on a marketplace for beautiful, design-ready plans.
              Save months, control costs, and share value with the original designer.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href="#signup"
                className="inline-flex justify-center items-center rounded-2xl px-5 py-3 font-medium shadow hover:shadow-md transition-all"
                style={{ background: "var(--brand-accent)", color: "white" }}
              >
                Get early access
              </a>
              <a
                href="#how"
                className="inline-flex justify-center items-center rounded-2xl px-5 py-3 font-medium border border-black/10 hover:bg-black/5 transition-all"
              >
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-[color:var(--brand-text-muted)]">
              <span>AU-focused • Builder-ready • Revenue for architects</span>
            </div>
          </motion.div>

          {/* Right column: image + overlay */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-3xl border border-black/5 shadow-sm overflow-hidden"
              style={{ backgroundColor: "#fff6e2" }}>
              <div className="h-full w-full flex items-center justify-center">
                <img
                  src="/app-placeholder.png"
                  alt="App preview"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>



            {/* overlay panel stays INSIDE this motion.div */}
            <div className="absolute -bottom-6 -right-6 hidden md:block p-4 rounded-2xl border border-black/5 shadow bg-[color:var(--brand-surface)]">
              <div className="text-xs text-[color:var(--brand-text-muted)]">Example filters</div>
              <div className="mt-2 flex gap-2 flex-wrap">
                {["Block 10–13m", "Modern", "3BR", "Budget $400–600k"].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      < section id="features" className="py-16 md:py-20 bg-[color:var(--brand-surface-alt)] border-y border-black/5" >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Archivedesign.ai</h2>
            <span className="text-sm text-[color:var(--brand-text-muted)]">For homeowners • architects • builders</span>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="rounded-3xl p-5 border border-black/10 bg-white shadow-sm">
                <div className="h-10 w-10 rounded-xl grid place-content-center font-semibold" style={{ background: "var(--brand-primary-muted)", color: "var(--brand-accent)" }}>{f.title.charAt(0)}</div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-[color:var(--brand-text-muted)] text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* How it works */}
      < section id="how" className="scroll-mt-24 py-16 md:py-20" >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">How it works</h2>
          <ol className="mt-8 grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <motion.li key={s.n} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: s.n * 0.05 }} className="rounded-3xl p-5 border border-black/10 bg-white shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full grid place-content-center font-semibold" style={{ background: "var(--brand-accent)", color: "white" }}>{s.n}</div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-[color:var(--brand-text-muted)] leading-relaxed">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section >

      {/* Signup */}
      < section id="signup" className="scroll-mt-24 py-16 md:py-20 bg-[color:var(--brand-surface)]" >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Get early access</h2>
          <p className="mt-3 text-[color:var(--brand-text-muted)]">Join the waitlist and we'll notify you when invites open. We respect your inbox.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 mx-auto max-w-xl flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="you@home.com.au" className="flex-1 rounded-2xl px-4 py-3 border border-black/10 focus:outline-none focus:ring-2" style={{ "--tw-ring-color": BRAND.accent }} />
            <button className="rounded-2xl px-5 py-3 font-medium shadow hover:shadow-md transition-all" style={{ background: "var(--brand-accent)", color: "white" }}>Join waitlist</button>
          </form>
          <p className="mt-2 text-xs text-[color:var(--brand-text-muted)]">By subscribing you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.</p>
        </div>
      </section >

      {/* Footer */}
      < footer className="py-10 border-t border-black/5 bg-[color:var(--brand-surface)]" >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={BRAND.logoUrl} alt={BRAND.logoAlt} className="h-6 w-auto" />
            <span className="text-sm text-[color:var(--brand-text-muted)]">© {new Date().getFullYear()} Archivedesign.ai</span>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="hover:opacity-80">Contact</a>
            <a href="#" className="hover:opacity-80">For Architects</a>
            <a href="#" className="hover:opacity-80">For Builders</a>
            <a href="#" className="hover:opacity-80">LinkedIn</a>
          </div>
        </div>
      </footer >
    </div >
  );
}
