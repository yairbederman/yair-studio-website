import type { WorkAspect } from "@/content/work";

/**
 * The work grid's placement, in one place: WorkGrid gives each card its
 * column spans from here, and WorkCard sizes its poster from the result.
 *
 * The grid has 12 columns (grid-cols-12). Every card is full width on
 * phones; from 640px (Tailwind `sm`) a 16:9 piece stays full width and a
 * portrait film takes half a row; from 1024px (`lg`) a 16:9 piece takes half
 * and a portrait film a third.
 *
 * A card that would sit alone in a part-filled row — the one portrait film
 * after a wide pair on the homepage, the fourth of four films — takes the
 * whole row instead, poster and text side by side (data-feature, work.css),
 * so no row is a lone card beside an empty stretch. Rows are packed the way
 * the grid's auto-placement packs them: in order, never back-filled.
 */

export type GridBreakpoint = "sm" | "lg";

const COLUMNS = 12;
const BREAKPOINTS: readonly GridBreakpoint[] = ["sm", "lg"];

const SPANS: Record<GridBreakpoint, { wide: number; portrait: number }> = {
  sm: { wide: 12, portrait: 6 },
  lg: { wide: 6, portrait: 4 },
};

/** Whole class names, so Tailwind's source scan finds every one. */
const SPAN_CLASS: Record<GridBreakpoint, Record<number, string>> = {
  sm: { 6: "sm:col-span-6", 12: "sm:col-span-12" },
  lg: { 4: "lg:col-span-4", 6: "lg:col-span-6", 12: "lg:col-span-12" },
};

/**
 * Poster widths the layout produces — the one source for `sizes` and for
 * work.css, which reads them as custom properties the components set
 * (WorkCard on a featured card, WorkDetail on the detail frame). The 1152px
 * content row (1200px less the 24px gutters) with 24px column gaps
 * (gap-x-6) is 98px per column less one gap; a featured card sets its
 * poster in a 300px column (portrait) or 7 of 12 parts of the row beside
 * the text's 5, across the 48px --s-7 gap (16:9). A portrait frame on the
 * detail page never grows past 420px.
 */
const ROW_PX = 1152;
const GAP_PX = 24;
const FEATURE_GAP_PX = 48;
export const FEATURE_PORTRAIT_PX = 300;
export const FEATURE_WIDE_FR = { poster: 7, text: 5 } as const;
export const DETAIL_PORTRAIT_MAX_PX = 420;
const FEATURE_WIDE_PX = Math.round(
  ((ROW_PX - FEATURE_GAP_PX) * FEATURE_WIDE_FR.poster) /
    (FEATURE_WIDE_FR.poster + FEATURE_WIDE_FR.text),
);
const lgWidth = (span: number) => span * ((ROW_PX + GAP_PX) / COLUMNS) - GAP_PX;

export type CardLayout = {
  /** Column span per breakpoint, a lone card's already widened to the row. */
  span: Record<GridBreakpoint, number>;
  /** Breakpoints where the card is alone in its row and takes the feature layout. */
  feature: GridBreakpoint[];
};

/** Place each card of a grid, in order. */
export function gridLayout(aspects: readonly WorkAspect[]): CardLayout[] {
  const layouts: CardLayout[] = aspects.map(() => ({
    span: { sm: COLUMNS, lg: COLUMNS },
    feature: [],
  }));
  for (const bp of BREAKPOINTS) {
    const spans = aspects.map((a) => SPANS[bp][a === "16:9" ? "wide" : "portrait"]);
    let used = 0;
    spans.forEach((span, i) => {
      if (used + span > COLUMNS) used = 0;
      const startsRow = used === 0;
      used += span;
      const next = spans[i + 1];
      const alone =
        startsRow && used < COLUMNS && (next === undefined || used + next > COLUMNS);
      layouts[i].span[bp] = alone ? COLUMNS : span;
      if (alone) layouts[i].feature.push(bp);
    });
  }
  return layouts;
}

/** The card's span utilities (phones first). */
export function spanClasses({ span }: CardLayout): string {
  return `col-span-12 ${SPAN_CLASS.sm[span.sm]} ${SPAN_CLASS.lg[span.lg]}`;
}

/** Poster `sizes` for a card, from its place in the layout. */
export function posterSizes(aspect: WorkAspect, { span, feature }: CardLayout): string {
  const portrait = aspect !== "16:9";
  const lg = feature.includes("lg")
    ? portrait
      ? FEATURE_PORTRAIT_PX
      : FEATURE_WIDE_PX
    : lgWidth(span.lg);
  const sm = feature.includes("sm")
    ? `${FEATURE_PORTRAIT_PX}px`
    : `${Math.round((span.sm / COLUMNS) * 100)}vw`;
  return `(min-width: 1024px) ${lg}px, (min-width: 640px) ${sm}, 100vw`;
}
