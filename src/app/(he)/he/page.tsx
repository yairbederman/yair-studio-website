import HomePageBody from "@/components/pages/HomePageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he");

/**
 * Hebrew homepage (URL /he) — the shared HomePageBody with locale="he".
 * The document's lang="he" dir="rtl" comes from the (he) root layout.
 */
export default function HomePageHe() {
  return <HomePageBody locale="he" />;
}
