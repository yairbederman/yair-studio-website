import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import WorkGrid from "./WorkGrid";
import { workIndexContent } from "@/content/work";
import type { Locale } from "@/content/types";

/**
 * /work page body (both locales): the hero, one sentence on what the three
 * status labels mean, then every published piece.
 */
export default function WorkIndexBody({ locale }: { locale: Locale }) {
  const c = workIndexContent(locale);
  return (
    <main id="main">
      <PageHero id="work" title={c.hero.title} lead={c.hero.lead} />

      <OfferSection id="work-grid" title={c.grid.title} intro={c.grid.intro}>
        <WorkGrid locale={locale} />
      </OfferSection>
    </main>
  );
}
