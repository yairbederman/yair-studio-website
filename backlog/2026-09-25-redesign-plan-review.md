# Review — "y[AI]r studio website redesign plan v1.0" (external, 2026-09-25)

> **Handoff.** Written 2026-09-25 for `C:/My Projects/yair-studio-website`. Self-contained. Reviews the externally
> written plan (Roei Lustig as primary reference; AI agents → websites → AI films), checks it against the repo and
> the decisions of 2026-09-24, adds competitor research and enhancements beyond the plan, and ends with a revised
> phase plan. Prior context: `backlog/2026-09-24-studio-redesign-plan.md` (decisions table),
> `backlog/2026-09-24-peer-website-benchmark.md` (≈100 peer sites), `.impeccable/critique/2026-09-24T09-28-31Z__*.md`
> (design critique of the shipped redesign, 27/40).

## 0. Verdict

| | |
|---|---|
| **Diagnosis** | Right, and independently corroborated. Yesterday's design critique already found: hero not bold (48px h1 over a 64% scrim), two taxonomies on the home (3 rungs then 5 capabilities), developer vocabulary leaking to a business audience ("agentic", "rung", "retainer"), the one convincing film buried as band 3 and a thumbnail on phones. |
| **Prescription** | About 60% usable. It silently reverses five decisions taken 2026-09-24, was written without opening the repo (six factual errors, §2), demotes the retainer that is the business model, recommends the exact font the benchmark called "the single biggest generic tell", and its hero depends on an asset that does not exist (§3). |
| **Recommendation** | Adopt the diagnosis, the three-service hierarchy, the sans direction (not Inter), the `/work` + `/ai-video` evidence pages, the claims pass and the About fix. Reject the retainer demotion, the phantom colour, the "Hebrew last" sequencing, the contact form, and the military film. Resolve five owner decisions (§1) and five factual questions (§11) before any code. |

## 1. Decisions the plan reverses without saying so — decide these first

| # | Decided 2026-09-24 | The plan says | Recommendation | Why |
|---|---|---|---|---|
| 1 | H1 "The AI department your office hires", **law first** | "AI agents built around the way your business works"; legal as a case study | **Partly accept.** New H1 leads with agents and the recurring work of an office. "Law first" leaves the H1 and becomes the first case study. "The AI department" survives as the *name of the retainer* in the lead and on the ladder, not as the site's H1. | The critique scored the H1 as the least bold element and "department" is abstract. But the audience rule (owners and office managers, never R&D) and the one live proof point (a law office) both stay. |
| 2 | **Sales motion: project → retainer**; every project page bridges to the Managed AI Office | "Make monthly support an engagement option associated with relevant systems" | **Reject.** The retainer stays the visible end state of the ladder and the "after the project" bridge stays on every project and service page. It can be presented more concretely (what runs each month, what you see), but not demoted. | The retainer is the revenue model behind the 5–15K ILS/month target. A footnote does not convert to it. |
| 3 | Ladder + **5 capability pages** | **3 services**: agents, websites, AI creative video | **Accept.** Fold process-optimization and ai-enablement into the agents service (they are the same buyer and the same system). Keep the ladder, but on one screen (critique P1). | Two taxonomies on one home page was the critique's lowest score. Five identical cards with an odd last card was a P2. |
| 4 | Type **Pair A · Editorial**: Newsreader display + Instrument Sans body (EN), Frank Ruhl Libre + Assistant (HE) | "Strong sans-serif such as **Inter**", Assistant for HE | **Accept the sans direction, reject Inter.** First candidate: Instrument Sans at 600–700 as the display face (already loaded, zero new fonts, matches the wordmark which is already Instrument Sans 600 and the v2 films which are sans-only on frame). Alternative: one characterful grotesk with real weight range. Hebrew display: Assistant 700–800 (already loaded) instead of Frank Ruhl Libre. | The benchmark named Inter body text "the site's single biggest generic tell" and it was removed yesterday. A sans site is *more* consistent with the assets that exist (wordmark, v2 films) than the serif is. |
| 5 | **Films = the studio's signature and proof**, not a service tile; the films page sells "short designed films rendered from code… no synthetic faces, no synthetic voices, in any film" (`src/content/studio/films.ts:18,127`) | Third service = **AI creative video**, dedicated `/ai-video` with the YouTube films (Dallal, grinder, VARriage, ESC), which contain synthetic people and voices | **Accept, and name the change:** this is a *new product*. The four YouTube films are generative creative work; the current page sells the opposite and forbids exactly what they are. Decision: sell generative creative films as service 3 (a real portfolio exists), and keep the code-rendered loops as the site's own proof medium, unsold. Delete or rescope the "no synthetic people" rule. | Shipping `/ai-video` next to the current films page would contradict itself on the same site. |

