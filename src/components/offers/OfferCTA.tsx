import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";

/**
 * Closing CTA band for an offer page — one clear next action.
 * Reuses the homepage .final-cta-inner treatment (copper top rule).
 */
export default function OfferCTA({
  heading,
  body,
  ctaLabel = "Map one workflow",
  ctaHref = "/contact",
}: {
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section final-cta" aria-labelledby="offer-cta-title">
      <Container>
        <div className="final-cta-inner">
          <h2 id="offer-cta-title">{heading}</h2>
          <p className="final-cta-body">{body}</p>
          <div className="final-cta-actions">
            <CTAButton href={ctaHref} variant="primary">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
