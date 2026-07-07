import Link from "next/link";
import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferCards from "@/components/offers/OfferCards";
import OfferCTA from "@/components/offers/OfferCTA";
import { offersIndexContent } from "@/content/offers-index";
import type { Locale } from "@/content/types";

/**
 * The offers overview page, shared by both locales — one composition, zero
 * EN/HE structural drift.
 */
export default function OffersIndexPageBody({ locale }: { locale: Locale }) {
  const c = offersIndexContent(locale);
  return (
    <main id="main">
      <OfferHero
        title={c.hero.title}
        lead={c.hero.lead}
        ctaLabel={c.hero.ctaLabel}
        ctaHref={c.hero.ctaHref}
      />

      <OfferSection id="start" title={c.start.title} intro={c.start.intro}>
        <ul className="offers-grid">
          {c.start.choices.map((choice) => (
            <li key={choice.title} className="offer-card">
              <h3 className="card-title">{choice.title}</h3>
              <p className="card-desc">{choice.desc}</p>
              <div className="offer-card-foot">
                <Link href={choice.cta.href} className="offer-cta">
                  {choice.cta.label}
                  <span className="offer-cta-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </OfferSection>

      <OfferSection id="fit" title={c.fit.title} intro={c.fit.intro}>
        <OfferCardGrid items={c.fit.items} />
      </OfferSection>

      <OfferSection id="offers" title={c.offers.title}>
        <OfferCards locale={locale} />
      </OfferSection>

      <OfferCTA
        heading={c.cta.heading}
        body={c.cta.body}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={c.cta.ctaHref}
      />
    </main>
  );
}
