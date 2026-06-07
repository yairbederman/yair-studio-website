import HeroSection from "@/components/home/HeroSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import MethodSection from "@/components/home/MethodSection";
import OffersSection from "@/components/home/OffersSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main id="main" className="home">
      <HeroSection />
      <ProblemsSection />
      <MethodSection />
      <OffersSection />
      <FinalCTA />
    </main>
  );
}
