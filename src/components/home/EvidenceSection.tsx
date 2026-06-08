import Container from "@/components/Container";
import WorkflowMap from "@/components/WorkflowMap";
import type { HomeContent } from "@/content/home";

/**
 * Evidence — shows improvement structurally rather than claiming it (PRODUCT.md
 * Principle 1). Reuses the /workflows before/after composition: a hairline
 * .panel-list "before" beside a mapped <WorkflowMap>, in an asymmetric
 * .workflow-compare grid. Deliberately NOT a card grid — it breaks the repeated
 * 2-col rhythm between Method and Offers. The improvement is the mapping itself;
 * there are no fabricated metrics, percentages, or client claims.
 */
export default function EvidenceSection({
  content,
}: {
  content: HomeContent["evidence"];
}) {
  return (
    <section className="section evidence" aria-labelledby="evidence-title">
      <Container>
        <div className="section-head">
          <h2 id="evidence-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </div>
        <div className="workflow-compare">
          <div className="panel-list">
            <span className="sch-cap">{content.before.caption}</span>
            <ul>
              {content.before.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <WorkflowMap
            caption={content.mapped.caption}
            ariaLabel={content.mapped.ariaLabel}
            nodes={content.mapped.nodes}
          />
        </div>
      </Container>
    </section>
  );
}
