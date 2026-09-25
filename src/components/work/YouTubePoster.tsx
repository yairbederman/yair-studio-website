"use client";

import Image from "next/image";
import { useState } from "react";
import { youtubeFallbackPoster, youtubePoster } from "./youtube";
import type { WorkAspect } from "@/content/work";

/**
 * A YouTube film's poster, through next/image (remote, optimized). Starts
 * with the best variant for the film's aspect and swaps to the thumbnail
 * every video has if that one fails to load, so a missing variant never
 * leaves a broken image (see youtube.ts). Decorative: the caller names the
 * film (card title, play button label).
 */
export default function YouTubePoster({
  id,
  aspect,
  sizes,
  className,
  preload,
}: {
  id: string;
  aspect: WorkAspect;
  sizes: string;
  className?: string;
  /** Above-the-fold poster (the detail page's media) — fetch it first. */
  preload?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <Image
      className={className}
      src={failed ? youtubeFallbackPoster(id) : youtubePoster(id, aspect)}
      alt=""
      fill
      sizes={sizes}
      preload={preload}
      onError={failed ? undefined : () => setFailed(true)}
    />
  );
}
