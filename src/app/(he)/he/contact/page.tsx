import ContactPageBody from "@/components/pages/ContactPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/contact");

export default function ContactPageHe() {
  return <ContactPageBody locale="he" />;
}
