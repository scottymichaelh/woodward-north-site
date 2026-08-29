import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import logoSrc from "../assets/logo-primary-transparent.png";
import "./SiteHeader.css";

const LOGO_HEIGHT = 96;

const links = [
  { label: "Services & Pricing", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Insights", to: "/insights" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function SiteHeader({ phone, ctaLabel = "Book a Call" }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }) =>
    links.map((l) => {
      const active = l.to === pathname;
      return (
        <Link
          key={l.to}
          to={l.to}
          onClick={onClick}
          style={{
            fontFamily: "var(--wn-font-body)",
            fontSize: "15px",
            fontWeight: "var(--wn-w-medium)",
            color: active ? "var(--wn-accent)" : "var(--wn-text)",
            textDecoration: "none",
            paddingBottom: "2px",
            borderBottom: active ? "1.5px solid var(--wn-accent)" : "1.5px solid transparent",
            transition: "color var(--wn-dur) var(--wn-ease), border-color var(--wn-dur) var(--wn-ease)",
          }}
        >
          {l.label}
        </Link>
      );
    });

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--wn-cream-100)", borderBottom: "var(--wn-border-hairline)" }}>
      <div style={{ maxWidth: "var(--wn-container)", margin: "0 auto", padding: "14px var(--wn-space-6)", display: "flex", alignItems: "center", gap: "var(--wn-space-6)" }}>
        <Link to="/" style={{ display: "block" }} onClick={() => setOpen(false)}>
          <img src={logoSrc} alt="Woodward North Advisory" style={{ height: LOGO_HEIGHT, width: "auto", display: "block" }} />
        </Link>

        <nav className="wn-header-nav">
          <span className="wn-header-nav-links" style={{ display: "flex", alignItems: "center", gap: "var(--wn-space-5)" }}>
            <NavLinks />
            {phone ? (
              <span style={{ fontSize: "15px", fontWeight: "var(--wn-w-medium)", color: "var(--wn-text-muted)", whiteSpace: "nowrap" }}>{phone}</span>
            ) : null}
          </span>
          <span className="wn-header-cta-desktop">
            <Button variant="primary" size="sm" to="/contact">
              {ctaLabel}
            </Button>
          </span>
          <button
            type="button"
            className="wn-header-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              background: "transparent",
              border: "1px solid var(--wn-line)",
              borderRadius: "var(--wn-radius-button)",
              cursor: "pointer",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span style={{ display: "block", width: "18px", height: "1.5px", background: "var(--wn-forest-900)" }} />
            <span style={{ display: "block", width: "18px", height: "1.5px", background: "var(--wn-forest-900)" }} />
          </button>
        </nav>
      </div>

      <div className={"wn-header-mobile-panel" + (open ? " is-open" : "")} style={{ flexDirection: "column", gap: "var(--wn-space-4)", padding: "0 var(--wn-space-6) var(--wn-space-5)", borderTop: "var(--wn-border-hairline)" }}>
        <NavLinks onClick={() => setOpen(false)} />
        <Button variant="primary" size="sm" to="/contact" style={{ alignSelf: "flex-start" }}>
          {ctaLabel}
        </Button>
      </div>
    </header>
  );
}
