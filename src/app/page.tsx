import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import MethodSection from "@/components/home/MethodSection";
import OffersSection from "@/components/home/OffersSection";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/");

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <main id="main" className="home">
        <HeroSection />
        <ProblemsSection />
        <MethodSection />
        <OffersSection />
        <FinalCTA />
      </main>
    </>
  );
}
