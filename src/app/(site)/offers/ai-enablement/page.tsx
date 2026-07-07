import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiEnablementContent } from "@/content/offers/ai-enablement";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/ai-enablement");

export default function AiEnablementPage() {
  return <OfferPageBody content={aiEnablementContent("en")} locale="en" />;
}
