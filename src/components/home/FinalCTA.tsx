import OfferCTA from "@/components/offers/OfferCTA";
import type { HomeContent } from "@/content/home";

/**
 * Closing CTA band for the homepage — a thin adapter over OfferCTA (the same
 * band every other page closes with), so the two bands can never drift in
 * markup or behavior. Only the content shape differs.
 */
export default function FinalCTA({
  content,
}: {
  content: HomeContent["finalCta"];
}) {
  return (
    <OfferCTA
      heading={content.title}
      body={content.body}
      ctaLabel={content.cta.label}
      ctaHref={content.cta.href}
      secondaryCta={content.secondaryCta}
    />
  );
}
