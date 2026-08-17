import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Disclaimers",
  description: "Scalebridge disclaimers.",
};

export default function DisclaimersPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Disclaimers" />
      <Section>
        <div className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl flex flex-col gap-4">
          <p>
            [PLACEHOLDER] Our full disclaimers are being finalised. Nothing on
            this site constitutes an offer, solicitation, or commitment to
            provide financing, and submitting an opportunity or partner
            enquiry does not guarantee assessment, structuring, or funding.
          </p>
          <p>
            If you have questions, please{" "}
            <a href="/contact" className="underline hover:text-accent">
              contact us
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
