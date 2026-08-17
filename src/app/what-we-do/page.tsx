import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Scalebridge structures viable funding requirements into investable transactions and finances infrastructure and economically productive projects.",
};

const areas = [
  {
    number: "01",
    title: "Infrastructure & Project Finance",
    description:
      "Finance and arrange financing for viable infrastructure and economically productive projects, including infrastructure-related contracts, LPOs and other transaction-backed opportunities.",
    href: routes.infrastructureFinance,
  },
  {
    number: "02",
    title: "Transaction Structuring & Capital Mobilisation",
    description:
      "Work with businesses, project sponsors and infrastructure developers to structure viable funding requirements into investable transactions and connect suitable opportunities with appropriate debt and equity capital.",
    href: routes.transactionStructuring,
  },
];

const processSteps = ["Originate", "Assess", "Structure", "Mobilise", "Close", "Monitor"];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero eyebrow="What We Do" title="From opportunity to financial close.">
        Scalebridge operates across two connected disciplines: financing
        infrastructure and productive projects directly, and structuring
        complex funding requirements into transactions that capital
        providers can act on.
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 border-t-2 divider">
          {areas.map((area) => (
            <div key={area.number} className="pt-8 flex flex-col gap-4">
              <span className="font-extrabold text-sm text-accent-700">
                {area.number}
              </span>
              <h3 className="text-2xl font-extrabold">{area.title}</h3>
              <p className="text-[0.98rem] leading-[1.65] text-ink/72 m-0 max-w-md">
                {area.description}
              </p>
              <Link
                href={area.href}
                className="text-sm font-extrabold text-accent-700 hover:text-accent"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading>Structure. Mobilise. Execute.</SectionHeading>
        <div className="flex flex-wrap gap-0">
          {processSteps.map((step, i) => (
            <div
              key={step}
              className="flex-1 min-w-[130px] pt-5 pr-5"
              style={{
                borderTop: `2px solid ${i === 0 ? "#ec3013" : "var(--color-divider)"}`,
              }}
            >
              <div
                className="font-extrabold text-xl mb-1.5"
                style={{ color: i === 0 ? "#ec3013" : "rgba(32,30,29,0.5)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-bold text-[0.95rem]">{step}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
