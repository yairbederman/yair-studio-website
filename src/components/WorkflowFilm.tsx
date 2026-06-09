/**
 * The "process film" — a looping, muted, decorative video that shows the Meeting
 * Follow-up workflow running end to end (scatter → flow → human-approval peak →
 * tasks resolved).
 *
 * Authored as a HyperFrames composition (hyperframes/meeting-workflow) and rendered
 * to a transparent WebM (+ MP4 fallback on charcoal) under /public/videos.
 *
 * Decorative by design: the static <WorkflowMap> beside it carries the semantic
 * content, so the figure is aria-hidden and non-focusable. Motion-sensitive users
 * never see autoplay — the poster still is shown instead, CSS-gated via
 * prefers-reduced-motion (see .workflow-film in globals.css).
 *
 * The frame background is --bg-0 (the charcoal the film was composed against) so the
 * transparent video's --bg-1 chips/cards keep their contrast.
 */
const BASE = "/videos/meeting-follow-up-workflow";

export default function WorkflowFilm() {
  return (
    <figure className="workflow-film" aria-hidden="true">
      <span className="sch-cap">Workflow in motion</span>
      <div className="film-frame">
        <video
          className="film-video"
          poster={`${BASE}-poster.png`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          <source src={`${BASE}.webm`} type="video/webm" />
          <source src={`${BASE}.mp4`} type="video/mp4" />
        </video>
        {/* Reduced-motion still — CSS background-image, shown only when motion is
            reduced (so the poster isn't fetched for the motion-allowed majority). */}
        <div className="film-poster" />
      </div>
    </figure>
  );
}
