import type { NextConfig } from "next";
import { localePaths } from "./src/lib/locale-paths";

/**
 * Permanent redirects for retired routes → their nearest live successor:
 * the 2026-07 offer restructure (six retired offer routes) and the 2026-09
 * studio redesign (two offers folded away, one page fold). One EN entry per
 * retired route; the /he mirror derives through localePaths — the single
 * home of the EN↔HE pairing rule — so the pairs can never drift from the
 * site's scheme. Every entry points at a FINAL destination (no chains).
 *
 * `permanent: true` emits 308 (Next's recommended permanent redirect;
 * search engines treat it like a 301). Keep these indefinitely — they are
 * config, not pages, and old URLs live on in inboxes and search indexes.
 */
const RETIRED_OFFER_ROUTES: Record<string, string> = {
  "/offers/ai-workflow-audit": "/offers/ai-workflow-sprint",
  "/offers/ai-ops-pilot": "/offers/ai-workflow-sprint",
  "/offers/follow-up-machine": "/offers/ai-office-assistant",
  "/offers/internal-ai-systems": "/offers/ai-office-assistant",
  "/offers/dashboards-automation": "/offers/ai-office-assistant",
  // Content operations live on as the managed office's included content
  // section (id="content" on that page).
  "/offers/content-ad-operations": "/offers/ai-office-assistant#content",
  "/offers/linkedin-content-engine": "/offers/ai-office-assistant#content",
  "/offers/ai-enablement": "/studio/ai-enablement",
  // A page fold, not an offer: the approach page became the
  // process-optimization capability page.
  "/workflows": "/studio/process-optimization",
};

// NOTE: destinations are not build-validated (importing PAGES from
// src/lib/site.ts is blocked: the config transpiler does not resolve the
// "@/" alias in site.ts's transitive imports). If a destination route is
// ever renamed, update this map in the same change — a permanent redirect
// into a 404 is cached forever by clients.

const nextConfig: NextConfig = {
  // Remote images allowed through next/image: only the YouTube thumbnails
  // (i.ytimg.com/vi/<id>/…) used as posters for the YouTube-hosted work films.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
  redirects: async () =>
    Object.entries(RETIRED_OFFER_ROUTES).flatMap(([source, destination]) => [
      { source, destination, permanent: true },
      {
        source: localePaths(source).he,
        destination: localePaths(destination).he,
        permanent: true,
      },
    ]),
};

export default nextConfig;
