import ContactPageBody from "@/components/pages/ContactPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/contact");

export default function ContactPage() {
  return <ContactPageBody locale="en" />;
}
