import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers");

export default function OffersPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Offers</SectionLabel>
          <h1>Offers</h1>
        </div>
      </Container>
    </main>
  );
}
