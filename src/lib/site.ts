import type { Metadata } from "next";
import { OFFERS } from "@/lib/offers";
import { CAPABILITIES } from "@/lib/capabilities";

/**
 * Central site constants + canonical page list + metadata helper.
 * Single source of truth for the production domain, the public route list,
 * and the offer taxonomy. Consumed by every page's `metadata` export, plus
 * sitemap.ts, robots.ts, llms.txt/route.ts, and JsonLd.tsx.
 */

/**
 * Canonical absolute base URL — used ONLY where an absolute URL is required:
 * `metadataBase` (canonical + Open Graph), `sitemap.ts`, `robots.ts`,
 * `JsonLd.tsx`, and `llms.txt`. All in-app navigation and asset links are
 * root-relative and host-agnostic, so they need nothing from here.
 *
 * Resolved from the environment so it is correct on every deployment and never
 * hardcodes a domain (precedence):
 *   1. NEXT_PUBLIC_SITE_URL          — explicit override; set once a custom domain is live.
 *   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel's stable production domain (always set,
 *                                      even on previews; auto-upgrades to the custom
 *                                      domain when one is assigned).
 *   3. VERCEL_URL                    — per-deployment URL (preview fallback).
 *   4. http://localhost:3000         — local development.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionDomain) return `https://${productionDomain}`;

  const deploymentDomain = process.env.VERCEL_URL;
  if (deploymentDomain) return `https://${deploymentDomain}`;

  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const SITE_NAME = "y[AI]r studio";
export const SITE_ALT_NAME = "Yair Studio";
export const SITE_DESCRIPTION =
  "A managed AI office for small professional offices, fixed-price projects (a workflow sprint, a website, a film, or an agent build), and a free scoping call to start, with a person approving what matters.";

/**
 * Public contact channel (personal Gmail, confirmed for public use). Single
 * source for every contact surface: the EN /contact page, the HE shell, and the
 * Hero/Final CTAs in the home content model.
 */
export const CONTACT_EMAIL = "yair.bederman@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/**
 * WhatsApp contact channel — the second lead path beside email (email stays
 * the primary CTA; WhatsApp is the low-friction secondary).
 *
 * International format, digits only, with country code and no leading "+".
 */
export const WHATSAPP_NUMBER = "972522424521";

// Keep generated wa.me links inside the E.164 digit-length envelope.
if (!/^[1-9]\d{7,14}$/.test(WHATSAPP_NUMBER)) {
  throw new Error(
    "WHATSAPP_NUMBER must use international format with digits only and no leading plus sign.",
  );
}

/** Build a wa.me link, optionally with a prefilled message (locale-specific
    prefill text lives in the content files). */
export function waLink(prefill?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return prefill ? `${base}?text=${encodeURIComponent(prefill)}` : base;
}

/**
 * Founder's public LinkedIn profile — the studio's one verifiable proof
 * surface (it also runs the LinkedIn content engine live). Single source for
 * every link: the footer, the founder block, the engine page's proof link, and
 * the JSON-LD `sameAs` on the Person node.
 */
export const LINKEDIN_URL = "https://www.linkedin.com/in/yair-bederman/";

/**
 * Site-wide Open Graph image served by src/app/opengraph-image/route.tsx.
 * Referenced explicitly in buildMetadata so the route URL and alt text live in
 * one place.
 */
export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE_ALT =
  "y[AI]r studio · The AI department your office hires";

/**
 * Canonical service taxonomy (schema.org Service names): the two paid rungs
 * (src/lib/offers.ts) followed by the five capabilities
 * (src/lib/capabilities.ts), so every service name lives in exactly one
 * place. Consumed by JsonLd.tsx and llms.txt/route.ts.
 */
export const SERVICES: readonly string[] = [
  ...OFFERS.map((o) => o.serviceName),
  ...CAPABILITIES.map((c) => c.serviceName),
];

type Locale = "en_US" | "he_IL";

type PageDef = {
  /** Route path, e.g. "/" or "/he/offers/ai-office-assistant". The locale and
      the hreflang pair are DERIVED from the path prefix (see localePaths). */
  path: string;
  /** String title — the root layout template ("%s · y[AI]r studio") applies. */
  title?: string;
  /** Absolute title — bypasses the template (homepages only). */
  absoluteTitle?: string;
  /** Factual, restrained description. */
  description: string;
};

// Single source of the EN↔HE route-pairing rule — re-exported so existing
// consumers (sitemap.ts) keep importing it from here.
import { isHebrewPath, localePaths } from "@/lib/locale-paths";
export { localePaths } from "@/lib/locale-paths";

