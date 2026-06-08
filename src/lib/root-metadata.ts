import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Base metadata shared by every root layout (the EN `(site)` shell and the HE
 * `(he)` shell). Defined ONCE so the title template, description, metadataBase,
 * and Twitter card live in one place; per-route `metadata` exports merge over it
 * via `pageMetadata(path)`.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "y[AI]r studio",
    template: "%s · y[AI]r studio",
  },
  description: "AI systems for real business workflows.",
  // Render shared links as a large card; the image comes from the root
  // opengraph-image.tsx (Twitter falls back to the Open Graph image).
  twitter: { card: "summary_large_image" },
};
