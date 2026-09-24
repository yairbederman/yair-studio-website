import Link from "next/link";
import Container from "@/components/Container";
import SpineReveal from "@/components/SpineReveal";
import CTAButton from "@/components/CTAButton";
import { ladderContent } from "@/content/ladder";
import type { Locale } from "@/content/types";

/**
 * The 3-rung commitment ladder as an editorial numbered list — rungs are read
 * top to bottom as one decision, so this is deliberately not a card grid.
 * Rungs come from the single source (src/content/ladder.ts); the section
 * copy (title/intro) comes from the caller, so the homepage and /offers can
 * frame the same three rungs differently. A receive item with an href (rung
 * 02's four project shapes) renders as a plain copper link. Rung 03 (the
 * managed office) is the elevated rung: a --bg-1 panel and the bracketed
 * primary CTA. Used by HomePageBody and OffersIndexPageBody.
 */
export default function LadderSection({
  locale,
  title,
  intro,
}: {
  locale: Locale;
  title: string;
  intro: string;
}) {
  const { rungs } = ladderContent(locale);
  return (
    <section className="section" id="ladder" aria-labelledby="ladder-title">
      <Container>
        <SpineReveal className="section-head">
          <h2 id="ladder-title">{title}</h2>
          <p className="section-intro">{intro}</p>
        </SpineReveal>
        <ol className="ladder">
          {rungs.map((rung) => {
            const primary = rung.num === "03";
            return (
              <li
                key={rung.num}
                className={primary ? "ladder-rung is-primary" : "ladder-rung"}
              >
                <span className="method-step-num" aria-hidden="true">
                  {rung.num}
                </span>
                <div className="ladder-body">
                  <h3 className="card-title">{rung.title}</h3>
                  <p className="ladder-kicker">{rung.kicker}</p>
                  <p className="ladder-desc">{rung.desc}</p>
                  <ul className="ladder-receive">
                    {rung.receive.map((item) => (
                      <li key={item.label}>
                        {item.href ? (
                          <Link href={item.href}>{item.label}</Link>
                        ) : (
                          item.label
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="ladder-cta">
                    <CTAButton
                      href={rung.cta.href}
                      variant={primary ? "primary" : "default"}
                    >
                      {rung.cta.label}
                    </CTAButton>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
