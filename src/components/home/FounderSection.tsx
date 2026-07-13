import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import FounderProfile from "@/components/FounderProfile";
import type { ProofContent } from "@/content/proof";

/**
 * Founder band — answers "who is I" right after Method speaks in first person.
 * The schematic FounderProfile carries the block; copy comes from the proof
 * content model as factual founder positioning.
 */
export default function FounderSection({
  content,
}: {
  content: ProofContent["founder"];
}) {
  return (
    <section className="section founder" aria-labelledby="founder-title">
      <Container>
        <SpineReveal className="section-head">
          <h2 id="founder-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </SpineReveal>
        <FounderProfile content={content} />
      </Container>
    </section>
  );
}
