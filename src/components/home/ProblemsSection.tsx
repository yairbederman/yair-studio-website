import Container from "@/components/Container";
import type { HomeContent } from "@/content/home";

/**
 * Problems this fixes — named plainly. Rendered as a hairline .panel-list (the
 * existing treatment, reused) rather than a card grid, so it doesn't repeat the
 * 2-col card rhythm of Offers. The term emphasis is Problems-scoped (.problem-term)
 * and never touches the shared .card-title/.card-desc classes.
 */
export default function ProblemsSection({
  content,
}: {
  content: HomeContent["problems"];
}) {
  return (
    <section className="section problems" aria-labelledby="problems-title">
      <Container>
        <div className="section-head">
          <h2 id="problems-title">{content.title}</h2>
        </div>
        <div className="panel-list problems-list">
          <ul>
            {content.items.map((p) => (
              <li key={p.title}>
                <strong className="problem-term">{p.title}.</strong> {p.desc}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
