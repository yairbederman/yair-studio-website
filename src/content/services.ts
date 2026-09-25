import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { offerCard } from "@/content/offer-cards";
import { aiAgentsContent } from "@/content/services/ai-agents";
import { websitesContent } from "@/content/services/websites";
import { filmsContent } from "@/content/services/films";
import type { ServiceKey } from "@/lib/services";
import type { Cta, Locale } from "@/content/types";
import type {
  ServicePageContent,
  ServicesIndexContent,
} from "@/content/services/types";

/**
 * /services — the index page content plus the lookup from a service key
 * (src/lib/services.ts) to its page content file. The three service pages
 * live under src/content/services/*.ts; the index cards come from
 * src/content/service-cards.ts, and the managed-office link from
 * offerCard() (never restated here). The closing CTA is the site-wide
 * scoping-call CTA (src/content/shell.ts).
 */

/** Page content per service key — one file per key. */
const SERVICE_PAGES: Record<ServiceKey, (locale: Locale) => ServicePageContent> =
  {
    "ai-agents": aiAgentsContent,
    websites: websitesContent,
    films: filmsContent,
  };

/**
 * Resolve one service page's content by key. Throws on an unknown key, so a
 * service without a content file fails the build instead of shipping an
 * empty page.
 */
export function servicePageContent(
  locale: Locale,
  key: ServiceKey,
): ServicePageContent {
  const page = SERVICE_PAGES[key];
  if (!page) {
    throw new Error(`servicePageContent: no service page "${key}"`);
  }
  return page(locale);
}

/** The managed-office card's link: its label and route from offerCard(). */
function managedOfficeCta(locale: Locale): Cta {
  const office = offerCard(locale, "ai-office-assistant");
  return { label: office.cta, href: office.href };
}

const en: ServicesIndexContent = {
  hero: {
    title: "What the studio does for your office",
    lead: "AI agents for the work your office repeats, websites, and creative films. Each starts as a fixed-price project, and the agents can keep running month to month as your office's AI department.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  services: {
    title: "Three services",
    intro:
      "Start with the one that fits the problem in front of you. Each page says what you receive, how the work runs, and where to start.",
  },
  managedOffice: {
    title: "Then, month to month",
    body: "Your office's AI department. After the project, the studio keeps the agents it built running, watches them, and improves them, with your people approving what matters.",
    cta: managedOfficeCta("en"),
  },
  cta: {
    heading: "Not sure where to start?",
    body: "Most offices start with one piece of recurring work. Book the scoping call, and the written read will say which service fits it.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) index content — written, not translated. */
const he: ServicesIndexContent = {
  hero: {
    title: "מה הסטודיו עושה בשביל המשרד שלכם",
    lead: "סוכני AI לעבודה שהמשרד חוזר עליה, אתרים וסרטונים יצירתיים. כל אחד מתחיל כפרויקט במחיר קבוע, והסוכנים יכולים להמשיך לרוץ חודש אחרי חודש כמחלקת ה-AI של המשרד.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  services: {
    title: "שלושה שירותים",
    intro:
      "מתחילים מהשירות שמתאים לבעיה שמולכם. כל עמוד אומר מה מקבלים, איך העבודה רצה ומאיפה מתחילים.",
  },
  managedOffice: {
    title: "ואז, חודש אחרי חודש",
    body: "מחלקת ה-AI של המשרד. אחרי הפרויקט, הסטודיו ממשיך להריץ את הסוכנים שהוא בנה, עוקב אחריהם ומשפר אותם, כשהאנשים שלכם מאשרים את מה שחשוב.",
    cta: managedOfficeCta("he"),
  },
  cta: {
    heading: "לא בטוחים מאיפה להתחיל?",
    body: "רוב המשרדים מתחילים מעבודה חוזרת אחת. קובעים שיחת אפיון, והסיכום הכתוב יגיד איזה שירות מתאים לה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, ServicesIndexContent>> = { en, he };

/** Resolve the /services index content for a locale. */
export const servicesIndexContent = localeAccessor(
  "servicesIndexContent",
  CONTENT,
);
