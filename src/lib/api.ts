import type {
  CapitalPartnerFormData,
  ContactFormData,
  OpportunityFormData,
} from "@/lib/types";

async function postJson<T>(url: string, body: T): Promise<void> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new Error(payload.error || "Something went wrong. Please try again.");
  }
}

export async function submitOpportunity(
  data: OpportunityFormData,
  files: File[]
): Promise<void> {
  const formData = new FormData();
  formData.append("payload", JSON.stringify(data));
  files.forEach((file) => formData.append("documents", file));

  const res = await fetch("/api/submit-opportunity", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new Error(payload.error || "Something went wrong. Please try again.");
  }
}

export function submitCapitalPartner(data: CapitalPartnerFormData): Promise<void> {
  return postJson("/api/capital-partner", data);
}

export function submitContact(data: ContactFormData): Promise<void> {
  return postJson("/api/contact", data);
}
