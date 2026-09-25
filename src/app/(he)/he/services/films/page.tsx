import ServicePageBody from "@/components/pages/ServicePageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/services/films");

/** Hebrew mirror of (site)/services/films — same body, locale "he". */
export default function FilmsPageHe() {
  return (
    <ServicePageBody
      content={servicePageContent("he", "films")}
      locale="he"
    />
  );
}
