import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import YouTubePoster from "./YouTubePoster";
import WorkChips, { StatusChip } from "./WorkChips";
import {
  FEATURE_PORTRAIT_PX,
  FEATURE_WIDE_FR,
  posterSizes,
  spanClasses,
} from "./grid-layout";
import { localePaths } from "@/lib/locale-paths";
import type { CardLayout } from "./grid-layout";
import type { Locale } from "@/content/types";
import type { WorkItem } from "@/content/work";

/** A featured card's column widths, handed to work.css (data-feature) from
    grid-layout.ts, which sizes the poster for them. */
const FEATURE_VARS = {
  "--work-feature-portrait": `${FEATURE_PORTRAIT_PX}px`,
  "--work-feature-poster": `${FEATURE_WIDE_FR.poster}fr`,
  "--work-feature-text": `${FEATURE_WIDE_FR.text}fr`,
} as CSSProperties;

/**
 * The card's picture: the item's own poster, else its film's poster (the
 * self-hosted still, or the YouTube thumbnail). work.ts guarantees an item
 * without a film has its own poster.
 */
function CardPoster({ item, sizes }: { item: WorkItem; sizes: string }) {
  if (item.poster) {
    return <Image className="work-card-poster" src={item.poster} alt="" fill sizes={sizes} />;
  }
  switch (item.source.kind) {
    case "local":
      return (
        <Image className="work-card-poster" src={item.source.poster} alt="" fill sizes={sizes} />
      );
    case "youtube":
      return (
        <YouTubePoster
          className="work-card-poster"
          id={item.source.id}
          aspect={item.aspect}
          sizes={sizes}
        />
      );
    case "none":
      return null;
  }
}

/**
 * One work card: a large poster at the item's own aspect (a 9:16 film is
 * never letterboxed — cover in an aspect frame) with a bottom row over it —
 * the status chip, and a play mark when the piece is a film — then title,
 * the one-line summary (the detail page carries the full brief), and the
 * deliverables chips. The row sits at the bottom because portrait posters
 * often carry the film's own title at the top.
 *
 * The whole card is one link, but the <a> wraps only the title: its ::after
 * stretches over the card (work.css; hence `relative` on the card), so the
 * link's accessible name is the title alone instead of every word on the
 * card.
 */
export default function WorkCard({
  item,
  locale,
  statusLabel,
  deliverablesLabel,
  layout,
}: {
  item: WorkItem;
  locale: Locale;
  statusLabel: string;
  deliverablesLabel: string;
  /** The card's place in its grid (WorkGrid, via gridLayout()). */
  layout: CardLayout;
}) {
  return (
    <li
      className={`work-card relative flex min-w-0 flex-col gap-4 ${spanClasses(layout)}`}
      data-aspect={item.aspect}
      data-feature={layout.feature.join(" ") || undefined}
      style={layout.feature.length > 0 ? FEATURE_VARS : undefined}
    >
      <div className="work-card-media" data-aspect={item.aspect}>
        <CardPoster item={item} sizes={posterSizes(item.aspect, layout)} />
        <div className="absolute inset-x-0 bottom-0 z-1 flex items-center justify-between gap-3 p-4">
          <StatusChip status={item.status} label={statusLabel} />
          {item.source.kind !== "none" ? (
            <span className="work-play work-card-play" aria-hidden="true" />
          ) : null}
        </div>
      </div>
      <div className="work-card-body flex min-w-0 flex-col gap-2">
        <h3 className="work-card-title">
          <Link href={localePaths(`/work/${item.slug}`)[locale]} className="work-card-link">
            {item.title}
          </Link>
        </h3>
        <p className="work-card-summary">{item.summary}</p>
        <WorkChips items={item.deliverables} label={deliverablesLabel} />
      </div>
    </li>
  );
}
