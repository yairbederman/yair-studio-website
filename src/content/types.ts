/**
 * Shared content-model primitives — the building blocks every per-page content
 * file composes (src/content/*.ts). Hoisted here so the shapes are defined
 * once; `home.ts` re-exports them for its existing consumers.
 */

export type Locale = "en" | "he";

/** A single call-to-action: visible label + destination. External http(s)
    destinations open in a new tab automatically (CTAButton derives it). */
export type Cta = { label: string; href: string };

/** A plain title + description card (OfferCardGrid / ProblemsPanel item). */
export type CardItem = { title: string; desc: string };

/** A numbered step; `human` marks the copper approval checkpoint. */
export type StepItem = { title: string; desc: string; human?: boolean };

/** One node in a schematic process spine (matches WorkflowMap's node shape). */
export type SpineNode = {
  label: string;
  sub?: string;
  /** Copper human-approval checkpoint. */
  human?: boolean;
  /** Final-output emphasis. */
  out?: boolean;
};

/**
 * Build a locale → content accessor with the standard missing-locale throw.
 * Single source for the lookup idiom every content file uses.
 */
export function localeAccessor<T>(
  name: string,
  table: Partial<Record<Locale, T>>,
): (locale: Locale) => T {
  return (locale: Locale): T => {
    const content = table[locale];
    if (!content) {
      throw new Error(`${name}: no content for locale "${locale}"`);
    }
    return content;
  };
}
