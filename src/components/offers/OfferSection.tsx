import type { ReactNode } from "react";
import Container from "@/components/Container";

/**
 * A titled content band on an offer page: h2 (+ optional intro) then children.
 * Reuses the homepage .section / .section-head / .section-intro rhythm.
 * `id` must be unique within the page (used for the heading id + aria label).
 */
export default function OfferSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section className="section" aria-labelledby={`${id}-title`}>
      <Container>
        <div className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
