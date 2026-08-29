import Icon from "./Icon";

export default function CredentialChip({ label, iconName = "badge-check", style, ...rest }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "var(--wn-surface)",
        border: "var(--wn-border-hairline)",
        borderRadius: "var(--wn-radius-pill)",
        padding: "8px 16px 8px 12px",
        fontFamily: "var(--wn-font-body)",
        fontSize: "var(--wn-small)",
        fontWeight: "var(--wn-w-medium)",
        color: "var(--wn-text)",
        ...style,
      }}
      {...rest}
    >
      <Icon name={iconName} size={17} color="var(--wn-forest-700)" />
      {label}
    </span>
  );
}
