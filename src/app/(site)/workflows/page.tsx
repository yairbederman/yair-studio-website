import WorkflowsPageBody from "@/components/pages/WorkflowsPageBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/workflows");

export default function WorkflowsPage() {
  return <WorkflowsPageBody locale="en" />;
}
