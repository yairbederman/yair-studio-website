import AboutPageBody from "@/components/pages/AboutPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/about");

export default function AboutPage() {
  return <AboutPageBody locale="en" />;
}
