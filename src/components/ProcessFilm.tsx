/**
 * ProcessFilm — a decorative, looping process video embedded in a content
 * section. The motion is decorative (the <video> is aria-hidden); the
 * <figcaption> carries the accessible idea, so screen-reader and reduced-motion
 * users still get the message (poster still + caption).
 *
 * Reuses the shared `.workflow-film` / `.film-*` styles in globals.css (frame,
 * video, poster, reduced-motion gate) — the per-film poster is passed inline so
 * one set of styles serves multiple films. (The `.workflow-film` class name is
 * historical, shared with the /workflows film; a later pass could rename it to
 * `.process-film` and migrate WorkflowFilm onto this component to dedupe.)
 */
export default function ProcessFilm({
  webm,
  mp4,
  poster,
  caption,
}: {
  webm: string;
  mp4: string;
  poster: string;
  caption: string;
}) {
  return (
    <figure className="workflow-film process-film">
      <div className="film-frame">
        <video
          className="film-video"
          aria-hidden="true"
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
        {/* Reduced-motion still — CSS-gated; poster set inline so the shared
            .film-poster style can serve any film. */}
        <div
          className="film-poster"
          aria-hidden="true"
          style={{ backgroundImage: `url(${poster})` }}
        />
      </div>
      <figcaption className="film-caption">{caption}</figcaption>
    </figure>
  );
}