/**
 * Every public route, in sitemap order. Single source for per-page metadata,
 * the sitemap, and llms.txt. Descriptions are factual and restrained — they
 * describe the studio and its offers without overclaiming.
 */
const EN_PAGES: PageDef[] = [
  {
    path: "/",
    absoluteTitle: "y[AI]r studio · The AI department your office hires",
    description: SITE_DESCRIPTION,
  },
  {
    path: "/studio",
    title: "Studio",
    description:
      "What y[AI]r studio makes for small professional offices and business teams: agentic systems, process optimization, websites, films, and AI enablement.",
  },
  {
    path: "/studio/agentic-systems",
    title: "Agentic systems",
    description:
      "Agentic systems from y[AI]r studio: AI agents that run recurring office work, intake, triage, drafts, and follow-up, inside the office's own tools, with a person approving what matters.",
  },
  {
    path: "/studio/process-optimization",
    title: "Process optimization",
    description:
      "Process optimization from y[AI]r studio: one business process mapped end to end, sorted into automatic, AI-assisted, and human work, and its worst friction removed.",
  },
  {
    path: "/studio/websites",
    title: "Websites",
    description:
      "Websites from y[AI]r studio: designed, fast, bilingual (Hebrew and English) sites for a business that sells a service, with the studio's own films as the motion.",
  },
  {
    path: "/studio/films",
    title: "Films",
    description:
      "Films from y[AI]r studio: short designed films rendered from code, with no synthetic faces or voices, for a site, LinkedIn, or a pitch.",
  },
  {
    path: "/studio/ai-enablement",
    title: "AI enablement",
    description:
      "AI enablement from y[AI]r studio: hands-on sessions where a business team learns to run AI on its own recurring work, with the approval habits that keep it safe.",
  },
  {
    path: "/offers",
    title: "Services",
    description:
      "Three ways to start with y[AI]r studio, by commitment: a free scoping call, a fixed-price project (a workflow sprint, a website, a film, or an agent build), and a managed AI office, all with a person approving what matters.",
  },
  {
    path: "/offers/ai-office-assistant",
    title: "Managed AI Office",
    description:
      "A managed AI office from y[AI]r studio: morning briefings, email triage, document workflows, and follow-up tracking, running in the office's own private environment with a person approving everything that matters. One-time setup plus a monthly retainer.",
  },
  {
    path: "/offers/ai-workflow-sprint",
    title: "AI Workflow Sprint",
    description:
      "An AI workflow sprint from y[AI]r studio: one business process mapped end to end, sorted into automatic, AI-assisted, and human work, and three focused automations built at a fixed price.",
  },
  {
    path: "/about",
    title: "About",
    description:
      "About y[AI]r studio: AI workflow systems for growing service businesses, built around human-in-the-loop automation.",
  },
  {
    path: "/contact",
    title: "Contact",
    description:
      "Book a free scoping call with y[AI]r studio: send one workflow from your office, then pick the rung that fits, a fixed-price sprint or the managed AI office.",
  },
];

/**
 * Hebrew titles/descriptions, keyed by the EN path. The HE PAGES entries are
 * DERIVED from EN_PAGES + this map (below), so "every page has a Hebrew
 * mirror" is a property of the data shape: adding an EN page without Hebrew
 * strings fails the build at module init instead of shipping a broken
 * he-IL alternate.
 */
