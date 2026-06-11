import type { MetadataRoute } from "next";
import { PAGES, SITE_URL, localePaths } from "@/lib/site";

/**
 * /sitemap.xml — built from the canonical PAGES list so the route set stays in
 * one place. Every entry declares its EN/HE language alternates (derived via
 * localePaths, same source as the per-page hreflang). lastModified is
 * intentionally omitted (avoids a churning timestamp on every build); add
 * per-page dates once content stabilizes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => {
    const pair = localePaths(p.path);
    return {
      url: new URL(p.path, SITE_URL).toString(),
      changeFrequency: "monthly",
      priority: p.path === "/" || p.path === "/he" ? 1 : 0.7,
      alternates: {
        // Same cluster the per-page <link rel="alternate"> tags declare —
        // the two hreflang channels must never disagree.
        languages: {
          "en-US": new URL(pair.en, SITE_URL).toString(),
          "he-IL": new URL(pair.he, SITE_URL).toString(),
          "x-default": new URL(pair.en, SITE_URL).toString(),
        },
      },
    };
  });
}
