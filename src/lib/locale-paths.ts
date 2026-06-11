/**
 * The EN↔HE route-pairing rule — THE single encoding of "the Hebrew mirror is
 * a pure /he prefix of the English tree". Pure and dependency-free so client
 * components (LangToggle) can import it without pulling the metadata/offers
 * graph into the client bundle. Consumed by: src/lib/site.ts (hreflang +
 * derived HE PAGES), src/app/sitemap.ts (language alternates),
 * src/components/LangToggle.tsx (the visible toggle), and
 * src/content/offer-cards.ts (localized card routes).
 *
 * If the locale URL scheme ever changes, THIS file is the only place the
 * mapping lives.
 */

/** True for the Hebrew homepage and anything under the /he tree. */
export function isHebrewPath(path: string): boolean {
  return path === "/he" || path.startsWith("/he/");
}

/** Map any route path to its EN/HE pair. */
export function localePaths(path: string): { en: string; he: string } {
  const en = path === "/he" ? "/" : isHebrewPath(path) ? path.slice(3) : path;
  const he = en === "/" ? "/he" : `/he${en}`;
  return { en, he };
}
