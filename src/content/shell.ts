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
 * Also the single source for the site-wide workflow CTA and WhatsApp CTA:
 * homepage, offer, and contact surfaces consume the same locale-resolved
 * labels and destinations instead of restating them.
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
      { label: "Workflows", href: "/workflows" },
      { label: "Offers", href: "/offers" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  footer: {
    tag: "AI systems for real business workflows",
    ariaLabel: "Footer",
    links: [
      { label: "Offers", href: "/offers" },
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
  workflowCta: { label: "Send one stuck workflow", href: "/contact" },
  whatsappCta: {
    label: "Message on WhatsApp",
    href: waLink("Hi Yair, I'd like to map one workflow."),
  },
};

const he: ShellContent = {
  brandHref: "/he",
  skipLink: "דלג לתוכן",
  nav: {
    ariaLabel: "ניווט ראשי",
    links: [
      { label: "תהליכי עבודה", href: "/he/workflows" },
      { label: "שירותים", href: "/he/offers" },
      { label: "אודות", href: "/he/about" },
      { label: "צור קשר", href: "/he/contact" },
    ],
  },
  footer: {
    tag: "מערכות AI לתהליכי עבודה אמיתיים",
    ariaLabel: "קישורים בתחתית",
    links: [
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
  workflowCta: { label: "שלחו תהליך אחד שנתקע", href: "/he/contact" },
  whatsappCta: {
    label: "שלחו בוואטסאפ",
    href: waLink("היי יאיר, יש לי תהליך אחד שמעצבן את העסק. אשמח למפות אותו."),
  },
};

const SHELL: Partial<Record<Locale, ShellContent>> = { en, he };

/** Resolve the shared shell content for a locale. */
export const shellContent = localeAccessor("shellContent", SHELL);
