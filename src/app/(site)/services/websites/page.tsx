import ServicePageBody from "@/components/pages/ServicePageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services/websites");

export default function WebsitesPage() {
  return (
    <ServicePageBody
      content={servicePageContent("en", "websites")}
      locale="en"
    />
  );
}