## 2. Factual errors in the plan (checked against the repo)

| Plan claim | Reality | Consequence |
|---|---|---|
| "Preserve the existing logo artwork, lettering, proportions and colours exactly… use approved logo variants for header, footer, favicon, video outro" | There is **no logo artwork**. The brand is a text component, `src/components/Wordmark.tsx`, set in Instrument Sans 600 with `[AI]` in the accent (`globals.css:285-313`). Assets: `favicon.ico` only; the OG image is generated in code (`src/app/opengraph-image/route.tsx`). | The "preserve the logo" constraint is moot. A sans headline face is consistent with the wordmark. Decide once: keep the wordmark as live text (recommended) or commission artwork later. The OG eyebrow still says "AI workflow systems" (`route.tsx:47`) and must change with the H1. |
| "Earlier brand orange **#FF4B1F**, preferred candidate" | Not in the repo, not in `public/`, not in any design-system folder on this machine. No source. | Drop it. Keep `#D96832` (AA-checked across the site in the critique). Revisit only if a real source file appears. |
| Phase 3 = "Hebrew and route migration" **after** the English site | Hebrew is bilingual **by construction**: every route mirrors under `/he` (`src/app/(he)/…`), all copy is locale-keyed in `src/content/*.ts`, and the build fails if a Hebrew string is missing (`src/lib/site.ts:275-290`). | Hebrew is written with English in *every* phase, or nothing builds. Budget the Hebrew editorial pass into each phase. |
| "Verify **בידרמן** with Yair" | The repo spells it **בדרמן** (`src/content/proof.ts:195,203`). `LAUNCH-CHECKLIST.md:14` already has this open. | Owner answers once (§11). Two spellings must not both ship. |
| "Inspect actual routing… use permanent redirects" | Redirects live in `next.config.ts:16-50` (308, each duplicated for `/he`); nine legacy ones already exist. No `vercel.json`, no middleware. | Add the new ones there, and update `sitemap.ts`, `llms.txt/route.ts` and `JsonLd.tsx` in the same change. |
| Contact: "a short choice: agents / website / film / explore… ask for name, contact details…" | **No form and no API route exist.** Contact is `mailto:` + WhatsApp with a prefilled message + LinkedIn (`src/lib/site.ts:52-83`); HE leads with WhatsApp, EN with email. | A form is new backend work (delivery, spam, testing). Cheaper and on-benchmark: a four-way chooser that swaps the **prefilled WhatsApp/email message** per service (§9). |

Also unverified in the plan: the About chronology. `proof.ts:67` says Lognet **2023–2026** and "independent since **Aug 2024**"; the wording "before that" implies sequence, the dates overlap. Owner question in §11.

## 3. The hero dependency (biggest single risk)

The plan's hero needs "a working demo, real interface, or clearly labelled prototype" of an agent. What exists:

| Asset | Status | Fit for the hero |
|---|---|---|
| `command-center` film, 16:9 + 4:5 phone cut | In build · sample data (label on site) | Yes, with the label kept |
| Nine process loops (`cap-*`, `scattered-to-mapped`, sprint, enablement) | Rendered, v2 spec | Explain a workflow; do not prove an agent runs |
| Live law-office system (marketing analytics + lead generation, anonymised) | Real, in production, never shown | Strongest proof on the site if the client allows anonymised screens |
| YouTube creative films | Real, public | Prove service 3, not service 1 |

| Option | Pros | Cons |
|---|---|---|
| **A. Command Center film as the hero, EN and HE cuts, headline over it** (recommended now) | Exists today; the 4:5 cut is done; the critique asked exactly this ("why is it band 3 and a thumbnail?") | It is a film of a prototype; the "in build · sample data" chip must stay in the frame |
| B. Record the live law-office system, 30–60 s anonymised walkthrough | The only real client system; becomes `/work` case study 1 | Needs the client's OK; recording and anonymising work |
| C. Interactive demo on the agents page: paste an email → triage + draft, synthetic data | Proof no competitor found in §8 has; shows "input → result" literally | 1–2 build sessions; API cost and abuse limits; must be labelled a demo |

