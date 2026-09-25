import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services/managed-office");

export default function ManagedOfficePage() {
  return <OfferPageBody content={aiOfficeAssistantContent("en")} locale="en" />;
}
