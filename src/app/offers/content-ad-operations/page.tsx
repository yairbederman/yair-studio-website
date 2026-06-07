import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/content-ad-operations");

export default function ContentAdOperationsPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Offers</SectionLabel>
          <h1>Content &amp; Ad Operations</h1>
        </div>
      </Container>
    </main>
  );
}
