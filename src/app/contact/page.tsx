import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { ContactForm } from "@/components/form/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Scalebridge.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch.">
        For financing opportunities, use{" "}
        <a href="/submit-opportunity" className="underline hover:text-accent">
          Submit an Opportunity
        </a>
        . For capital partnerships, use{" "}
        <a href="/capital-partners" className="underline hover:text-accent">
          Become a Capital Partner
        </a>
        . For everything else, send us a message below.
      </PageHero>
      <Section>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