Recommendation: **A now, B this week (ask the client), C as the differentiator in phase 3.** Without at least A the "work-first" pattern borrowed from Roei has nothing to show for the first-priority service.

> **Owner decision 2026-09-25:** hero visual deferred. Phase 2 ships the hero with a **labelled placeholder slot** (fixed aspect, poster-sized, "hero visual: to be decided") so layout, type and copy can be judged without it. The A/B/C choice is a separate later decision.

## 4. Homepage — what to keep from the plan, what to change

Roei Lustig's page (checked 2026-09-25): nav Work · About · Services · Contact + "Get in touch →"; a "Currently replies within 48 hours" chip; a three-line sans H1 with **one orange word**; a stats band (500M+ views, 250+ films, 20+ brands); a brand-logo marquee; "The work." as a grid of large poster cards with a play button and "INCLUDES … ×N" chips and a Concepts/Directed toggle; a candid note "Why so many concepts?" explaining that spec work is shown because client work is audience-specific; six disciplines; about; six services; contact by email. His product is visual by nature; the first-priority service here is not. What transfers is **hierarchy, candour and the work-card pattern**, not the stats band or the logo wall (no numbers, no logos, by decision).

| Slot | Plan | Change |
|---|---|---|
| H1 | "AI agents built around the way your business works." | One concrete promise, one accent word. Candidates below. |
| Lead | Lists all three services | **One service in the hero.** "I'm Yair. I build them, run them, and stay on as the AI department a small office hires." Websites and films get one small line under the CTAs, not the lead. |
| Status chip | — | "Replies within one business day · WhatsApp or email" (Roei's 48-hour chip, honest version) |
| Credibility slot (Roei: numbers) | "Why Yair" section lower down | Four facts already in `proof.ts:69-85` (20+ years, Viber scale, a live law-office system, one person) as a compact band under the hero, no numbers invented |
| Candour | — | A short note modelled on "Why so many concepts?": *what on this site is a live system, what is a prototype with sample data, what is a concept film.* Turns the evidence gap into a trust signal. |
| Work | 2 systems + 1 website + 1 film | Realistic today: Command Center (prototype), law-office system (if allowed), this website itself (bilingual, built in-house), Dallal. Fewer, larger cards. |
| Ladder | "A simple way to work together", 4 steps | Keep the existing 3-rung ladder, one screen on desktop, rung 03 (Managed AI Office) elevated. Drop the plan's generic 4-step process; it repeats the ladder. |
| CTAs | "Discuss a project" / "View selected work" | Keep "Book a scoping call" (names the outcome) → `/contact`; secondary "See the work" → `/work`. HE stays WhatsApp-first. |

**H1 candidates (EN; the accent word in bold; drafts for revision):**

| | H1 | Note |
|---|---|---|
| A | AI agents for the work your office **repeats**. | Shortest; "repeats" names the pain |
| B | I build AI agents that run your office's **recurring** work. | Personal, first person, matches Roei's tone |
| C (recommended) | AI agents for the work your office repeats. *Lead:* I'm Yair. I build them, run them, and stay on as the AI department a small office **hires**. | H1 is one promise; the retainer idea lives in the lead where it converts |

> **Owner decision 2026-09-25: C chosen.** H1 "AI agents for the work your office repeats." Lead "I'm Yair. I build them, run them, and stay on as the AI department a small office hires." Accent word: "hires" in the lead (or "repeats" in the H1 if the lead carries no accent). HE below is a draft pending the owner's native pass.

**HE (written, not translated; needs a native pass):** סוכני AI לעבודה שהמשרד שלכם חוזר עליה כל יום. *Lead:* אני יאיר. אני בונה אותם, מפעיל אותם, ונשאר כמחלקת ה-AI של המשרד.

## 5. Site structure and routes

| Plan | Recommendation |
|---|---|
| Nav: Work · Services · About · Contact · EN/HE | Accept. |
| `/services` + `/services/ai-agents` + `/services/websites` + `/ai-video`, **keep `/offers` during the first pass** | Reject keeping `/offers`: that is three taxonomies (services, offers, ai-video). Collapse to one: `/services` (index) → `ai-agents` (absorbs agentic-systems, process-optimization, ai-enablement, and the Workflow Sprint as its fixed-price entry), `websites`, `films` (or `/ai-video`, one name only), `managed-office` (the retainer, kept as a page). |
| `/work` + `/work/[slug]` | Accept. Needs a **central work data file** (today every film is inline in its page; there is no `films.ts` or `work.ts`). One `WorkItem` type: title, slug, category, brief, role, status (live / prototype / concept), poster, source (local mp4/webm *or* YouTube id), aspect, language/captions, deliverables. |
| Redirects | `/studio` → `/services`; `/studio/agentic-systems`, `/studio/process-optimization`, `/studio/ai-enablement` → `/services/ai-agents`; `/studio/websites` → `/services/websites`; `/studio/films` → `/services/films`; `/offers` → `/services`; `/offers/ai-workflow-sprint` → `/services/ai-agents#sprint`; `/offers/ai-office-assistant` → `/services/managed-office`. Each duplicated for `/he`. Keep the nine existing ones. |
| Hebrew | Mirrored by construction; nothing to migrate separately. |

## 6. `/ai-video` (creative films)

Accept the page. Push-backs:

1. **Exclude the military/political film entirely.** The audience is office managers and owners; the plan itself says it "would dominate the first impression". Behind-a-fold placement does not fix that.
2. **Label every film "concept" until commissioning is confirmed.** Roei's Concepts/Directed toggle is the honest pattern. Commissioning status is unknown for all four (§11).
3. **YouTube needs a new player path.** `FilmPlayer` (`src/components/FilmPlayer.tsx:54-80`) takes local mp4/webm + poster. Either self-host the exports (best: same component, same controls, reduced-motion handling) or add a click-to-play YouTube embed with a local poster. Do not load four embeds on page load.
4. **Portrait framing.** Aspect ratio is CSS today (16:9, 4:5 via `.has-mobile`). The work model needs an explicit aspect field so 9:16 films are not letterboxed.
5. The ESC 25–35 s recut is a film task, not a website task. Track it separately.

## 7. Copy and claims

The repo has 25+ absolute statements. They fall into two kinds, and the plan's blanket "replace absolute language" treats them the same:

| Kind | Examples | Action |
|---|---|---|
| **Guarantees about the process** (true by construction: a person approves) | "Nothing is sent or changed without your approval" (`ladder.ts:215`, `home.ts:135-141`, `ai-office-assistant.ts:152,210,248`) | **Keep.** This is the brand's one idea (the copper approval dot, the bracketed button). The critique called it "the anti-slop core". |
| **Guarantees about model behaviour** | "When an agent is unsure, it asks. **It never guesses**" (`agentic-systems.ts:136`); "every word on frame traces to your real copy" (`films.ts:18`); "nothing invented for the screen" (`films.ts:36`) | **Rewrite** as behaviour with a review point: "When confidence is low it flags the item for a person instead of acting." |

Also: replace developer vocabulary the critique flagged ("agentic", "rung", "retainer", n8n / Make / Claude Code names in credentials) with business words; the HE-only "תמיד" (`about.ts:97`) is stronger than the EN line and should match.

## 8. Competitor research (2026-09-25, 14 sites fetched)

Narrow set, deliberately: yesterday's benchmark covered ≈100 sites. This pass fetched the direct Israeli sellers of "סוכני AI / אוטומציה לעסקים" to SMBs and offices, plus five international solo builders with work-first sites. Unreachable: Elya Studio (HTTP 500), Fraction (refused), Atarize (title only).

### Israeli direct competitors

| Site | Who | Pricing shown | Proof shown | Primary CTA | Worth borrowing |
|---|---|---|---|---|---|
| achiya-automation.com | Solo (Achiya Cohen, Ashdod) | Setup bands ₪1,200 → ₪12,000 + ₪100–300/mo ops | "50+ projects", Google 5.0★ (20), one detailed case (~14 h/week saved), live bot transcript, WhatsApp-screenshot testimonials | wa.me | "If I don't think automation will help, I'll say so honestly" + published bands. **Closest analogue to this studio.** |
| aitermi.com | Solo (Yoni Termi) | Monthly only: ₪150 / ₪350 / ₪600, 30-day cancel | 11 logos, live chat panel listing 4 running agents with allowed/forbidden actions | WhatsApp, phone | "Google Cloud servers in the Israel region", separate DB per client, Hebrew-first |
| automaziot.ai | Small team (TLV); has a 2026 law-firm guide | Fixed builds "from ₪10,200 / ₪18,200 / ₪25,350"; explicitly no monthly | Google 5★, press (Walla, ICE, Maariv), ROI calculator, comparison table, sample WhatsApp threads | WhatsApp, form, phone | "Sometimes you don't need AI" candour; open-source, no lock-in; Israeli privacy law + GDPR stated |
| comix-flow.com | 2 founders | Managed only, "from ₪670/mo" | None | "15-minute demo" | Objection-handling FAQ; natural-Hebrew voice/WhatsApp agents as the wedge |
| doctorai.co.il | Solo (Barak Bar-Chen) | None; free 20-min call returns "2–3 directions and a budget estimate" | "79 organisations", 15+ yrs, Google 5.0, named quotes, video | Form, WhatsApp bot | Hero frames the buyer's anxiety: "Everyone talks about AI. Who in your firm is responsible for making it happen?" |
| practik.co.il | Team, law only | Retainer "from ₪1,499/mo" incl. implementation, 3-month minimum | Dashboard mock with numbers ("312 hours saved ≈ ₪109,000"), activity log | Form | "Zero change to your workflow, live in days" (vertical reassurance the current law page lacks) |

Also fetched: focusai.co.il (team, before/after table, no prices), binovate.co.il (legal AI assistant, 15 logos, no cases), amirbaldiga.com (solo, "built in public": his agents wrote most of the site; targets B2B SaaS, not offices).

### International solo / small builders

| Site | Who | Pricing | Proof | Worth borrowing |
|---|---|---|---|---|
| alea.build | Solo ("The studio is one person, and that's the point") | $0 upfront; from $30K as 12 × $2,500/mo, own it after 12 | 60 fictional-but-working examples; a free 90-second demo generated from *your* site | Radical price transparency; a working demo removes discovery risk; "the person you talk to builds the rest" |
| amroar.com (legal) | 2 leads + bench | $997 / $2,997 / custom, with weeks-to-live | "50+ agentic builds", six named agent types (intake, contract review, discovery) | Dark, work-first; per-vertical taxonomy of *named agents with a clock* |
| agentespresso.ca | Solo | Retainer, no prices, anchored against a "$120K full-time hire" | None | "Fractional AI operator, not a consultant handoff": the closest frame to "the AI department your office hires" |
| cjwray.com | Solo since 2008 | Ladder: $150 clinic → diagnostic → blueprint → full OS → "Care & Support Plans" | Own business + published book | Cheap paid entry rung and a *named* support rung after the build |
| customaistudio.io | Small team (SF/Austin) | Workshop + custom, no prices | "60+ production systems", "$13M+ ROI", video testimonials | Industry deep-dive pages; results-first case format |

### Patterns that matter for this site

1. **Hero formulas in use:** "works for you 24/7" (Achiya, Focus AI); anti-hype honesty ("no buzzwords, just results", Comix-Flow; DoctorAI's "who is responsible?"); "we build AI agents for [vertical]" (Amroar); hire-substitute (AgentEspresso); commercial-terms hook ("Build now. Pay from go-live.", ALEA). The current H1 belongs to the hire-substitute family; nobody in Israel uses it.
2. **Proof with few clients:** live artefacts beat logos (bot transcripts, an agent panel with allowed/forbidden actions, sample WhatsApp threads); functional spec work at scale (ALEA); built-for-myself tools (Baldiga). **Nobody shows a recorded walkthrough of a real client system running.**
3. **Retainers:** either/or, never a ladder. Automaziot = build, no monthly; Comix-Flow, AITermi, Practik = monthly only; Achiya alone shows setup + a hosting-level monthly. **None frames month 2+ as "what keeps improving"; the retainer is always billed as maintenance.** The project → retainer ladder here is unoccupied ground, which is another reason not to demote it (§1 row 2).
4. **Israeli trust moves:** WhatsApp as primary CTA, visible phone, Google rating + count, press mentions, data locality ("Israel region", separate DB per client), Israeli privacy law + GDPR, 30-day cancel, accessibility statement (legal requirement here; the site has none).
5. **Prices:** five of six Israeli competitors publish ILS floors ("החל מ-"). Yesterday's decision was "model only, no numbers"; the benchmark had already recommended shekel floors. Reopen this as an owner decision (§9 row 7).

### Gaps none of them fill (a one-person studio can)

1. **Filmed proof** of a real recurring workflow running in an office ("watch it run" per case study). This studio already has the film pipeline.
2. **A concrete "after the project" page**: what the monthly covers (monitoring, model swaps, one new automation per month, a monthly report) with a *sample monthly report*. The bridge exists in code (`ladder.ts:239 afterProjectSection`) but is a paragraph, not a page.
3. **A bilingual law/accounting office page from a solo**: three named recurring workflows (intake, deadline reminders, document assembly), a price band, a data-residency line. Practik and Binovate are teams and Hebrew-only; Amroar is English-only.
4. **Self-serve scoping**: a 5-question "office AI check" that returns a scoped mini-plan and a band before the call. Only Automaziot has anything like it (an ROI calculator).
5. **Named-founder accountability + honest refusal + "what I won't build"**: ALEA's and Achiya's strongest lines, never combined, never with an explicit refusal list.

## 9. Enhancements beyond the plan (ranked by trust per effort)

| # | Enhancement | Why | Effort |
|---|---|---|---|
| 1 | **Candour note**: "What here is live, what is a prototype, what is a concept" | Roei's "Why so many concepts?" is the most transferable thing on his site; it converts the evidence gap into honesty | 1 hour |
| 2 | **Per-service contact prefill**: chooser (agents / website / film / not sure) swaps the WhatsApp and email message | Gives the plan's "service-specific prompts" without a form or backend; matches the Israel WhatsApp-first finding | Half a session |
| 3 | **Deliverables chips on work cards** ("Intake agent ×1 · Approval step ×1 · Dashboard ×1") | Roei's "INCLUDES ×N" pattern makes invisible agent work legible as nouns | Half a session |
| 4 | **Interactive triage demo** on `/services/ai-agents` (paste an email → category, draft reply, "needs a person" flag; synthetic data) | The one proof format no competitor shows; literally "input to result" | 1–2 sessions |
| 5 | **Israel trust line**: where client data lives + "one business day" reply chip + phone/WhatsApp visible in the header | Benchmark finding; international peers do not do this | 1 hour |
| 6 | **Measurement**: Vercel Analytics events on WhatsApp vs email click, rung chosen, work card opened, per locale | The benchmark's conclusion: the site must generate its own conversion evidence | 1 hour |
| 7 | ~~"From ₪" price floors~~ **Declined by owner 2026-09-25: no prices on the site yet.** "Model only, no numbers" stands. | Five of six Israeli competitors publish ILS floors; revisit when the owner is ready | — |
| 8 | **"After the project" page** with a sample monthly report | No competitor explains month 2+; it is the conversion step to the retainer | 1 session |
| 9 | **"What I won't build" list** next to the founder note | Combines the two strongest trust lines found (ALEA, Achiya) into one this site can own | 1 hour |
| 10 | **Accessibility statement** page (HE + EN) | Legal requirement in Israel; competitors have it, this site does not | 1 hour |

## 10. Revised phase plan

| Phase | Fix | Impact | Risk |
|---|---|---|---|
| 0 (done, this file) | Inventory and review | Plan is grounded in the repo | Low |
| 1 · Owner decisions (10 min) | §1 rows 1–5, §11 questions | Nothing is built on a reversed decision | Low |
| 2 · Type + hero + home (EN+HE together, ~2 sessions) | Sans display, hero = Command Center film with H1, credibility band, candour note, three services, one-screen ladder, status chip | The first screen states one service and shows one proof | Medium: font change touches every page; verify at 360/390/768/1440 both locales |
| 3 · Evidence pages (~2 sessions + client OK) | Central work data, `/work`, `/ai-video` with concept labels, case study 1 (law office) | Real work reachable from every page | Medium: depends on client permission and YouTube hosting choice |
| 4 · Services + routes + claims (~1.5 sessions) | `/services/*` consolidation, redirects, About chronology, claims rewrite, vocabulary pass, contact prefill | One taxonomy; no contradictions; no unverifiable claims | Medium: 9 existing + ~10 new redirects; sitemap/llms/JsonLd must follow |
| 5 · QA (~0.5 session) | `npm run lint`, `npm run build`, both locales at four widths, playback, reduced motion, redirects | Ships clean | Low |

Gates for every code phase: ripple scan, impact-analysis, `/code-review` (high for phase 2 and 4).

## 11. Owner questions that change the work

1. Surname in Hebrew: **בדרמן** (repo) or **בידרמן** (plan)?
2. Lognet end month, and was the independent work parallel from Aug 2024? (Bio implies sequential; dates overlap.)
3. Which film product is sold: generative creative films (the YouTube portfolio), code-rendered loops (current page), or both?
4. May the law-office system be shown anonymised (screens or a recording)?
5. Dallal, coffee grinder, VARriage, ESC: commissioned, spec, or personal experiment, each?
