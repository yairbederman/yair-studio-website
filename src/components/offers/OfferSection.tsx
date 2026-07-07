import type { ReactNode } from "react";
import Container from "@/components/Container";

/**
 * A titled content band on an offer page: h2 (+ optional intro) then children.
 * Reuses the homepage .section / .section-head / .section-intro rhythm.
 * `id` must be unique within the page — it names the section element itself
 * (the in-page anchor target for hero secondary CTAs like "#pricing") and,
 * suffixed, the heading that labels it.
 * `badge` renders a visible marker under the title (e.g. the required
 * "anonymized client" label on a case-study section). It stays OUTSIDE the
 * h2 so the section's accessible name is the title alone.
 */
export default function OfferSection({
  id,
  title,
  intro,
  badge,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  badge?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Container>
        <div className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {badge ? <p className="case-badge">{badge}</p> : null}
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
