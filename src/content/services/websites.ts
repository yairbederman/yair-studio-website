import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { afterProjectSection, ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { ServicePageContent } from "./types";

/**
 * /services/websites — designed, fast, bilingual sites for a business that
 * sells a service. This site is the live example: the `work` band renders it
 * through WorkGrid (category "websites" in src/content/work.ts).
 *
 * No film block on purpose: the old websites film (hyperframes/cap-websites)
 * bakes a "Films and metadata" stage into its frames, and a site build no
 * longer includes films, so it would contradict this page. Re-render or
 * retire it before a film block returns here; until then nothing bakes this
 * page's strings.
 *
 * Claims: the copy says what the studio sets up for search engines and AI
 * assistants, never how they will read or rank the site.
 *
 * The `where` card takes the fixed-price rung's title and terms from the
 * ladder but points at the scoping call, which is how a site starts; the
 * rung's own CTA serves the ladder, not this page.
 */

const en: ServicePageContent = {
  hero: {
    title: "Websites that say what you do, in Hebrew and English",
    lead: "Designed, fast sites for a business that sells a service. Every page answers what a client asks first: what you do, what they get, and how to start. This site is the live example: designed, written, and built here, in both languages.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  does: {
    title: "What I do",
    intro:
      "I design, write, and build each site myself, with AI tools; this site is the working sample.",
    items: [
      {
        title: "Design and build the site",
        desc: "Structure, type, and copy that state your service plainly, built to load fast on a phone.",
      },
      {
        title: "Write it in both languages",
        desc: "Hebrew and English, each written natively rather than translated word for word, with right-to-left layout done properly.",
      },
      {
        title: "Prepare it for search",
        desc: "Every page set up for search engines and AI assistants: titles, descriptions, and a map of the site.",
      },
      {
        title: "Hand it over",
        desc: "Visitor analytics and a written handover, so the site is not tied to me.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "The finished site",
        desc: "Design, copy, and the code that runs it, live on your own domain.",
      },
      {
        title: "Hebrew and English versions",
        desc: "Every page in both languages, with a language switch that keeps the visitor on the same page.",
      },
      {
        title: "Ready for search from day one",
        desc: "Every page goes live with its own title and description, listed in a map of the site.",
      },
      {
        title: "Visitor analytics",
        desc: "Which pages people read, from the first day the site is live.",
      },
      {
        title: "Handover",
        desc: "A written guide to how the site is built, so any developer can change it.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Scope the site",
        desc: "Which pages, which languages, which services, and what a visitor should do next.",
      },
      {
        title: "Structure and copy",
        desc: "The words come first, in both languages; the design follows them.",
      },
      {
        title: "Design and build",
        desc: "The site is built, with its search setup and analytics.",
      },
      {
        title: "Review and approve",
        desc: "You read every page in both languages before launch; nothing goes live without your yes.",
        human: true,
      },
      {
        title: "Launch and hand over",
        desc: "Your domain, the analytics, and a written handover.",
      },
    ],
  },
  example: {
    title: "How a site gets made",
    intro: "A simplified flow from a brief to a live site.",
    map: {
      caption: "Brief to live",
      ariaLabel: "A website build from brief to launch, with a client approval step",
      nodes: [
        { label: "Your brief", sub: "services · audience · languages" },
        { label: "Structure and copy" },
        { label: "Design and build" },
        { label: "Search setup and analytics" },
        { label: "Your approval", human: true },
        { label: "Live in both languages", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "The words",
        desc: "Every page is drafted for you; the final wording is yours.",
      },
      {
        title: "The launch",
        desc: "Nothing goes live until you have read it in both languages.",
      },
      {
        title: "The site itself",
        desc: "The domain, the code, and the content are yours; nothing is locked to the studio.",
      },
    ],
  },
  where: {
    title: "Where to start",
    intro: "A site starts as its own project, scoped in the call.",
    rungs: [
      {
        ...ladderRungCard(
          "en",
          "02",
          "One site, designed and built in Hebrew and English.",
        ),
        cta: shellContent("en").workflowCta,
      },
    ],
  },
  work: {
    title: "A site built here",
    intro:
      "The site you are reading, in Hebrew and English, designed and built in the studio.",
    category: "websites",
  },
  after: afterProjectSection(
    "en",
    "The site, both language versions, and the code that runs it: yours, documented, and live.",
  ),
  cta: {
    heading: "See what your site could say.",
    body: "Book the scoping call and bring the site you have, or the one you don't. You get a written read of what it should say and how it should start.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — written, not translated. */
const he: ServicePageContent = {
  hero: {
    title: "אתרים שאומרים מה אתם עושים, בעברית ובאנגלית",
    lead: "אתרים מעוצבים ומהירים לעסק שמוכר שירות. כל עמוד עונה על מה שלקוח שואל קודם: מה אתם עושים, מה הוא מקבל ואיך מתחילים. האתר הזה הוא הדוגמה החיה: עוצב, נכתב ונבנה כאן, בשתי השפות.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  does: {
    title: "מה אני עושה",
    intro:
      "אני מעצב, כותב ובונה כל אתר בעצמי, עם כלי AI. האתר הזה הוא הדוגמה החיה.",
    items: [
      {
        title: "מעצב ובונה את האתר",
        desc: "מבנה, טיפוגרפיה וטקסט שמסבירים את השירות שלכם בפשטות, והכול נטען מהר גם בטלפון.",
      },
      {
        title: "כותב אותו בשתי השפות",
        desc: "עברית ואנגלית, כל אחת נכתבת בשפתה ולא מתורגמת מילה במילה, עם כיוון מימין לשמאל שעובד כמו שצריך.",
      },
      {
        title: "מכין אותו לחיפוש",
        desc: "כותרת ותיאור לכל עמוד ומפת אתר, בשביל מנועי חיפוש ועוזרי AI.",
      },
      {
        title: "מוסר אותו",
        desc: "נתוני גלישה ומסמך מסירה כתוב, כך שהאתר לא תלוי בי.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "האתר המוגמר",
        desc: "עיצוב, טקסט והקוד שמריץ אותו, באוויר על הדומיין שלכם.",
      },
      {
        title: "גרסאות עברית ואנגלית",
        desc: "כל עמוד בשתי השפות, עם מעבר שפה שמשאיר את המבקר באותו עמוד.",
      },
      {
        title: "מוכן לחיפוש מהיום הראשון",
        desc: "כל עמוד עולה לאוויר עם כותרת ותיאור משלו, ורשום במפת האתר.",
      },
      {
        title: "נתוני גלישה",
        desc: "אילו עמודים אנשים קוראים, מהיום הראשון שהאתר באוויר.",
      },
      {
        title: "מסירה",
        desc: "מסמך כתוב שמסביר איך האתר בנוי, כדי שכל מפתח יוכל לשנות אותו.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "מגדירים את האתר",
        desc: "אילו עמודים, אילו שפות, אילו שירותים, ומה המבקר צריך לעשות הלאה.",
      },
      {
        title: "מבנה וטקסט",
        desc: "קודם המילים, בשתי השפות. העיצוב בא אחריהן.",
      },
      {
        title: "עיצוב ובנייה",
        desc: "האתר נבנה, עם הגדרות החיפוש ונתוני הגלישה שלו.",
      },
      {
        title: "בודקים ומאשרים",
        desc: "אתם קוראים כל עמוד בשתי השפות לפני ההשקה. שום דבר לא עולה לאוויר בלי האישור שלכם.",
        human: true,
      },
      {
        title: "משיקים ומוסרים",
        desc: "הדומיין שלכם, נתוני הגלישה ומסמך מסירה כתוב.",
      },
    ],
  },
  example: {
    title: "איך אתר נבנה",
    intro: "תהליך מפושט מבריף לאתר חי.",
    map: {
      caption: "מבריף לאוויר",
      ariaLabel: "בניית אתר מבריף ועד השקה, עם שלב אישור של הלקוח",
      nodes: [
        { label: "הבריף שלכם", sub: "שירותים · קהל · שפות" },
        { label: "מבנה וטקסט" },
        { label: "עיצוב ובנייה" },
        { label: "הגדרות חיפוש ונתוני גלישה" },
        { label: "האישור שלכם", human: true },
        { label: "באוויר בשתי השפות", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "המילים",
        desc: "כל עמוד מנוסח בשבילכם. הניסוח הסופי הוא שלכם.",
      },
      {
        title: "ההשקה",
        desc: "שום דבר לא עולה לאוויר עד שקראתם אותו בשתי השפות.",
      },
      {
        title: "האתר עצמו",
        desc: "הדומיין, הקוד והתוכן שייכים לכם. שום דבר לא נעול אצל הסטודיו.",
      },
    ],
  },
  where: {
    title: "מאיפה מתחילים",
    intro: "אתר מתחיל כפרויקט בפני עצמו, שנסגר בשיחה.",
    rungs: [
      {
        ...ladderRungCard(
          "he",
          "02",
          "אתר אחד, מעוצב ובנוי בעברית ובאנגלית.",
        ),
        cta: shellContent("he").workflowCta,
      },
    ],
  },
  work: {
    title: "אתר שנבנה כאן",
    intro: "האתר שאתם קוראים עכשיו, בעברית ובאנגלית, עוצב ונבנה בסטודיו.",
    category: "websites",
  },
  after: afterProjectSection(
    "he",
    "האתר, שתי גרסאות השפה והקוד שמריץ אותו: שלכם, מתועדים ובאוויר.",
  ),
  cta: {
    heading: "תראו מה האתר שלכם יכול להגיד.",
    body: "קובעים שיחת אפיון ומביאים את האתר שיש לכם, או את זה שאין. מקבלים סיכום כתוב של מה הוא צריך להגיד ואיך הוא צריך להתחיל.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, ServicePageContent>> = { en, he };

/** Resolve the /services/websites page content for a locale. */
export const websitesContent = localeAccessor("websitesContent", CONTENT);
