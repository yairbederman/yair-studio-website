import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import type { Cta } from "@/content/types";

/**
 * The closing CTA band — one clear primary action, plus an optional secondary
 * channel (e.g. WhatsApp) as a ghost button. Used by every page including the
 * homepage (via FinalCTA). Copper top rule via .final-cta-inner.
 *
 * ctaLabel/ctaHref are REQUIRED: every caller passes locale-resolved values
 * from its content model, and an English fallback default would be a silent
 * wrong-language trap on the Hebrew pages.
 */
export default function OfferCTA({
  heading,
  body,
  ctaLabel,
  ctaHref,
  secondaryCta,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: Cta;
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
            {secondaryCta ? (
              <CTAButton href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
