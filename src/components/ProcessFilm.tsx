import FilmPlayer from "@/components/FilmPlayer";

/**
 * ProcessFilm — a looping process film embedded in a content section. The
 * motion is decorative; the <figcaption> carries the accessible idea, so
 * screen-reader, reduced-motion, and mobile users still get the message
 * (poster still + caption).
 *
 * The frame, gating (poster-only on <768px or reduced motion), source order,
 * and the pause/play control live in FilmPlayer; this component adds the
 * figure/caption shell. Styles: `.workflow-film` / `.film-*` in globals.css.
 */
export default function ProcessFilm({
  webm,
  mp4,
  poster,
  caption,
  filmName,
}: {
  webm: string;
  mp4: string;
  poster: string;
  caption: string;
  /** Accessible name for the pause/play toggle; defaults inside FilmPlayer. */
  filmName?: string;
}) {
  return (
    <figure className="workflow-film process-film">
      <FilmPlayer mp4={mp4} webm={webm} poster={poster} filmName={filmName} />
      <figcaption className="film-caption">{caption}</figcaption>
    </figure>
  );
}
