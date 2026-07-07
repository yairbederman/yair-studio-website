import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiEnablementContent } from "@/content/offers/ai-enablement";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/ai-enablement");

export default function AiEnablementPageHe() {
  return <OfferPageBody content={aiEnablementContent("he")} locale="he" />;
}
