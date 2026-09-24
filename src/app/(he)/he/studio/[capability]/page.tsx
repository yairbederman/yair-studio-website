import type { Metadata } from "next";
import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { capabilityPageContent } from "@/content/studio";
import { CAPABILITIES } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/site";

/** Hebrew mirror of (site)/studio/[capability] — same segment list, locale "he". */
export const dynamicParams = false;

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({ capability: c.key }));
}

type Props = { params: Promise<{ capability: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { capability } = await params;
  return pageMetadata(`/he/studio/${capability}`);
}

export default async function CapabilityPageHe({ params }: Props) {
  const { capability } = await params;
  return (
    <CapabilityPageBody
      content={capabilityPageContent("he", capability)}
      locale="he"
    />
  );
}
