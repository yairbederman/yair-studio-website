import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/about");

export default function AboutPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>About</SectionLabel>
          <h1>About</h1>
        </div>
      </Container>
    </main>
  );
}
