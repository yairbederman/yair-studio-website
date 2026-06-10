import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * EN catch-all: any URL under the English root that no static route claims
 * lands here and renders the branded (site)/not-found.tsx with an HTTP 404.
 * Static segments always win route sorting, so every real page (including
 * /llms.txt, /opengraph-image, and /he, which lives in its own root) is
 * unaffected. Metadata is defined here — the segment that calls notFound() —
 * so the 404 carries a real title and is never indexed.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function CatchAll() {
  notFound();
}
