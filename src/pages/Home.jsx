import Card from "../components/Card";
import Icon from "../components/Icon";
import CredentialChip from "../components/CredentialChip";
import Button from "../components/Button";
import TierCard from "../components/TierCard";
import CTABand from "../components/CTABand";
import headshot from "../assets/scott-headshot.jpeg";
import watermark from "../assets/logo-mark-transparent.png";
import { walkFeatures, runFeatures } from "../data/tiers";

const problems = [
  {
    icon: "calendar-check",
    title: "The close never lands",
    body: "Books close six weeks late, so every decision is made on last quarter's information — or on instinct.",
  },
  {
    icon: "file-text",
    title: "Statements nobody explains",
    body: "A P&L lands in your inbox each month. No one walks you through what changed or why it matters.",
  },
  {
    icon: "repeat",
    title: "Cash surprises you",
    body: "Payroll, tax and a slow receivable collide in the same week, and nobody saw it coming thirteen weeks out.",
  },
];

const services = [
  {
    icon: "calendar-check",
    title: "Monthly bookkeeping & close",
    body: "Every account reconciled, revenue and expenses categorized the same way each month, and a financial statement package you actually get walked through.",
  },
  {
    icon: "search",
    title: "Catch-up & cleanup",
    body: "Months or years behind, or working from a chart of accounts that grew by accident. We rebuild it, tie it out, and hand back a clean opening balance.",
  },
  {
    icon: "trending-up",
    title: "Cash-flow forecasting & budgets",
    body: "A rolling 13-week cash view and an annual budget you can hold the business to — updated with real actuals, not left in a spreadsheet from January.",
  },
  {
    icon: "compass",
    title: "Advisory & KPI reporting",
    body: "Pricing, hiring, capex, lender packages, diligence prep. The dashboard shows the handful of numbers that move your business, and we work the decision together.",
  },
];

const industries = [
  "Financial services — PE & M&A",
  "Manufacturing & industrial services",
  "Professional & home services",
  "Commercial & residential real estate",
  "Consumer products & CPG",
  "Ecommerce & digital",
];

const steps = [
  { label: "Step one", title: "A 20-minute call", body: "You tell us what the business does and where the books stand. We tell you what we'd do about it.", first: true },
  { label: "Step two", title: "A look at the file", body: "We review your ledger, name any cleanup the books need, and send a flat monthly quote with the scope written down." },
  { label: "Step three", title: "Close, then read-out", body: "Books close on a set date each month, statements land the same week, and we walk them with you." },
];

