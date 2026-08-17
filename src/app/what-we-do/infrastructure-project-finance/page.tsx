import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Infrastructure & Project Finance",
  description:
    "Scalebridge finances and arranges financing for viable infrastructure and economically productive projects.",
};

const scopeItems = [
  "Infrastructure projects with a credible revenue or repayment basis",
  "Infrastructure-related contracts and LPOs",
  "Other transaction-backed financing opportunities",
];

export default function InfrastructureFinancePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure & Project Finance"
        title="Financing for the infrastructure that keeps economies moving."
      >
        We finance and arrange financing for viable infrastructure and
        economically productive projects — assessing the underlying
        economics, structuring the transaction and connecting it to
        appropriate capital.
      </PageHero>

      <Section>
        <SectionHeading>What this covers</SectionHeading>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none p-0 m-0 border-t-2 divider">
          {scopeItems.map((item) => (
            <li
              key={item}
              className="pt-6 text-[0.98rem] leading-[1.6] font-medium text-ink/85"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <SectionHeading>How we assess a project</SectionHeading>
        <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl m-0">
          Every opportunity is assessed on its underlying economics: the
          strength of the repayment source, the credibility of the
          counterparty, and the stage the project or contract has reached.
          Well-structured, credible opportunities move faster from
          assessment to financial close.
        </p>
      </Section>

      <CTABanner
        title="Have an infrastructure project or contract to finance?"
        body="Tell us about the opportunity, the capital requirement and the underlying economics."
      />
    </>
  );
}
