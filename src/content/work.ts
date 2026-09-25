import { localeAccessor } from "@/content/types";
import { aiOfficeAssistantContent } from "@/content/offers/ai-office-assistant";
import { shellContent } from "@/content/shell";
import { WORK_PAGES, WORK_SLUGS } from "@/lib/work-slugs";
import type { CapabilityFilm, Locale } from "@/content/types";
import type { ServiceKey } from "@/lib/services";

/**
 * Work items — the single source for everything the /work grid, the
 * /work/<slug> pages, and the work cards on the home and service pages show
 * (WorkGrid renders them). Each record writes its shared, non-text fields
 * once and its text per locale; workItems() / workItem() resolve one
 * locale's view.
 *
 * Titles are NOT stored here: a published item's title is its WORK_PAGES
 * entry (src/lib/work-slugs.ts), which also feeds the page metadata. An
 * unpublished record is never rendered, so it needs no title and no text
 * until it is published (see the two-edit rule in work-slugs.ts, enforced
 * below).
 *
 * `status` is the honesty label every card shows: "live" runs today,
 * "prototype" is in build and shown with sample data, "concept" is a concept
 * film. Never upgrade a status without the facts behind it.
 *
 * Every fact here must be checkable. The four films are the owner's YouTube
 * uploads (channel @yairBederman); their ids were matched to each film by the
 * oEmbed author, the on-frame title or the channel's own description, and
 * their text says only what the film shows on screen. Three of the uploads
 * are titled with their upload date on YouTube, so the name shown here comes
 * from WORK_PAGES, never from YouTube.
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
  /** One line for the work card; the detail page leads with `brief`. */
  summary: string;
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
  summary: string;
  brief: string;
  role: string;
  language: string;
  deliverables: readonly WorkDeliverable[];
};

type RecordBase = {
  slug: string;
  category: WorkCategory;
  status: WorkStatus;
  poster?: string;
  /** One source for every locale, or one per locale when the film bakes its
      on-screen text (the Command Center has an EN and a HE cut). */
  source: WorkSource | Record<Locale, WorkSource>;
  aspect: WorkAspect;
};

/** A published record must carry its text; an unpublished one may not yet. */
type PublishedRecord = RecordBase & {
  published: true;
  text: Record<Locale, WorkText>;
};
type WorkRecord = PublishedRecord | (RecordBase & { published: false });

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

/**
 * Shared by the four concept films: what the studio did, and the film
 * itself. The role names only the making; whether a film was commissioned,
 * spec, or the studio's own idea is not stated until the owner confirms it.
 */
const FILM_ROLE: Record<Locale, string> = {
  en: "Direction and production with generative AI",
  he: "בימוי והפקה עם AI גנרטיבי",
};
const VERTICAL_FILM: Record<Locale, WorkDeliverable> = {
  en: { label: "Vertical film", count: 1 },
  he: { label: "סרטון אנכי", count: 1 },
};

