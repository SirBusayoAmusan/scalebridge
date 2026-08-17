import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { CapitalPartnerForm } from "@/components/form/CapitalPartnerForm";

export const metadata: Metadata = {
  title: "Become a Capital Partner",
  description:
    "Tell us your mandate and we'll bring you opportunities that have already been assessed and structured against it.",
};

export default function BecomeCapitalPartnerPage() {
  return (
    <>
      <PageHero eyebrow="Become a Capital Partner" title="Looking to deploy capital?">
        Tell us your mandate — capital type, ticket size, sectors, geography
        and tenor — and we&rsquo;ll bring you qualified, structured
        opportunities aligned to it.
      </PageHero>
      <Section>
        <div className="max-w-3xl mx-auto">
          <CapitalPartnerForm />
        </div>
      </Section>
    </>
  );
}
