/**
 * Brand color literals — the JS-side mirror of the CSS tokens in
 * src/app/globals.css (`:root`).
 *
 * WHY THIS DUPLICATES globals.css: the OG image is rendered by `next/og`
 * (Satori), which cannot read CSS custom properties. ImageResponse needs literal
 * color values in inline styles. To keep the duplication contained and honest,
 * every brand color literal in the codebase lives in exactly ONE place outside
 * globals.css — here. UI components and stylesheets must use the CSS variables
 * (var(--bg-0) etc.), never these literals.
 *
 * If a token value changes in globals.css, update the matching value here.
 *
 * Source of truth: src/app/globals.css :root
 *   --bg-0 / --bg-1 / --fg-1 / --fg-2 / --fg-3 / --accent / --rule
 */
export const BRAND_COLORS = {
  bg: "#121211", // --bg-0  page (warm near-black charcoal)
  surface: "#1a1a18", // --bg-1  card / surface
  fg: "#f4f1ea", // --fg-1  primary text (warm cream)
  fgSecondary: "#b9b3aa", // --fg-2  secondary text (warm taupe)
  fgMuted: "#8a847a", // --fg-3  muted / captions (≥4.5:1 on --bg-1)
  accent: "#d96832", // --accent  softened copper (the signal)
  rule: "#2a2a26", // --rule  hairline / dividers
} as const;
