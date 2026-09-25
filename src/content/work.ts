import { localeAccessor } from "@/content/types";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { WORK_PAGES, WORK_SLUGS } from "@/lib/work-slugs";
import type { CapabilityFilm, Locale } from "@/content/types";

/**
 * Work items — the single source for everything the /work grid, the
 * /work/<slug> pages, and the work cards on the home and service pages show
 * (WorkGrid renders them). Each record writes its shared, non-text fields
 * once and its text per locale; workItems() / workItem() resolve one
 * locale's view.
 *
 * Titles are NOT stored here: a published item's title is its WORK_PAGES
 * entry (src/lib/work-slugs.ts), which also feeds the page metadata. An
 * unpublished record is never rendered, so it needs none until it is
 * published (see the two-edit rule in work-slugs.ts, enforced below).
 *
 * `status` is the honesty label every card shows: "live" runs today,
 * "prototype" is in build and shown with sample data, "concept" is a concept
 * film. Never upgrade a status without the facts behind it.
 *
 * "TODO(B2)" marks fields Stage B2 fills; the merge gate greps for it.
 */

export type WorkCategory = "agents" | "websites" | "films";
export type WorkStatus = "live" | "prototype" | "concept";
export type WorkAspect = "16:9" | "4:5" | "9:16";

/** Where the item's film plays from: self-hosted files, a YouTube id, or none. */
export type WorkSource =
  | {
      kind: "local";
      webm: string;
      mp4: string;
      poster: string;
      /** Optional phone cut (4:5) served under 768px by FilmPlayer. */
      mobile?: CapabilityFilm["mobile"];
    }
  | { kind: "youtube"; id: string }
  | { kind: "none" };

/** One deliverable noun and how many were made ("Intake agent ×1"). */
export type WorkDeliverable = { label: string; count: number };

/** One work item, resolved for a locale. */
export type WorkItem = {
  slug: string;
  title: string;
  category: WorkCategory;
  brief: string;
  role: string;
  status: WorkStatus;
  /** Card image override; without it the card uses the source's poster. */
  poster?: string;
  source: WorkSource;
  aspect: WorkAspect;
  /** Language(s) of the piece, e.g. "English and Hebrew". */
  language: string;
  deliverables: readonly WorkDeliverable[];
  published: boolean;
};

type WorkText = {
  brief: string;
  role: string;
  language: string;
  deliverables: readonly WorkDeliverable[];
};

type WorkRecord = {
  slug: string;
  category: WorkCategory;
  status: WorkStatus;
  poster?: string;
  /** One source for every locale, or one per locale when the film bakes its
      on-screen text (the Command Center has an EN and a HE cut). */
  source: WorkSource | Record<Locale, WorkSource>;
  aspect: WorkAspect;
  published: boolean;
  text: Record<Locale, WorkText>;
};

/**
 * The Command Center film per locale — the managed-office page's own film
 * block, so its paths (including the 4:5 phone cut) live in one place.
 */
function commandCenterSource(locale: Locale): WorkSource {
  const film = aiOfficeAssistantContent(locale).film;
  if (!film) {
    throw new Error(
      `work: the Managed AI Office page has no Command Center film for locale "${locale}"`,
    );
  }
  return {
    kind: "local",
    webm: film.webm,
    mp4: film.mp4,
    poster: film.poster,
    mobile: film.mobile,
  };
}

/** Unfilled text for one locale — every field carries the TODO(B2) marker. */
const TODO_TEXT: WorkText = {
  brief: "TODO(B2)",
  role: "TODO(B2)",
  language: "TODO(B2)",
  deliverables: [{ label: "TODO(B2)", count: 1 }],
};

