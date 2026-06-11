import OfferPageBody from "@/components/offers/OfferPageBody";
import { contentAdOperationsContent } from "@/content/offers/content-ad-operations";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/content-ad-operations");

export default function ContentAdOperationsPageHe() {
  return (
    <OfferPageBody content={contentAdOperationsContent("he")} locale="he" />
  );
}