/** Every work record, in display order (published ones match WORK_SLUGS). */
const RECORDS: readonly WorkRecord[] = [
  {
    // Deliverables are what the film shows: three work panels (morning
    // briefing, email triage, document workflows), the approval queue, and
    // four cuts (EN and HE, 16:9 and the 4:5 phone cut).
    slug: "command-center",
    category: "agents",
    status: "prototype",
    source: { en: commandCenterSource("en"), he: commandCenterSource("he") },
    aspect: "16:9",
    published: true,
    text: {
      en: {
        summary: "Overnight mail and documents in one morning view, with drafts awaiting approval.",
        brief:
          "Overnight email, calendar, and documents assembled into one morning view, with draft replies and signatures waiting for a person to approve.",
        role: "Product and interface design, and the film that shows it",
        language: "English and Hebrew",
        deliverables: [
          { label: "Work panel", count: 3 },
          { label: "Approval queue", count: 1 },
          { label: "Film cut", count: 4 },
        ],
      },
      he: {
        summary: "מייל ומסמכים מהלילה בתצוגת בוקר אחת, וטיוטות שמחכות לאישור.",
        brief:
          "מייל, יומן ומסמכים מהלילה מתכנסים לתצוגת בוקר אחת, וטיוטות תשובה וחתימות מחכות לאישור של אדם.",
        role: "עיצוב המוצר והממשק, והסרטון שמציג אותו",
        language: "עברית ואנגלית",
        deliverables: [
          { label: "פאנל עבודה", count: 3 },
          { label: "תור אישורים", count: 1 },
          { label: "גרסת סרטון", count: 4 },
        ],
      },
    },
  },
  {
    // This site: every route has a /he mirror, the motion is the studio's
    // own films, the tokens live in globals.css, and the link-preview image
    // is generated in code (src/app/opengraph-image).
    slug: "this-website",
    category: "websites",
    status: "live",
    poster: "/work/this-website.svg",
    source: { kind: "none" },
    aspect: "16:9",
    published: true,
    text: {
      en: {
        summary: "The studio's own site, written and built in English and Hebrew side by side.",
        brief:
          "The studio's own site, written and built in English and Hebrew side by side, with the studio's films as its motion.",
        role: "Design, writing, and build, all in-house",
        language: "English and Hebrew",
        deliverables: [
          { label: "Bilingual website", count: 1 },
          { label: "Design system", count: 1 },
          { label: "Link preview image", count: 1 },
        ],
      },
      he: {
        summary: "האתר של הסטודיו עצמו, שנכתב ונבנה בעברית ובאנגלית במקביל.",
        brief:
          "האתר של הסטודיו עצמו, שנכתב ונבנה בעברית ובאנגלית במקביל, והתנועה בו היא הסרטונים של הסטודיו.",
        role: "עיצוב, כתיבה ופיתוח, הכול בסטודיו",
        language: "עברית ואנגלית",
        deliverables: [
          { label: "אתר דו־לשוני", count: 1 },
          { label: "מערכת עיצוב", count: 1 },
          { label: "תמונת תצוגה לקישורים", count: 1 },
        ],
      },
    },
  },
  {
    // YouTube c4k47PhMQ7E: "DALLAL" on the menu card in frame; 30 s.
    slug: "dallal",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "c4k47PhMQ7E" },
    aspect: "9:16",
    published: true,
    text: {
      en: {
        summary: "A drawn café menu fills with color, then a paper café front folds up around it.",
        brief:
          "A café menu card where a drawn croissant, raspberry tart, and latte fill with color one by one, then a paper café front folds up around them.",
        role: FILM_ROLE.en,
        language: "Visual, with a Hebrew end card",
        deliverables: [VERTICAL_FILM.en, { label: "Menu item", count: 3 }],
      },
      he: {
        summary: "תפריט מצויר של בית קפה מתמלא בצבע, ואז חזית מנייר מתקפלת סביבו.",
        brief:
          "כרטיס תפריט של בית קפה, שבו קרואסון, טארט פטל ולאטה מצוירים מתמלאים בצבע אחד אחרי השני, ואז חזית של בית קפה מנייר מתקפלת סביבם.",
        role: FILM_ROLE.he,
        language: "ויזואלי, עם כרטיס סיום בעברית",
        deliverables: [VERTICAL_FILM.he, { label: "פריט תפריט", count: 3 }],
      },
    },
  },
  {
    // YouTube 7AFC47FsYX4: the channel's description names it a "cinematic
    // coffee grinder animation using generative AI"; five lines on screen; 19 s.
    slug: "coffee-grinder",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "7AFC47FsYX4" },
    aspect: "9:16",
    published: true,
    text: {
      en: {
        summary: "A coffee grinder comes apart in mid-air, piece by piece, and back together.",
        brief:
          "A grinder comes apart in mid-air, piece by piece, and comes back together, between five short lines of on-screen copy.",
        role: FILM_ROLE.en,
        language: "English on-screen text",
        deliverables: [VERTICAL_FILM.en, { label: "Exploded product view", count: 1 }],
      },
      he: {
        summary: "מטחנת קפה מתפרקת באוויר, חלק אחרי חלק, ומתחברת בחזרה.",
        brief:
          "מטחנה מתפרקת באוויר, חלק אחרי חלק, ומתחברת בחזרה, בין חמש שורות קצרות של טקסט על המסך.",
        role: FILM_ROLE.he,
        language: "טקסט על המסך באנגלית",
        deliverables: [VERTICAL_FILM.he, { label: "הדמיית פירוק של מוצר", count: 1 }],
      },
    },
  },
  {
    // YouTube d6QLzUmwYnE: titled "VARriage master vertical 1080x1920"; the end
    // card says the product does not really exist; Hebrew dialogue and
    // subtitles; 41 s.
    slug: "varriage",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "d6QLzUmwYnE" },
    aspect: "9:16",
    published: true,
    text: {
      en: {
        summary: "An ad for a made-up wall device that replays a couple's argument, like VAR.",
        brief:
          "An ad for a product that does not exist: a wall device that replays a couple's argument, like football's VAR, and gives a verdict.",
        role: FILM_ROLE.en,
        language: "Hebrew, with Hebrew subtitles",
        deliverables: [VERTICAL_FILM.en, { label: "Product concept", count: 1 }],
      },
      he: {
        summary: "פרסומת למכשיר שלא קיים, שמריץ מחדש ויכוח של זוג כמו ה-VAR בכדורגל.",
        brief:
          "פרסומת למוצר שלא קיים: מכשיר על הקיר שמריץ מחדש ויכוח של זוג, כמו ה-VAR בכדורגל, ונותן הכרעה.",
        role: FILM_ROLE.he,
        language: "עברית, עם כתוביות בעברית",
        deliverables: [VERTICAL_FILM.he, { label: "קונספט מוצר", count: 1 }],
      },
    },
  },
  {
    // YouTube jbGsDbav_7s: an "ESC" key held up in the desert in frame; the
    // "INBOX (99K)" envelope and cracking phones on screen; 75 s.
    slug: "esc",
    category: "films",
    status: "concept",
    source: { kind: "youtube", id: "jbGsDbav_7s" },
    aspect: "9:16",
    published: true,
    text: {
      en: {
        summary: "An overflowing inbox as a desert epic, and one ESC key raised over the sand.",
        brief:
          "An overflowing inbox told as a desert epic: a 99K inbox, phones cracking under notifications, and one ESC key raised over the sand.",
        role: FILM_ROLE.en,
        language: "English on-screen text",
        deliverables: [VERTICAL_FILM.en],
      },
      he: {
        summary: "תיבת דואר עמוסה כאפוס מדברי, ומקש ESC אחד מורם מעל החול.",
        brief:
          "תיבת דואר עמוסה כאפוס מדברי: אינבוקס של 99K, טלפונים שנסדקים מהתראות, ומקש ESC אחד מורם מעל החול.",
        role: FILM_ROLE.he,
        language: "טקסט על המסך באנגלית",
        deliverables: [VERTICAL_FILM.he],
      },
    },
  },
  // Law office: the live system for a B2B law firm. Unpublished (no page, no
  // sitemap entry) until the owner allows it to be shown. The change that
  // publishes it adds its text here, from the owner's facts, and its title,
  // "Law office" / "משרד עורכי דין", as its WORK_PAGES entry
  // (src/lib/work-slugs.ts).
  {
    slug: "law-office",
    category: "agents",
    status: "live",
    source: { kind: "none" },
    aspect: "16:9",
    published: false,
  },
];

