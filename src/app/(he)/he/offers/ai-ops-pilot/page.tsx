import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiOpsPilotContent } from "@/content/offers/ai-ops-pilot";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/ai-ops-pilot");

export default function AiOpsPilotPageHe() {
  return <OfferPageBody content={aiOpsPilotContent("he")} locale="he" />;
}
