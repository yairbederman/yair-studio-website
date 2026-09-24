import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import CTAButton from "@/components/CTAButton";
import ProcessFilm from "@/components/ProcessFilm";
import { shellContent } from "@/content/shell";
import type { HomeContent } from "@/content/home";
import type { Locale } from "@/content/types";

/**
 * Homepage proof band — the Command Center film, the studio's working face,
 * with its build status as a visible chip (the same chip shape that labels
 * sample data: a status must read as a status, never as a finished product).
 * The film carries the phone cut when the content provides one; the ghost
 * link under it leads to the page where the film lives in context.
 */
export default function ProofFilmSection({
  content,
  locale,
}: {
  content: HomeContent["proof"];
  locale: Locale;
}) {
  return (
    <section className="section" id="proof" aria-labelledby="proof-title">
      <Container>
        <SpineReveal className="section-head">
          <h2 id="proof-title">{content.title}</h2>
          <p className="film-status">
            <span className="sample-badge">{content.status}</span>
          </p>
          <p className="section-intro">{content.intro}</p>
        </SpineReveal>
        <ProcessFilm
          webm={content.film.webm}
          mp4={content.film.mp4}
          poster={content.film.poster}
          caption={content.film.caption}
          filmName={content.film.filmName}
          controls={shellContent(locale).filmControls}
          mobile={content.film.mobile}
        />
        <CTAButton href={content.link.href} variant="ghost">
          {content.link.label}
        </CTAButton>
      </Container>
    </section>
  );
}
