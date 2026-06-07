import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import Wordmark from "@/components/Wordmark";
import CTAButton from "@/components/CTAButton";

export default function HomePage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Home</SectionLabel>
          <h1>
            <Wordmark />
          </h1>
          <CTAButton href="/contact" variant="primary">
            Contact
          </CTAButton>
        </div>
      </Container>
    </main>
  );
}
