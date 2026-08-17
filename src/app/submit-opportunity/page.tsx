import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { SubmitOpportunityForm } from "@/components/form/SubmitOpportunityForm";

export const metadata: Metadata = {
  title: "Submit an Opportunity",
  description:
    "Tell us about the opportunity, the capital requirement and the underlying economics.",
};

export default function SubmitOpportunityPage() {
  return (
    <>
      <PageHero eyebrow="Submit an Opportunity" title="Have a transaction worth financing?">
        Tell us about the opportunity, the capital requirement and the
        underlying economics. This takes about five minutes.
      </PageHero>
      <Section>
        <div className="max-w-2xl mx-auto">
          <SubmitOpportunityForm />
        </div>
      </Section>
    </>
  );
}
