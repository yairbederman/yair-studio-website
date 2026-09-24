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
 * Optional phone cut (`mobile`): a second source set + poster served under
 * 768px. The choice is resolved in the SAME post-hydration effect as the
 * reduced-motion check, so it is known before the <video> mounts (a <video>
 * reads its <source> list once); if the viewport later crosses the breakpoint
 * the element is re-keyed so it re-reads them. Both posters render on the
 * server and CSS gates the inactive one (.film-poster--desktop / --mobile), so
 * SSR shows the right still with no flash. `intro` has no mobile counterpart.
 *
 * `autoplay={false}` (poster-first, click-to-play): the <video> stays
 * unmounted until the user presses Play — never a second autoplaying film on
 * a page — and from that press on it behaves exactly like the autoplay path.
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
  /** Optional phone cut (4:5) served under 768px. */
  mobile,
  /** false = poster-first, click-to-play (the <video> mounts on Play). */
  autoplay = true,
}: {
  mp4: string;
  webm: string;
  poster: string;
  filmName?: string;
  /** Localized toggle labels — pass shellContent(locale).filmControls. */
  controls: { pause: string; play: string };
  frameClassName?: string;
  intro?: { mp4: string; webm: string };
  mobile?: { mp4: string; webm: string; poster: string };
  autoplay?: boolean;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [useMobile, setUseMobile] = useState(false);
  // autoplay={false}: flips on the first Play press and never flips back.
  const [requested, setRequested] = useState(false);
  const [playing, setPlaying] = useState(false);
  // When an intro is present it plays first; once it ends we swap to the film.
  const [introEnded, setIntroEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const hasMobile = Boolean(mobile);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    // Same breakpoint as the .film-frame.has-mobile rules in globals.css — change both together.
    const phone = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      setShowVideo(motion.matches);
      setUseMobile(hasMobile && phone.matches);
    };
    apply();
    motion.addEventListener("change", apply);
    phone.addEventListener("change", apply);
    return () => {
      motion.removeEventListener("change", apply);
      phone.removeEventListener("change", apply);
    };
  }, [hasMobile]);

  // A variant switch re-keys the <video>; the fresh element reports its own
  // play state, so the label must not inherit the old element's.
  const [labelledVariant, setLabelledVariant] = useState(useMobile);
  if (labelledVariant !== useMobile) {
    setLabelledVariant(useMobile);
    setPlaying(false);
  }

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

  // Autoplay films mount only when motion is allowed; a click-to-play film
  // mounts on an explicit Play press even under reduced motion (the press is
  // the consent), so the control below is shown for either case.
  const mountVideo = autoplay ? showVideo : requested;
  const showControl = showVideo || !autoplay;
  const showIntro = Boolean(intro) && !introEnded;
  const main = mobile && useMobile ? mobile : { mp4, webm };
  const activeMp4 = showIntro && intro ? intro.mp4 : main.mp4;
  const activeWebm = showIntro && intro ? intro.webm : main.webm;
  const frameClass = ["film-frame", frameClassName, mobile ? "has-mobile" : undefined]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={frameClass}>
      {/* Base layer — always rendered, so there is never a blank frame. */}
      <Image
        className={mobile ? "film-poster film-poster--desktop" : "film-poster"}
        src={poster}
        alt=""
        aria-hidden="true"
        fill
        sizes="(min-width: 1200px) 1152px, 100vw"
      />
      {mobile ? (
        <Image
          className="film-poster film-poster--mobile"
          src={mobile.poster}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
        />
      ) : null}
      {mountVideo ? (
        <video
          key={useMobile ? "mobile" : "desktop"}
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
      ) : null}
      {showControl ? (
        /* Label swap (Pause ⇄ Play) carries the state — no aria-pressed,
           which would conflict with a changing accessible name. Before a
           click-to-play film is requested the same button reads "Play". */
        <button
          type="button"
          className="btn btn-sm film-toggle"
          onClick={mountVideo ? toggle : () => setRequested(true)}
        >
          {playing ? controls.pause : controls.play}
          <span className="sr-only"> {filmName}</span>
        </button>
      ) : null}
    </div>
  );
}
