import OfferPageBody from "@/components/offers/OfferPageBody";
import { aiOpsPilotContent } from "@/content/offers/ai-ops-pilot";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/ai-ops-pilot");

export default function AiOpsPilotPage() {
  return <OfferPageBody content={aiOpsPilotContent("en")} locale="en" />;
}
