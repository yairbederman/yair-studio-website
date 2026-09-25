import PageHero from "@/components/PageHero";
import OfferSection from "@/components/offers/OfferSection";
import OfferCardGrid from "@/components/offers/OfferCardGrid";
import OfferSteps from "@/components/offers/OfferSteps";
import OfferCTA from "@/components/offers/OfferCTA";
import CopyEmail from "@/components/CopyEmail";
import ContactChooser, { ContactClickTracker } from "@/components/ContactChooser";
import type { ChooserOption } from "@/components/ContactChooser";
import { contactContent } from "@/content/contact";
import type { ContactPrefill, ContactTopic } from "@/content/contact";
import { shellContent } from "@/content/shell";
import { CONTACT_EMAIL, CONTACT_MAILTO, waLink } from "@/lib/site";
import type { Locale } from "@/content/types";

/**
 * RFC 6068 mailto link with a percent-encoded subject and body. Body line
 * breaks go out as CRLF (%0D%0A), the form the RFC requires, so every mail
 * client keeps the prompts on separate lines.
 */
function mailtoHref({ subject, body }: ContactPrefill["email"]): string {
  const crlfBody = body.replace(/\n/g, "\r\n");
  return `${CONTACT_MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(crlfBody)}`;
}

/** One topic as plain data for the client chooser: both links prebuilt. */
function chooserOption(topic: ContactTopic): ChooserOption {
  return {
    key: topic.key,
    label: topic.label,
    href: { whatsapp: waLink(topic.whatsapp), email: mailtoHref(topic.email) },
  };
}

/**
 * The contact page, shared by both locales — one composition, zero EN/HE
 * structural drift. The hero's action is the topic chooser: the links are
 * built here, on the server, and the client component only swaps them. The
 * content decides which channel is primary (email in EN, WhatsApp first on
 * /he); CopyEmail covers machines with no mail client. The closing band
 * opens the "not sure yet" message, for visitors who scrolled past the
 * chooser; ContactClickTracker reports its clicks with the same event as the
 * chooser, so contact_click counts every channel link on the page.
 */
export default function ContactPageBody({ locale }: { locale: Locale }) {
  const c = contactContent(locale);
  const shell = shellContent(locale);
  const notSure = chooserOption(c.chooser.notSure);
  const options = [...c.chooser.services.map(chooserOption), notSure];
  const channels = c.chooser.channels.map((channel) => ({
    channel,
    label: c.chooser.channelLabels[channel],
  }));
  const [primary, secondary] = channels;
  return (
    <main id="main">
      <PageHero
        id="contact"
        title={c.hero.title}
        lead={c.hero.lead}
        actions={
          <>
            <ContactChooser
              legend={c.chooser.legend}
              hint={c.chooser.hint}
              options={options}
              defaultKey={notSure.key}
              channels={channels}
            />
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

      <ContactClickTracker service={notSure.key} hrefs={notSure.href}>
        <OfferCTA
          heading={c.cta.heading}
          body={c.cta.body}
          ctaLabel={primary.label}
          ctaHref={notSure.href[primary.channel]}
          secondaryCta={{
            label: secondary.label,
            href: notSure.href[secondary.channel],
          }}
          extraAction={
            <CopyEmail email={CONTACT_EMAIL} labels={shell.copyEmail} />
          }
        />
      </ContactClickTracker>
    </main>
  );
}
