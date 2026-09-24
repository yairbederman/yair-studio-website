import StudioIndexPageBody from "@/components/pages/StudioIndexPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/studio");

export default function StudioPageHe() {
  return <StudioIndexPageBody locale="he" />;
}
