import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/ai-office-assistant");

export default function AiOfficeAssistantPage() {
  return <OfferPageBody content={aiOfficeAssistantContent("en")} locale="en" />;
}
