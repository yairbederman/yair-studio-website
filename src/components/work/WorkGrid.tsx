import type { WorkCategory } from "@/content/work";
import type { Locale } from "@/content/types";

export type WorkGridProps = {
  locale: Locale;
  /** Only this category's items; all published items when absent. */
  category?: WorkCategory;
  /** At most this many items, in record order. */
  limit?: number;
};

/**
 * The work-card grid over workItems(locale, { category, limit })
 * (src/content/work.ts). Stub from Stage A2: renders nothing yet; Stage B2
 * implements it. B1 (the homepage) and B3 (the service pages) call it, so
 * the signature is frozen — B2 changes the body only.
 */
export default function WorkGrid(props: WorkGridProps) {
  void props;
  return null;
}
