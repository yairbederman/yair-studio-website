# SCRIPT — what the film says

Subject: the **Command Center** — the product face of the Managed AI Office. Not a process, a
place: the one view the office logs into, where the day is assembled and the things that need
a person wait for one. Both cuts (16:9 and the 4:5 phone cut) say exactly this, with the same
strings.

## The message arc

> Overnight, the inputs pile up. The command center assembles them into one view. Nothing acts
> alone — what matters waits in the copper approval queue for a person. Then the day starts
> decided.

## The cast (all copy traces to the site content files — see DESIGN.md tables for line refs)

| Element | Text (EN) | Text (HE) | Source |
|---|---|---|---|
| Overnight chips | `email · calendar · documents` | `מייל · יומן · מסמכים` | flagship `example.map` node 0 `sub` |
| Header tagline | `What your office logs into` | `מה שהמשרד שלכם נכנס אליו` | flagship `film.sectionTitle` |
| Panels | `Morning briefing` · `Email triage` · `Document workflows` (phone: the last two) | `תדריך בוקר` · `מיון מיילים` · `תהליכי מסמכים` | flagship `build.items[].title` |
| Panel rows | `Meetings` · `Deadlines` · `Incoming mail` · `Draft replies` · `Signatures` · `Stalled documents` | `פגישות` · `מועדים` · `דואר נכנס` · `טיוטות תשובה` · `חתימות` · `מסמכים תקועים` | nouns from the same items' `desc` |
| Approval column | `Human approval` — `Draft reply` · `Signature` | `אישור אנושי` — `טיוטת תשובה` · `חתימה` | flagship `example.map` human node; items = singular of two rows |
| Safety caption | `No external messages are sent without approval` | `לא שולחים הודעות בלי אישור` | home `boundaries.items[1]` |
| Closing | `The day starts decided` | `היום מתחיל מוכרע` | flagship `example.map` out node |
| Honesty chip | `Sample data` (uppercase treatment) | `נתוני דוגמה` | proof `sampleBadge` |

On the phone cut the header lines are authored splits (`What your office` / `logs into`,
`No external messages` / `are sent without approval`, `The day starts` / `decided`; HE tagline
`מה שהמשרד שלכם` / `נכנס אליו`) — each pair joins with one space to the verbatim string.

## The peak — the approval queue

The signature beat. Everything defocuses except the copper HUMAN APPROVAL column. Item 1 gets
the human check (`✓` draws in). The header's tagline gives way to the safety line, verbatim.
Then **item 2 is deliberately left waiting** — approval is never automatic. The human is
visibly in charge, not described as in charge.

## The payoff

Settled hero frame: the assembled day in one view — one item done, **one still waiting** — and
the closing line, `The day starts decided`, in the header. Holds to poster.

## Honesty rules (non-negotiable)

- No client names, matter numbers, identifier-dates, or performance metrics.
- Persistent `Sample data` chip from the moment the interface appears to the end.
- Nothing on frame that does not trace to the DESIGN.md source tables.
- The interface depicts the *category* of product using site tokens — an "in build" artifact,
  re-rendered from real screenshots when they exist.
