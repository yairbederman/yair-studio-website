import type { Metadata } from "next";
import WorkDetail from "@/components/work/WorkDetail";
import { WORK_SLUGS } from "@/lib/work-slugs";
import { pageMetadata } from "@/lib/site";

/** Hebrew mirror of (site)/work/[slug] — same segment list, locale "he". */
export const dynamicParams = false;

export function generateStaticParams() {
  return WORK_SLUGS.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata(`/he/work/${slug}`);
}

export default async function WorkItemPageHe({ params }: Props) {
  const { slug } = await params;
  return <WorkDetail locale="he" slug={slug} />;
}
