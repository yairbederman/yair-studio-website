import ServicePageBody from "@/components/pages/ServicePageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services/films");

export default function FilmsPage() {
  return (
    <ServicePageBody
      content={servicePageContent("en", "films")}
      locale="en"
    />
  );
}
