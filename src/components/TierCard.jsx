import Card from "./Card";
import Badge from "./Badge";
import CheckList from "./CheckList";
import Button from "./Button";

export default function TierCard({
  name,
  tagline,
  price,
  cadence,
  features = [],
  ctaLabel = "Book a Call",
  ctaTo = "/contact",
  featured = false,
  badgeLabel = "Most Popular",
  style,
  ...rest
}) {
  return (
    <Card
      interactive
      accentGlow={featured}
      padding="var(--wn-space-6)"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--wn-space-5)",
        borderColor: featured ? "rgba(74,120,118,0.45)" : "var(--wn-line)",
        boxShadow: featured ? "var(--wn-shadow-card-hover)" : "var(--wn-shadow-card)",
        ...style,
      }}
      {...rest}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <h3 style={{ fontFamily: "var(--wn-font-heading)", fontSize: "var(--wn-h3)", fontWeight: "var(--wn-w-semibold)", color: "var(--wn-text)", margin: 0 }}>
            {name}
          </h3>
          {featured ? (
            <Badge tone="teal" uppercase>
              {badgeLabel}
            </Badge>
          ) : null}
        </div>
        {tagline ? (
          <p style={{ margin: 0, fontSize: "var(--wn-body)", color: "var(--wn-text-muted)", lineHeight: "var(--wn-lh-body)" }}>{tagline}</p>
        ) : null}
      </div>
      {price ? (
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingBottom: "4px" }}>
          <span style={{ fontFamily: "var(--wn-font-heading)", fontSize: "40px", fontWeight: "var(--wn-w-bold)", color: "var(--wn-text)", lineHeight: 1 }}>
            {price}
          </span>
          {cadence ? <span style={{ fontSize: "var(--wn-small)", color: "var(--wn-text-muted)" }}>{cadence}</span> : null}
        </div>
      ) : null}
      <div style={{ height: "1px", background: "var(--wn-line)" }} />
      <CheckList items={features} style={{ flex: 1 }} />
      <Button variant={featured ? "primary" : "secondary"} to={ctaTo} fullWidth>
        {ctaLabel}
      </Button>
    </Card>
  );
}
