"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal-on-scroll primitive: adds the `is-inview` class once, when the wrapped
 * panel first scrolls into view. An IntersectionObserver fires a single time then
 * disconnects; globals.css hangs the entrance off `is-inview`. `className`
 * defaults to the workflow-map spine (draw-in + approval-pulse) but any panel can
 * reuse this — the safety band passes `panel-list safety-guards` for its copper
 * marker stagger, and every `.section-head` passes `section-head` for the Phase D
 * settle (child rise + the copper human-control underline on .safety / #human).
 *
 * Isolated-client-child pattern: the caller (WorkflowMap, SafetySection, and the
 * section-head of every home / offer section) stays a Server Component and passes
 * its already-rendered content as `children`. Only this thin wrapper is client,
 * mirroring FilmPlayer.
 *
 * Headless-safe: every entrance keyframe is transform/box-shadow only, so the
 * content is fully visible even if this never runs (no JS) — the class only *adds*
 * an entrance, it never gates visibility. Above-the-fold panels are covered too:
 * the observer reports the current intersection on its first callback, so a panel
 * already in view reveals on mount.
 */
export default function SpineReveal({
  children,
  ariaLabel,
  className = "workflow-map",
}: {
  children: ReactNode;
  ariaLabel?: string;
  /** Base class on the wrapper; `is-inview` is appended on entry. */
  className?: string;
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
      className={className + (inView ? " is-inview" : "")}
      {...(ariaLabel ? { role: "group", "aria-label": ariaLabel } : {})}
    >
      {children}
    </div>
  );
}
