import { useState } from "react";

export default function Card({ padding = "var(--wn-space-6)", interactive = false, accentGlow = false, style, children, ...rest }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "var(--wn-surface)",
        border: "var(--wn-border-hairline)",
        borderRadius: "var(--wn-radius-card)",
        boxShadow: interactive && hover ? "var(--wn-shadow-card-hover)" : "var(--wn-shadow-card)",
        transform: interactive && hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--wn-dur) var(--wn-ease), transform var(--wn-dur) var(--wn-ease)",
        padding,
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {accentGlow ? (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--wn-gradient-accent-soft)",
            opacity: hover || !interactive ? 1 : 0,
            transition: "opacity var(--wn-dur) var(--wn-ease)",
            pointerEvents: "none",
          }}
        />
      ) : null}
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
