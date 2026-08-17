import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { routes } from "@/lib/routes";

const services = [
  {
    number: "01",
    title: "Infrastructure & Project Finance",
    description:
      "Finance and arrange financing for viable infrastructure and economically productive projects.",
    href: routes.infrastructureFinance,
  },
  {
    number: "02",
    title: "Transaction Structuring",
    description: "Turn complex funding requirements into investable transactions.",
    href: routes.transactionStructuring,
  },
  {
    number: "03",
    title: "Capital Mobilisation",
    description: "Connect credible opportunities with appropriate debt and equity capital.",
    href: routes.transactionStructuring,
  },
];

const processSteps = ["Originate", "Assess", "Structure", "Mobilise", "Close", "Monitor"];

const capitalPartnerBenefits = [
  { title: "Qualified Opportunities", body: "Pre-assessed transactions aligned to your mandate." },
  { title: "Structured Transactions", body: "Financial and legal structuring already in place." },
  { title: "Transaction Intelligence", body: "Deep visibility into underlying transaction economics." },
  { title: "Execution Support", body: "Support from structuring through financial close." },
];

const pillars = [
  { number: "01", title: "Origination" },
  { number: "02", title: "Structure" },
  { number: "03", title: "Capital" },
  { number: "04", title: "Execution" },
];

