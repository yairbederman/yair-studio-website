import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import MethodSection from "@/components/home/MethodSection";
import SafetySection from "@/components/home/SafetySection";
import FounderSection from "@/components/home/FounderSection";
import EvidenceSection from "@/components/home/EvidenceSection";
import ProofSection from "@/components/home/ProofSection";
import OffersSection from "@/components/home/OffersSection";
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
        <HeroSection content={content.hero} />
        <ProblemsSection content={content.problems} />
        <EvidenceSection content={content.evidence} locale={locale} />
        <OffersSection content={content.offers} locale={locale} />
        <MethodSection content={content.method} />
        <SafetySection content={content.safety} />
        <FounderSection content={proof.founder} />
        <ProofSection content={proof.cases} badgeLabel={proof.sampleBadge} />
        <FinalCTA content={content.finalCta} />
      </main>
    </>
  );
}
