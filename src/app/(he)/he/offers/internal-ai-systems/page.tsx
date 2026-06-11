import OfferPageBody from "@/components/offers/OfferPageBody";
import { internalAiSystemsContent } from "@/content/offers/internal-ai-systems";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/internal-ai-systems");

export default function InternalAiSystemsPageHe() {
  return <OfferPageBody content={internalAiSystemsContent("he")} locale="he" />;
}
