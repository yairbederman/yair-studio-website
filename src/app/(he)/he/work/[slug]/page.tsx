import type { Metadata } from "next";
import Container from "@/components/Container";
import { workItem } from "@/content/work";
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
  const item = workItem("he", slug);
  return (
    <main id="main">
      <section className="offer-hero" aria-labelledby="work-item-title">
        <Container>
          <div className="hero-copy">
            <h1 id="work-item-title">{item.title}</h1>
          </div>
        </Container>
      </section>
    </main>
  );
}
