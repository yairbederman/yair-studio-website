import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiWorkflowAuditContent } from "@/content/offers/ai-workflow-audit";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/ai-workflow-audit");

export default function AiWorkflowAuditPageHe() {
  return <OfferPageBody content={aiWorkflowAuditContent("he")} locale="he" />;
}
