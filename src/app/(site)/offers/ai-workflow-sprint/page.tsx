import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiWorkflowSprintContent } from "@/content/offers/ai-workflow-sprint";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/ai-workflow-sprint");

export default function AiWorkflowSprintPage() {
  return <OfferPageBody content={aiWorkflowSprintContent("en")} locale="en" />;
}
