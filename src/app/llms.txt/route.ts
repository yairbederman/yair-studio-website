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
    "- The production domain is not yet finalized; URLs use the expected domain.",
    "- The site states no specific clients, metrics, reviews, or ratings.",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