const PUBLISHED = RECORDS.filter((r): r is PublishedRecord => r.published);

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

// A card always shows a picture: an item without a film needs its own poster.
for (const r of PUBLISHED) {
  if (!r.poster && "kind" in r.source && r.source.kind === "none") {
    throw new Error(`work: "${r.slug}" has no film, so it needs a poster`);
  }
}

function resolve(record: PublishedRecord, locale: Locale): WorkItem {
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

/**
 * /work content — the index hero and the framing around the grid, plus the
 * strings every work card and /work/<slug> page shows (status chips, fact
 * labels, the play control, the closing band).
 */
export type WorkIndexContent = {
  /** PageHero. */
  hero: { title: string; lead: string };
  /** Section framing around WorkGrid: what each status label means. */
  grid: { title: string; intro: string };
  /** The status chip on every card and detail page. */
  status: Record<WorkStatus, string>;
  /** Accessible name of a card's deliverables list; the detail page's label. */
  deliverables: string;
  detail: {
    /** Back link to the /work index. */
    back: string;
    role: string;
    language: string;
    /** Accessible name of the YouTube play button. */
    play: (title: string) => string;
    /** Title attribute of the YouTube player once it loads. */
    frameTitle: (title: string) => string;
    /** Closing band per category; `service` names the secondary link. */
    cta: Record<
      WorkCategory,
      { heading: string; body: string; service: ServiceKey }
    >;
  };
};

// The status labels, written once per locale: the chips show them and the
// grid heading lists them.
const EN_STATUS: Record<WorkStatus, string> = {
  live: "Live",
  prototype: "Prototype",
  concept: "Concept",
};
const HE_STATUS: Record<WorkStatus, string> = {
  live: "פעיל",
  prototype: "אב־טיפוס",
  concept: "קונספט",
};

const en: WorkIndexContent = {
  hero: {
    title: "The work",
    lead: "What the studio has made so far, each piece labelled for exactly what it is.",
  },
  grid: {
    title: [
      EN_STATUS.live,
      EN_STATUS.prototype.toLowerCase(),
      EN_STATUS.concept.toLowerCase(),
    ].join(", "),
    intro:
      "Live means it runs today, prototype means it is in build and shown with sample data, and concept means a film that shows the studio's creative range.",
  },
  status: EN_STATUS,
  deliverables: "What was made",
  detail: {
    back: "All work",
    role: "Role",
    language: "Language",
    play: (title) => `${shellContent("en").filmControls.play} ${title}`,
    frameTitle: (title) => `${title} on YouTube`,
    cta: {
      agents: {
        heading: "Want your office's recurring work handled like this?",
        body: "A scoping call starts with one piece of work your office repeats.",
        service: "ai-agents",
      },
      websites: {
        heading: "Want a site built the same way?",
        body: "A scoping call starts with what your business sells and who needs to read it, in Hebrew, English, or both.",
        service: "websites",
      },
      films: {
        heading: "Want a film like this for your business?",
        body: "A scoping call starts with the product, the launch, or the story you want told.",
        service: "films",
      },
    },
  },
};

/** Hebrew (RTL) content — written, not translated. */
const he: WorkIndexContent = {
  hero: {
    title: "העבודות",
    lead: "מה שהסטודיו עשה עד עכשיו, וכל פריט מסומן בדיוק כפי שהוא.",
  },
  grid: {
    title: [HE_STATUS.live, HE_STATUS.prototype, HE_STATUS.concept].join(", "),
    intro:
      "פעיל פירושו שזה רץ היום, אב־טיפוס פירושו שזה בבנייה ומוצג עם נתוני דוגמה, וקונספט פירושו סרטון שמראה את המנעד היצירתי של הסטודיו.",
  },
  status: HE_STATUS,
  deliverables: "מה נעשה",
  detail: {
    back: "כל העבודות",
    role: "תפקיד",
    language: "שפה",
    play: (title) => `הפעלת הסרטון ${title}`,
    frameTitle: (title) => `${title} ביוטיוב`,
    cta: {
      agents: {
        heading: "רוצים שהעבודה החוזרת של המשרד שלכם תתנהל ככה?",
        body: "שיחת אפיון מתחילה מעבודה אחת שהמשרד שלכם חוזר עליה.",
        service: "ai-agents",
      },
      websites: {
        heading: "רוצים אתר שנבנה באותה דרך?",
        body: "שיחת אפיון מתחילה ממה שהעסק שלכם מוכר ומי צריך לקרוא את זה, בעברית, באנגלית או בשתיהן.",
        service: "websites",
      },
      films: {
        heading: "רוצים סרטון כזה לעסק שלכם?",
        body: "שיחת אפיון מתחילה מהמוצר, מההשקה או מהסיפור שאתם רוצים לספר.",
        service: "films",
      },
    },
  },
};

const CONTENT: Partial<Record<Locale, WorkIndexContent>> = { en, he };

/** Resolve the /work content for a locale. */
export const workIndexContent = localeAccessor("workIndexContent", CONTENT);
