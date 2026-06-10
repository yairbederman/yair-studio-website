import Container from "@/components/Container";
import ProblemsPanel from "@/components/ProblemsPanel";
import type { HomeContent } from "@/content/home";

/**
 * Problems this fixes — named plainly. Rendered as a hairline problems panel
 * (shared ProblemsPanel) rather than a card grid, so it doesn't repeat the
 * 2-col card rhythm of Offers.
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
        <ProblemsPanel items={content.items} />
      </Container>
    </section>
  );
}
