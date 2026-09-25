import type { Metadata } from "next";
import WorkDetail from "@/components/work/WorkDetail";
import { WORK_SLUGS } from "@/lib/work-slugs";
import { pageMetadata } from "@/lib/site";

/**
 * One dynamic segment for the published work pages (/work/<slug>). The
 * segment list is the canonical WORK_SLUGS; with dynamicParams off, any
 * other slug (an unpublished item included) is a 404 instead of a runtime
 * throw from the content lookup.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`/work/${slug}`);
}

export default async function WorkItemPage({ params }: Props) {
  const { slug } = await params;
  return <WorkDetail locale="en" slug={slug} />;
}
