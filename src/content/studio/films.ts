import { localeAccessor } from "@/content/types";
import { shellContent } from "@/content/shell";
import { ladderRungCard } from "@/content/ladder";
import type { Locale } from "@/content/types";
import type { CapabilityPageContent } from "./types";

/**
 * /studio/films — short designed films rendered from code, no synthetic
 * faces or voices, for a site, LinkedIn, or a pitch. The films on this site
 * are the sample. No film yet (cap-films comes later and will bake
 * `example.map.nodes` verbatim — keep them final).
 */

const en: CapabilityPageContent = {
  hero: {
    title: "Short designed films, rendered from code",
    lead: "Ten- to twenty-second looping films that show a product, a process, or an idea, for a site, LinkedIn, or a pitch. No synthetic faces, no synthetic voices; every word on frame traces to your real copy. The films on this site are the sample.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
  does: {
    title: "What I do",
    items: [
      {
        title: "Write the story from your copy",
        desc: "Six scenes, taken from what your site or deck already says; nothing invented for the screen.",
      },
      {
        title: "Design it in your brand",
        desc: "Your type, your colors, your pace; one composition serves Hebrew and English.",
      },
      {
        title: "Render it from code",
        desc: "The film is built as code and rendered, so every frame is deterministic and every change is a re-render, not a reshoot.",
      },
      {
        title: "Cut it for every surface",
        desc: "The same story exported for the web, LinkedIn, and Reels, with poster frames for each.",
      },
    ],
  },
  receive: {
    title: "What you receive",
    items: [
      {
        title: "A 10–20-second looping film",
        desc: "A loop that closes cleanly, for a site or a feed.",
      },
      {
        title: "Hebrew and English variants",
        desc: "One composition, both languages, each laid out for its reading direction.",
      },
      {
        title: "Exports for web, LinkedIn, and Reels",
        desc: "The formats each surface needs, sized and compressed for it.",
      },
      {
        title: "Poster frames",
        desc: "A still from each film for previews, links, and reduced-motion viewers.",
      },
      {
        title: "The source composition",
        desc: "The composition that renders the film is yours; a later change is a re-render, not a new project.",
      },
    ],
  },
  how: {
    title: "How it runs",
    steps: [
      {
        title: "Brief and copy",
        desc: "What the film must say, taken from your existing copy.",
      },
      {
        title: "Story and stills",
        desc: "Six scenes as still frames, in both languages, before any motion.",
      },
      {
        title: "Approve the stills",
        desc: "You approve the frames and the words on them before anything renders.",
        human: true,
      },
      {
        title: "Motion and render",
        desc: "The composition is animated, checked on a phone, and rendered.",
      },
      {
        title: "Deliver the exports",
        desc: "Web, LinkedIn, Reels, posters, and the source.",
      },
    ],
  },
  example: {
    title: "From brief to loop",
    intro: "A simplified flow.",
    map: {
      caption: "Brief to loop",
      ariaLabel: "A film production flow from brief to rendered loop, with a client approval step",
      nodes: [
        { label: "Your copy", sub: "site · deck · post" },
        { label: "Six scenes" },
        { label: "Stills in both languages" },
        { label: "Your approval", human: true },
        { label: "Rendered loop", out: true },
      ],
    },
  },
  human: {
    title: "What stays with you",
    items: [
      {
        title: "The words on frame",
        desc: "Nothing appears on screen that you did not approve on a still.",
      },
      {
        title: "Faces and voices",
        desc: "No synthetic people and no synthetic voices, in any film.",
      },
      {
        title: "Where it runs",
        desc: "Which surfaces, and when, stays your call.",
      },
    ],
  },
  where: {
    title: "Where it shows up",
    intro: "A film is scoped in the same call, on its own or with a site.",
    rungs: [
      ladderRungCard(
        "en",
        "01",
        "Bring a page or a deck; the call sets what the film must say.",
      ),
    ],
  },
  cta: {
    heading: "Show the thing you sell, in twenty seconds.",
    body: "Book the scoping call with a page or a deck. You get back the six scenes a film of it would carry, before anything is made.",
    ctaLabel: shellContent("en").workflowCta.label,
    ctaHref: shellContent("en").workflowCta.href,
  },
};

/** Hebrew (RTL) content — hebrew-quality drafted. */
const he: CapabilityPageContent = {
  hero: {
    title: "סרטונים קצרים ומעוצבים, שנבנים מקוד",
    lead: "סרטוני לופ של עשר עד עשרים שניות שמראים מוצר, תהליך או רעיון, לאתר, ללינקדאין או לפיץ'. בלי פנים סינתטיות, בלי קולות סינתטיים; כל מילה על המסך נגזרת מהטקסט האמיתי שלכם. הסרטונים באתר הזה הם הדוגמה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
  does: {
    title: "מה אני עושה",
    items: [
      {
        title: "כותב את הסיפור מהטקסט שלכם",
        desc: "שש סצנות, לקוחות ממה שהאתר או המצגת שלכם כבר אומרים; שום דבר לא מומצא בשביל המסך.",
      },
      {
        title: "מעצב אותו במיתוג שלכם",
        desc: "הטיפוגרפיה שלכם, הצבעים שלכם, הקצב שלכם; קומפוזיציה אחת משרתת עברית ואנגלית.",
      },
      {
        title: "מרנדר אותו מקוד",
        desc: "הסרטון נבנה כקוד ומרונדר, כך שכל פריים קבוע מראש וכל שינוי הוא רינדור מחדש, לא צילום מחדש.",
      },
      {
        title: "חותך אותו לכל פלטפורמה",
        desc: "אותו סיפור מיוצא לאתר, ללינקדאין ולרילס, עם פריים פוסטר לכל אחד.",
      },
    ],
  },
  receive: {
    title: "מה מקבלים",
    items: [
      {
        title: "סרטון לופ של 10–20 שניות",
        desc: "לופ שנסגר נקי, לאתר או לפיד.",
      },
      {
        title: "גרסאות עברית ואנגלית",
        desc: "קומפוזיציה אחת, שתי שפות, כל אחת מסודרת לכיוון הקריאה שלה.",
      },
      {
        title: "ייצוא לאתר, ללינקדאין ולרילס",
        desc: "הפורמטים שכל פלטפורמה צריכה, בגודל ובדחיסה שמתאימים לה.",
      },
      {
        title: "פריימי פוסטר",
        desc: "סטיל מכל סרטון לתצוגה מקדימה, לקישורים ולמי שמעדיף בלי תנועה.",
      },
      {
        title: "קומפוזיציית המקור",
        desc: "הקומפוזיציה שמרנדרת את הסרטון שלכם; שינוי מאוחר יותר הוא רינדור מחדש, לא פרויקט חדש.",
      },
    ],
  },
  how: {
    title: "איך זה רץ",
    steps: [
      {
        title: "בריף וטקסט",
        desc: "מה הסרטון חייב להגיד, מתוך הטקסט הקיים שלכם.",
      },
      {
        title: "סיפור ופריימים",
        desc: "שש סצנות כפריימים סטטיים, בשתי השפות, לפני כל תנועה.",
      },
      {
        title: "מאשרים את הפריימים",
        desc: "אתם מאשרים את הפריימים ואת המילים שעליהם לפני שמשהו מרונדר.",
        human: true,
      },
      {
        title: "תנועה ורינדור",
        desc: "הקומפוזיציה מונפשת, נבדקת על טלפון ומרונדרת.",
      },
      {
        title: "מוסרים את הייצואים",
        desc: "אתר, לינקדאין, רילס, פוסטרים והמקור.",
      },
    ],
  },
  example: {
    title: "מבריף ללופ",
    intro: "תהליך מפושט.",
    map: {
      caption: "מבריף ללופ",
      ariaLabel: "תהליך הפקת סרטון מבריף ללופ מרונדר, עם שלב אישור של הלקוח",
      nodes: [
        { label: "הטקסט שלכם", sub: "אתר · מצגת · פוסט" },
        { label: "שש סצנות" },
        { label: "פריימים בשתי השפות" },
        { label: "האישור שלכם", human: true },
        { label: "הלופ מוכן", out: true },
      ],
    },
  },
  human: {
    title: "מה נשאר אצלכם",
    items: [
      {
        title: "המילים על המסך",
        desc: "שום דבר לא מופיע על המסך בלי שאישרתם אותו על פריים.",
      },
      {
        title: "פנים וקולות",
        desc: "בלי אנשים סינתטיים ובלי קולות סינתטיים, בשום סרטון.",
      },
      {
        title: "איפה זה רץ",
        desc: "באילו פלטפורמות, ומתי, נשאר החלטה שלכם.",
      },
    ],
  },
  where: {
    title: "איפה זה מופיע",
    intro: "סרטון נסגר באותה שיחה, לבד או יחד עם אתר.",
    rungs: [
      ladderRungCard(
        "he",
        "01",
        "מביאים עמוד או מצגת; בשיחה קובעים מה הסרטון חייב להגיד.",
      ),
    ],
  },
  cta: {
    heading: "תראו את מה שאתם מוכרים, בעשרים שניות.",
    body: "קובעים שיחת אפיון עם עמוד או מצגת. מקבלים חזרה את שש הסצנות שסרטון כזה היה מספר, לפני שמשהו נבנה.",
    ctaLabel: shellContent("he").workflowCta.label,
    ctaHref: shellContent("he").workflowCta.href,
  },
};

const CONTENT: Partial<Record<Locale, CapabilityPageContent>> = { en, he };

/** Resolve the films capability page content for a locale. */
export const filmsContent = localeAccessor("filmsContent", CONTENT);
