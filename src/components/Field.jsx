export default function Field({ label, helper, error, htmlFor, required = false, style, children, ...rest }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", ...style }} {...rest}>
      {label ? (
        <label htmlFor={htmlFor} style={{ fontFamily: "var(--wn-font-body)", fontSize: "var(--wn-small)", fontWeight: "var(--wn-w-medium)", color: "var(--wn-text)" }}>
          {label}
          {required ? <span style={{ color: "var(--wn-accent)" }}> *</span> : null}
        </label>
      ) : null}
      {children}
      {error || helper ? (
        <span style={{ fontFamily: "var(--wn-font-body)", fontSize: "var(--wn-small)", color: error ? "#A0524A" : "var(--wn-text-muted)" }}>{error || helper}</span>
      ) : null}
    </div>
  );
}
