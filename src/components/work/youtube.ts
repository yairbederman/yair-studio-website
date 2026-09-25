import type { WorkAspect } from "@/content/work";

/**
 * YouTube thumbnail URLs for a work film — i.ytimg.com/vi/<id>/…, the one
 * remote pattern next.config.ts allows.
 *
 * A portrait film uses `oar2`, YouTube's original-aspect frame (1080×1920 or
 * 720×1280 for the current uploads), so a 9:16 poster is never letterboxed;
 * a landscape film uses `maxresdefault` (1280×720). Neither exists for every
 * upload, so `hqdefault`, which every video has, is the fallback: its 4:3
 * frame letterboxes the film, and the object-fit: cover aspect frame crops
 * exactly those bars away (at a lower resolution).
 */
export function youtubePoster(id: string, aspect: WorkAspect): string {
  const variant = aspect === "16:9" ? "maxresdefault" : "oar2";
  return `https://i.ytimg.com/vi/${id}/${variant}.jpg`;
}

/** The thumbnail every YouTube video has — the fallback for youtubePoster(). */
export function youtubeFallbackPoster(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
