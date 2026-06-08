import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import MethodSection from "@/components/home/MethodSection";
import EvidenceSection from "@/components/home/EvidenceSection";
import FinalCTA from "@/components/home/FinalCTA";
import { pageMetadata } from "@/lib/site";
import { homeContent } from "@/content/home";

export const metadata = pageMetadata("/he");

/**
 * Hebrew homepage (URL /he). Self-contained: the same five home sections as EN
 * (no Offers — those link into untranslated EN pages), driven by the HE locale
 * content. The document's lang="he" dir="rtl" comes from the (he) root layout, so
 * the bilingual CSS applies at the document level (no per-element lang/dir here).
 */
export default function HomePageHe() {
  const content = homeContent("he");
  return (
    <main id="main" className="home">
      <HeroSection content={content.hero} />
      <ProblemsSection content={content.problems} />
      <MethodSection content={content.method} />
      <EvidenceSection content={content.evidence} />
      <FinalCTA content={content.finalCta} />
    </main>
  );
}
