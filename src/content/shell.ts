import { waLink } from "@/lib/site";
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
 * the first rung of the ladder) and the WhatsApp CTA: homepage, offer,
 * capability, and contact surfaces consume the same locale-resolved labels
 * and destinations instead of restating them.
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
  /** Primary action used across homepage, offers, and contact surfaces. */
  workflowCta: Cta;
  /** The WhatsApp secondary CTA used on the homepage final band and /contact. */
  whatsappCta: Cta;
};

const en: ShellContent = {
  brandHref: "/",
  skipLink: "Skip to content",
  nav: {
    ariaLabel: "Primary",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Services", href: "/offers" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  footer: {
    tag: "The AI department your office hires",
    ariaLabel: "Footer",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Services", href: "/offers" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
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
    links: [
      { label: "סטודיו", href: "/he/studio" },
      { label: "שירותים", href: "/he/offers" },
      { label: "אודות", href: "/he/about" },
      { label: "צור קשר", href: "/he/contact" },
    ],
  },
  footer: {
    tag: "מחלקת ה-AI שהמשרד שלכם שוכר",
    ariaLabel: "קישורים בתחתית",
    links: [
      { label: "סטודיו", href: "/he/studio" },
      { label: "שירותים", href: "/he/offers" },
      { label: "אודות", href: "/he/about" },
      { label: "צור קשר", href: "/he/contact" },
    ],
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
