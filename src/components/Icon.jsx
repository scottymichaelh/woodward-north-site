import {
  BadgeCheck,
  TrendingUp,
  Compass,
  CalendarCheck,
  FileText,
  Repeat,
  Search,
  CheckCircle,
  Mail,
  Phone,
  Check,
} from "lucide-react";

// Lucide dropped brand/logo marks, so LinkedIn is a small inline glyph
// matched to the 1.75px stroke weight used everywhere else.
function LinkedinGlyph({ size, strokeWidth, color, style, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      {...rest}
    >
      <path d="M6.94 8.5v10" />
      <path d="M6.94 5.5v.01" />
      <path d="M11.94 18.5v-6a3.5 3.5 0 0 1 7 0v6" />
      <path d="M11.94 11.5v7" />
    </svg>
  );
}

const icons = {
  "badge-check": BadgeCheck,
  "trending-up": TrendingUp,
  compass: Compass,
  "calendar-check": CalendarCheck,
  "file-text": FileText,
  repeat: Repeat,
  search: Search,
  "check-circle": CheckCircle,
  mail: Mail,
  phone: Phone,
  linkedin: LinkedinGlyph,
  check: Check,
};

export default function Icon({ name, size = 20, strokeWidth = 1.75, color = "currentColor", style, ...rest }) {
  const Cmp = icons[name];
  if (!Cmp) return null;
  return (
    <Cmp
      aria-hidden="true"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      color={color}
      style={{ flex: "0 0 auto", ...style }}
      {...rest}
    />
  );
}
