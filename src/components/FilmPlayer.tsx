"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * The film frame shared by every process film (and the hero backdrop): a
 * poster-first media box with a visible pause/play control (WCAG 2.2.2 —
 * moving content must be pausable).
 *
 * Loading strategy:
 *   - SSR and first client render show ONLY the poster (a plain <img>), so
 *     reduced-motion users never fetch a byte of video.
 *   - The <video> mounts after hydration, and only when the user has no
 *     reduced-motion preference (checked via matchMedia in an effect — never
 *     during render, so hydration stays clean).
 *   - Sources are mp4-first: the pre-composited mp4 is 2–4× smaller than the
 *     alpha webm and both are rendered against the same --bg-0 charcoal.
 *
 * Optional play-once intro (`intro`): when a caller passes it, the video plays
 * the intro first with loop OFF; on its `ended` event the sources swap to the
 * main film and it loops. The swap is keyed to `ended` only, so an autoplay
 * block simply leaves the intro paused with a working Play control — nothing
 * desyncs. NOTE: no film currently passes `intro`. The wordmark sting was
 * unwired from the flagship (command-center) film in d9d05d6 to stop a poster
 * flicker; the mechanism is kept fully intact for standalone / OG reuse — do
 * not delete or rewire it.
 *
 * The pause/play label follows the <video>'s own play/pause events, so a
 * browser that blocks autoplay correctly shows "Play" instead of lying.
 * The video itself is decorative (aria-hidden) — the caller's caption carries
 * the accessible message — but the toggle is real, focusable UI.
 */
export default function FilmPlayer({
  mp4,
  webm,
  poster,
  /** Accessible name for what the toggle pauses, e.g. "process animation". */
  filmName = "process animation",
  controls,
  /** Extra class on the media frame — a styling hook (e.g. the hero backdrop). */
  frameClassName,
  /** Optional play-once intro shown before the looping film (e.g. the sting). */
  intro,
}: {
  mp4: string;
  webm: string;
  poster: string;
  filmName?: string;
  /** Localized toggle labels — pass shellContent(locale).filmControls. */
  controls: { pause: string; play: string };
  frameClassName?: string;
  intro?: { mp4: string; webm: string };
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  // When an intro is present it plays first; once it ends we swap to the film.
  const [introEnded, setIntroEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const apply = () => setShowVideo(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  // After the intro ends and the sources swap, load + play the looping film.
  useEffect(() => {
    if (!introEnded) return;
    const video = videoRef.current;
    if (!video) return;
    video.load();
    void video.play();
  }, [introEnded]);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  function handleEnded() {
    // Only the play-once intro fires `ended` (the film loops); swap to the film.
    if (intro && !introEnded) setIntroEnded(true);
  }

  const showIntro = Boolean(intro) && !introEnded;
  const activeMp4 = showIntro && intro ? intro.mp4 : mp4;
  const activeWebm = showIntro && intro ? intro.webm : webm;

  return (
    <div className={frameClassName ? `film-frame ${frameClassName}` : "film-frame"}>
      {/* Base layer — always rendered, so there is never a blank frame. */}
      <Image
        className="film-poster"
        src={poster}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1200px) 1152px, 100vw"
      />
      {showVideo ? (
        <>
          <video
            ref={videoRef}
            className="film-video"
            aria-hidden="true"
            autoPlay
            muted
            loop={intro ? introEnded : true}
            playsInline
            preload="metadata"
            tabIndex={-1}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={handleEnded}
          >
            <source src={activeMp4} type="video/mp4" />
            <source src={activeWebm} type="video/webm" />
          </video>
          {/* Label swap (Pause ⇄ Play) carries the state — no aria-pressed,
              which would conflict with a changing accessible name. */}
          <button type="button" className="btn btn-sm film-toggle" onClick={toggle}>
            {playing ? controls.pause : controls.play}
            <span className="sr-only"> {filmName}</span>
          </button>
        </>
      ) : null}
    </div>
  );
}
