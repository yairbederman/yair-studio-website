# DESIGN — "Scattered → Mapped" film (Film 4)

A ~13s looping film for the homepage **Evidence** section ("What 'mapped'
looks like"). The before literally becomes the after: scattered request
fragments untangle and land as nodes on a mapped workflow spine, gated by a
human-approval peak. HyperFrames composition (GSAP), rendered to transparent
video, embedded above the static `.workflow-compare` panels.

**Differentiation from Film 1 (meeting-workflow):** Film 1 converges inputs
into the *first* node of a left-side spine, then walks the flow down. Here the
*entire before-state* is the material — six chaos fragments each resolve into a
*different* node on a right-side spine (mirrored composition), while a
left-side "ledger" of the four real before-items tidies itself (straightens +
strikes through) as each pain is answered. The mess becomes the map.

## Intent

- **Transformation, not adjacency.** The static section asks the visitor to
  connect two panels mentally; the film shows one becoming the other.
- **Show, don't claim.** No metrics, names, or fake UI. The improvement shown
  is structural — exactly what the section intro promises.
- **Human approval is the peak.** Copper checkpoint with ring bloom + hold,
  the signature beat shared with Films 1–3. It receives **no chaos fragment**:
  approval is the thing the system *adds*, not a rearranged piece of the mess.

## Source of truth (three-source rule)

Every text element traces to `src/content/home.ts` → `evidence`:

- Captions `BEFORE` / `MAPPED WORKFLOW` = the panel captions.
- Ledger lines = the four `before.items`, verbatim.
- Node labels + `email · chat · call` sub = `mapped.nodes`, verbatim.
- Chip texts are direct contractions of the before items they resolve
  (`email`, `chat`, `call`, `status?`, `follow-up?`, `what is open?`).

**Re-render this film if `evidence` copy changes** — the video bakes it in.

## Layout (1920×1080, hero frame = settled end state)

| Zone | x | Role |
|---|---|---|
| **Ledger** (left) | `130 → ~645` | cap `BEFORE` + the 4 before-items; enter tilted/jittered, straighten + strike as resolved |
| **Chaos field** (mid) | `~650 → 1180` | 6 mono chips at odd rotations + tangled hairlines; drift until pulled to the spine |
| **Spine** (right) | rail at `1330` | 6 nodes (y 168→888, gap 144), labels right of dots; `Human approval` copper at y 744; soft radial glow behind |

`#camera` push-in `scale 1.0 → 1.03` (marked `data-layout-allow-overflow`, as
in Film 2). Chaos field is intentionally overlapping → `data-layout-allow-overflow`.

## Tokens (mirror `src/app/globals.css`)

Charcoal `--bg-0 #121211`, copper `--accent #d96832`, cream `--fg-1 #f4f1ea`,
`--fg-2 #b9b3aa`, muted `--fg-3 #8a847a`, hairlines `--rule/-strong`.
Type: Inter (400 ledger, 600 labels) + Geist Mono (chips/caps/subs) — brand
fonts per the site's design system (overrides the generic skill font list;
established by Films 1–3). Local woff2.

## Motion

- Chaos: varied entrance directions/eases per element; slow finite drift
  (sine.inOut yoyo, computed repeats — never `repeat: -1`). Chips wrapped in
  drift wrappers so flight tweens never share a transform with drift tweens.
- Untangle: chips fly to their node dots (`power2.inOut`), shrink + dissolve;
  node activates (blur 1.6→0, copper dot, label brightens); the matching
  ledger line straightens (`rotation→0, x→0`), dims to `--fg-3`, and a
  strikethrough draws (`scaleX 0→1`).
- Approval: dim everything else, bounded copper ring bloom, ~1.5s hold.
- The last chip (`what is open?`) deliberately survives the peak — still
  open — then resolves into **Tracked to done**.
- Easing: `power1/2.inOut` (travel), `power3/expo.out` (reveals). No bounce.

## Hard "do not" (per brief + PRODUCT.md)

- ❌ No fake SaaS UI, metrics, numbers, client names.
- ❌ No neon, no AI sparkles; one bounded copper ring at the peak.
- ❌ No infinite repeats; fully deterministic (no random/Date/async).
