import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/ai-office-assistant");

export default function AiOfficeAssistantPageHe() {
  return <OfferPageBody content={aiOfficeAssistantContent("he")} locale="he" />;
}
