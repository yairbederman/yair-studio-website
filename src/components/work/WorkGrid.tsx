import WorkCard from "./WorkCard";
import { gridLayout } from "./grid-layout";
import { workIndexContent, workItems } from "@/content/work";
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
 * (src/content/work.ts): fewer, larger cards — 16:9 pieces two to a row,
 * portrait films three to a row, one column on phones. A card that would be
 * alone in a part-filled row takes the whole row, poster beside text, so the
 * homepage's three items read as a wide pair over one featured film
 * (grid-layout.ts places every card).
 *
 * Rendered by /work, the homepage, and the service pages (inside their own
 * section), so it is the bare list: no section, heading, or container. The
 * signature is frozen — callers pass only these three props.
 */
export default function WorkGrid({ locale, category, limit }: WorkGridProps) {
  const items = workItems(locale, { category, limit });
  if (items.length === 0) return null;
  const c = workIndexContent(locale);
  const layouts = gridLayout(items.map((item) => item.aspect));
  return (
    <ul className="grid list-none grid-cols-12 gap-x-6 gap-y-12 p-0">
      {items.map((item, i) => (
        <WorkCard
          key={item.slug}
          item={item}
          locale={locale}
          statusLabel={c.status[item.status]}
          deliverablesLabel={c.deliverables}
          layout={layouts[i]}
        />
      ))}
    </ul>
  );
}
