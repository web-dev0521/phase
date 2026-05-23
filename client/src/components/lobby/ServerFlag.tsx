import type { FlagCode } from "../../services/serverDetection";

/**
 * Tiny inline SVG region flags for the server picker and lobby status chip.
 *
 * Inline SVG rather than emoji (🇺🇸/🇨🇭): Windows renders regional-indicator
 * emoji as bare letter pairs ("US"/"CH") instead of flags, so emoji would look
 * broken for a large share of players. The SVGs are simplified — recognizable
 * at chip size, not heraldically exact (the US canton shows a star field, not
 * all 50 stars). Both flags share a 39×26 viewBox so that height-based sizing
 * (`h-X w-auto`) renders them at identical width; the Swiss flag is therefore
 * drawn as a rectangle (its cross centered) rather than its official square.
 */

function FlagUS({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 39 26"
      className={className}
      role="img"
      aria-label="United States"
    >
      <rect width="39" height="26" fill="#B22234" />
      <g fill="#fff">
        <rect y="2" width="39" height="2" />
        <rect y="6" width="39" height="2" />
        <rect y="10" width="39" height="2" />
        <rect y="14" width="39" height="2" />
        <rect y="18" width="39" height="2" />
        <rect y="22" width="39" height="2" />
      </g>
      <rect width="16" height="14" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="3" cy="3" r="0.9" />
        <circle cx="8" cy="3" r="0.9" />
        <circle cx="13" cy="3" r="0.9" />
        <circle cx="5.5" cy="7" r="0.9" />
        <circle cx="10.5" cy="7" r="0.9" />
        <circle cx="3" cy="11" r="0.9" />
        <circle cx="8" cy="11" r="0.9" />
        <circle cx="13" cy="11" r="0.9" />
      </g>
    </svg>
  );
}

function FlagCH({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 39 26"
      className={className}
      role="img"
      aria-label="Switzerland"
    >
      <rect width="39" height="26" fill="#D52B1E" />
      <rect x="16.5" y="4" width="6" height="18" fill="#fff" />
      <rect x="10.5" y="10" width="18" height="6" fill="#fff" />
    </svg>
  );
}

export function ServerFlag({
  flag,
  className,
}: {
  flag: FlagCode;
  className?: string;
}) {
  // Exhaustive over FlagCode — a new region's flag is a compile error here.
  switch (flag) {
    case "us":
      return <FlagUS className={className} />;
    case "ch":
      return <FlagCH className={className} />;
  }
}
