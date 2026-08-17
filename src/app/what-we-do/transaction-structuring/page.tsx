import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Transaction Structuring & Capital Mobilisation",
  description:
    "Scalebridge structures viable funding requirements into investable transactions and connects them with appropriate debt and equity capital.",
};

const pillars = [
  {
    title: "Structuring",
    body: "We work with businesses, project sponsors and infrastructure developers to turn a funding requirement into a transaction that a capital provider can underwrite.",
  },
  {
    title: "Mobilisation",
    body: "Once structured, we connect the opportunity with appropriate sources of debt and equity capital aligned to the transaction's risk and return profile.",
  },
];

export default function TransactionStructuringPage() {
  return (
    <>
      <PageHero
        eyebrow="Transaction Structuring & Capital Mobilisation"
        title="Turning complex funding requirements into investable transactions."
      >
        Capital is most effective when it can be directed with confidence.
        We structure the transaction so that the underlying opportunity
        becomes something a capital provider can properly evaluate — and
        then we mobilise the capital to fund it.
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t-2 divider">
          {pillars.map((p) => (
            <div key={p.title} className="pt-8">
              <h3 className="text-2xl font-extrabold mb-3">{p.title}</h3>
              <p className="text-[0.98rem] leading-[1.65] text-ink/72 m-0">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading>Who this is for</SectionHeading>
        <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl m-0">
          Businesses, project sponsors and infrastructure developers with a
          genuine funding requirement and a credible source of repayment —
          and capital providers looking for well-structured, pre-assessed
          opportunities aligned to their mandate.
        </p>
      </Section>

      <CTABanner />
    </>
  );
}
