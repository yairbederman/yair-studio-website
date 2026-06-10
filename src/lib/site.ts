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
  "AI workflow systems for growing businesses: process mapping, dashboards, automations, and internal AI assistants with human approval at the decision points.";

/**
 * Public contact channel (personal Gmail, confirmed for public use). Single
 * source for every contact surface: the EN /contact page, the HE shell, and the
 * Hero/Final CTAs in the home content model.
 */
export const CONTACT_EMAIL = "yair.bederman@gmail.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

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
  /** Route path, e.g. "/" or "/offers/internal-ai-systems". */
  path: string;
  /** String title — the root layout template ("%s · y[AI]r studio") applies. */
  title?: string;
  /** Absolute title — bypasses the template (homepage only). */
  absoluteTitle?: string;
  /** Factual, restrained description. */
  description: string;
  /** OG locale; defaults to en_US. */
  locale?: Locale;
  /** Emit hreflang en/he alternates (home + /he only). */
  langAlternates?: boolean;
};

/**
 * Every public route, in sitemap order. Single source for per-page metadata,
 * the sitemap, and llms.txt. Descriptions are factual and restrained — they
 * describe the studio and its offers without overclaiming.
 */
export const PAGES: PageDef[] = [
  {
    path: "/",
    absoluteTitle: "y[AI]r studio · AI systems for real business workflows",
    description: SITE_DESCRIPTION,
    langAlternates: true,
  },
  {
    path: "/he",
    title: "מערכות AI לתהליכי עבודה",
    description:
      "y[AI]r studio בעברית: מערכות AI לתהליכי עבודה אמיתיים בעסק. ממפים תהליכים תקועים והופכים עבודה מפוזרת לצעד הבא ברור, עם אישור אנושי בנקודות ההחלטה.",
    locale: "he_IL",
    langAlternates: true,
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
      "y[AI]r studio's offers: an AI Workflow Audit, Internal AI Systems, Dashboards & Automation, and Content & Ad Operations. Four entry points into one system.",
  },
  {
    path: "/offers/ai-workflow-audit",
    title: "AI Workflow Audit",
    description:
      "An AI workflow audit from y[AI]r studio: a focused review of one business process that maps owners, inputs and outputs, bottlenecks, automation candidates, and what should stay human before anything is built.",
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
      "Contact y[AI]r studio to map one business workflow and scope a practical, human-in-the-loop AI system.",
  },
];

function buildMetadata(p: PageDef): Metadata {
  const locale: Locale = p.locale ?? "en_US";
  const alternateLocale: Locale = locale === "he_IL" ? "en_US" : "he_IL";
  const ogTitle = p.absoluteTitle ?? p.title;

  return {
    title: p.absoluteTitle ? { absolute: p.absoluteTitle } : p.title,
    description: p.description,
    alternates: {
      canonical: p.path,
      ...(p.langAlternates
        ? { languages: { "en-US": "/", "he-IL": "/he" } }
        : {}),
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
