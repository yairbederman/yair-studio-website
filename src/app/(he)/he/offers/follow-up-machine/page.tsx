import OfferPageBody from "@/components/offers/OfferPageBody";
import { followUpMachineContent } from "@/content/offers/follow-up-machine";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/follow-up-machine");

export default function FollowUpMachinePageHe() {
  return <OfferPageBody content={followUpMachineContent("he")} locale="he" />;
}
