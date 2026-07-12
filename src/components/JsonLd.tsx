import {
  LINKEDIN_URL,
  SERVICES,
  SITE_ALT_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

/**
 * Serialize JSON-LD for safe embedding as <script> text children.
 * `<`, `>`, and `&` are replaced with their \uXXXX escapes so the markup
 * cannot be broken out of (no `</script>` injection) and React's text
 * escaping is a no-op. JSON parsers decode the escapes back to the originals,
 * so names containing `&` round-trip intact. This avoids
 * dangerouslySetInnerHTML while staying strictly factual and static.
 */
function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

/**
 * Structured data for the homepage: WebSite + Organization + founder Person +
 * a Service OfferCatalog. Strictly factual — no postal address, phone, reviews,
 * ratings, or logo (nothing we cannot verify). The only `sameAs` is the
 * founder's public LinkedIn profile, which is verifiable and linked site-wide.
 * Rendered once, on the homepage.
 *
 * HARD RULE: nothing from the illustrative workflow examples in
 * src/content/proof.ts enters machine-readable structured data. The Person
 * node states only the restrained identity facts represented on the site;
 * any further sameAs or formal credential property requires its own verified
 * source.
 */
export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: SITE_ALT_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: ["en", "he"],
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: SITE_ALT_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        founder: { "@id": `${SITE_URL}/#founder` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI workflow systems",
          itemListElement: SERVICES.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#founder`,
        name: "Yair Bederman",
        jobTitle: "Founder",
        url: `${SITE_URL}/about`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        knowsLanguage: ["en", "he"],
        sameAs: [LINKEDIN_URL],
      },
    ],
  };

  return (
    <script type="application/ld+json">{serializeJsonLd(jsonLd)}</script>
  );
}
