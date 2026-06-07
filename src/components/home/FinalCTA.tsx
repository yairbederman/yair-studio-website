import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

/** Closing CTA band — one clear next action. */
export default function FinalCTA() {
  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <Container>
        <div className="final-cta-inner">
          <h2 id="final-cta-title">
            Start with one workflow, not a transformation program.
          </h2>
          <p className="final-cta-body">
            The first step is a focused map of a real process: where work
            enters, where it gets stuck, who approves what, and what a useful
            AI-assisted system should actually do.
          </p>
          <div className="final-cta-actions">
            <CTAButton href="/contact" variant="primary">
              Map one workflow
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
