import Link from "next/link";
import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import WorkGrid from "@/components/work/WorkGrid";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * Work band — the first three published work items (WorkGrid over
 * src/content/work.ts, which owns their order and status labels), a link to
 * the full /work index, and the candour note beside it: what the live,
 * prototype and concept chips mean, and the live system the grid does not
 * show. The note turns the evidence gap into an honest label instead of
 * hiding it (the "why so many concepts?" pattern). It is a plain div headed
 * by its h3: a named <aside> here would be a complementary landmark nested
 * inside <main>.
 */
export default function WorkSection({
  locale,
  content,
}: {
  locale: Locale;
  content: HomeContent["work"];
}) {
  return (
    <section
      className="section home-work"
      id="work"
      aria-labelledby="work-title"
    >
      <Container>
        <SpineReveal className="section-head">
          <h2 id="work-title">{content.title}</h2>
          <p className="section-intro">{content.intro}</p>
        </SpineReveal>
        <WorkGrid locale={locale} limit={3} />
        <div className="mt-10 grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-start md:gap-12">
          <p className="home-work-all">
            <Link href={content.allLink.href}>
              {content.allLink.label}
              <span className="home-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </p>
          <div className="home-candour ps-5 md:ps-6">
            <h3 className="home-candour-title">{content.candour.title}</h3>
            <p className="home-candour-body mt-2">{content.candour.body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
