import ServicesIndexPageBody from "@/components/pages/ServicesIndexPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/services");

/** Hebrew mirror of (site)/services — same body, locale "he". */
export default function ServicesPageHe() {
  return <ServicesIndexPageBody locale="he" />;
}
