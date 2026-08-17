import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Scalebridge terms of use.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <Section>
        <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl">
          [PLACEHOLDER] Our full terms of use are being finalised. In the
          meantime, if you have questions, please{" "}
          <a href="/contact" className="underline hover:text-accent">
            contact us
          </a>
          .
        </p>
      </Section>
    </>
  );
}
