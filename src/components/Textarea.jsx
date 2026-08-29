import { useState } from "react";

export default function Textarea({ invalid = false, rows = 4, style, onFocus, onBlur, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <textarea
      rows={rows}
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
        resize: "vertical",
        lineHeight: "var(--wn-lh-body)",
        ...style,
      }}
      {...rest}
    />
  );
}
