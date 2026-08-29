import { useState } from "react";
import { Link } from "react-router-dom";

const base = {
  fontFamily: "var(--wn-font-body)",
  fontWeight: "var(--wn-w-semibold)",
  borderRadius: "var(--wn-radius-button)",
  border: "1.5px solid transparent",
  cursor: "pointer",
  boxSizing: "border-box",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--wn-space-2)",
  textDecoration: "none",
  lineHeight: 1,
  transition:
    "background-color var(--wn-dur) var(--wn-ease), color var(--wn-dur) var(--wn-ease), border-color var(--wn-dur) var(--wn-ease), box-shadow var(--wn-dur) var(--wn-ease), transform var(--wn-dur) var(--wn-ease)",
};

const sizes = {
  sm: { fontSize: "var(--wn-small)", padding: "9px 16px" },
  md: { fontSize: "var(--wn-body)", padding: "13px 24px" },
  lg: { fontSize: "17px", padding: "16px 32px" },
};

const variants = {
  primary: {
    rest: { background: "var(--wn-forest-900)", color: "var(--wn-ivory)", boxShadow: "var(--wn-shadow-button)" },
    hover: { background: "var(--wn-forest-800)", boxShadow: "var(--wn-shadow-button-hover)", transform: "translateY(-1px)" },
  },
  secondary: {
    rest: { background: "transparent", color: "var(--wn-forest-900)", borderColor: "var(--wn-forest-900)" },
    hover: { background: "var(--wn-forest-900)", color: "var(--wn-ivory)" },
  },
  accent: {
    rest: { background: "var(--wn-teal-600)", color: "var(--wn-ivory)", boxShadow: "var(--wn-shadow-button)" },
    hover: { background: "var(--wn-teal-700)", boxShadow: "var(--wn-shadow-button-hover)", transform: "translateY(-1px)" },
  },
  ghost: {
    rest: { background: "transparent", color: "var(--wn-accent)", padding: 0 },
    hover: { color: "var(--wn-accent-hover)", textDecoration: "underline" },
  },
  onDark: {
    rest: { background: "var(--wn-ivory)", color: "var(--wn-forest-900)" },
    hover: { background: "#FFFFFF", boxShadow: "0 8px 22px rgba(0,0,0,0.22)", transform: "translateY(-1px)" },
  },
};

export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const v = variants[variant] || variants.primary;
  const composed = {
    ...base,
    ...sizes[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(variant === "ghost" ? { padding: 0 } : null),
    ...(fullWidth ? { width: "100%" } : null),
    ...(disabled ? { opacity: 0.45, cursor: "not-allowed", transform: "none", boxShadow: "none" } : null),
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  if (to && !disabled) {
    return (
      <Link to={to} style={composed} {...handlers} {...rest}>
        {iconLeft}
        {children}
        {iconRight}
      </Link>
    );
  }

  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      disabled={Tag === "button" ? disabled : undefined}
      aria-disabled={disabled || undefined}
      style={composed}
      {...handlers}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
