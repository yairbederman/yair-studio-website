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
 * Also the single source for the WhatsApp CTA (label + prefill text):
 * the homepage final band and the /contact surfaces consume the same
 * object per locale instead of restating it.
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
  };
  copyEmail: CopyEmailLabels;
  /** Pause/play labels for the process-film toggle (FilmPlayer). */
  filmControls: { pause: string; play: string };
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
  },
  copyEmail: {
    copy: "Copy",
    copied: "Copied",
    announced: "Email address copied",
  },
  filmControls: { pause: "Pause", play: "Play" },
  whatsappCta: {
    label: "Message on WhatsApp",
    href: waLink("Hi Yair — I'd like to map one workflow."),
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
  },
  copyEmail: {
    copy: "העתקה",
    copied: "הועתק",
    announced: "כתובת המייל הועתקה",
  },
  filmControls: { pause: "השהיה", play: "הפעלה" },
  whatsappCta: {
    label: "הודעה בוואטסאפ",
    href: waLink("היי יאיר, אשמח למפות תהליך אחד בעסק."),
  },
};

const SHELL: Partial<Record<Locale, ShellContent>> = { en, he };

/** Resolve the shared shell content for a locale. */
export const shellContent = localeAccessor("shellContent", SHELL);
