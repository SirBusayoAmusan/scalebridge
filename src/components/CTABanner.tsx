import Link from "next/link";
import { Button } from "@/components/Button";
import { routes } from "@/lib/routes";

export function CTABanner({
  title = "Have a transaction worth financing?",
  body = "Tell us about the opportunity, the capital requirement and the underlying economics.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="px-5 sm:px-8 lg:px-12 py-[clamp(3.5rem,7vw,5.5rem)] bg-accent text-bg">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between items-end gap-10">
        <div className="max-w-xl">
          <h2 className="font-extrabold text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.1] mb-4">
            {title}
          </h2>
          <p className="text-[0.98rem] leading-[1.6] text-bg/85 m-0">{body}</p>
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
  );
}
