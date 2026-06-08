import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import type { HomeContent } from "@/content/home";

/** Closing CTA band — one clear next action. Copy + destination from the model. */
export default function FinalCTA({
  content,
}: {
  content: HomeContent["finalCta"];
}) {
  return (
    <section className="section final-cta" aria-labelledby="final-cta-title">
      <Container>
        <div className="final-cta-inner">
          <h2 id="final-cta-title">{content.title}</h2>
          <p className="final-cta-body">{content.body}</p>
          <div className="final-cta-actions">
            <CTAButton href={content.cta.href} variant="primary">
              {content.cta.label}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
