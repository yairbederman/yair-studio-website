import OfferPageBody from "@/components/offers/OfferPageBody";
import { contentAdOperationsContent } from "@/content/offers/content-ad-operations";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/content-ad-operations");

export default function ContentAdOperationsPage() {
  return (
    <OfferPageBody content={contentAdOperationsContent("en")} locale="en" />
  );
}
