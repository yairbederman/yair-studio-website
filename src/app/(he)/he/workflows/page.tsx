import WorkflowsPageBody from "@/components/pages/WorkflowsPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/workflows");

export default function WorkflowsPageHe() {
  return <WorkflowsPageBody locale="he" />;
}
