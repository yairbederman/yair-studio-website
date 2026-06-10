import type { ReactNode } from "react";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";

/**
 * Offer-page hero: eyebrow + h1 + short lead + one primary CTA.
 * Single-column (no schematic) — reuses the homepage hero-copy/lead/actions
 * rhythm. One per page, so the heading id is fixed.
 */
export default function OfferHero({
  eyebrow,
  title,
  lead,
  ctaLabel = "Map one workflow",
  ctaHref = "/contact",
}: {
  /** Optional kicker — only for labels that add information beyond the nav. */
  eyebrow?: string;
  title: ReactNode;
  lead: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="offer-hero" aria-labelledby="offer-hero-title">
      <Container>
        <div className="hero-copy">
          {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
          <h1 id="offer-hero-title">{title}</h1>
          <p className="lead hero-lead">{lead}</p>
          <div className="hero-actions">
            <CTAButton href={ctaHref} variant="primary">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
