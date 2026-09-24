# DESIGN — Command Center, 4:5 phone cut

> This project is the phone cut of `../command-center/` (1080×1350, served by `FilmPlayer` under
> 768px through the flagship film block's `mobile` set in `src/content/offers/ai-office-assistant.ts`;
> the homepage proof band inherits it). It is a separate project because a HyperFrames canvas size is
> fixed when the composition is compiled, so one composition cannot switch 16:9 ↔ 4:5.

- **Design, copy sources, type audit, render record:** `../command-center/DESIGN.md`,
  `STORYBOARD.md` and `REVIEW.md` ("v2 2026-09-24" and "Render v2 (2026-09-24)"). Keep the two
  `COPY` objects in sync: every string here must match the 16:9 composition, which traces to site copy.
- **What differs from 16:9:** two panels (Email triage, Document workflows) plus the approval column,
  stacked; the header is the single large text slot; CSS copper glow instead of the WebGL bloom;
  floor 96px headlines · 80px panel titles · 56px rows · 64px approval items.
- **Assets:** `public/videos/command-center-mobile{,-he}.{mp4,webm}` + `command-center-mobile{,-he}-poster.png`.
- **Commands:** `npm run check` / `npm run render` here (pinned `hyperframes@0.6.84`); HE is rendered by
  flipping the `lang` default, then the master is restored (`default: "en"`, `#review-bg` present).
- **Re-render trigger:** the same as the 16:9 film — any change to the strings it bakes, or to
  `../command-center/index.html` timing.
