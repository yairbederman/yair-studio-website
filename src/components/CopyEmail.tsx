"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Visible email address + a copy-to-clipboard affordance, for users whose
 * machines have no configured mail client (where a mailto: link silently
 * fails). Renders the address as selectable text so it works with zero JS too.
 *
 * Copy path: navigator.clipboard with a text-selection fallback. The result is
 * announced via an sr-only status region and a visible label swap; the label
 * reverts after a short pause so repeated copies re-announce.
 */
export type CopyEmailLabels = {
  copy: string;
  copied: string;
  announced: string;
};

export default function CopyEmail({
  email,
  labels,
}: {
  email: string;
  /** Localized button/announcement strings — pass shellContent(locale).copyEmail.
      REQUIRED so the strings have exactly one source (src/content/shell.ts). */
  labels: CopyEmailLabels;
}) {
  const [copied, setCopied] = useState(false);
  const addressRef = useRef<HTMLSpanElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  function selectAddress() {
    const node = addressRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  }

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      // No clipboard permission/API — select the address so a manual
      // Ctrl/Cmd+C still works.
      selectAddress();
    }
    if (ok) {
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <span className="copy-email">
      {/* LTR-isolated so the address renders intact inside an RTL document
          (same guard the footer applies to its visible address). */}
      <span ref={addressRef} className="copy-email-address ltr-inline">
        {email}
      </span>
      <button type="button" className="btn btn-sm" onClick={copy}>
        {copied ? labels.copied : labels.copy}
      </button>
      <span role="status" className="sr-only">
        {copied ? labels.announced : ""}
      </span>
    </span>
  );
}
