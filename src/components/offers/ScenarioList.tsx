import type { CardItem } from "@/content/types";

/**
 * Renders the "who it's for" items as recognition rows — the buyer's own words.
 * Every offer's who-section is framed as things the buyer is saying ("This fits
 * if you are saying one of these things" / "offices that sound like this"), so
 * each row leads with an oversized copper opening-quote and reads as an overheard
 * statement.
 *
 * Deliberately NOT a card grid: hairline-separated rows, no per-item box, so the
 * flagship page's three consecutive sections stop reading as the same 4-card
 * template (impeccable: identical card grids are an absolute ban). Presentation
 * only — the copy is unchanged, so both locales inherit it by construction.
 */
export default function ScenarioList({
  items,
}: {
  items: readonly CardItem[];
}) {
  return (
    <ul className="scenario-list">
      {items.map((item) => (
        <li key={item.title} className="scenario">
          <div className="scenario-text">
            <p className="scenario-symptom">{item.title}</p>
            <p className="scenario-note">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
