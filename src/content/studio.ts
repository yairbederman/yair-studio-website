import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { agenticSystemsContent } from "@/content/studio/agentic-systems";
import { processOptimizationContent } from "@/content/studio/process-optimization";
import { websitesContent } from "@/content/studio/websites";
import { filmsContent } from "@/content/studio/films";
import { aiEnablementContent } from "@/content/studio/ai-enablement";
import type { Locale } from "@/content/types";
import type {
  CapabilityPageContent,
  StudioIndexContent,
} from "@/content/studio/types";

/**
 * /studio — the index page content plus the lookup from a capability key
 * (src/lib/capabilities.ts) to its page content file. The five capability
 * pages live under src/content/studio/*.ts; the index cards come from
 * src/content/capability-cards.ts (never restated here).
 */

/** Page content per capability key — one file per key. */
const CAPABILITY_PAGES: Record<string, (locale: Locale) => CapabilityPageContent> =
  {
    "agentic-systems": agenticSystemsContent,
    "process-optimization": processOptimizationContent,
    websites: websitesContent,
    films: filmsContent,
    "ai-enablement": aiEnablementContent,
  };

/**
 * Resolve one capability page's content by key. Throws on an unknown key,
 * so a capability without a content file fails the build (the
 * /studio/[capability] route calls this for every CAPABILITIES key) instead
 * of shipping an empty page.
 */
export function capabilityPageContent(
  locale: Locale,
  key: string,
): CapabilityPageContent {
  const page = CAPABILITY_PAGES[key];
  if (!page) {
    throw new Error(`capabilityPageContent: no capability page "${key}"`);
  }
  return page(locale);
}

const en: StudioIndexContent = {
  hero: {
    title: "What the studio makes",
    lead: "Five things, each built for a business that sells a service, and each showing up inside one of the three ways to start: agents that run recurring work, processes mapped and fixed, websites, films, and hands-on AI sessions for your team.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  capabilities: {
    title: "Five capabilities",
    intro:
      "Each page says what I do, what you receive as concrete deliverables, how it runs, what stays with you, and which rung includes it.",
  },
  cta: {
    heading: "Not sure which one you need?",
    body: "Most offices start with one workflow, not a capability. Book the scoping call, and the written read will say which of these it touches.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) index content — hebrew-quality drafted. */
const he: StudioIndexContent = {
  hero: {
    title: "מה הסטודיו בונה",
    lead: "חמישה דברים, כל אחד בנוי לעסק שמוכר שירות, וכל אחד מופיע באחת משלוש הדרכים להתחיל: סוכנים שמריצים עבודה חוזרת, תהליכים ממופים ומתוקנים, אתרים, סרטונים ומפגשי AI מעשיים לצוות שלכם.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  capabilities: {
    title: "חמש יכולות",
    intro:
      "כל עמוד אומר מה אני עושה, מה מקבלים כתוצרים קונקרטיים, איך זה רץ, מה נשאר אצלכם ואיזה שלב כולל את זה.",
  },
  cta: {
    heading: "לא בטוחים מה מהם אתם צריכים?",
    body: "רוב המשרדים מתחילים מתהליך אחד, לא מיכולת. קובעים שיחת אפיון, והסיכום הכתוב יגיד באילו מהן הוא נוגע.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, StudioIndexContent>> = { en, he };

/** Resolve the /studio index content for a locale. */
export const studioIndexContent = localeAccessor("studioIndexContent", CONTENT);
