"use client";

import { track } from "@vercel/analytics";
import { useEffect, useRef, useState } from "react";
import YouTubePoster from "./YouTubePoster";
import type { WorkAspect } from "@/content/work";

/**
 * Click-to-play YouTube film. The server HTML holds only a real <button>
 * over the poster: nothing is requested from YouTube's player (no iframe, no
 * script, no cookie) until the visitor presses it. The press swaps in the
 * privacy-enhanced youtube-nocookie.com embed, already playing, moves focus
 * into it so a keyboard user lands in the player, and records one
 * `work_film_play` event.
 *
 * The frame keeps the film's own aspect, so a 9:16 film plays portrait
 * instead of letterboxed in a 16:9 box.
 */
export default function YouTubeLite({
  id,
  slug,
  aspect,
  playLabel,
  frameTitle,
  sizes,
}: {
  id: string;
  /** Work slug — the analytics property. */
  slug: string;
  aspect: WorkAspect;
  /** Accessible name of the play button, e.g. "Play Dallal". */
  playLabel: string;
  /** Title attribute of the player once it loads. */
  frameTitle: string;
  /** Poster `sizes`, matching the frame's width in the layout. */
  sizes: string;
}) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);

  // The button unmounts on press; hand focus to the player that replaced it.
  useEffect(() => {
    if (playing) frameRef.current?.focus();
  }, [playing]);

  function play() {
    setPlaying(true);
    track("work_film_play", { slug });
  }

  return (
    <div className="work-yt" data-aspect={aspect}>
      {playing ? (
        <iframe
          ref={frameRef}
          className="work-yt-frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`}
          title={frameTitle}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" className="work-yt-play" aria-label={playLabel} onClick={play}>
          <YouTubePoster
            className="work-yt-poster"
            id={id}
            aspect={aspect}
            sizes={sizes}
            preload
          />
          <span className="work-play work-yt-icon" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
