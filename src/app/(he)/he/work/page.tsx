import WorkIndexBody from "@/components/work/WorkIndexBody";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata("/he/work");

/** Hebrew mirror of (site)/work — same body, locale "he". */
export default function WorkPageHe() {
  return <WorkIndexBody locale="he" />;
}
