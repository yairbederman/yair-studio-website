import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import WorkGrid from "@/components/work/WorkGrid";
import { workIndexContent } from "@/content/work";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/work");

/** Hebrew mirror of (site)/work — same scaffold body, locale "he". */
export default function WorkPageHe() {
  const c = workIndexContent("he");
  return (
    <main id="main">
      <PageHero id="work" title={c.hero.title} lead={c.hero.lead} />

      <OfferSection id="work-grid" title={c.grid.title} intro={c.grid.intro}>
        <WorkGrid locale="he" />
      </OfferSection>
    </main>
  );
}
