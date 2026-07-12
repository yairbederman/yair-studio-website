"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders the sticky site header and, on mobile, auto-hides it while the reader
 * scrolls down — reclaiming the ~112px the wrapped nav otherwise costs on a
 * small screen. Any upward scroll brings it back, and it is always visible near
 * the top of the page. The hide itself is a CSS transform gated to the mobile
 * media query (globals.css); this component only toggles the `is-hidden` class,
 * so desktop is untouched. Keyboard focus is handled in CSS (`:focus-within`),
 * so tabbing into the nav always reveals it even mid-hide.
 *
 * Isolated-client-child pattern: SiteHeader stays a Server Component and passes
 * the brand + nav as `children`. The scroll listener is passive and rAF-throttled.
 */
export default function HeaderAutoHide({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      rafId.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const prev = lastY.current;
        if (y < 100) {
          setHidden(false); // always visible near the top
        } else if (y > prev + 4) {
          setHidden(true); // scrolling down — yield the screen
        } else if (y < prev - 4) {
          setHidden(false); // any upward scroll brings it back
        }
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <header className={"site-nav" + (hidden ? " is-hidden" : "")}>
      {children}
    </header>
  );
}
