import Card from "../components/Card";
import Icon from "../components/Icon";
import Button from "../components/Button";
import CTABand from "../components/CTABand";
import watermark from "../assets/logo-mark-transparent.png";

const resources = [
  {
    icon: "file-text",
    title: "Month-end close checklist",
    body: "Every step we tick off before a set of books is called closed, in order.",
    cta: "Download PDF",
  },
  {
    icon: "trending-up",
    title: "13-week cash-flow template",
    body: "A spreadsheet you can fill in this afternoon and update every Monday in ten minutes.",
    cta: "Download XLSX",
  },
  {
    icon: "search",
    title: "ETA quality-of-earnings prep list",
    body: "What a searcher should have in hand before diligence starts, and what usually isn't there.",
    cta: "Download PDF",
  },
  {
    icon: "check-circle",
    title: "Chart of accounts starter",
    body: "A clean structure for QuickBooks Online that still reports well at $10M.",
    cta: "Download XLSX",
  },
];

export default function Resources() {
  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,80px) 24px clamp(48px,7vw,64px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>Client resources</div>
          <h1 style={{ margin: "12px 0 0", font: "700 46px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
            Tools and checklists we use with clients
          </h1>
          <p style={{ margin: "16px 0 0", font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
            The same worksheets we run internally, free to take with you.
          </p>
        </div>
      </section>

      <section style={{ padding: "clamp(56px,8vw,72px) 24px clamp(64px,9vw,96px)", background: "var(--wn-bg)" }}>
        <div className="wn-grid-2" style={{ maxWidth: 1200, margin: "0 auto" }}>
          {resources.map((r) => (
            <Card key={r.title} padding="30px" interactive accentGlow>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
                <Icon name={r.icon} size={24} color="var(--wn-accent)" />
                <h3 style={{ margin: 0, font: "600 21px/1.25 Poppins,sans-serif", color: "var(--wn-text)" }}>{r.title}</h3>
                <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{r.body}</p>
                <Button variant="ghost" href="#resources">{r.cta}</Button>
              </div>
            </Card>
          ))}
        </div>
        <p style={{ maxWidth: 1200, margin: "24px auto 0", font: "400 14px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
          Placeholder resources — swap in the real files and links when they're ready.
        </p>
      </section>

      <CTABand eyebrow="Next step" title="Want help putting these to work?" intro="We'll run the first close with you and hand over the cadence." note="No pitch deck. No obligation." watermarkSrc={watermark} />
    </div>
  );
}
