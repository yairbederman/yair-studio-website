import { agenticSystemsContent } from "@/content/studio/agentic-systems";
import type { Locale } from "@/content/types";
import type { ServicePageContent } from "./types";

/**
 * TEMPORARY Stage A2 re-export, so /services/ai-agents renders real content
 * now. Stage B3 replaces this file with the AI agents page content (the
 * agentic-systems, process-optimization and enablement pages merged, the
 * Sprint as the `where` starting point); src/content/studio/ is deleted in
 * Stage C.
 */
export const aiAgentsContent: (locale: Locale) => ServicePageContent =
  agenticSystemsContent;
