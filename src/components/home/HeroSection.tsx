import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTAButton from "@/components/CTAButton";
import WorkflowMap from "@/components/WorkflowMap";
import FilmPlayer from "@/components/FilmPlayer";
import { shellContent } from "@/content/shell";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * Hero: explains what y[AI]r studio does in one screen. Copy-first.
 *
 * Behind the copy sits the ambient backdrop loop (hero-ambient) — a quiet,
 * text-free video that makes the most-seen screen feel alive. It rides the
 * existing FilmPlayer pipeline: poster-first, reduced-motion users get the
 * poster only (no video bytes), and a pause control stays operable (WCAG
 * 2.2.2). A scrim over the text zone (mirrored for RTL) keeps the copy legible.
 * The asset is text-free, so one file serves both locales; only the pause/play
 * labels are localized (via `locale`).
 *
 * The schematic on the right is the restrained CSS-only process motif rendered
 * via <WorkflowMap decorative> (aria-hidden, hidden on mobile): scattered inputs
 * flow through a mapped workflow into clear next actions, with a copper
 * human-approval checkpoint that makes the human-in-the-loop principle visible.
 * Copy + CTA destinations come from the locale content model.
 */
export default function HeroSection({
  content,
  locale,
}: {
  content: HomeContent["hero"];
  locale: Locale;
}) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Ambient backdrop — decorative (poster/video are aria-hidden inside
          FilmPlayer); the pause toggle stays operable. */}
      <FilmPlayer
        frameClassName="hero-backdrop"
        mp4="/videos/hero-ambient.mp4"
        webm="/videos/hero-ambient.webm"
        poster="/videos/hero-ambient-poster.png"
        filmName="ambient background"
        controls={shellContent(locale).filmControls}
      />
      {/* Legibility scrim over the text zone + a fade into the next section. */}
      <div className="hero-scrim" aria-hidden="true" />

      <Container className="hero-inner">
        <div className="hero-copy">
          <SectionLabel>{content.eyebrow}</SectionLabel>
          <h1 id="hero-title">{content.title}</h1>
          <p className="lead hero-lead">{content.lead}</p>
          <div className="hero-actions">
            <CTAButton href={content.primaryCta.href} variant="primary">
              {content.primaryCta.label}
            </CTAButton>
            <CTAButton href={content.secondaryCta.href} variant="ghost">
              {content.secondaryCta.label}
            </CTAButton>
          </div>
        </div>

        <WorkflowMap
          decorative
          caption={content.schematic.caption}
          nodes={content.schematic.nodes}
        />
      </Container>
    </section>
  );
}
