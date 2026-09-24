import Link from "next/link";
import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import { capabilityCards } from "@/content/capability-cards";
import type { Cta, Locale } from "@/content/types";

/**
 * A grid of link cards — the .offers-grid / .offer-card / .offer-cta idiom
 * (one stretched click target per card), used by the "where it shows up" rung
 * cards on every capability page. (The capability strip below renders the same
 * data as a hairline list instead, so five identical cards never read as a
 * template.)
 */
export function LinkCardGrid({
  items,
}: {
  items: readonly { title: string; desc: string; cta: Cta }[];
}) {
  return (
    <ul className="offers-grid">
      {items.map((item) => (
        <li key={item.title} className="offer-card">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
          <div className="offer-card-foot">
            <Link href={item.cta.href} className="offer-cta">
              {item.cta.label}
              <span className="offer-cta-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * "What the studio makes" — the five capabilities as an editorial hairline list
 * (.cap-list / .cap-row: title | summary | CTA, the whole row one click target
 * via the stretched .offer-cta), from the localized capabilityCards() resolver
 * (canonical list: src/lib/capabilities.ts). Section copy comes from the caller
 * (the homepage and /studio frame it differently). Used by HomePageBody and
 * StudioIndexPageBody.
 */
export default function CapabilityStrip({
  locale,
  title,
  intro,
}: {
  locale: Locale;
  title: string;
  intro: string;
}) {
  return (
    <section
      className="section"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <Container>
        <SpineReveal className="section-head">
          <h2 id="capabilities-title">{title}</h2>
          <p className="section-intro">{intro}</p>
        </SpineReveal>
        <ol className="cap-list">
          {capabilityCards(locale).map((card) => (
            <li key={card.title} className="cap-row">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.summary}</p>
              <Link href={card.href} className="offer-cta">
                {card.cta}
                <span className="offer-cta-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
