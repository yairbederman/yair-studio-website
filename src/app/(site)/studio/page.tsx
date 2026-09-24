import StudioIndexPageBody from "@/components/pages/StudioIndexPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/studio");

export default function StudioPage() {
  return <StudioIndexPageBody locale="en" />;
}
