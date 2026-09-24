import OfferHero from "@/components/offers/OfferHero";
import OfferCTA from "@/components/offers/OfferCTA";
import CapabilityStrip from "@/components/home/CapabilityStrip";
import { studioIndexContent } from "@/content/studio";
import type { Locale } from "@/content/types";

/**
 * The /studio index: what the studio makes. Hero → the five capability cards
 * (the same strip the homepage renders) → closing CTA. Shared by both
 * locales — one composition, zero EN/HE structural drift.
 */
export default function StudioIndexPageBody({ locale }: { locale: Locale }) {
  const c = studioIndexContent(locale);
  return (
    <main id="main">
      <OfferHero
        title={c.hero.title}
        lead={c.hero.lead}
        ctaLabel={c.hero.ctaLabel}
        ctaHref={c.hero.ctaHref}
      />

      <CapabilityStrip
        locale={locale}
        title={c.capabilities.title}
        intro={c.capabilities.intro}
      />

      <OfferCTA
        heading={c.cta.heading}
        body={c.cta.body}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={c.cta.ctaHref}
      />
    </main>
  );
}
