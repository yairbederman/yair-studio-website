import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/services/managed-office");

export default function ManagedOfficePageHe() {
  return <OfferPageBody content={aiOfficeAssistantContent("he")} locale="he" />;
}
