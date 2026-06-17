import OfferPageBody from "@/components/offers/OfferPageBody";
import { followUpMachineContent } from "@/content/offers/follow-up-machine";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/follow-up-machine");

export default function FollowUpMachinePage() {
  return <OfferPageBody content={followUpMachineContent("en")} locale="en" />;
}
