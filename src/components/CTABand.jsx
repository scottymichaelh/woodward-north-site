import Eyebrow from "./Eyebrow";
import Button from "./Button";

export default function CTABand({ eyebrow, title, intro, ctaLabel = "Book a Call", ctaTo = "/contact", note, watermarkSrc, style, children, ...rest }) {
  return (
    <section style={{ position: "relative", background: "var(--wn-gradient-cta)", padding: "var(--wn-section-y) var(--wn-space-6)", overflow: "hidden", ...style }} {...rest}>
      {watermarkSrc ? (
        <img
          src={watermarkSrc}
          alt=""
          aria-hidden="true"
          style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%)", height: "320px", opacity: 0.07, pointerEvents: "none" }}
        />
      ) : null}
      <div style={{ position: "relative", maxWidth: "var(--wn-container-narrow)", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--wn-space-4)" }}>
        {eyebrow ? <Eyebrow tone="onDark">{eyebrow}</Eyebrow> : null}
        <h2 style={{ fontFamily: "var(--wn-font-heading)", fontSize: "var(--wn-h2)", fontWeight: "var(--wn-w-bold)", lineHeight: "var(--wn-lh-heading)", color: "var(--wn-text-on-dark)", margin: 0 }}>
          {title}
        </h2>
        {intro ? <p style={{ margin: 0, fontSize: "var(--wn-body-lg)", lineHeight: "var(--wn-lh-loose)", color: "var(--wn-text-on-dark-muted)" }}>{intro}</p> : null}
        {children || (
          <Button variant="onDark" size="lg" to={ctaTo} style={{ marginTop: "var(--wn-space-2)" }}>
            {ctaLabel}
          </Button>
        )}
        {note ? <span style={{ fontSize: "var(--wn-small)", color: "var(--wn-text-on-dark-muted)" }}>{note}</span> : null}
      </div>
    </section>
  );
}
