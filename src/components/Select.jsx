import { useState } from "react";

export default function Select({ invalid = false, options = [], style, children, onFocus, onBlur, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <select
        onFocus={(e) => {
          setFocus(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          onBlur && onBlur(e);
        }}
        style={{
          fontFamily: "var(--wn-font-body)",
          fontSize: "var(--wn-body)",
          color: "var(--wn-text)",
          background: "var(--wn-ivory)",
          border: "1px solid " + (invalid ? "#A0524A" : focus ? "var(--wn-teal-600)" : "var(--wn-line)"),
          borderRadius: "var(--wn-radius-input)",
          padding: "12px 14px",
          width: "100%",
          boxSizing: "border-box",
          outline: "none",
          boxShadow: focus ? "var(--wn-ring-focus)" : "none",
          transition: "border-color var(--wn-dur) var(--wn-ease), box-shadow var(--wn-dur) var(--wn-ease)",
          appearance: "none",
          paddingRight: "40px",
          ...style,
        }}
        {...rest}
      >
        {children ||
          options.map((o) => (
            <option key={typeof o === "string" ? o : o.value} value={typeof o === "string" ? o : o.value}>
              {typeof o === "string" ? o : o.label}
            </option>
          ))}
      </select>
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "14px",
          top: "50%",
          width: "8px",
          height: "8px",
          marginTop: "-6px",
          borderRight: "1.5px solid var(--wn-forest-700)",
          borderBottom: "1.5px solid var(--wn-forest-700)",
          transform: "rotate(45deg)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
