import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/services/films");

/** Hebrew mirror of (site)/services/films — same body, locale "he". */
export default function FilmsPageHe() {
  return (
    <CapabilityPageBody
      content={servicePageContent("he", "films")}
      locale="he"
    />
  );
}
