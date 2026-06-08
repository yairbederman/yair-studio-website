import type { ReactNode } from "react";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

/**
 * Page hero without a CTA: eyebrow + h1 + lead. Used by content pages whose call
 * to action lives elsewhere (a closing OfferCTA band, or none at all, as on
 * /contact). OfferHero is the CTA-bearing variant for offer pages.
 *
 * `id` makes the heading id unique per page (for aria-labelledby). Reuses the
 * shared .offer-hero / .hero-copy / .lead rhythm.
 */
export default function PageHero({
  id,
  eyebrow,
  title,
  lead,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
}) {
  return (
    <section className="offer-hero" aria-labelledby={`${id}-title`}>
      <Container>
        <div className="hero-copy">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 id={`${id}-title`}>{title}</h1>
          <p className="lead hero-lead">{lead}</p>
        </div>
      </Container>
    </section>
  );
}
