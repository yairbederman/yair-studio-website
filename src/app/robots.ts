import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * /robots.txt — allow all crawlers (AI crawlers included; no reason to block
 * any) and point them at the sitemap.
 *
 * Deliberately ALLOWS crawling even while the sample-data gate is on: the
 * keep-out-of-the-index mechanism is the meta-robots noindex in
 * src/lib/root-metadata.ts, and a crawler can only see a noindex on pages it
 * is allowed to fetch. A robots.txt disallow would instead produce "indexed,
 * though blocked by robots.txt" the moment anyone links the staging URL —
 * the exact outcome the gate exists to prevent.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
