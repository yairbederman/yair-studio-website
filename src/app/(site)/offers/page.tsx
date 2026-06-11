import OffersIndexPageBody from "@/components/pages/OffersIndexPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers");

export default function OffersPage() {
  return <OffersIndexPageBody locale="en" />;
}
