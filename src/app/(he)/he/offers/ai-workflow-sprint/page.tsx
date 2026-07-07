import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiWorkflowSprintContent } from "@/content/offers/ai-workflow-sprint";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/ai-workflow-sprint");

export default function AiWorkflowSprintPageHe() {
  return <OfferPageBody content={aiWorkflowSprintContent("he")} locale="he" />;
}
