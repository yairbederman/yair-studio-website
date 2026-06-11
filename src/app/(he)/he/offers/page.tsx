import OffersIndexPageBody from "@/components/pages/OffersIndexPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers");

export default function OffersPageHe() {
  return <OffersIndexPageBody locale="he" />;
}
