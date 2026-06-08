import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import MethodSection from "@/components/home/MethodSection";
import EvidenceSection from "@/components/home/EvidenceSection";
import OffersSection from "@/components/home/OffersSection";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";
import { homeContent } from "@/content/home";

export const metadata = pageMetadata("/");

export default function HomePage() {
  const content = homeContent("en");
  return (
    <>
      <JsonLd />
      <main id="main" className="home">
        <HeroSection content={content.hero} />
        <ProblemsSection content={content.problems} />
        <MethodSection content={content.method} />
        <EvidenceSection content={content.evidence} />
        <OffersSection />
        <FinalCTA content={content.finalCta} />
      </main>
    </>
  );
}
