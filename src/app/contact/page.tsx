import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Contact</SectionLabel>
          <h1>Contact</h1>
        </div>
      </Container>
    </main>
  );
}
