import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on infrastructure finance, transaction structuring and capital mobilisation from Scalebridge.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Perspectives on capital and infrastructure.">
        Our thinking on infrastructure finance, transaction structuring and
        capital mobilisation.
      </PageHero>

      <Section>
        <div className="border-t-2 divider pt-16 pb-4 text-center">
          <p className="text-lg font-extrabold mb-2">
            Our latest thinking will appear here.
          </p>
          <p className="text-[0.95rem] text-ink/65 max-w-md mx-auto">
            We&rsquo;re preparing our first insights. Check back soon, or get
            in touch directly if you&rsquo;d like to talk to us now.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Have a transaction worth financing?"
        body="Tell us about the opportunity, the capital requirement and the underlying economics."
      />
    </>
  );
}
