import OfferPageBody from "@/components/offers/OfferPageBody";
import { linkedinContentEngineContent } from "@/content/offers/linkedin-content-engine";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/linkedin-content-engine");

export default function LinkedinContentEnginePageHe() {
  return (
    <OfferPageBody content={linkedinContentEngineContent("he")} locale="he" />
  );
}
