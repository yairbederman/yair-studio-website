import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Dashboards & Automation",
};

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