/** Every work record, in display order (published ones match WORK_SLUGS). */
const RECORDS: readonly WorkRecord[] = [
  {
    slug: "command-center",
    category: "agents",
    status: "prototype",
    source: { en: commandCenterSource("en"), he: commandCenterSource("he") },
    aspect: "16:9",
    published: true,
    text: {
      en: { ...TODO_TEXT, language: "English and Hebrew" },
      he: { ...TODO_TEXT, language: "עברית ואנגלית" },
    },
  },
  {
    slug: "this-website",
    category: "websites",
    status: "live",
    source: { kind: "none" },
    aspect: "16:9",
    published: true,
    text: {
      en: { ...TODO_TEXT, language: "English and Hebrew" },
      he: { ...TODO_TEXT, language: "עברית ואנגלית" },
    },
  },
  {
    slug: "dallal",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "TODO(B2)" },
    aspect: "9:16",
    published: true,
    text: { en: TODO_TEXT, he: TODO_TEXT },
  },
  {
    slug: "coffee-grinder",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "TODO(B2)" },
    aspect: "9:16",
    published: true,
    text: { en: TODO_TEXT, he: TODO_TEXT },
  },
  {
    slug: "varriage",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "TODO(B2)" },
    aspect: "9:16",
    published: true,
    text: { en: TODO_TEXT, he: TODO_TEXT },
  },
  {
    slug: "esc",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "TODO(B2)" },
    aspect: "9:16",
    published: true,
    text: { en: TODO_TEXT, he: TODO_TEXT },
  },
  // Law office: the live system for a B2B law firm. Unpublished (no page, no
  // sitemap entry) until the owner allows it to be shown. Its title, "Law
  // office" / "משרד עורכי דין", goes into its WORK_PAGES entry
  // (src/lib/work-slugs.ts) in the same change that publishes it.
  {
    slug: "law-office",
    category: "agents",
    status: "live",
    source: { kind: "none" },
    aspect: "16:9",
    published: false,
    text: { en: TODO_TEXT, he: TODO_TEXT },
  },
];

const PUBLISHED = RECORDS.filter((r) => r.published);

// The published records and WORK_SLUGS (page routes, sitemap, metadata) must
// be the same set, or a card would link to a 404 or a page would render
// without its record.
const publishedSlugs = PUBLISHED.map((r) => r.slug).sort().join(", ");
const pageSlugs = [...WORK_SLUGS].sort().join(", ");
if (publishedSlugs !== pageSlugs) {
  throw new Error(
    `work: published records [${publishedSlugs}] must equal WORK_SLUGS [${pageSlugs}] (src/lib/work-slugs.ts) — publishing an item takes both edits`,
  );
}

function resolve(record: WorkRecord, locale: Locale): WorkItem {
  const page = WORK_PAGES.find((p) => p.slug === record.slug);
  if (!page) {
    throw new Error(`work: no WORK_PAGES entry for "${record.slug}"`);
  }
  const { text, ...shared } = record;
  return {
    ...shared,
    ...text[locale],
    title: locale === "he" ? page.heTitle : page.title,
    source: "kind" in record.source ? record.source : record.source[locale],
  };
}

/**
 * The published work items for a locale, in record order — optionally one
 * category, optionally the first `limit` items.
 */
export function workItems(
  locale: Locale,
  opts: { category?: WorkCategory; limit?: number } = {},
): readonly WorkItem[] {
  const items = PUBLISHED.filter(
    (r) => !opts.category || r.category === opts.category,
  ).map((r) => resolve(r, locale));
  return opts.limit === undefined ? items : items.slice(0, opts.limit);
}

/**
 * Resolve one published work item by slug. Throws on an unknown or
 * unpublished slug, so a stale link fails the build instead of rendering an
 * empty page.
 */
export function workItem(locale: Locale, slug: string): WorkItem {
  const record = PUBLISHED.find((r) => r.slug === slug);
  if (!record) {
    throw new Error(`workItem: no published work item "${slug}"`);
  }
  return resolve(record, locale);
}

/** /work index content — the hero and the framing around the grid. */
export type WorkIndexContent = {
  /** PageHero. */
  hero: { title: string; lead: string };
  /** Section framing around WorkGrid: what each status label means. */
  grid: { title: string; intro: string };
};

const en: WorkIndexContent = {
  hero: {
    title: "The work",
    lead: "What the studio has made so far, each piece labelled for what it is: live, a prototype shown with sample data, or a concept film.",
  },
  grid: {
    title: "Live, prototype, concept",
    intro:
      "A live piece runs today. A prototype is in build and shown with sample data. A concept film shows the studio's creative range.",
  },
};

/** Hebrew (RTL) index content — written, not translated. */
const he: WorkIndexContent = {
  hero: {
    title: "העבודות",
    lead: "מה שהסטודיו עשה עד עכשיו, וכל פריט מסומן לפי מה שהוא: פעיל, אב־טיפוס שמוצג עם נתוני דוגמה, או סרט קונספט.",
  },
  grid: {
    title: "פעיל, אב־טיפוס, קונספט",
    intro:
      "פריט פעיל נמצא בשימוש היום. אב־טיפוס נמצא בבנייה ומוצג עם נתוני דוגמה. סרט קונספט ממחיש מה הסטודיו יכול ליצור.",
  },
};

const CONTENT: Partial<Record<Locale, WorkIndexContent>> = { en, he };

/** Resolve the /work index content for a locale. */
export const workIndexContent = localeAccessor("workIndexContent", CONTENT);
