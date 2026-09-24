import type { Metadata } from "next";
import CapabilityPageBody from "@/components/pages/CapabilityPageBody";
import { capabilityPageContent } from "@/content/studio";
import { CAPABILITIES } from "@/lib/capabilities";
import { pageMetadata } from "@/lib/site";

/**
 * One dynamic segment for the five capability pages (/studio/<key>). The
 * segment list is the canonical CAPABILITIES; with dynamicParams off, any
 * other key is a 404 instead of a runtime throw from the content lookup.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({ capability: c.key }));
}

type Props = { params: Promise<{ capability: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { capability } = await params;
  return pageMetadata(`/studio/${capability}`);
}

export default async function CapabilityPage({ params }: Props) {
  const { capability } = await params;
  return (
    <CapabilityPageBody
      content={capabilityPageContent("en", capability)}
      locale="en"
    />
  );
}
