import { Fragment, type CSSProperties } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import CTAButton from "@/components/CTAButton";
import { splitAccent, type HomeContent } from "@/content/home";

/**
 * Hero: one service in one line, set large, over a drawn grid. A Server
 * Component end to end — the whole entrance is CSS keyframes in
 * src/styles/home.css (.home-hero), so there is no client JS, no timer, and
 * the complete H1 text is in the first HTML (it is the LCP element).
 *
 * The H1 is split into one inline-block <span> per word, each carrying its
 * index as --i; the stylesheet turns that into an animation-delay. The spans
 * stay in the accessibility tree and the spaces between them are real text,
 * so the heading reads as one string. The word that content.titleAccent
 * names gets an <em class="accent"> inside its own span, so it reveals with
 * the rest; trailing punctuation stays in that span, outside the accent
 * colour (splitAccent).
 *
 * The decorative layer (aria-hidden, pointer-events: none) is an SVG grid
 * whose lines draw in, copper detail dots on four intersections (the site's
 * approval-dot motif), a few floating dots that drift once, and four
 * L-shaped corner marks. The grid is anchored to the inline-end side and
 * mirrored on /he, so the dots always sit away from the copy; the corners
 * use logical borders, so they mirror without a rule of their own.
 * prefers-reduced-motion shows all of it in its final state at once.
 */
export default function HeroSection({
  content,
}: {
  content: HomeContent["hero"];
}) {
  const words = content.title.split(" ");
  return (
    <section
      className="home-hero relative flex items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <HeroBackdrop />
      <Container className="home-hero-inner relative z-1 py-16 md:py-24">
        <p className="eyebrow home-hero-eyebrow">{content.eyebrow}</p>
        <h1 id="hero-title" className="home-hero-title mt-6">
          {words.map((word, i) => {
            const accent = splitAccent(word, content.titleAccent);
            return (
              <Fragment key={i}>
                {i > 0 ? " " : null}
                <span className="home-hero-word" style={stagger(i)}>
                  {accent ? (
                    <>
                      <em className="accent">{accent[0]}</em>
                      {accent[1]}
                    </>
                  ) : (
                    word
                  )}
                </span>
              </Fragment>
            );
          })}
        </h1>
        <p className="home-hero-lead mt-6 md:mt-8">{content.lead}</p>
        <p className="home-hero-status mt-8 inline-flex items-start gap-2 px-3 py-1">
          <span className="home-hero-status-dot" aria-hidden="true" />
          {content.status}
        </p>
        <div className="home-hero-actions mt-6 flex flex-wrap gap-3">
          <CTAButton href={content.primaryCta.href} variant="primary">
            {content.primaryCta.label}
          </CTAButton>
          <CTAButton href={content.secondaryCta.href}>
            {content.secondaryCta.label}
          </CTAButton>
        </div>
        <p className="home-hero-also mt-6">
          <Link href={content.also.href}>
            {content.also.label}
            <span className="home-arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </p>
      </Container>
    </section>
  );
}

/** The --i stagger index a hero keyframe delay multiplies by. */
function stagger(i: number): CSSProperties {
  return { "--i": i } as CSSProperties;
}

/* Grid geometry, in viewBox units. preserveAspectRatio "xMaxYMid slice"
   scales it uniformly to cover the section, anchored to the right edge, so
   at 1440px wide one unit is one pixel and the cells stay square at every
   size. Lines are numbered from the anchored edge inward, so the draw-in
   starts beside the dots and runs toward the copy. */
const VIEW_W = 1440;
const VIEW_H = 880;
const CELL = 80;
const COLUMNS = Array.from(
  { length: VIEW_W / CELL - 1 },
  (_, k) => VIEW_W - (k + 1) * CELL,
);
const ROWS = Array.from({ length: VIEW_H / CELL - 1 }, (_, k) => (k + 1) * CELL);

/** Copper detail dots, each on a grid intersection, clear of the copy. */
const DETAIL_DOTS: readonly (readonly [number, number])[] = [
  [1280, 160],
  [1360, 480],
  [1120, 560],
  [1200, 720],
];

/** Floating dots, deliberately off the grid. */
const FLOAT_DOTS: readonly (readonly [number, number])[] = [
  [1000, 120],
  [1330, 300],
  [1180, 400],
  [940, 700],
  [1410, 760],
];

/** Where each corner mark sits (logical: start/end mirror on /he). */
const CORNERS = [
  "is-ts top-6 inset-s-6 md:top-8 md:inset-s-8",
  "is-te top-6 inset-e-6 md:top-8 md:inset-e-8",
  "is-bs bottom-6 inset-s-6 md:bottom-8 md:inset-s-8",
  "is-be bottom-6 inset-e-6 md:bottom-8 md:inset-e-8",
] as const;

function HeroBackdrop() {
  return (
    <div
      className="home-hero-deco pointer-events-none absolute inset-0"
      aria-hidden="true"
    >
      <svg
        className="home-hero-grid absolute inset-0 size-full"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMaxYMid slice"
        focusable="false"
      >
        {COLUMNS.map((x, i) => (
          <path
            key={`v${x}`}
            className="home-hero-line"
            d={`M${x} 0V${VIEW_H}`}
            pathLength={1}
            style={stagger(i)}
          />
        ))}
        {ROWS.map((y, i) => (
          <path
            key={`h${y}`}
            className="home-hero-line is-h"
            d={`M${VIEW_W} ${y}H0`}
            pathLength={1}
            style={stagger(i)}
          />
        ))}
        {DETAIL_DOTS.map(([x, y], i) => (
          <g key={`d${x}-${y}`} className="home-hero-detail" style={stagger(i)}>
            <circle className="home-hero-detail-ring" cx={x} cy={y} r={8} />
            <circle cx={x} cy={y} r={3.5} />
          </g>
        ))}
        {FLOAT_DOTS.map(([x, y], i) => (
          <circle
            key={`f${x}-${y}`}
            className="home-hero-float"
            cx={x}
            cy={y}
            r={2}
            style={stagger(i)}
          />
        ))}
      </svg>
      {CORNERS.map((position) => (
        <span
          key={position}
          className={`home-hero-corner absolute size-5 ${position}`}
        />
      ))}
    </div>
  );
}
