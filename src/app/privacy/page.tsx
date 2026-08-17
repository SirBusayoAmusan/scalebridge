import type { Metadata } from "next";
import { PageHero, Section } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Scalebridge privacy policy.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-2xl">
          [PLACEHOLDER] Our full privacy policy is being finalised. In the
          meantime, if you have questions about how we handle information
          submitted through this site, please{" "}
          <a href="/contact" className="underline hover:text-accent">
            contact us
          </a>
          .
        </p>
      </Section>
    </>
  );
}
