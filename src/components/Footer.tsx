import Link from "next/link";
import { routes } from "@/lib/routes";

const columns = [
  {
    title: "Company",
    links: [
      { label: "What We Do", href: routes.whatWeDo },
      { label: "About", href: routes.about },
      { label: "Insights", href: routes.insights },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Infrastructure & Project Finance", href: routes.infrastructureFinance },
      { label: "Transaction Structuring", href: routes.transactionStructuring },
      { label: "For Businesses", href: routes.forBusinesses },
      { label: "For Capital Partners", href: routes.forCapitalPartners },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Submit an Opportunity", href: routes.submitOpportunity },
      { label: "Become a Capital Partner", href: routes.becomeCapitalPartner },
      { label: "Contact", href: routes.contact },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-bg/75 px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between gap-12 pb-10 border-b-2 border-bg/20">
        <div className="max-w-xs">
          <div className="font-extrabold text-lg text-bg tracking-tight mb-4">
            SCALEBRIDGE
          </div>
          <p className="text-sm leading-relaxed m-0">
            Bridging Capital. Building Economic Progress.
          </p>
        </div>

        <div className="flex flex-wrap gap-10 sm:gap-16">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-2.5 text-sm">
              <div className="font-extrabold text-bg mb-0.5">{col.title}</div>
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-inherit hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto pt-6 flex flex-wrap justify-between gap-4 text-xs text-bg/45">
        <span>© {new Date().getFullYear()} Scalebridge Limited. All rights reserved.</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-bg/70">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-bg/70">Terms</Link>
          <Link href="/disclaimers" className="hover:text-bg/70">Disclaimers</Link>
        </div>
      </div>
    </footer>
  );
}
