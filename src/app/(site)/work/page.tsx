import WorkIndexBody from "@/components/work/WorkIndexBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/work");

export default function WorkPage() {
  return <WorkIndexBody locale="en" />;
}
