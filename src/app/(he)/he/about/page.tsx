import AboutPageBody from "@/components/pages/AboutPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/about");

export default function AboutPageHe() {
  return <AboutPageBody locale="he" />;
}
