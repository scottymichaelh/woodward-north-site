import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./SiteFooter.css";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Monthly bookkeeping", to: "/services" },
      { label: "Catch-up & cleanup", to: "/services" },
      { label: "Cash-flow forecasting", to: "/services" },
      { label: "Advisory & KPI reporting", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Client resources", to: "/resources" },
      { label: "Insights", to: "/insights" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const contact = ["scott@woodwardnorth.com", "(612) 555-0142", "Remote practice, clients nationwide"];

const social = [
  { iconName: "linkedin", href: "https://www.linkedin.com/in/scotthalasy/", label: "LinkedIn" },
  { iconName: "mail", href: "mailto:scott@woodwardnorth.com", label: "Email" },
];

export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--wn-forest-900)", color: "var(--wn-text-on-dark)", padding: "var(--wn-space-8) var(--wn-space-6) var(--wn-space-6)" }}>
      <div
        className="wn-footer-grid"
        style={{
          maxWidth: "var(--wn-container)",
          margin: "0 auto",
          gridTemplateColumns: "1.4fr repeat(" + Math.max(columns.length, 1) + ", 1fr)",
          gap: "var(--wn-space-7)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--wn-space-3)" }}>
          <span style={{ fontFamily: "var(--wn-font-heading)", fontSize: "22px", fontWeight: "var(--wn-w-bold)", letterSpacing: "-0.01em", color: "var(--wn-text-on-dark)" }}>
            Woodward North
          </span>
          <span style={{ fontSize: "12px", fontWeight: "var(--wn-w-semibold)", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--wn-text-on-dark-muted)" }}>
            Advisory
          </span>
          <div style={{ display: "grid", gap: "6px", marginTop: "var(--wn-space-3)" }}>
            {contact.map((c, i) => (
              <span key={i} style={{ fontSize: "var(--wn-small)", color: "var(--wn-text-on-dark-muted)" }}>
                {c}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "var(--wn-space-3)", marginTop: "var(--wn-space-3)" }}>
            {social.map((s) => (
              <a key={s.iconName} href={s.href} aria-label={s.label} style={{ color: "var(--wn-text-on-dark-muted)" }} target={s.href.startsWith("http") ? "_blank" : undefined} rel={s.href.startsWith("http") ? "noopener" : undefined}>
                <Icon name={s.iconName} size={19} />
              </a>
            ))}
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "var(--wn-eyebrow)", fontWeight: "var(--wn-w-semibold)", letterSpacing: "var(--wn-track-eyebrow)", textTransform: "uppercase", color: "var(--wn-text-on-dark-muted)", marginBottom: "4px" }}>
              {col.title}
            </span>
            {col.links.map((l) => (
              <Link key={col.title + l.label} to={l.to} style={{ fontSize: "var(--wn-small)", color: "var(--wn-text-on-dark)", textDecoration: "none", opacity: 0.88 }}>
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "var(--wn-container)", margin: "var(--wn-space-7) auto 0", paddingTop: "var(--wn-space-4)", borderTop: "1px solid rgba(254,252,246,0.16)", fontSize: "var(--wn-small)", color: "var(--wn-text-on-dark-muted)" }}>
        © 2026 Woodward North. Bookkeeping &amp; business advisory.
      </div>
    </footer>
  );
}
