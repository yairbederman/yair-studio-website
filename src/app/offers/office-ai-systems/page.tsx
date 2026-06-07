import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/office-ai-systems");

export default function OfficeAiSystemsPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Offers</SectionLabel>
          <h1>Office AI Systems</h1>
        </div>
      </Container>
    </main>
  );
}
