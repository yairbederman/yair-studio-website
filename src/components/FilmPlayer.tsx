"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * The film frame shared by every process film: a poster-first media box with a
 * visible pause/play control (WCAG 2.2.2 — moving content must be pausable).
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
}: {
  mp4: string;
  webm: string;
  poster: string;
  filmName?: string;
  /** Localized toggle labels — pass shellContent(locale).filmControls. */
  controls: { pause: string; play: string };
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const apply = () => setShowVideo(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  }

  return (
    <div className="film-frame">
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
            loop
            playsInline
            preload="metadata"
            tabIndex={-1}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={mp4} type="video/mp4" />
            <source src={webm} type="video/webm" />
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
