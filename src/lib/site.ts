import type { Metadata } from "next";
import { OFFERS } from "@/lib/offers";
import { PROOF_IS_SAMPLE_DATA } from "@/content/proof";

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
  "Practical AI workflow systems for owner-led service businesses and professional offices where work moves through email, calendar, documents, meetings, and follow-up, with human approval at the decision points.";

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
 * ⚠ TODO(LAUNCH-CHECKLIST.md §3): PLACEHOLDER NUMBER — an obviously-unreal
 * 050-0000000. Replace with the real number (international format, digits
 * only, no "+") before flipping the launch gate.
 */
export const WHATSAPP_NUMBER = "972500000000";

// Launch guard: the sample-data gate cannot be flipped while the WhatsApp
// number is still the placeholder — a "live" site with a dead lead channel
// must fail the build, not ship.
if (!PROOF_IS_SAMPLE_DATA && WHATSAPP_NUMBER === "972500000000") {
  throw new Error(
    "WHATSAPP_NUMBER is still the placeholder — set the real number (LAUNCH-CHECKLIST.md §3) before flipping PROOF_IS_SAMPLE_DATA.",
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
  /** Route path, e.g. "/" or "/he/offers/internal-ai-systems". The locale and
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
      "Services for owner-led service businesses and professional offices: map one stuck workflow, run a focused audit, or build a narrow AI operations pilot around email, calendar, documents, meetings, and follow-up.",
  },
  {
    path: "/offers/ai-workflow-audit",
    title: "AI Workflow Audit",
    description:
      "An AI workflow audit from y[AI]r studio: a focused review of one business process that maps owners, inputs and outputs, bottlenecks, automation candidates, and what should stay human before anything is built.",
  },
  {
    path: "/offers/ai-ops-pilot",
    title: "AI Operations Pilot",
    description:
      "An AI operations pilot from y[AI]r studio: one practical AI workflow built around email, calendar, documents, meetings, clients, or tasks, with clear human approval boundaries.",
  },
  {
    path: "/offers/follow-up-machine",
    title: "Follow-Up Machine",
    description:
      "A Follow-Up Machine from y[AI]r studio: a small AI-assisted workflow that tracks leads, quotes, waiting clients, and open tasks with human approval before external messages or sensitive changes.",
  },
  {
    path: "/offers/internal-ai-systems",
    title: "Internal AI Systems",
    description:
      "Internal AI systems from y[AI]r studio: practical assistants and workflow layers for meetings, tasks, email, knowledge search, reporting, and follow-up.",
  },
  {
    path: "/offers/dashboards-automation",
    title: "Dashboards & Automation",
    description:
      "A dashboard and automation layer from y[AI]r studio: connected to existing tools so teams can see what needs attention and trigger the right next action.",
  },
  {
    path: "/offers/content-ad-operations",
    title: "Content & Ad Operations",
    description:
      "A content and ad operations system from y[AI]r studio: turning raw ideas, calls, assets, and performance data into structured content or ad experiments.",
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
      "Send y[AI]r studio one stuck workflow from an owner-led service business or professional office, then decide whether a focused audit or narrow pilot comes next.",
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
      title: "מערכות AI קטנות לעבודה האמיתית של העסק",
      description:
        "y[AI]r studio בעברית: מערכות AI קטנות לעסקי שירותים שמנוהלים בידי הבעלים ולמשרדים מקצועיים, סביב מייל, יומן, מסמכים, פגישות ומעקב, עם אישור אנושי בנקודות ההחלטה.",
    },
    "/workflows": {
      title: "תהליכי עבודה",
      description:
        "הגישה של y[AI]r studio לתהליכי עבודה: ממפים איפה העבודה נתקעת והופכים קלט מפוזר לצעדים ברורים בעזרת AI.",
    },
    "/offers": {
      title: "שירותים",
      description:
        "שירותים לעסקי שירותים שמנוהלים בידי הבעלים ולמשרדים מקצועיים: מיפוי תהליך שנתקע, אבחון ממוקד או פיילוט AI תפעולי צר סביב מייל, יומן, מסמכים, פגישות ומעקב.",
    },
    "/offers/ai-workflow-audit": {
      title: "אבחון תהליך AI",
      description:
        "אבחון תהליך AI של y[AI]r studio: סקירה ממוקדת של תהליך עסקי אחד שממפה איך העבודה זזה, איפה היא נתקעת, מה אפשר לאוטומט ומה חייב להישאר אנושי.",
    },
    "/offers/ai-ops-pilot": {
      title: "פיילוט AI תפעולי",
      description:
        "פיילוט AI תפעולי של y[AI]r studio: workflow אחד קטן שעובד סביב מיילים, יומן, מסמכים, פגישות, לקוחות או משימות, עם גבולות אישור אנושי ברורים.",
    },
    "/offers/follow-up-machine": {
      title: "מכונת Follow-Up",
      description:
        "מכונת Follow-Up של y[AI]r studio: מערכת קטנה שמזהה לידים, הצעות מחיר, לקוחות פתוחים ומשימות שמחכות לתגובה, עם אישור אנושי לפני הודעות חיצוניות או שינוי רגיש.",
    },
    "/offers/internal-ai-systems": {
      title: "מערכות AI פנימיות",
      description:
        "מערכות AI פנימיות של y[AI]r studio: עוזרים פרקטיים ושכבות תהליך לפגישות, משימות, מייל, חיפוש ידע, דוחות ומעקב.",
    },
    "/offers/dashboards-automation": {
      title: "דשבורדים ואוטומציה",
      description:
        "שכבת דשבורדים ואוטומציה של y[AI]r studio: מחוברת לכלים הקיימים, כדי שהצוות יראה מה דורש טיפול ויפעיל את הצעד הנכון הבא.",
    },
    "/offers/content-ad-operations": {
      title: "תפעול תוכן וקמפיינים",
      description:
        "מערכת תפעול תוכן וקמפיינים של y[AI]r studio: הופכת רעיונות גולמיים, שיחות, חומרים ונתוני ביצועים לתוכן מובנה או לניסויי קמפיינים.",
    },
    "/about": {
      title: "אודות",
      description:
        "על y[AI]r studio: מערכות AI לתהליכי עבודה של עסקי שירותים צומחים, סביב אוטומציה עם אישור אנושי בנקודות ההחלטה.",
    },
    "/contact": {
      title: "צור קשר",
      description:
        "שולחים ל־y[AI]r studio תהליך אחד שנתקע בעסק שירותים או במשרד מקצועי, ואז מחליטים אם הצעד הבא הוא אבחון ממוקד או פיילוט צר.",
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
