/**
 * Published work pages — the slug list and the page-metadata strings for
 * /work/<slug> (EN and HE). Consumed by:
 *   - src/lib/site.ts, which derives the /work/<slug> PAGES entries (sitemap,
 *     llms.txt, per-page metadata) by mapping WORK_PAGES, never hand-listing
 *   - the /work/[slug] routes (generateStaticParams)
 *   - src/content/work.ts, which checks at module init that its published
 *     records are exactly WORK_SLUGS, and reads each title from here
 *
 * Import-free on purpose: site.ts imports this file, so any "@/" import here
 * would risk a site → work-slugs → site cycle. The page body reads
 * src/content/work.ts; these strings are metadata only, and the titles are
 * the single source of each work item's name.
 *
 * Publishing an item takes two edits: its record in work.ts sets
 * `published: true`, and its entry is added here. Either one alone fails the
 * build.
 */

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
    description:
      "Command Center, a prototype of the managed AI office's daily view: the day's mail, drafts, and documents in one screen, with what matters held for a person's approval. In build, filmed with sample data.",
    heTitle: "מוקד הבקרה",
    heDescription:
      "מוקד הבקרה, אב־טיפוס של המסך היומי של משרד ה-AI המנוהל: הדואר, הטיוטות והמסמכים של היום במקום אחד, כשמה שחשוב מחכה לאישור של אדם. בבנייה, מצולם עם נתוני דוגמה.",
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
    description: "Dallal, one of the studio's generative concept films.",
    heTitle: "Dallal",
    heDescription: "Dallal, אחד מסרטי הקונספט הגנרטיביים של הסטודיו.",
  },
  {
    slug: "coffee-grinder",
    title: "Coffee grinder",
    description: "Coffee grinder, one of the studio's generative concept films.",
    heTitle: "Coffee grinder",
    heDescription: "Coffee grinder, אחד מסרטי הקונספט הגנרטיביים של הסטודיו.",
  },
  {
    slug: "varriage",
    title: "VARriage",
    description: "VARriage, one of the studio's generative concept films.",
    heTitle: "VARriage",
    heDescription: "VARriage, אחד מסרטי הקונספט הגנרטיביים של הסטודיו.",
  },
  {
    slug: "esc",
    title: "ESC",
    description: "ESC, one of the studio's generative concept films.",
    heTitle: "ESC",
    heDescription: "ESC, אחד מסרטי הקונספט הגנרטיביים של הסטודיו.",
  },
];

/** The published work slugs, in WORK_PAGES order. */
export const WORK_SLUGS: readonly string[] = WORK_PAGES.map((p) => p.slug);
