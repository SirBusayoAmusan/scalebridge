export interface OpportunityFormData {
  financingType: string;
  capitalRequirement: string;
  repaymentSource: string;
  counterparty: string;
  transactionStage: string;
  fullName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
}

export interface CapitalPartnerFormData {
  institution: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  capitalType: string;
  ticketSize: string;
  preferredSectors: string;
  preferredGeography: string;
  preferredTenor: string;
  additionalInfo: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
