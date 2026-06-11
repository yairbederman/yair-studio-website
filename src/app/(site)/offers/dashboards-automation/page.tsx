import OfferPageBody from "@/components/offers/OfferPageBody";
import { dashboardsAutomationContent } from "@/content/offers/dashboards-automation";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/offers/dashboards-automation");

export default function DashboardsAutomationPage() {
  return (
    <OfferPageBody content={dashboardsAutomationContent("en")} locale="en" />
  );
}
