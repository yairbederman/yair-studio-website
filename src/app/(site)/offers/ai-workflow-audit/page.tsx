import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiWorkflowAuditContent } from "@/content/offers/ai-workflow-audit";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/ai-workflow-audit");

export default function AiWorkflowAuditPage() {
  return <OfferPageBody content={aiWorkflowAuditContent("en")} locale="en" />;
}
