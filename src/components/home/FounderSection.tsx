import Container from "@/components/Container";
import FounderProfile from "@/components/FounderProfile";
import type { ProofContent } from "@/content/proof";

/**
 * Founder band — answers "who is I" right after Method speaks in first person.
 * The schematic FounderProfile carries the block; copy comes from the proof
 * content model (sample-gated until launch).
 */
export default function FounderSection({
  content,
  badgeLabel,
}: {
  content: ProofContent["founder"];
  badgeLabel: string;
}) {
  return (
    <section className="section founder" aria-labelledby="founder-title">
      <Container>
        <div className="section-head">
          <h2 id="founder-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </div>
        <FounderProfile content={content} badgeLabel={badgeLabel} />
      </Container>
    </section>
  );
}
