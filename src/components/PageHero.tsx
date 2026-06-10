import type { ReactNode } from "react";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

/**
 * Page hero: optional eyebrow + h1 + lead + optional actions row. Used by
 * content pages; pages whose call to action belongs in the hero itself (e.g.
 * /contact) pass `actions`. The eyebrow is reserved for kickers that add
 * information beyond the nav label — nav-restating eyebrows are omitted.
 * OfferHero is the offer-page variant.
 *
 * `id` makes the heading id unique per page (for aria-labelledby). Reuses the
 * shared .offer-hero / .hero-copy / .lead / .hero-actions rhythm.
 */
export default function PageHero({
  id,
  eyebrow,
  title,
  lead,
  actions,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="offer-hero" aria-labelledby={`${id}-title`}>
      <Container>
        <div className="hero-copy">
          {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
          <h1 id={`${id}-title`}>{title}</h1>
          <p className="lead hero-lead">{lead}</p>
          {actions ? <div className="hero-actions">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}
