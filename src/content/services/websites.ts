import { websitesContent as studioWebsitesContent } from "@/content/studio/websites";
import type { Locale } from "@/content/types";
import type { ServicePageContent } from "./types";

/**
 * TEMPORARY Stage A2 re-export, so /services/websites renders real content
 * now. Stage B4 replaces this file with the websites page content;
 * src/content/studio/ is deleted in Stage C.
 */
export const websitesContent: (locale: Locale) => ServicePageContent =
  studioWebsitesContent;
