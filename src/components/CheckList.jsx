import Icon from "./Icon";

export default function CheckList({ items = [], iconName = "check", onDark = false, style, ...rest }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "10px", ...style }} {...rest}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "flex-start",
            fontFamily: "var(--wn-font-body)",
            fontSize: "var(--wn-body)",
            lineHeight: "var(--wn-lh-body)",
            color: onDark ? "var(--wn-text-on-dark-muted)" : "var(--wn-text)",
          }}
        >
          <Icon name={iconName} size={18} color={onDark ? "var(--wn-teal-500)" : "var(--wn-accent)"} style={{ marginTop: "4px" }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
