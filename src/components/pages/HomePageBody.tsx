import HeroSection from "@/components/home/HeroSection";
import LadderSection from "@/components/home/LadderSection";
import ProofFilmSection from "@/components/home/ProofFilmSection";
import CapabilityStrip from "@/components/home/CapabilityStrip";
import FounderSection from "@/components/home/FounderSection";
import SafetySection from "@/components/home/SafetySection";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { homeContent } from "@/content/home";
import { proofContent } from "@/content/proof";
import type { Locale } from "@/content/types";

/**
 * The homepage, shared by both locales — one composition, so the EN page and
 * its /he mirror can never drift structurally (the bilingual-parity pattern
 * OfferPageBody established for the offer pages).
 *
 * Seven sections: hero → ladder (three ways to start) → proof film → what the
 * studio makes → founder → boundaries → closing CTA.
 *
 * JSON-LD renders on the EN homepage only: the graph is EN-literal (names,
 * Person url) and identifies the org site-wide; emitting it from /he would
 * assert the same @id nodes from a second URL with English-only facts.
 */
export default function HomePageBody({ locale }: { locale: Locale }) {
  const content = homeContent(locale);
  const proof = proofContent(locale);
  return (
    <>
      {locale === "en" ? <JsonLd /> : null}
      <main id="main" className="home">
        <HeroSection content={content.hero} locale={locale} />
        <LadderSection
          locale={locale}
          title={content.ladder.title}
          intro={content.ladder.intro}
        />
        <ProofFilmSection content={content.proof} locale={locale} />
        <CapabilityStrip
          locale={locale}
          title={content.capabilities.title}
          intro={content.capabilities.intro}
        />
        <FounderSection content={proof.founder} />
        <SafetySection content={content.boundaries} />
        <FinalCTA content={content.finalCta} />
      </main>
    </>
  );
}
