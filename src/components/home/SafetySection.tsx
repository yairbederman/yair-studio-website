import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import type { HomeContent } from "@/content/home";

/**
 * Homepage boundaries band. Reuses the hairline panel language, but each boundary
 * gets the copper approval-dot marker — the same signal the workflow spine uses
 * for its human-in-the-loop checkpoint — so the guardrails read as guarantees,
 * not a disclaimer block. SpineReveal staggers the copper markers in on scroll
 * (content stays fully visible without motion; see globals.css .safety-guards).
 * The note under the list is the plain sentence about where client data lives.
 */
export default function SafetySection({
  content,
}: {
  content: HomeContent["boundaries"];
}) {
  return (
    <section className="section safety" aria-labelledby="safety-title">
      <Container>
        <SpineReveal className="section-head">
          <h2 id="safety-title">{content.title}</h2>
        </SpineReveal>
        <SpineReveal className="panel-list safety-guards">
          <ul>
            {content.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SpineReveal>
        <p className="safety-note">{content.dataNote}</p>
      </Container>
    </section>
  );
}
