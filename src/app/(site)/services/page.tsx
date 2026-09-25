import ServicesIndexPageBody from "@/components/pages/ServicesIndexPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/services");

export default function ServicesPage() {
  return <ServicesIndexPageBody locale="en" />;
}
