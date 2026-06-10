export type Problem = { title: string; desc: string };

/**
 * The hairline problems panel — a .panel-list with bolded problem terms
 * (.problems-list / .problem-term in globals.css). Single source for the idiom
 * used by the homepage Problems section and the "Problems it solves" band on
 * every offer page, so the markup lives in exactly one place.
 */
export default function ProblemsPanel({
  items,
}: {
  items: readonly Problem[];
}) {
  return (
    <div className="panel-list problems-list">
      <ul>
        {items.map((p) => (
          <li key={p.title}>
            <strong className="problem-term">{p.title}.</strong> {p.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
