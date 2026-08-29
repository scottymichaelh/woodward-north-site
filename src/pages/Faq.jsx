import { useState } from "react";
import CTABand from "../components/CTABand";
import watermark from "../assets/logo-mark-transparent.png";

const faqs = [
  {
    q: "Do you work with businesses outside your listed industries?",
    a: "Often, yes. The list is where we have the most reps, not a wall. If your business is founder-owned and under about $10M in revenue, the work looks similar.",
  },
  {
    q: "My books are badly behind. Can you still help?",
    a: "That's a common starting point. We scope the catch-up as a separate flat-fee project, get you to a clean opening balance, and only then start the monthly close.",
  },
  {
    q: "Which software do you work in?",
    a: "QuickBooks Online is the default and where we hold the ProAdvisor certification. If you're on something else, tell us on the call — we'll say honestly whether it's a fit or whether a migration makes more sense.",
  },
  {
    q: "Do you file taxes?",
    a: "No. We keep books that make your tax preparer's job straightforward and coordinate with them directly at year end, so nothing gets rebuilt in March.",
  },
  {
    q: "What does onboarding take?",
    a: "Usually two to three weeks from signed scope to first close, depending on how much cleanup the file needs. You'll get a written timeline before we start.",
  },
  {
    q: "Is there a contract or minimum term?",
    a: "Month to month, with thirty days' notice either way. The scope is written down so both of us know what's included.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <section style={{ background: "var(--wn-gradient-hero)", padding: "clamp(64px,9vw,80px) 24px clamp(48px,7vw,64px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ font: "600 13px/1.3 Inter,sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--wn-accent)" }}>FAQ</div>
          <h1 style={{ margin: "12px 0 0", font: "700 46px/1.15 Poppins,sans-serif", letterSpacing: "-0.01em", color: "var(--wn-text)" }}>
            Questions we get on the first call
          </h1>
        </div>
      </section>

      <section style={{ padding: "clamp(48px,7vw,64px) 24px clamp(64px,9vw,96px)", background: "var(--wn-bg)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.q} style={{ background: "var(--wn-surface)", border: "var(--wn-border-hairline)", borderRadius: 14, boxShadow: "var(--wn-shadow-card)", overflow: "hidden" }}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 20,
                    background: "none",
                    border: 0,
                    padding: "22px 26px",
                    cursor: "pointer",
                    textAlign: "left",
                    font: "600 19px/1.4 Poppins,sans-serif",
                    color: "var(--wn-text)",
                  }}
                  aria-expanded={open}
                >
                  <span>{faq.q}</span>
                  <span style={{ font: "400 24px/1 Inter,sans-serif", color: "var(--wn-accent)" }}>{open ? "–" : "+"}</span>
                </button>
                {open ? (
                  <div style={{ padding: "0 26px 24px", font: "400 16px/1.65 Inter,sans-serif", color: "var(--wn-text-muted)", maxWidth: "60em" }}>{faq.a}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>

      <CTABand eyebrow="Next step" title="Still have a question?" intro="Ask it on the call — twenty minutes, no obligation." note="No pitch deck. No obligation." watermarkSrc={watermark} />
    </div>
  );
}
