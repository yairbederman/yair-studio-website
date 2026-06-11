import OfferPageBody from "@/components/offers/OfferPageBody";
import { internalAiSystemsContent } from "@/content/offers/internal-ai-systems";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/internal-ai-systems");

export default function InternalAiSystemsPage() {
  return <OfferPageBody content={internalAiSystemsContent("en")} locale="en" />;
}