export default function Home() {
  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,88px) 24px clamp(64px,9vw,96px)" }}>
        <div className="wn-split-hero" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 18 }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>
              Bookkeeping &amp; business advisory
            </div>
            <h1 style={{ margin: 0, font: "400 56px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)", textWrap: "balance" }}>
              Get Your Time Back. Gain Financial Clarity. Make Better Decisions 
            </h1>
            <p style={{ margin: 0, font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", maxWidth: "33em", textWrap: "pretty" }}>
              Woodward North closes your month, provides financial reports you can understand, and sits down with you to help decide what to do about them. Built for
              founder-owned businesses up to $10M in revenue.
            </p>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 10, flexWrap: "wrap" }}>
              <Button size="lg" to="/contact">Book a Call</Button>
              <Button variant="ghost" to="/services">See pricing</Button>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
              <CredentialChip label="QuickBooks Online ProAdvisor" iconName="badge-check" />
              <CredentialChip label="CFI FMVA program" iconName="trending-up" />
              <CredentialChip label="Founder-owned businesses to $10M" iconName="compass" />
            </div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img
              src={headshot}
              alt="Scott Halasy, founder of Woodward North"
              style={{ width: "min(100%,420px)", aspectRatio: "4/5", objectFit: "cover", objectPosition: "50% 20%", borderRadius: 16, border: "1px solid var(--wn-line)", boxShadow: "0 10px 30px rgba(63,90,70,0.10)" }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,104px) 24px", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>The problem</div>
            <h2 style={{ margin: "12px 0 0", font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              Every month you wait costs you clarity.
            </h2>
            <p style={{ margin: "14px 0 0", font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", textWrap: "pretty" }}>
              Most owners aren't short on effort. They're short on a current, trustworthy set of numbers — and a person who will tell them what those
              numbers mean.
            </p>
          </div>
          <div className="wn-grid-3" style={{ marginTop: 48 }}>
            {problems.map((p) => (
              <Card key={p.title} padding="28px">
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <Icon name={p.icon} size={24} color="var(--wn-text)" />
                  <h3 style={{ margin: 0, font: "600 21px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>{p.title}</h3>
                  <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{p.body}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,104px) 24px", background: "var(--wn-bg-alt)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, maxWidth: 760, margin: "0 auto" }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>What we do</div>
            <h2 style={{ margin: 0, font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              A monthly close, then a conversation about it
            </h2>
          </div>
          <div className="wn-grid-2" style={{ marginTop: 48 }}>
            {services.map((s) => (
              <Card key={s.title} padding="32px" interactive accentGlow>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <Icon name={s.icon} size={24} color="var(--wn-accent)" />
                  <h3 style={{ margin: 0, font: "600 22px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>{s.title}</h3>
                  <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{s.body}</p>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
            <Button variant="secondary" to="/services">See services &amp; pricing</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,104px) 24px", background: "var(--wn-bg)" }}>
        <div className="wn-split-founder" style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>Who we work with</div>
            <h2 style={{ margin: "12px 0 0", font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              Founder-owned businesses and the people buying them
            </h2>
            <p style={{ margin: "14px 0 0", font: "400 18px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", textWrap: "pretty" }}>
              From first hire to $10M in revenue — plus ETA searchers who need diligence-grade numbers before close and a real close cadence after it.
            </p>
          </div>
          <div className="wn-chip-grid">
            {industries.map((i) => (
              <div key={i} style={{ background: "var(--wn-surface)", border: "var(--wn-border-hairline)", borderRadius: 14, padding: "18px 20px", font: "400 16px/1.5 Inter,sans-serif", color: "var(--wn-text)" }}>
                {i}
              </div>
            ))}
            <div style={{ background: "var(--wn-surface)", border: "var(--wn-border-hairline)", borderRadius: 14, padding: "18px 20px", font: "400 16px/1.5 Inter,sans-serif", color: "var(--wn-text)", gridColumn: "span 2" }}>
              ETA searchers — pre- and post-close
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,104px) 24px", background: "var(--wn-bg-alt)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, maxWidth: 760, margin: "0 auto" }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>Walk · Run</div>
            <h2 style={{ margin: 0, font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>Two ways to work together</h2>
            <p style={{ margin: 0, font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
              Start with a close you can rely on. Add advisory when you want a second set of eyes on the decisions.
            </p>
          </div>
          <div className="wn-grid-2" style={{ marginTop: 48, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            <TierCard name="Walk" tagline="A monthly close you can plan from. Starting at:" price="$400" cadence="/month" features={walkFeatures} ctaLabel="Start with Walk" ctaTo="/contact" />
            <TierCard name="Run" tagline="The close, plus advisory on top of it. Starting at:" price="$1,000" cadence="/month" features={runFeatures} ctaLabel="Talk about Run" ctaTo="/contact" />
          </div>
          <p style={{ textAlign: "center", font: "400 14px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)", marginTop: 24 }}>
            Catch-up work and ETA diligence engagements are scoped and quoted separately.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,104px) 24px", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>How it works</div>
            <h2 style={{ margin: "12px 0 0", font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              Three steps to a close you can count on
            </h2>
          </div>
          <div className="wn-grid-3" style={{ marginTop: 48 }}>
            {steps.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 20, borderTop: `2px solid ${s.first ? "var(--wn-accent)" : "var(--wn-line)"}` }}>
                <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>{s.label}</div>
                <h3 style={{ margin: 0, font: "600 22px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>{s.title}</h3>
                <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px clamp(64px,9vw,104px)", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", background: "var(--wn-cream-200)", border: "1px dashed #D9CBB6", borderRadius: 16, padding: 44, textAlign: "center" }}>
          <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>Client words</div>
          <p style={{ margin: "14px 0 0", font: "400 17px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
            Two client testimonials go here — name, business, and one specific thing that changed. Send them over and they drop straight in.
          </p>
        </div>
      </section>

      <CTABand
        eyebrow="Next step"
        title="Bring the books. We'll tell you what they need."
        intro="Twenty minutes on the phone is enough to know whether we're the right fit."
        note="No pitch deck. No obligation."
        watermarkSrc={watermark}
      />
    </div>
  );
}
