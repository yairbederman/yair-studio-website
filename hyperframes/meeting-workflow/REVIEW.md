# REVIEW — constraint checklist & open items

## Brief constraints

| Constraint | Status |
|---|---|
| Build only the Meeting Follow-up film | ✅ only composition built |
| No fake SaaS UI / fake metrics | ✅ rows + card are abstract placeholders, no numbers/names |
| No neon cyberpunk / AI sparkles | ✅ one bounded copper ring; inputs are document fragments |
| Effects improve process readability only | ✅ DOF focus = which step is live; pulse = flow; dim = approval focus |
| Palette charcoal `#121211` + copper `#d96832`, transparent bg | ✅ render transparent; `#review-bg` is review-only |
| Match `.sch-*` schematic language | ✅ dot+label spine, copper human node, hairline rules |
| Human approval is the peak | ✅ hold + dim + bloom + ✓ Approved badge |
| Landscape 1920×1080, ~12s | ✅ |

## Validation

- `hyperframes lint` → **0 errors**. 1 warning remains: `font_family_without_font_face`
  — a **false positive**; the linter can't resolve `font-family: var(--font-body)` back to
  the `@font-face` blocks. Snapshot output confirms Inter + Geist Mono load and render.
- `hyperframes inspect --at 4.1,6.6,8.9,11.9` → **0 layout/overflow issues**.

## Render pipeline (DONE — and non-obvious, keep for reproducibility)

`#review-bg` is removed (composition is transparent). **`hyperframes render --format webm`
produced an OPAQUE, black-background WebM (`yuv420p`) — its alpha path did not engage.**
The reliable route is a MOV alpha master, then ffmpeg transcode:

```bash
# 1. Alpha master (ProRes 4444 → yuva444p12le, real alpha)
hyperframes render --format mov -f 30 -q high -o public/videos/_master.mov

# 2. Transparent WebM (VP9 alpha). NOTE: ffprobe pix_fmt shows yuv420p but
#    alpha_mode=1 is set; verify with the libvpx-vp9 decoder, not the default.
ffmpeg -i _master.mov -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 0 -crf 30 -auto-alt-ref 0 -an \
  public/videos/meeting-follow-up-workflow.webm

# 3. MP4 fallback on charcoal (#121211, opaque)
ffmpeg -f lavfi -i color=c=0x121211:s=1920x1080:r=30 -i _master.mov \
  -filter_complex "[0:v][1:v]overlay=shortest=1,format=yuv420p" \
  -c:v libx264 -crf 18 -movflags +faststart -an public/videos/meeting-follow-up-workflow.mp4

# 4. Poster (charcoal frame)
ffmpeg -ss 10.8 -i public/videos/meeting-follow-up-workflow.mp4 -frames:v 1 \
  public/videos/meeting-follow-up-workflow-poster.png

# _master.mov is scratch (~155 MB) — delete after deriving.
```

Alpha verified: WebM stream tag `alpha_mode=1`; corner pixel `(0,0,0,0)` via the
`libvpx-vp9` decoder; composited cleanly on charcoal (no halo — the earlier white
halo was purely a black-background artifact). Fonts (Inter/Geist Mono) load in render.

## Known / deferred

- **Loop**: linear film + soft settle, not a seamless crossfade. v2 option.
- **Vertical balance**: evidence column is lower-right heavy; acceptable, open to a pass.
- **Social cut**: square/portrait not built (landscape only, per spec).

## Commit hygiene (NOT committed yet — awaiting approval)

`.gitignore` excludes: `node_modules/`, `snapshots/`, `renders/`, and the HyperFrames
boilerplate helper docs (`AGENTS.md`, `CLAUDE.md`) — kept local, out of commits.
Intentional source to commit later: `index.html`, `assets/fonts/*`, `*.json`, the
`DESIGN/SCRIPT/STORYBOARD/REVIEW` docs, and the rendered video → `public/media/`.

## Open questions for review

1. Vertical balance — leave as-is or rebalance the lower-right weight?
2. Approval hold length (~2.5s) — right, or longer/shorter?
3. Anything in the storyboard beats to change before I render?
