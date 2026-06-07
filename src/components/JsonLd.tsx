import {
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
 * so e.g. "Content & Ad Operations" round-trips intact. This avoids
 * dangerouslySetInnerHTML while staying strictly factual and static.
 */
function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

/**
 * Structured data for the homepage: WebSite + Organization + a Service
 * OfferCatalog. Strictly factual — no postal address, phone, reviews, ratings,
 * sameAs, or logo (nothing we cannot verify). Rendered once, on the homepage.
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
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI workflow systems",
          itemListElement: SERVICES.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
    ],
  };

  return (
    <script type="application/ld+json">{serializeJsonLd(jsonLd)}</script>
  );
}
