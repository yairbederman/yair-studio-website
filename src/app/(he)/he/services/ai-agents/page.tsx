import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/services/ai-agents");

/** Hebrew mirror of (site)/services/ai-agents — same body, locale "he". */
export default function AiAgentsPageHe() {
  return (
    <CapabilityPageBody
      content={servicePageContent("he", "ai-agents")}
      locale="he"
    />
  );
}
