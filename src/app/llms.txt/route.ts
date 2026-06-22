import {
  PAGES,
  SERVICES,
  SITE_ALT_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const dynamic = "force-static";

/**
 * /llms.txt — a concise, factual brief for answer engines (LLMs).
 * Built from the same SITE_URL + PAGES + SERVICES source as the sitemap, so the
 * domain and route list live in exactly one place. No hype, no private info,
 * no unsupported claims.
 */
export function GET() {
  const body = [
    `# ${SITE_NAME} (${SITE_ALT_NAME})`,
    "",
    `> ${SITE_DESCRIPTION}`,
    "",
    "## About",
    "y[AI]r studio designs and builds AI workflow systems for growing small and medium service businesses. The work is practical business process automation: mapping stuck processes, automating repetitive work, adding dashboard automation and internal AI assistants, and turning scattered tasks into clear next actions, with human-in-the-loop approval at the decision points.",
    "",
    "## Services",
    ...SERVICES.map((name) => `- ${name}`),
    "",
    "## Pages",
    ...PAGES.map(
      (p) =>
        `- [${p.title ?? SITE_NAME}](${new URL(p.path, SITE_URL).toString()}): ${p.description}`,
    ),
    "",
    "## Notes",
    // Only while no explicit production domain is configured — once
    // NEXT_PUBLIC_SITE_URL is set (LAUNCH-CHECKLIST.md §7) the note is wrong
    // and disappears from the build automatically.
    ...(process.env.NEXT_PUBLIC_SITE_URL
      ? []
      : [
          "- The production domain is not yet finalized; URLs use the expected domain.",
        ]),
    "- The site is fully bilingual: every page has an English version and a Hebrew (RTL) version under /he.",
    "- Founder/about copy factually describes Yair Bederman's R&D and software leadership background, experience taking systems from prototype to production, workflow-first approach, bilingual delivery, and role as founder/operator of y[AI]r studio.",
    "- Workflow examples are illustrative patterns, not client case studies or evidence of outcomes.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
