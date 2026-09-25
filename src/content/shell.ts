import { SITE_TAGLINE, waLink } from "@/lib/site";
import { localeAccessor } from "@/content/types";
import type { Cta, Locale } from "@/content/types";
import type { CopyEmailLabels } from "@/components/CopyEmail";

/**
 * Shared shell content (header, footer, skip link, CopyEmail labels) —
 * typed and locale-keyed, so both root layouts render the SAME shell
 * components (SiteHeader / SiteFooter) with locale-appropriate strings
 * and locale-prefixed routes.
 *
 * Also the single source for the site-wide scoping-call CTA (`workflowCta`,
 * the first rung of the ladder) and the WhatsApp CTA: homepage, service,
 * work, and contact surfaces consume the same locale-resolved labels and
 * destinations instead of restating them. The footer tag is the site
 * tagline (SITE_TAGLINE in src/lib/site.ts).
 */

export type ShellContent = {
  /** Brand link destination — the locale's homepage. */
  brandHref: string;
  skipLink: string;
  nav: { ariaLabel: string; links: readonly Cta[] };
  footer: {
    tag: string;
    ariaLabel: string;
    links: readonly Cta[];
    whatsappLabel: string;
    linkedinLabel: string;
  };
  copyEmail: CopyEmailLabels;
  /** Pause/play labels for the process-film toggle (FilmPlayer). */
  filmControls: { pause: string; play: string };
  /** Primary action used across homepage, services, and contact surfaces. */
  workflowCta: Cta;
  /** The WhatsApp secondary CTA used on the homepage final band and /contact. */
  whatsappCta: Cta;
};

// The header nav and the footer list the same four routes — one list per
// locale, shared by both.
const EN_LINKS: readonly Cta[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HE_LINKS: readonly Cta[] = [
  { label: "עבודות", href: "/he/work" },
  { label: "שירותים", href: "/he/services" },
  { label: "אודות", href: "/he/about" },
  { label: "צור קשר", href: "/he/contact" },
];

const en: ShellContent = {
  brandHref: "/",
  skipLink: "Skip to content",
  nav: {
    ariaLabel: "Primary",
    links: EN_LINKS,
  },
  footer: {
    tag: SITE_TAGLINE.en,
    ariaLabel: "Footer",
    links: EN_LINKS,
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
  },
  copyEmail: {
    copy: "Copy",
    copied: "Copied",
    announced: "Email address copied",
  },
  filmControls: { pause: "Pause", play: "Play" },
  workflowCta: { label: "Book a scoping call", href: "/contact" },
  whatsappCta: {
    label: "Message on WhatsApp",
    href: waLink(
      "Hi Yair, I'd like to book a scoping call about one workflow in my office.",
    ),
  },
};

const he: ShellContent = {
  brandHref: "/he",
  skipLink: "דלג לתוכן",
  nav: {
    ariaLabel: "ניווט ראשי",
    links: HE_LINKS,
  },
  footer: {
    tag: SITE_TAGLINE.he,
    ariaLabel: "קישורים בתחתית",
    links: HE_LINKS,
    whatsappLabel: "וואטסאפ",
    linkedinLabel: "לינקדאין",
  },
  copyEmail: {
    copy: "העתקה",
    copied: "הועתק",
    announced: "כתובת המייל הועתקה",
  },
  filmControls: { pause: "השהיה", play: "הפעלה" },
  workflowCta: { label: "לקבוע שיחת אפיון", href: "/he/contact" },
  whatsappCta: {
    label: "שלחו בוואטסאפ",
    href: waLink("היי יאיר, אשמח לקבוע שיחת אפיון על תהליך אחד במשרד."),
  },
};

const SHELL: Partial<Record<Locale, ShellContent>> = { en, he };

/** Resolve the shared shell content for a locale. */
export const shellContent = localeAccessor("shellContent", SHELL);
