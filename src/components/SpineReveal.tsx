"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps a *content* workflow-map spine (the visible .workflow-map panel) and
 * draws it in once, when it scrolls into view. An IntersectionObserver fires a
 * single time then disconnects, adding the `is-inview` class that globals.css
 * hangs the draw-in + approval-pulse off of.
 *
 * Isolated-client-child pattern: WorkflowMap stays a Server Component and passes
 * the already-rendered caption + spine as `children`. Only this thin wrapper is
 * client, mirroring FilmPlayer.
 *
 * Headless-safe: the draw-in keyframes are transform/box-shadow only, so the
 * spine is fully visible even if this never runs (no JS) — the class only *adds*
 * an entrance, it never gates visibility. Above-the-fold spines are covered too:
 * the observer reports the current intersection on its first callback, so a spine
 * already in view draws in on mount.
 */
export default function SpineReveal({
  children,
  ariaLabel,
}: {
  children: ReactNode;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={"workflow-map" + (inView ? " is-inview" : "")}
      {...(ariaLabel ? { role: "group", "aria-label": ariaLabel } : {})}
    >
      {children}
    </div>
  );
}
