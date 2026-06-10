import type { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * HE catch-all: any URL under /he that no static route claims lands here and
 * renders the branded (he)/not-found.tsx with an HTTP 404. The static /he page
 * always wins route sorting. Metadata is defined here — the segment that calls
 * notFound() — so the 404 carries a real Hebrew title and is never indexed.
 */
export const metadata: Metadata = {
  title: "הדף לא נמצא",
  robots: { index: false },
};

export default function CatchAll() {
  notFound();
}
