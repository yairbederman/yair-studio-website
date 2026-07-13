import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import ProofCards from "@/components/ProofCards";
import type { ProofContent } from "@/content/proof";

/**
 * Proof band — compact illustrative workflow cards, placed after Evidence.
 * Full cards with workflow spines live on /about.
 * The sample-data disclosure renders ONCE, inside ProofCards above the grid
 * (not per card — critique 2026-07-12 P1); the intro restates it in prose.
 */
export default function ProofSection({
  content,
  badgeLabel,
}: {
  content: ProofContent["cases"];
  badgeLabel: string;
}) {
  return (
    <section className="section proof" aria-labelledby="proof-title">
      <Container>
        <SpineReveal className="section-head">
          <h2 id="proof-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </SpineReveal>
        <ProofCards
          cases={content.items}
          rowLabels={content.rowLabels}
          badgeLabel={badgeLabel}
        />
      </Container>
    </section>
  );
}
