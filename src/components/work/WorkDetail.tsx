import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Container from "@/components/Container";
import FilmPlayer from "@/components/FilmPlayer";
import OfferCTA from "@/components/offers/OfferCTA";
import YouTubeLite from "./YouTubeLite";
import WorkChips, { StatusChip } from "./WorkChips";
import { DETAIL_PORTRAIT_MAX_PX } from "./grid-layout";
import { serviceCard } from "@/content/service-cards";
import { shellContent } from "@/content/shell";
import { workIndexContent, workItem } from "@/content/work";
import { localePaths } from "@/lib/locale-paths";
import type { Locale } from "@/content/types";
import type { WorkItem } from "@/content/work";

// A portrait frame never grows past DETAIL_PORTRAIT_MAX_PX wide (grid-layout.ts,
// handed to work.css as --work-detail-portrait-max); a 16:9 one runs the
// full 1152px content width.
const PORTRAIT_SIZES = `(min-width: 480px) ${DETAIL_PORTRAIT_MAX_PX}px, 100vw`;
const WIDE_SIZES = "(min-width: 1200px) 1152px, 100vw";
const MEDIA_VARS = {
  "--work-detail-portrait-max": `${DETAIL_PORTRAIT_MAX_PX}px`,
} as CSSProperties;

/**
 * The piece itself: a self-hosted film plays in FilmPlayer exactly as on the
 * managed-office page (muted loop, pause control, the 4:5 phone cut under
 * 768px); a YouTube film is click-to-play (YouTubeLite); a piece without a
 * film shows its poster.
 */
function WorkMedia({ item, locale }: { item: WorkItem; locale: Locale }) {
  const c = workIndexContent(locale);
  const sizes = item.aspect === "16:9" ? WIDE_SIZES : PORTRAIT_SIZES;
  switch (item.source.kind) {
    case "local":
      return (
        <div className="workflow-film work-detail-film">
          <FilmPlayer
            mp4={item.source.mp4}
            webm={item.source.webm}
            poster={item.source.poster}
            filmName={item.title}
            controls={shellContent(locale).filmControls}
            mobile={item.source.mobile}
          />
        </div>
      );
    case "youtube":
      return (
        <YouTubeLite
          id={item.source.id}
          slug={item.slug}
          aspect={item.aspect}
          playLabel={c.detail.play(item.title)}
          frameTitle={c.detail.frameTitle(item.title)}
          sizes={sizes}
        />
      );
    case "none":
      return item.poster ? (
        <div className="work-detail-poster" data-aspect={item.aspect}>
          <Image className="work-detail-poster-img" src={item.poster} alt="" fill sizes={sizes} preload />
        </div>
      ) : null;
  }
}

/**
 * /work/<slug> page body (both locales): back link, status chip, title and
 * brief, the piece, then its facts (role, language, deliverables) and a
 * closing band — the scoping call, plus the service that makes this kind of
 * work. A portrait film sits beside the text from 900px (work.css); a 16:9
 * piece runs full width between them.
 */
export default function WorkDetail({ locale, slug }: { locale: Locale; slug: string }) {
  const item = workItem(locale, slug);
  const c = workIndexContent(locale);
  const cta = c.detail.cta[item.category];
  const serviceLink = serviceCard(locale, cta.service);
  const scopingCall = shellContent(locale).workflowCta;
  return (
    <main id="main">
      <article className="work-detail" data-aspect={item.aspect} aria-labelledby="work-item-title">
        <Container>
          <Link href={localePaths("/work")[locale]} className="work-back">
            {c.detail.back}
          </Link>
          <div className="work-detail-layout">
            <header className="work-detail-head">
              <StatusChip status={item.status} label={c.status[item.status]} />
              <h1 id="work-item-title">{item.title}</h1>
              <p className="lead work-detail-brief">{item.brief}</p>
            </header>
            <div className="work-detail-media" style={MEDIA_VARS}>
              <WorkMedia item={item} locale={locale} />
            </div>
            <dl className="work-facts">
              <div className="work-fact">
                <dt>{c.detail.role}</dt>
                <dd>{item.role}</dd>
              </div>
              <div className="work-fact">
                <dt>{c.detail.language}</dt>
                <dd>{item.language}</dd>
              </div>
              <div className="work-fact work-fact--deliverables">
                <dt>{c.deliverables}</dt>
                <dd>
                  <WorkChips items={item.deliverables} />
                </dd>
              </div>
            </dl>
          </div>
        </Container>
      </article>

      <OfferCTA
        heading={cta.heading}
        body={cta.body}
        ctaLabel={scopingCall.label}
        ctaHref={scopingCall.href}
        secondaryCta={{ label: serviceLink.cta, href: serviceLink.href }}
      />
    </main>
  );
}
