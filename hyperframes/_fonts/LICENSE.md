# Film type kit — licence + provenance

Every file in this folder is licensed under the **SIL Open Font License 1.1**
(https://openfontlicense.org/). This folder is the complete, single-source type kit
for the bilingual HyperFrames films; each film's `assets/fonts/` holds a byte-identical
copy. Re-copy from here — never edit a film copy in place.

## Newly obtained 2026-09-24 (WS-D-prep)

Fetched through the Google Fonts CSS v2 API with a Chrome 124 desktop User-Agent (the
UA is what makes the API answer with woff2 + `unicode-range` subsets):

```
curl -s -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" \
  "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,500&family=Instrument+Sans:wght@400;600&family=Frank+Ruhl+Libre:wght@500&display=block"
```

The response lists one `@font-face` per subset. Taken: the `latin` subset for
Newsreader and Instrument Sans, the `hebrew` + `latin` subsets for Frank Ruhl Libre.
Not taken: `latin-ext`, `vietnamese`. Each file was verified to start with the `wOF2`
magic bytes.

| File | Bytes | Family · weight · subset | Source URL (fonts.gstatic.com) |
|---|---|---|---|
| `newsreader-500-latin.woff2` | 60724 | Newsreader · 500 · latin | https://fonts.gstatic.com/s/newsreader/v26/cY9VfjOCX1hbuyalUrK49dLafXjalZCsZBsSBgbNJYQ.woff2 |
| `instrument-sans-400-600-latin.woff2` | 30092 | Instrument Sans · 400 + 600 · latin | https://fonts.gstatic.com/s/instrumentsans/v4/pxiTypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr0SZe1Q.woff2 |
| `frank-ruhl-libre-500-hebrew.woff2` | 6624 | Frank Ruhl Libre · 500 · hebrew | https://fonts.gstatic.com/s/frankruhllibre/v23/j8_96_fAw7jrcalD7oKYNX0QfAnPcbzNEEB7OoicBw73YWqVNRVGEQ.woff2 |
| `frank-ruhl-libre-500-latin.woff2` | 15012 | Frank Ruhl Libre · 500 · latin | https://fonts.gstatic.com/s/frankruhllibre/v23/j8_96_fAw7jrcalD7oKYNX0QfAnPcbzNEEB7OoicBw73YWqXNRU.woff2 |

### Variable axes

`newsreader-500-latin.woff2` and `instrument-sans-400-600-latin.woff2` carry
`fvar`/`gvar`/`avar`/`HVAR` tables (variable fonts); both Frank Ruhl Libre files are
static instances. Per the request above, the Newsreader file keeps the optical-size axis
(`opsz` 6..72) with `wght` pinned at 500, and the API served **one** Instrument Sans file
for both `wght@400` and `wght@600` (identical URL in both `@font-face` blocks), so it is
declared once with a weight range. Axis ranges were not decoded locally (no fontTools on
this machine); the browser resolves `font-optical-sizing: auto` (Newsreader) and
`font-weight: 400 | 600` (Instrument Sans) from the files' own axes.

### unicode-range (verbatim from the API response — use as-is in every film)

- **hebrew:** `U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F`
- **latin:** `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`

### @font-face blocks for the films (WS-D adds these to each `index.html`)

```css
@font-face { font-family: "Newsreader"; font-weight: 500; font-display: block; src: url("assets/fonts/newsreader-500-latin.woff2") format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: "Instrument Sans"; font-weight: 400 600; font-display: block; src: url("assets/fonts/instrument-sans-400-600-latin.woff2") format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: "Frank Ruhl Libre"; font-weight: 500; font-display: block; src: url("assets/fonts/frank-ruhl-libre-500-hebrew.woff2") format("woff2"); unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F; }
@font-face { font-family: "Frank Ruhl Libre"; font-weight: 500; font-display: block; src: url("assets/fonts/frank-ruhl-libre-500-latin.woff2") format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
```

## Carried over from the films (unchanged)

`geist-mono-400.woff2` (12792 B), `assistant-600-hebrew.woff2` (4240 B),
`assistant-600-latin.woff2` (12316 B) — copied byte-for-byte from
`command-center/assets/fonts/` (md5 identical across every film that ships them).
Geist Mono: Vercel, SIL OFL 1.1 (https://github.com/vercel/geist-font). Assistant:
SIL OFL 1.1 via Google Fonts. Their `@font-face` blocks are the ones already in each
film's `index.html`; the Assistant blocks use the same `unicode-range` strings as above.

## Family pages (About & license tab)

- Newsreader — https://fonts.google.com/specimen/Newsreader
- Instrument Sans — https://fonts.google.com/specimen/Instrument+Sans
- Frank Ruhl Libre — https://fonts.google.com/specimen/Frank+Ruhl+Libre
- Assistant — https://fonts.google.com/specimen/Assistant


## Added 2026-09-24 (film spec v2: sans-only films)

Assistant 700 (hebrew + latin subsets), same CSS-v2 method as above, request `family=Assistant:wght@700`.

| File | Bytes | Source URL |
|---|---|---|
| `assistant-700-hebrew.woff2` | 4248 | https://fonts.gstatic.com/s/assistant/v24/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtgFgIGSV35Gu.woff2 |
| `assistant-700-latin.woff2` | 12364 | https://fonts.gstatic.com/s/assistant/v24/2sDPZGJYnIjSi6H75xkZZE1I0yCmYzzQtgFgIGaV3w.woff2 |

```css
@font-face { font-family: "Assistant"; font-weight: 700; font-display: block; src: url("assets/fonts/assistant-700-hebrew.woff2") format("woff2"); unicode-range: U+0307-0308, U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F; }
@font-face { font-family: "Assistant"; font-weight: 700; font-display: block; src: url("assets/fonts/assistant-700-latin.woff2") format("woff2"); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
```

## Pruned 2026-09-24 (film spec v2)

Film spec v2 made the films sans-only, so the serif cuts (`newsreader-500-latin.woff2`,
`frank-ruhl-libre-500-{hebrew,latin}.woff2`) were removed from this kit and from every film's
`assets/fonts/`. The site still loads Newsreader and Frank Ruhl Libre through `next/font`
(`src/lib/fonts.ts`); the film kit no longer carries them. The `@font-face` blocks above are kept
as history; do not paste the serif ones into a composition.
