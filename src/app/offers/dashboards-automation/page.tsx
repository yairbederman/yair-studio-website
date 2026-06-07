import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/dashboards-automation");

export default function DashboardsAutomationPage() {
  return (
    <main id="main" className="page">
      <Container>
        <div className="stack">
          <SectionLabel>Offers</SectionLabel>
          <h1>Dashboards &amp; Automation</h1>
        </div>
      </Container>
    </main>
  );
}
