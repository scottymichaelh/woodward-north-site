const tones = {
  teal: { background: "var(--wn-teal-600)", color: "var(--wn-ivory)", border: "1px solid transparent" },
  forest: { background: "var(--wn-forest-900)", color: "var(--wn-ivory)", border: "1px solid transparent" },
  outline: { background: "transparent", color: "var(--wn-forest-900)", border: "1px solid var(--wn-line-strong)" },
  soft: { background: "rgba(74,120,118,0.10)", color: "var(--wn-teal-700)", border: "1px solid rgba(74,120,118,0.18)" },
};

export default function Badge({ tone = "teal", uppercase = false, style, children, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        borderRadius: "var(--wn-radius-pill)",
        fontFamily: "var(--wn-font-body)",
        fontSize: uppercase ? "12px" : "var(--wn-small)",
        fontWeight: "var(--wn-w-semibold)",
        letterSpacing: uppercase ? "var(--wn-track-eyebrow)" : "0",
        textTransform: uppercase ? "uppercase" : "none",
        padding: uppercase ? "5px 12px" : "5px 14px",
        lineHeight: 1.3,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
