import type { ReactNode } from "react";
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
 *
 * `extraAction` renders after the buttons in the actions row — /contact passes
 * its CopyEmail affordance so a mailto: primary has a visible failure path at
 * the band where the click actually happens, not only in the page hero. It is
 * an ACTION slot (laid out as a flex item in the button row), not a slot for
 * prose or disclaimers.
 */
export default function OfferCTA({
  heading,
  body,
  ctaLabel,
  ctaHref,
  secondaryCta,
  extraAction,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: Cta;
  extraAction?: ReactNode;
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
            {extraAction}
          </div>
        </div>
      </Container>
    </section>
  );
}
