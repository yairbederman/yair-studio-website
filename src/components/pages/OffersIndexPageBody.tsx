import OfferHero from "@/components/offers/OfferHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferCTA from "@/components/offers/OfferCTA";
import LadderSection from "@/components/home/LadderSection";
import { offersIndexContent } from "@/content/offers-index";
import type { Locale } from "@/content/types";

/**
 * The services page (/offers): hero → the commitment ladder → who it fits →
 * closing CTA. Shared by both locales — one composition, zero EN/HE
 * structural drift. The rungs come from src/content/ladder.ts through
 * LadderSection, the same component the homepage renders.
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

      <LadderSection
        locale={locale}
        title={c.ladder.title}
        intro={c.ladder.intro}
      />

      <OfferSection id="fit" title={c.fit.title} intro={c.fit.intro}>
        <OfferCardGrid items={c.fit.items} />
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
