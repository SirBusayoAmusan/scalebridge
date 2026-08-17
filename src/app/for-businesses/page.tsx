import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "For Businesses",
  description:
    "Project sponsors, infrastructure developers, contractors and businesses — Scalebridge helps structure the capital your opportunity needs.",
};

const entryPoints = [
  {
    question: "Have a project?",
    body: "An infrastructure or economically productive project that needs to be financed from the ground up.",
  },
  {
    question: "Have a contract?",
    body: "An awarded or signed contract or LPO that needs working capital or execution financing.",
  },
  {
    question: "Need growth capital?",
    body: "An operating business with a credible growth plan that needs capital to scale.",
  },
];

export default function ForBusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Businesses"
        title="You have the opportunity. We help structure the capital."
      >
        Scalebridge works with project sponsors, infrastructure developers,
        contractors and businesses to assess funding requirements, structure
        transactions and mobilise appropriate capital.
      </PageHero>

      <Section>
        <SectionHeading>Where to start</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t-2 divider">
          {entryPoints.map((e) => (
            <div key={e.question} className="pt-6">
              <h3 className="text-xl font-extrabold mb-2">{e.question}</h3>
              <p className="text-[0.92rem] leading-[1.55] text-ink/72 m-0">
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading>What we assess</SectionHeading>
        <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl mb-8">
          When you submit an opportunity, we look at the source of
          repayment, the counterparty involved, and the stage the
          transaction has reached — from concept through to revenue
          generating and expansion. The more complete the picture, the
          faster we can assess it.
        </p>
        <Button href={routes.submitOpportunity} variant="dark">
          Submit a Financing Opportunity
        </Button>
      </Section>

      <CTABanner />
    </>
  );
}