const impactAreas = [
  "Critical Infrastructure",
  "Productivity",
  "Business Growth",
  "Jobs & Opportunity",
  "Essential Services",
  "Private Investment",
  "Economic Resilience",
  "Better Livelihoods",
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(3.5rem,8vw,6rem)] pb-[clamp(3rem,6vw,4.5rem)]">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[clamp(2rem,5vw,4rem)] items-end">
          <div className="sb-reveal">
            <div className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-accent-700 mb-6">
              Scalebridge
            </div>
            <h1 className="font-extrabold text-[clamp(2.6rem,5.4vw,4.8rem)] leading-[1.03] tracking-[-0.02em] mb-6">
              Capital for the opportunities that move economies forward.
            </h1>
            <p className="text-[clamp(1rem,1.3vw,1.15rem)] leading-[1.55] max-w-xl text-ink/72 mb-9">
              We structure and mobilise capital for infrastructure, businesses
              and economically productive opportunities&mdash;turning credible
              projects and transactions into investable opportunities.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button href={routes.submitOpportunity} variant="primary">
                Submit a Financing Opportunity
              </Button>
              <Button href="#approach" variant="secondary">
                Explore Our Approach
              </Button>
            </div>
          </div>
          <div className="sb-reveal-x relative h-[220px] sm:h-[300px] lg:h-[340px] overflow-hidden">
            <Image
              src="/images/hero-infrastructure-sunrise.png"
              alt="Infrastructure asset at sunrise"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover grayscale-editorial"
            />
            <svg
              viewBox="0 0 320 280"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <line x1="20" y1="240" x2="120" y2="160" stroke="#f3f2f2" strokeWidth="1.5" />
              <line x1="120" y1="160" x2="200" y2="200" stroke="#f3f2f2" strokeWidth="1.5" />
              <line x1="200" y1="200" x2="300" y2="40" stroke="#ec3013" strokeWidth="2" />
              <rect x="16" y="236" width="8" height="8" fill="#f3f2f2" />
              <rect x="116" y="156" width="8" height="8" fill="#f3f2f2" />
              <rect x="196" y="196" width="8" height="8" fill="#f3f2f2" />
              <rect x="296" y="36" width="9" height="9" fill="#ec3013" />
            </svg>
          </div>
        </div>
      </section>

      {/* TRUST / POSITIONING STRIP */}
      <section className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(2.5rem,5vw,3.5rem)]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 lg:gap-16 justify-between items-end">
          <h2 className="font-extrabold text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.25] max-w-md">
            We connect productive opportunities with the capital required to
            execute them.
          </h2>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="approach" className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)]">
        <div className="sb-reveal max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2.5rem,6vw,5rem)]">
          <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.1]">
            The capital exists.
            <br />
            The structure is often missing.
          </h2>
          <div className="text-base leading-[1.7] text-ink/75 flex flex-col gap-4">
            <p className="m-0">
              Substantial capital exists across banks, institutional
              investors, development finance institutions and private
              markets. Yet much of this capital struggles to reach the
              infrastructure and productive opportunities that need it most.
            </p>
            <p className="m-0">
              The constraint is rarely the absence of capital. It is the
              absence of well-structured, credible and investable
              opportunities capable of connecting that capital to productive
              economic activity.
            </p>
            <p className="m-0 font-extrabold text-ink">
              Scalebridge exists to bridge this gap.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGERY STRIP */}
      <section className="border-b-2 divider">
        <div className="sb-reveal grid grid-cols-1 sm:grid-cols-2">
          <figure className="m-0 relative border-r-0 sm:border-r divider">
            <div className="relative h-[260px] sm:h-[340px]">
              <Image
                src="/images/infrastructure-operation.png"
                alt="Infrastructure asset in operation"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale-editorial"
              />
            </div>
            <figcaption className="absolute left-0 bottom-0 px-4 py-2.5 bg-ink text-bg text-[0.72rem] font-extrabold tracking-[0.08em] uppercase">
              Infrastructure
            </figcaption>
          </figure>
          <figure className="m-0 relative">
            <div className="relative h-[260px] sm:h-[340px]">
              <Image
                src="/images/logistics-commercial-activity.png"
                alt="Logistics and commercial activity"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale-editorial"
              />
            </div>
            <figcaption className="absolute left-0 bottom-0 px-4 py-2.5 bg-ink text-bg text-[0.72rem] font-extrabold tracking-[0.08em] uppercase">
              Economic Activity
            </figcaption>
          </figure>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)]">
        <div className="sb-reveal max-w-[1280px] mx-auto">
          <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] max-w-md mb-[clamp(2rem,4vw,3.2rem)]">
            From opportunity to financial close.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t-2 divider">
            {services.map((s, i) => (
              <div
                key={s.number}
                className={`py-8 px-0 sm:px-6 flex flex-col gap-3.5 ${
                  i < services.length - 1 ? "sm:border-r divider" : ""
                } ${i === 0 ? "sm:pl-0" : ""}`}
              >
                <span className="font-extrabold text-sm text-accent-700">{s.number}</span>
                <h3 className="text-xl font-extrabold">{s.title}</h3>
                <p className="text-[0.92rem] leading-[1.55] text-ink/72 m-0">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="text-sm font-extrabold text-accent-700 hover:text-accent"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)]">
        <div className="sb-reveal max-w-[1280px] mx-auto">
          <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] mb-[clamp(2rem,4vw,3.2rem)]">
            Structure. Mobilise. Execute.
          </h2>
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
        </div>
      </section>

      {/* FOR BUSINESSES */}
      <section
        id="for-businesses"
        className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)] bg-surface"
      >
        <div className="sb-reveal max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2.5rem,6vw,5rem)] items-start">
          <div>
            <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.1] mb-5">
              You have the opportunity. We help structure the capital.
            </h2>
            <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-lg mb-7">
              We work with project sponsors, infrastructure developers,
              contractors and businesses to turn credible opportunities into
              financeable transactions.
            </p>
            <Button href={routes.submitOpportunity} variant="dark">
              Submit a Financing Opportunity
            </Button>
          </div>
          <div className="flex flex-col border-t divider">
            {["Have a project?", "Have a contract?", "Need growth capital?"].map((q) => (
              <div
                key={q}
                className="py-5 border-b divider flex justify-between items-center"
              >
                <span className="text-base font-bold">{q}</span>
                <span className="text-accent text-xl">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR CAPITAL PARTNERS */}
      <section
        id="for-capital-partners"
        className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)]"
      >
        <div className="sb-reveal max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2.5rem,6vw,5rem)] items-start">
          <div>
            <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.1] mb-5">
              Better transactions. Better access to productive opportunities.
            </h2>
            <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-lg mb-7">
              We work with banks, institutional investors, development
              finance institutions, private capital and other funding
              partners to bring structured, credible opportunities to the
              table.
            </p>
            <Button href={routes.becomeCapitalPartner} variant="secondary">
              Become a Capital Partner
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capitalPartnerBenefits.map((b) => (
              <div key={b.title} className="p-5 bg-surface border-t-2 border-accent">
                <div className="font-extrabold text-base mb-1">{b.title}</div>
                <div className="text-sm text-ink/65 leading-relaxed">{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SCALEBRIDGE */}
      <section id="about" className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)] bg-surface">
        <div className="sb-reveal max-w-[1280px] mx-auto">
          <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] max-w-lg mb-[clamp(2rem,4vw,3.2rem)]">
            We don&rsquo;t just find capital. We understand the transaction.
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t-2 divider">
            {pillars.map((p) => (
              <div key={p.number} className="pt-6">
                <div className="font-extrabold text-[clamp(2.2rem,3.6vw,3rem)] text-accent-700 mb-2">
                  {p.number}
                </div>
                <div className="text-xl font-extrabold">{p.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)]">
        <div className="sb-reveal max-w-[1280px] mx-auto">
          <h2 className="font-extrabold text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.1] max-w-md mb-4">
            Capital should do more than earn a return.
          </h2>
          <p className="text-[0.98rem] leading-[1.65] text-ink/75 max-w-xl mb-10">
            We measure our contribution not only by the capital we finance or
            mobilise, but by what that capital enables.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-l divider">
            {impactAreas.map((area) => (
              <div
                key={area}
                className="p-5 border-r border-b divider font-bold text-[0.95rem]"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(5rem,10vw,8rem)] bg-ink text-bg">
        <div className="sb-reveal max-w-3xl mx-auto">
          <p className="font-extrabold text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.2] mb-7">
            &ldquo;Capital is most powerful when it is directed towards
            productive opportunity.&rdquo;
          </p>
          <p className="text-base leading-[1.65] text-bg/72 max-w-xl m-0">
            The right capital, placed into the right projects and businesses,
            can strengthen economic capacity, unlock opportunity and improve
            people&rsquo;s lives.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 sm:px-8 lg:px-12 py-[clamp(4rem,8vw,6.5rem)] bg-accent text-bg">
        <div className="sb-reveal max-w-[1280px] mx-auto flex flex-wrap justify-between items-end gap-10">
          <div className="max-w-xl">
            <h2 className="font-extrabold text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.1] mb-4">
              Have a transaction worth financing?
            </h2>
            <p className="text-[0.98rem] leading-[1.6] text-bg/85 m-0">
              Tell us about the opportunity, the capital requirement and the
              underlying economics.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Button href={routes.submitOpportunity} variant="inverse">
              Submit an Opportunity
            </Button>
            <div className="text-sm text-bg/85">
              Looking to deploy capital?{" "}
              <Link
                href={routes.becomeCapitalPartner}
                className="font-extrabold text-bg underline"
              >
                Become a Capital Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
