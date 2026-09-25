/**
 * Published work pages — the slug list and the page-metadata strings for
 * /work/<slug> (EN and HE). Consumed by:
 *   - src/lib/site.ts, which derives the /work/<slug> PAGES entries (sitemap,
 *     llms.txt, per-page metadata) by mapping WORK_PAGES, never hand-listing
 *   - the /work/[slug] routes (generateStaticParams)
 *   - src/content/work.ts, which checks at module init that its published
 *     records are exactly WORK_SLUGS, and reads each title from here
 *
 * Nearly import-free on purpose: site.ts imports this file, so an import
 * that reaches site.ts would make a site → work-slugs → site cycle. The one
 * import, offer-cards (for the Managed AI Office's name), reaches only
 * src/lib/offers.ts and src/lib/locale-paths.ts, which import nothing. The
 * page body reads src/content/work.ts; these strings are metadata only, and
 * the titles are the single source of each work item's name.
 *
 * Publishing an item takes two edits: its record in work.ts sets
 * `published: true`, and its entry is added here. Either one alone fails the
 * build.
 */

import { offerCard } from "@/content/offer-cards";

const managedOffice = {
  en: offerCard("en", "ai-office-assistant").title,
  he: offerCard("he", "ai-office-assistant").title,
};

export type WorkPageMeta = {
  slug: string;
  title: string;
  description: string;
  heTitle: string;
  heDescription: string;
};

export const WORK_PAGES: readonly WorkPageMeta[] = [
  {
    slug: "command-center",
    title: "Command Center",
    description: `Command Center, a prototype of the ${managedOffice.en}'s daily view: the day's mail, drafts, and documents in one screen, with what matters held for a person's approval. In build, shown with sample data.`,
    heTitle: "מוקד הבקרה",
    heDescription: `מוקד הבקרה, אב־טיפוס של המסך היומי של ${managedOffice.he}: הדואר, הטיוטות והמסמכים של היום במקום אחד, כשמה שחשוב מחכה לאישור של אדם. בבנייה, מוצג עם נתוני דוגמה.`,
  },
  {
    slug: "this-website",
    title: "This website",
    description:
      "The studio's own bilingual website, in Hebrew and English, designed and built in-house.",
    heTitle: "האתר הזה",
    heDescription:
      "האתר הדו־לשוני של הסטודיו, בעברית ובאנגלית, שעוצב ונבנה כאן.",
  },
  {
    slug: "dallal",
    title: "Dallal",
    description:
      "Dallal, a vertical café concept film from y[AI]r studio, made with generative AI.",
    heTitle: "Dallal",
    heDescription:
      "Dallal, סרטון קונספט אנכי של y[AI]r studio לבית קפה, שנוצר עם AI גנרטיבי.",
  },
  {
    slug: "coffee-grinder",
    title: "Coffee grinder",
    description:
      "Coffee grinder, a vertical product concept film from y[AI]r studio, made with generative AI.",
    heTitle: "מטחנת קפה",
    heDescription:
      "מטחנת קפה, סרטון קונספט אנכי של y[AI]r studio למוצר, שנוצר עם AI גנרטיבי.",
  },
  {
    slug: "varriage",
    title: "VARriage",
    description:
      "VARriage, a vertical concept ad in Hebrew from y[AI]r studio, made with generative AI.",
    heTitle: "VARriage",
    heDescription:
      "VARriage, פרסומת קונספט אנכית בעברית של y[AI]r studio, שנוצרה עם AI גנרטיבי.",
  },
  {
    slug: "esc",
    title: "ESC",
    description:
      "ESC, a vertical concept short from y[AI]r studio, made with generative AI.",
    heTitle: "ESC",
    heDescription:
      "ESC, סרטון קונספט קצר ואנכי של y[AI]r studio, שנוצר עם AI גנרטיבי.",
  },
];

/** The published work slugs, in WORK_PAGES order. */
export const WORK_SLUGS: readonly string[] = WORK_PAGES.map((p) => p.slug);
