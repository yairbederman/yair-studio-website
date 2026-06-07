# y[AI]r studio — website

The public website for **y[AI]r studio** (spoken: *Yair Studio*) — AI systems for real business
workflows.

Built with Next.js (App Router) + TypeScript. This repo currently holds the **foundation only**:
a minimal App Router skeleton with placeholder routes. The design system, copy, and integrations
are added in later steps.

## Visual source of truth

The visual language (warm charcoal + softened copper, dark-first, technical/schematic) is defined
in the design-system repo and is the **single source of truth** for all styling:

> https://github.com/yairbederman/yair-design-system

Do not introduce ad-hoc brand colors, typography, or components here — they belong in, and flow
from, the design system.

## Commands

```bash
npm run dev     # start the dev server at http://localhost:3000
npm run build   # production build
npm run lint    # run ESLint
npm run start   # serve the production build (after `npm run build`)
```

Install dependencies first with `npm install`.

## Routes (placeholders)

| Path | Notes |
|------|-------|
| `/` | Home |
| `/he` | Hebrew (RTL) |
| `/offers/office-ai-systems` | Offer |
| `/offers/dashboards-automation` | Offer |
| `/offers/content-ad-operations` | Offer |

## Stack

App Router · TypeScript · ESLint · `src/` directory · import alias `@/*`. No Tailwind, no external
UI library. Hebrew/RTL is supported from the start (logical CSS properties + `dir="rtl"` on `/he`).
