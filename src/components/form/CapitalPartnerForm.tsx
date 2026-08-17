"use client";

import { useState, type FormEvent } from "react";
import { ButtonEl } from "@/components/Button";
import { FieldWrap, TextArea, TextInput } from "@/components/form/Field";
import { SuccessState } from "@/components/form/SuccessState";
import { submitCapitalPartner } from "@/lib/api";
import type { CapitalPartnerFormData } from "@/lib/types";

const initialData: CapitalPartnerFormData = {
  institution: "",
  name: "",
  role: "",
  email: "",
  phone: "",
  capitalType: "",
  ticketSize: "",
  preferredSectors: "",
  preferredGeography: "",
  preferredTenor: "",
  additionalInfo: "",
};

export function CapitalPartnerForm() {
  const [data, setData] = useState<CapitalPartnerFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  function set<K extends keyof CapitalPartnerFormData>(key: K, value: CapitalPartnerFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!data.institution.trim()) newErrors.institution = "Institution is required.";
    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.role.trim()) newErrors.role = "Role is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Enter a valid email address.";
    if (!data.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!data.capitalType.trim()) newErrors.capitalType = "Capital type is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitCapitalPartner(data);
      setSuccess(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <SuccessState
        title="Thank you for reaching out"
        body="We've received your details. Our team will be in touch about opportunities aligned to your mandate."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrap label="Institution" htmlFor="institution" required error={errors.institution}>
          <TextInput id="institution" value={data.institution} onChange={(e) => set("institution", e.target.value)} error={errors.institution} />
        </FieldWrap>
        <FieldWrap label="Name" htmlFor="name" required error={errors.name}>
          <TextInput id="name" value={data.name} onChange={(e) => set("name", e.target.value)} error={errors.name} />
        </FieldWrap>
        <FieldWrap label="Role" htmlFor="role" required error={errors.role}>
          <TextInput id="role" value={data.role} onChange={(e) => set("role", e.target.value)} error={errors.role} />
        </FieldWrap>
        <FieldWrap label="Email" htmlFor="email" required error={errors.email}>
          <TextInput id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} error={errors.email} />
        </FieldWrap>
        <FieldWrap label="Phone" htmlFor="phone" required error={errors.phone}>
          <TextInput id="phone" type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} error={errors.phone} />
        </FieldWrap>
        <FieldWrap label="Capital type" htmlFor="capitalType" required error={errors.capitalType} hint="e.g. senior debt, mezzanine, equity">
          <TextInput id="capitalType" value={data.capitalType} onChange={(e) => set("capitalType", e.target.value)} error={errors.capitalType} />
        </FieldWrap>
        <FieldWrap label="Typical ticket size" htmlFor="ticketSize">
          <TextInput id="ticketSize" value={data.ticketSize} onChange={(e) => set("ticketSize", e.target.value)} />
        </FieldWrap>
        <FieldWrap label="Preferred tenor" htmlFor="preferredTenor">
          <TextInput id="preferredTenor" value={data.preferredTenor} onChange={(e) => set("preferredTenor", e.target.value)} />
        </FieldWrap>
        <FieldWrap label="Preferred sectors" htmlFor="preferredSectors">
          <TextInput id="preferredSectors" value={data.preferredSectors} onChange={(e) => set("preferredSectors", e.target.value)} />
        </FieldWrap>
        <FieldWrap label="Preferred geography" htmlFor="preferredGeography">
          <TextInput id="preferredGeography" value={data.preferredGeography} onChange={(e) => set("preferredGeography", e.target.value)} />
        </FieldWrap>
      </div>
      <FieldWrap label="Additional information" htmlFor="additionalInfo">
        <TextArea id="additionalInfo" rows={4} value={data.additionalInfo} onChange={(e) => set("additionalInfo", e.target.value)} />
      </FieldWrap>

      {submitError && (
        <p role="alert" className="text-sm font-semibold text-accent-700">
          {submitError}
        </p>
      )}

      <div className="pt-2">
        <ButtonEl type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Become a Capital Partner"}
        </ButtonEl>
      </div>
    </form>
  );
}
