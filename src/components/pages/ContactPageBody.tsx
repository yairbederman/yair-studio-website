import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import CTAButton from "@/components/CTAButton";
import CopyEmail from "@/components/CopyEmail";
import { contactContent } from "@/content/contact";
import { shellContent } from "@/content/shell";
import { CONTACT_EMAIL } from "@/lib/site";
import type { Locale } from "@/content/types";

/**
 * The contact page, shared by both locales — one composition, zero EN/HE
 * structural drift. Email is the primary action; WhatsApp the ghost
 * secondary; CopyEmail covers machines with no mail client.
 */
export default function ContactPageBody({ locale }: { locale: Locale }) {
  const c = contactContent(locale);
  const shell = shellContent(locale);
  return (
    <main id="main">
      <PageHero
        id="contact"
        title={c.hero.title}
        lead={c.hero.lead}
        actions={
          <>
            <CTAButton href={c.hero.emailCta.href} variant="primary">
              {c.hero.emailCta.label}
            </CTAButton>
            <CTAButton href={c.hero.whatsappCta.href} variant="ghost">
              {c.hero.whatsappCta.label}
            </CTAButton>
            <CopyEmail email={CONTACT_EMAIL} labels={shell.copyEmail} />
          </>
        }
      />

      <OfferSection id="next" title={c.next.title}>
        <OfferSteps items={c.next.steps} />
      </OfferSection>

      <OfferSection id="send" title={c.send.title} intro={c.send.intro}>
        <OfferCardGrid items={c.send.items} />
      </OfferSection>

      <OfferSection
        id="good-first"
        title={c.goodFirst.title}
        intro={c.goodFirst.intro}
      >
        <div className="panel-list">
          <ul>
            {c.goodFirst.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </OfferSection>

      <OfferSection id="human" title={c.human.title} intro={c.human.intro}>
        <OfferCardGrid items={c.human.items} variant="human" />
      </OfferSection>

      <OfferCTA
        heading={c.cta.heading}
        body={c.cta.body}
        ctaLabel={c.cta.ctaLabel}
        ctaHref={c.cta.ctaHref}
        secondaryCta={c.cta.secondaryCta}
        extraAction={<CopyEmail email={CONTACT_EMAIL} labels={shell.copyEmail} />}
      />
    </main>
  );
}
