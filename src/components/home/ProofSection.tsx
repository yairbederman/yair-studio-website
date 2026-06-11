import Container from "@/components/Container";
import ProofCards from "@/components/ProofCards";
import type { ProofContent } from "@/content/proof";

/**
 * Proof band — compact case-study cards (problem → system → what changed),
 * placed after Evidence so the illustrative mapping is followed by badged
 * engagement shapes. Full cards with workflow spines live on /about.
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
        <div className="section-head">
          <h2 id="proof-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </div>
        <ProofCards
          cases={content.items}
          rowLabels={content.rowLabels}
          badgeLabel={badgeLabel}
        />
      </Container>
    </section>
  );
}
