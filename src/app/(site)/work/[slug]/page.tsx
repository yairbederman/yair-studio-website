import type { Metadata } from "next";
import Container from "@/components/Container";
import { workItem } from "@/content/work";
import { WORK_SLUGS } from "@/lib/work-slugs";
import { pageMetadata } from "@/lib/site";

/**
 * One dynamic segment for the published work pages (/work/<slug>). The
 * segment list is the canonical WORK_SLUGS; with dynamicParams off, any
 * other slug (an unpublished item included) is a 404 instead of a runtime
 * throw from the content lookup. Scaffold body: the title only, until the
 * work detail page replaces it.
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
  const item = workItem("en", slug);
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
