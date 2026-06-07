import type { MetadataRoute } from "next";
import { PAGES, SITE_URL } from "@/lib/site";

/**
 * /sitemap.xml — built from the canonical PAGES list so the route set stays in
 * one place. lastModified is intentionally omitted (avoids a churning timestamp
 * on every build); add per-page dates once content stabilizes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: new URL(p.path, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: p.path === "/" ? 1 : 0.7,
  }));
}
