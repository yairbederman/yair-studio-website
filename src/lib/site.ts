import type { Metadata } from "next";
import { OFFERS } from "@/lib/offers";

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
  "A managed AI office assistant for small professional offices, plus fixed-price AI workflow sprints, a LinkedIn content engine, and AI enablement workshops, with human approval at the decision points.";

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
 * Site-wide Open Graph image served by src/app/opengraph-image/route.tsx.
 * Referenced explicitly in buildMetadata so the route URL and alt text live in
 * one place.
 */
export const OG_IMAGE_PATH = "/opengraph-image";
export const OG_IMAGE_ALT =
  "y[AI]r studio · AI systems for real business workflows";

/**
 * Canonical offer taxonomy (schema.org Service names). Derived from the single
 * OFFERS list (src/lib/offers.ts) so the offer names live in exactly one place.
 * Consumed by JsonLd.tsx and llms.txt/route.ts.
 */
export const SERVICES: readonly string[] = OFFERS.map((o) => o.serviceName);

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
    absoluteTitle: "y[AI]r studio · AI systems for real business workflows",
    description: SITE_DESCRIPTION,
  },
  {
    path: "/workflows",
    title: "Workflows",
    description:
      "y[AI]r studio's approach to business workflows: mapping where work gets stuck and turning scattered inputs into clear, AI-assisted next actions.",
  },
  {
    path: "/offers",
    title: "Offers",
    description:
      "Four services from y[AI]r studio: a managed AI office assistant, a fixed-price AI workflow sprint, a LinkedIn content engine, and AI enablement workshops for engineering teams, all with human approval on the decisions that matter.",
  },
  {
    path: "/offers/ai-office-assistant",
    title: "Managed AI Office Assistant",
    description:
      "A managed AI office assistant from y[AI]r studio: morning briefings, email triage, document workflows, and follow-up tracking, running in the office's own private environment with human approval on everything that matters. Setup plus monthly retainer.",
  },
  {
    path: "/offers/ai-workflow-sprint",
    title: "AI Workflow Sprint",
    description:
      "An AI workflow sprint from y[AI]r studio: one business process mapped end to end, sorted into automatic, AI-assisted, and human work, and three focused automations built at a fixed price.",
  },
  {
    path: "/offers/linkedin-content-engine",
    title: "LinkedIn Content Engine",
    description:
      "A managed LinkedIn content engine from y[AI]r studio: drafts written in the client's voice from their real material, held in one review queue, and published only after human approval.",
  },
  {
    path: "/offers/ai-enablement",
    title: "AI Enablement Workshops",
    description:
      "AI enablement workshops from y[AI]r studio: hands-on sessions that teach R&D and engineering teams AI-assisted coding and agent workflows on their own codebase, with a playbook that stays.",
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
      "Send y[AI]r studio one stuck workflow from your office or team, then pick the starting point that fits: a fixed-price sprint or the managed office assistant.",
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
      title: "עוזר AI מנוהל לעבודה האמיתית של המשרד",
      description:
        "y[AI]r studio בעברית: עוזר AI מנוהל למשרדים מקצועיים קטנים, ספרינט תהליך במחיר קבוע, מנוע תוכן ללינקדאין וסדנאות הטמעת AI, עם אישור אנושי בנקודות ההחלטה.",
    },
    "/workflows": {
      title: "תהליכי עבודה",
      description:
        "הגישה של y[AI]r studio לתהליכי עבודה: ממפים איפה העבודה נתקעת והופכים קלט מפוזר לצעדים ברורים בעזרת AI.",
    },
    "/offers": {
      title: "שירותים",
      description:
        "ארבעה שירותים מבית y[AI]r studio: עוזר AI מנוהל למשרד, ספרינט תהליך במחיר קבוע, מנוע תוכן ללינקדאין וסדנאות הטמעת AI לצוותי פיתוח, עם אישור אנושי על ההחלטות שחשובות.",
    },
    "/offers/ai-office-assistant": {
      title: "עוזר AI מנוהל למשרד",
      description:
        "עוזר AI מנוהל למשרד מבית y[AI]r studio: תדריך בוקר, מיון מיילים, תהליכי מסמכים ומעקב, בסביבה פרטית של המשרד ועם אישור אנושי על כל מה שחשוב. הקמה ועלות חודשית.",
    },
    "/offers/ai-workflow-sprint": {
      title: "ספרינט תהליך AI",
      description:
        "ספרינט תהליך AI של y[AI]r studio: תהליך עסקי אחד ממופה מקצה לקצה, ממוין לאוטומטי, בעזרת AI ואנושי, ושלוש אוטומציות ממוקדות נבנות במחיר קבוע.",
    },
    "/offers/linkedin-content-engine": {
      title: "מנוע תוכן ללינקדאין",
      description:
        "מנוע תוכן מנוהל ללינקדאין מבית y[AI]r studio: טיוטות בקול של הלקוח מתוך חומר אמיתי שלו, בתור אישורים אחד, ומתפרסמות רק אחרי אישור אנושי.",
    },
    "/offers/ai-enablement": {
      title: "סדנאות הטמעת AI",
      description:
        "סדנאות הטמעת AI של y[AI]r studio: מפגשים מעשיים שמלמדים צוותי פיתוח ומו״פ קידוד בעזרת AI ו-agent workflows על הקוד שלהם, עם פלייבוק שנשאר אצל הצוות.",
    },
    "/about": {
      title: "אודות",
      description:
        "על y[AI]r studio: מערכות AI לתהליכי עבודה של עסקי שירותים צומחים, סביב אוטומציה עם אישור אנושי בנקודות ההחלטה.",
    },
    "/contact": {
      title: "צור קשר",
      description:
        "שולחים ל־y[AI]r studio תהליך אחד שנתקע במשרד או בצוות, ואז בוחרים את נקודת ההתחלה שמתאימה: ספרינט במחיר קבוע או העוזר המנוהל.",
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
