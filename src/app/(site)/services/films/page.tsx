import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services/films");

// Scaffold body: ServicePageContent carries the capability-page shape, so
// the capability template renders it until ServicePageBody replaces it.
export default function FilmsPage() {
  return (
    <CapabilityPageBody
      content={servicePageContent("en", "films")}
      locale="en"
    />
  );
}
