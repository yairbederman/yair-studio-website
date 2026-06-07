import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/workflows");

export default function WorkflowsPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Workflows</SectionLabel>
          <h1>Workflows</h1>
        </div>
      </Container>
    </main>
  );
}
