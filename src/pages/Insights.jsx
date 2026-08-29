import Card from "../components/Card";
import CTABand from "../components/CTABand";
import watermark from "../assets/logo-mark-transparent.png";

const articles = [
  {
    tag: "Cash flow · 6 min read",
    title: "Why profitable businesses run out of cash",
    body: "Profit is an opinion about timing. Here's the thirteen-week view that shows you the week payroll gets tight.",
  },
  {
    tag: "Acquisitions · 8 min read",
    title: "What a searcher should fix in the first 90 days",
    body: "You bought the company. The books came with it. The order you clean them up in decides your first year.",
  },
  {
    tag: "Pricing · 5 min read",
    title: "You can't price a job you can't cost",
    body: "Three categorization changes that turn a generic P&L into a margin report by job, product or client.",
  },
];

export default function Insights() {
  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,80px) 24px clamp(48px,7vw,64px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>Insights</div>
          <h1 style={{ margin: "12px 0 0", font: "700 46px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>Notes from inside the close</h1>
          <p style={{ margin: "16px 0 0", font: "400 19px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)" }}>Short, specific pieces on running a business by the numbers.</p>
        </div>
      </section>

      <section style={{ padding: "clamp(56px,8vw,72px) 24px clamp(64px,9vw,96px)", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20 }}>
          {articles.map((a) => (
            <Card key={a.title} padding="30px" interactive>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>{a.tag}</div>
                <h3 style={{ margin: 0, font: "600 24px/1.3 Poppins,sans-serif", color: "var(--wn-text)" }}>{a.title}</h3>
                <p style={{ margin: 0, font: "400 16px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>{a.body}</p>
              </div>
            </Card>
          ))}
          <p style={{ margin: "8px 0 0", font: "400 14px/1.6 Inter,sans-serif", color: "var(--wn-text-muted)" }}>
            Placeholder articles — titles and teasers are drafts to react to, not published pieces.
          </p>
        </div>
      </section>

      <CTABand eyebrow="Next step" title="Rather talk it through than read about it?" intro="Twenty minutes, your books, an honest answer." note="No pitch deck. No obligation." watermarkSrc={watermark} />
    </div>
  );
}
