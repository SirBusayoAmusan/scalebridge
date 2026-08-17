import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "For Capital Partners",
  description:
    "Banks, institutional investors, DFIs and private capital — Scalebridge originates and structures credible opportunities worth considering.",
};

const benefits = [
  { title: "Qualified Opportunities", body: "Pre-assessed transactions aligned to your mandate." },
  { title: "Structured Transactions", body: "Financial and legal structuring already in place." },
  { title: "Transaction Intelligence", body: "Deep visibility into underlying transaction economics." },
  { title: "Execution Support", body: "Support from structuring through financial close." },
];

export default function ForCapitalPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Capital Partners"
        title="Better transactions. Better access to productive opportunities."
      >
        Scalebridge works with banks, institutional investors, development
        finance institutions, private capital and other funding partners to
        identify and structure opportunities aligned with their mandates.
      </PageHero>

      <Section>
        <SectionHeading>What you get</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="p-5 bg-surface border-t-2 border-accent">
              <div className="font-extrabold text-base mb-1">{b.title}</div>
              <div className="text-sm text-ink/65 leading-relaxed">{b.body}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading>How we work together</SectionHeading>
        <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl mb-8">
          Tell us your mandate — capital type, typical ticket size, preferred
          sectors, geography and tenor — and we bring you opportunities that
          have already been assessed and structured against it.
        </p>
        <Button href={routes.becomeCapitalPartner} variant="secondary">
          Become a Capital Partner
        </Button>
      </Section>

      <CTABanner />
    </>
  );
}
