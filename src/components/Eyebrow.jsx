export default function Eyebrow({ tone = "gray", as: Tag = "div", style, children, ...rest }) {
  return (
    <Tag
      style={{
        fontFamily: "var(--wn-font-body)",
        fontSize: "var(--wn-eyebrow)",
        fontWeight: "var(--wn-w-semibold)",
        letterSpacing: "var(--wn-track-eyebrow)",
        textTransform: "uppercase",
        color: tone === "teal" ? "var(--wn-accent)" : tone === "onDark" ? "var(--wn-text-on-dark-muted)" : "var(--wn-text-muted)",
        lineHeight: 1.3,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
