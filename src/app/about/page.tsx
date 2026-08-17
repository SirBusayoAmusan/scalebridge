import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Scalebridge is an infrastructure finance and transaction structuring platform focused on mobilising capital for projects and businesses that contribute to economic development.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="Bridging capital. Building economic progress.">
        Scalebridge is an infrastructure finance and transaction structuring
        platform focused on mobilising capital for projects and businesses
        that contribute to economic development.
      </PageHero>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12 border-t-2 divider">
          <div className="pt-8">
            <h3 className="text-2xl font-extrabold mb-3">Purpose</h3>
            <p className="text-[0.98rem] leading-[1.65] text-ink/72 m-0">
              We believe economic progress should translate into better
              opportunities and better livelihoods. Scalebridge exists to
              help close infrastructure and productive-capital gaps by
              directing capital towards projects, businesses and
              infrastructure that can strengthen economies and improve
              lives.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-2xl font-extrabold mb-3">Mission</h3>
            <p className="text-[0.98rem] leading-[1.65] text-ink/72 m-0">
              To originate, structure, finance and mobilise capital for
              infrastructure and economically productive opportunities that
              create sustainable financial value, strengthen economic
              capacity and improve livelihoods.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-2xl font-extrabold mb-3">Vision</h3>
            <p className="text-[0.98rem] leading-[1.65] text-ink/72 m-0">
              To contribute to economies where critical infrastructure
              enables productivity, businesses have the capital to grow,
              opportunities are created, and people can build better and
              more secure livelihoods.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-2xl font-extrabold mb-3">Core belief</h3>
            <p className="text-[0.98rem] leading-[1.65] text-ink/72 m-0">
              Capital is most powerful when it is directed towards
              productive opportunities that create value beyond financial
              returns.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-ink text-bg">
        <SectionHeading className="max-w-2xl">
          We don&rsquo;t just find capital. We understand the transaction.
        </SectionHeading>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 border-bg/20">
          {[
            { number: "01", title: "Origination" },
            { number: "02", title: "Structure" },
            { number: "03", title: "Capital" },
            { number: "04", title: "Execution" },
          ].map((p) => (
            <div key={p.number} className="pt-6">
              <div className="font-extrabold text-3xl text-accent-400 mb-2">
                {p.number}
              </div>
              <div className="text-xl font-extrabold">{p.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
