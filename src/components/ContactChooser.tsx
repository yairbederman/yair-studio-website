"use client";

import { useId, useState } from "react";
import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import type { ContactChannel } from "@/content/contact";

/** One chooser option with both channel links already built (by the server
    page, so this component only swaps plain strings). */
export type ChooserOption = {
  key: string;
  label: string;
  href: Record<ContactChannel, string>;
};

/** The one contact conversion event (Vercel Analytics custom event): which
    channel and which topic. Every /contact channel link reports through it. */
function trackContactClick(channel: ContactChannel, service: string) {
  track("contact_click", { channel, service });
}

/** What names a channel in a link: its scheme and host, whatever the query
    carries — "https:wa.me" for WhatsApp (waLink), "mailto:" for email
    (CONTACT_MAILTO). */
function channelUrl(href: string): string {
  const url = new URL(href);
  return url.protocol + url.host;
}

/**
 * Click tracking for channel links another component renders: the /contact
 * closing band, drawn by the shared server OfferCTA, which has no click
 * handler. One delegated listener on a box-less wrapper (display: contents,
 * so the band's layout is untouched) matches the clicked link against the
 * topic's prebuilt hrefs by URL, not by exact string, so a rewritten query
 * or encoding still counts; anything else in the band (the copy-email
 * button) reports nothing.
 */
export function ContactClickTracker({
  service,
  hrefs,
  children,
}: {
  service: string;
  hrefs: Record<ContactChannel, string>;
  children: ReactNode;
}) {
  return (
    <div
      className="contents"
      onClick={(event) => {
        const link =
          event.target instanceof Element ? event.target.closest("a[href]") : null;
        if (!(link instanceof HTMLAnchorElement)) return;
        const target = channelUrl(link.href);
        const channel = (Object.keys(hrefs) as ContactChannel[]).find(
          (c) => channelUrl(hrefs[c]) === target,
        );
        if (channel) trackContactClick(channel, service);
      }}
    >
      {children}
    </div>
  );
}

/**
 * The /contact topic chooser: a native radio group (fieldset + legend, so
 * arrow keys, Tab and screen-reader grouping come from the platform) that
 * swaps the WhatsApp and email links to the selected topic's prefilled
 * message. The first channel renders as the primary button, the second as
 * the ghost, in the order the content gives (EN email-first, HE
 * WhatsApp-first).
 *
 * The server HTML already carries the default topic's working links, so the
 * buttons work before hydration and with JS off. No form, no query string:
 * the page stays static. Each click reports which channel and topic
 * converted (Vercel Analytics custom event).
 */
export default function ContactChooser({
  legend,
  hint,
  options,
  defaultKey,
  channels,
}: {
  legend: string;
  hint: string;
  options: readonly ChooserOption[];
  /** The preselected option's key ("not sure yet"). */
  defaultKey: string;
  channels: readonly { channel: ContactChannel; label: string }[];
}) {
  const name = useId();
  const [selected, setSelected] = useState(defaultKey);
  const current = options.find((o) => o.key === selected) ?? options[0];

  return (
    <div className="contact-chooser flex basis-full flex-col items-start gap-4">
      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="mb-3 p-0">{legend}</legend>
        <div className="flex flex-wrap gap-2">
          {options.map((o) => (
            <label key={o.key} className="contact-topic relative inline-flex">
              <input
                type="radio"
                name={name}
                value={o.key}
                checked={o.key === current.key}
                onChange={() => setSelected(o.key)}
                className="contact-topic-input absolute inset-0 m-0 size-full opacity-0"
              />
              <span className="contact-topic-chip">
                <span className="contact-topic-dot" aria-hidden="true" />
                {o.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-wrap gap-3">
        {channels.map(({ channel, label }, i) => (
          <a
            key={channel}
            href={current.href[channel]}
            className={i === 0 ? "btn btn-primary" : "btn btn-ghost"}
            onClick={() => trackContactClick(channel, current.key)}
            {...(channel === "whatsapp"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {label}
          </a>
        ))}
      </div>
      <p className="contact-hint">{hint}</p>
    </div>
  );
}