const HE_PAGE_STRINGS: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: "מחלקת ה-AI שהמשרד שלכם שוכר",
      description:
        "y[AI]r studio בעברית: משרד AI מנוהל למשרדים מקצועיים קטנים, ספרינט תהליך AI במחיר קבוע, ושיחת אפיון חינם להתחלה, כשאדם מאשר את מה שחשוב.",
    },
    "/studio": {
      title: "סטודיו",
      description:
        "מה y[AI]r studio בונה למשרדים מקצועיים קטנים ולצוותים בעסקים: מערכות סוכני AI, ייעול תהליכים, אתרים, סרטונים והטמעת AI לצוות.",
    },
    "/studio/agentic-systems": {
      title: "מערכות סוכני AI",
      description:
        "מערכות סוכני AI מבית y[AI]r studio: סוכנים שמריצים את העבודה החוזרת של המשרד, קליטת פניות, מיון, טיוטות ומעקב, בתוך הכלים של המשרד עצמו, כשאדם מאשר את מה שחשוב.",
    },
    "/studio/process-optimization": {
      title: "ייעול תהליכים",
      description:
        "ייעול תהליכים מבית y[AI]r studio: תהליך עסקי אחד ממופה מקצה לקצה, ממוין לאוטומטי, בעזרת AI ואנושי, והחיכוך הכי גדול בו מוסר.",
    },
    "/studio/websites": {
      title: "אתרים",
      description:
        "אתרים מבית y[AI]r studio: אתרים מעוצבים, מהירים ודו־לשוניים (עברית ואנגלית) לעסק שמוכר שירות, עם הסרטונים של הסטודיו כתנועה.",
    },
    "/studio/films": {
      title: "סרטונים",
      description:
        "סרטונים מבית y[AI]r studio: סרטונים קצרים ומעוצבים שנבנים מקוד, בלי פנים או קולות סינתטיים, לאתר, ללינקדאין או לפיץ'.",
    },
    "/studio/ai-enablement": {
      title: "הטמעת AI לצוות",
      description:
        "הטמעת AI לצוות מבית y[AI]r studio: מפגשים מעשיים שבהם צוות העסק לומד להריץ AI על העבודה החוזרת שלו, עם הרגלי האישור ששומרים על זה בטוח.",
    },
    "/offers": {
      title: "שירותים",
      description:
        "שלוש דרכים להתחיל עם y[AI]r studio, לפי רמת ההתחייבות: שיחת אפיון חינם, ספרינט תהליך AI במחיר קבוע ומשרד AI מנוהל, כשבכולן אדם מאשר את מה שחשוב.",
    },
    "/offers/ai-office-assistant": {
      title: "משרד AI מנוהל",
      description:
        "משרד AI מנוהל מבית y[AI]r studio: תדריך בוקר, מיון מיילים, תהליכי מסמכים ומעקב, בסביבה פרטית של המשרד ועם אישור אנושי על כל מה שחשוב. הקמה חד־פעמית ועלות חודשית.",
    },
    "/offers/ai-workflow-sprint": {
      title: "ספרינט תהליך AI",
      description:
        "ספרינט תהליך AI של y[AI]r studio: תהליך עסקי אחד ממופה מקצה לקצה, ממוין לאוטומטי, בעזרת AI ואנושי, ושלוש אוטומציות ממוקדות נבנות במחיר קבוע.",
    },
    "/about": {
      title: "אודות",
      description:
        "על y[AI]r studio: מערכות AI לתהליכי עבודה של עסקי שירותים צומחים, סביב אוטומציה עם אישור אנושי בנקודות ההחלטה.",
    },
    "/contact": {
      title: "צור קשר",
      description:
        "קובעים שיחת אפיון חינם עם y[AI]r studio: שולחים תהליך אחד מהמשרד, ואז בוחרים את השלב שמתאים, ספרינט במחיר קבוע או משרד AI מנוהל.",
    },
  };

/** Every public route: the EN list plus its derived Hebrew mirror. */
export const PAGES: PageDef[] = [
  ...EN_PAGES,
  ...EN_PAGES.map((p): PageDef => {
    const strings = HE_PAGE_STRINGS[p.path];
    if (!strings) {
      throw new Error(
        `PAGES: missing Hebrew strings for "${p.path}" — every EN page needs a /he mirror (add it to HE_PAGE_STRINGS)`,
      );
    }
    return {
      path: localePaths(p.path).he,
      title: strings.title,
      description: strings.description,
    };
  }),
];

function buildMetadata(p: PageDef): Metadata {
  const isHebrew = isHebrewPath(p.path);
  const locale: Locale = isHebrew ? "he_IL" : "en_US";
  const alternateLocale: Locale = isHebrew ? "en_US" : "he_IL";
  const { en: enPath, he: hePath } = localePaths(p.path);
  const ogTitle = p.absoluteTitle ?? p.title;

  return {
    title: p.absoluteTitle ? { absolute: p.absoluteTitle } : p.title,
    description: p.description,
    alternates: {
      canonical: p.path,
      // Every page is part of an EN/HE pair — derived, never hand-listed.
      languages: { "en-US": enPath, "he-IL": hePath, "x-default": enPath },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: ogTitle,
      description: p.description,
      url: p.path,
      locale,
      alternateLocale,
      // Reference the generated image route explicitly so every page emits
      // og:image (twitter:image is derived from it). Resolved against
      // metadataBase (SITE_URL) in the root layout.
      images: [{ url: OG_IMAGE_PATH, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
  };
}

/** Resolve a route's full Metadata from the canonical PAGES list. */
export function pageMetadata(path: string): Metadata {
  const page = PAGES.find((p) => p.path === path);
  if (!page) {
    throw new Error(`pageMetadata: no PAGES entry for "${path}"`);
  }
  return buildMetadata(page);
}
