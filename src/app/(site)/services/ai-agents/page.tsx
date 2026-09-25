import ServicePageBody from "@/components/pages/ServicePageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services/ai-agents");

export default function AiAgentsPage() {
  return (
    <ServicePageBody
      content={servicePageContent("en", "ai-agents")}
      locale="en"
    />
  );
}
