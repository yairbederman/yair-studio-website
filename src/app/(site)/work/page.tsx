import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import WorkGrid from "@/components/work/WorkGrid";
import { workIndexContent } from "@/content/work";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/work");

// Scaffold body: hero → the work grid. The /work page body replaces it.
export default function WorkPage() {
  const c = workIndexContent("en");
  return (
    <main id="main">
      <PageHero id="work" title={c.hero.title} lead={c.hero.lead} />

      <OfferSection id="work-grid" title={c.grid.title} intro={c.grid.intro}>
        <WorkGrid locale="en" />
      </OfferSection>
    </main>
  );
}
