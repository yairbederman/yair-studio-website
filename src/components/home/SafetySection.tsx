import Container from "@/components/Container";
import type { HomeContent } from "@/content/home";

/**
 * Homepage safety band. Uses the existing hairline panel language so the
 * operational guardrails feel like part of the system, not a disclaimer block.
 */
export default function SafetySection({
  content,
}: {
  content: HomeContent["safety"];
}) {
  return (
    <section className="section safety" aria-labelledby="safety-title">
      <Container>
        <div className="section-head">
          <h2 id="safety-title">{content.title}</h2>
        </div>
        <div className="panel-list">
          <ul>
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
