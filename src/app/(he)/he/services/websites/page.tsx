import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { servicePageContent } from "@/content/services";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/services/websites");

/** Hebrew mirror of (site)/services/websites — same body, locale "he". */
export default function WebsitesPageHe() {
  return (
    <CapabilityPageBody
      content={servicePageContent("he", "websites")}
      locale="he"
    />
  );
}
