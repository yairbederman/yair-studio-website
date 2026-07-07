import type { NextConfig } from "next";
import { localePaths } from "./src/lib/locale-paths";

/**
 * Permanent redirects for the 2026-07 offer restructure (six retired offer
 * routes → their nearest live successor). One EN entry per retired route;
 * the /he mirror derives through localePaths — the single home of the
 * EN↔HE pairing rule — so the pairs can never drift from the site's scheme.
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
  "/offers/content-ad-operations": "/offers/linkedin-content-engine",
};

// NOTE: destinations are not build-validated (importing PAGES from
// src/lib/site.ts is blocked: the config transpiler does not resolve the
// "@/" alias in site.ts's transitive imports). If a destination route is
// ever renamed, update this map in the same change — a permanent redirect
// into a 404 is cached forever by clients.

const nextConfig: NextConfig = {
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
