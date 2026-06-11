import OfferPageBody from "@/components/offers/OfferPageBody";
import { dashboardsAutomationContent } from "@/content/offers/dashboards-automation";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/offers/dashboards-automation");

export default function DashboardsAutomationPageHe() {
  return (
    <OfferPageBody content={dashboardsAutomationContent("he")} locale="he" />
  );
}
