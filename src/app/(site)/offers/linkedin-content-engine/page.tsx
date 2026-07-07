import OfferPageBody from "@/components/offers/OfferPageBody";
import { linkedinContentEngineContent } from "@/content/offers/linkedin-content-engine";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/linkedin-content-engine");

export default function LinkedinContentEnginePage() {
  return (
    <OfferPageBody content={linkedinContentEngineContent("en")} locale="en" />
  );
}
