import Card from "../components/Card";
import CheckList from "../components/CheckList";
import TierCard from "../components/TierCard";
import Button from "../components/Button";
import CTABand from "../components/CTABand";
import watermark from "../assets/logo-mark-transparent.png";
import { walkFeatures, runFeatures, svcClose, svcAdvisory, svcProjects } from "../data/tiers";

const detail = [
  { title: "Monthly bookkeeping & close", note: "Included in Walk and Run.", items: svcClose },
  { title: "Performance review & advisory", note: "Included in Run.", items: svcAdvisory },
  { title: "Project work", note: "Quoted separately, flat fee.", items: svcProjects },
];

export default function Services() {
  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,80px) 24px clamp(56px,8vw,72px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>
            Services &amp; pricing
          </div>
          <h1 style={{ margin: "12px 0 0", font: "700 48px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
            Flat monthly pricing, scope in writing
          </h1>
          <p style={{ margin: "16px 0 0", font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", textWrap: "pretty" }}>
            No hourly billing and no surprise invoices. You know the number before we start, and the scope is written down so both of us can point at it.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,88px) 24px", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="wn-grid-2" style={{ alignItems: "stretch" }}>
            <TierCard name="Walk" tagline="A monthly close you can plan from. Starting at:" price="$400" cadence="/month" features={walkFeatures} ctaLabel="Start with Walk" ctaTo="/contact" />
            <TierCard name="Run" tagline="The close, plus advisory on top of it. Starting at:" price="$1,000" cadence="/month" features={runFeatures} ctaLabel="Talk about Run" ctaTo="/contact" />
          </div>
          <p style={{ textAlign: "center", font: "400 14px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)", marginTop: 24 }}>
            Final pricing depends on transaction volume, number of accounts and entities.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,96px) 24px", background: "var(--wn-bg-alt)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>In detail</div>
            <h2 style={{ margin: "12px 0 0", font: "700 38px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
              What each engagement actually includes
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 44 }}>
            {detail.map((d) => (
              <Card key={d.title} padding="32px">
                <div className="wn-detail-row">
                  <div>
                    <h3 style={{ margin: 0, font: "600 24px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>{d.title}</h3>
                    <p style={{ margin: "10px 0 0", font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{d.note}</p>
                  </div>
                  <CheckList items={d.items} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "clamp(64px,9vw,96px) 24px", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ margin: 0, font: "700 32px/1.2 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>Not sure which one you need?</h2>
          <p style={{ margin: "14px 0 24px", font: "400 18px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
            Most businesses start with Walk and move to Run once the close is steady. We'll say so on the call if it's the other way around.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Button size="lg" to="/contact">Book a Call</Button>
            <Button variant="ghost" to="/faq">Read the FAQ</Button>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Next step"
        title="A flat monthly number, before you commit."
        intro="Send us a look at the books and we'll come back with scope and price."
        note="No pitch deck. No obligation."
        watermarkSrc={watermark}
      />
    </div>
  );
}
