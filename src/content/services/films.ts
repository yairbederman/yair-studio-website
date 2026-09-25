import { filmsContent as studioFilmsContent } from "@/content/studio/films";
import type { Locale } from "@/content/types";
import type { ServicePageContent } from "./types";

/**
 * TEMPORARY Stage A2 re-export, so /services/films renders real content now.
 * Stage B4 replaces this file with the creative-films page content (the old
 * code-rendered films copy does not carry over); src/content/studio/ is
 * deleted in Stage C.
 */
export const filmsContent: (locale: Locale) => ServicePageContent =
  studioFilmsContent;
