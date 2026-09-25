import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services/ai-agents");

// Scaffold body: ServicePageContent carries the capability-page shape, so
// the capability template renders it until ServicePageBody replaces it.
export default function AiAgentsPage() {
  return (
    <CapabilityPageBody
      content={servicePageContent("en", "ai-agents")}
      locale="en"
    />
  );
}
