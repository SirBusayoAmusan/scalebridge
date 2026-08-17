export const routes = {
  home: "/",
  whatWeDo: "/what-we-do",
  infrastructureFinance: "/what-we-do/infrastructure-project-finance",
  transactionStructuring: "/what-we-do/transaction-structuring",
  forBusinesses: "/for-businesses",
  forCapitalPartners: "/for-capital-partners",
  about: "/about",
  insights: "/insights",
  submitOpportunity: "/submit-opportunity",
  becomeCapitalPartner: "/capital-partners",
  contact: "/contact",
} as const;

export const primaryNav = [
  { label: "What We Do", href: routes.whatWeDo },
  { label: "For Businesses", href: routes.forBusinesses },
  { label: "For Capital Partners", href: routes.forCapitalPartners },
  { label: "About", href: routes.about },
  { label: "Insights", href: routes.insights },
];
