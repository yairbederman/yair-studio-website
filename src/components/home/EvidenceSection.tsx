import Container from "@/components/Container";
import ProcessFilm from "@/components/ProcessFilm";
import WorkflowMap from "@/components/WorkflowMap";
import { shellContent } from "@/content/shell";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * Evidence — shows improvement structurally rather than claiming it (PRODUCT.md
 * Principle 1). When a film is provided it leads: the before literally
 * untangles into the mapped flow (the transformation a static layout can only
 * imply). Below it (and on its own when no film exists yet — e.g. /he), the
 * before/after composition documents the same content statically — a hairline
 * .panel-list "before" beside a mapped <WorkflowMap> in an asymmetric
 * .workflow-compare grid — so reduced-motion and screen-reader users get the
 * full message without the video.
 * No fabricated metrics, percentages, or client claims anywhere.
 */
export default function EvidenceSection({
  content,
  locale = "en",
}: {
  content: HomeContent["evidence"];
  locale?: Locale;
}) {
  return (
    <section className="section evidence" aria-labelledby="evidence-title">
      <Container>
        <div className="section-head">
          <h2 id="evidence-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </div>
        {content.film ? (
          <ProcessFilm
            webm={content.film.webm}
            mp4={content.film.mp4}
            poster={content.film.poster}
            caption={content.film.caption}
            filmName={content.film.filmName}
            controls={shellContent(locale).filmControls}
          />
        ) : null}
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
