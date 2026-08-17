"use client";

import { useState } from "react";
import { ButtonEl } from "@/components/Button";
import { FieldWrap, TextArea, TextInput } from "@/components/form/Field";
import { FormProgress } from "@/components/form/FormProgress";
import { OptionCards } from "@/components/form/OptionCards";
import { FileUpload } from "@/components/form/FileUpload";
import { SuccessState } from "@/components/form/SuccessState";
import { submitOpportunity } from "@/lib/api";
import type { OpportunityFormData } from "@/lib/types";

const STEP_LABELS = [
  "Financing type",
  "Capital requirement",
  "Repayment source",
  "Counterparty",
  "Transaction stage",
  "Documents",
  "Your details",
];

const FINANCING_TYPES = [
  "Infrastructure project",
  "Contract / LPO",
  "Business expansion",
  "Working capital",
  "Asset / equipment",
  "Other",
];

const CAPITAL_RANGES = [
  "Under ₦100m",
  "₦100m–₦500m",
  "₦500m–₦1bn",
  "₦1bn–₦5bn",
  "₦5bn+",
];

const TRANSACTION_STAGES = [
  "Concept",
  "Contract awarded",
  "Contract signed",
  "Project underway",
  "Revenue generating",
  "Expansion",
];

const initialData: OpportunityFormData = {
  financingType: "",
  capitalRequirement: "",
  repaymentSource: "",
  counterparty: "",
  transactionStage: "",
  fullName: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
};

const TOTAL_STEPS = 7;

export function SubmitOpportunityForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OpportunityFormData>(initialData);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  function set<K extends keyof OpportunityFormData>(key: K, value: OpportunityFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validateStep(): boolean {
    const newErrors: Record<string, string> = {};
    if (step === 1 && !data.financingType) newErrors.financingType = "Please select an option.";
    if (step === 2 && !data.capitalRequirement)
      newErrors.capitalRequirement = "Please select a range.";
    if (step === 3 && data.repaymentSource.trim().length < 10)
      newErrors.repaymentSource = "Please describe the source of repayment (at least 10 characters).";
    if (step === 4 && !data.counterparty.trim())
      newErrors.counterparty = "Please tell us who the primary counterparty is.";
    if (step === 5 && !data.transactionStage)
      newErrors.transactionStage = "Please select the current stage.";
    if (step === 7) {
      if (!data.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!data.company.trim()) newErrors.company = "Company is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
        newErrors.email = "Enter a valid email address.";
      if (!data.phone.trim()) newErrors.phone = "Phone number is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function goNext() {
    if (!validateStep()) return;
    if (step < TOTAL_STEPS) setStep(step + 1);
  }

  function goBack() {
    if (step > 1) setStep(step - 1);
  }

  async function handleSubmit() {
    if (!validateStep()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitOpportunity(data, files);
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
        title="Opportunity submitted"
        body="Thank you. Our team will review the details you've shared and reach out if we need anything further before assessment."
      />
    );
  }

  return (
    <div>
      <FormProgress step={step} total={TOTAL_STEPS} labels={STEP_LABELS} />

      <div className="flex flex-col gap-6">
        {step === 1 && (
          <FieldWrap label="What are you seeking financing for?" htmlFor="financingType" required error={errors.financingType}>
            <OptionCards
              name="financingType"
              options={FINANCING_TYPES}
              value={data.financingType}
              onChange={(v) => set("financingType", v)}
              columns={2}
            />
          </FieldWrap>
        )}

        {step === 2 && (
          <FieldWrap label="How much capital do you require?" htmlFor="capitalRequirement" required error={errors.capitalRequirement}>
            <OptionCards
              name="capitalRequirement"
              options={CAPITAL_RANGES}
              value={data.capitalRequirement}
              onChange={(v) => set("capitalRequirement", v)}
              columns={2}
            />
          </FieldWrap>
        )}

        {step === 3 && (
          <FieldWrap
            label="What is the source of repayment?"
            htmlFor="repaymentSource"
            required
            error={errors.repaymentSource}
            hint="Describe where repayment will come from — e.g. contract revenue, project cash flows, business revenue."
          >
            <TextArea
              id="repaymentSource"
              value={data.repaymentSource}
              onChange={(e) => set("repaymentSource", e.target.value)}
              rows={5}
              error={errors.repaymentSource}
            />
          </FieldWrap>
        )}

        {step === 4 && (
          <FieldWrap
            label="Who is the primary counterparty / customer?"
            htmlFor="counterparty"
            required
            error={errors.counterparty}
          >
            <TextInput
              id="counterparty"
              value={data.counterparty}
              onChange={(e) => set("counterparty", e.target.value)}
              error={errors.counterparty}
            />
          </FieldWrap>
        )}

        {step === 5 && (
          <FieldWrap label="What stage is the transaction?" htmlFor="transactionStage" required error={errors.transactionStage}>
            <OptionCards
              name="transactionStage"
              options={TRANSACTION_STAGES}
              value={data.transactionStage}
              onChange={(v) => set("transactionStage", v)}
              columns={3}
            />
          </FieldWrap>
        )}

        {step === 6 && (
          <FieldWrap label="Upload supporting documents" htmlFor="documents" hint="Optional — you can add these later if you don't have them yet.">
            <FileUpload files={files} onChange={setFiles} />
          </FieldWrap>
        )}

        {step === 7 && (
          <>
            <h3 className="font-extrabold text-lg -mb-2">How can we reach you?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FieldWrap label="Full name" htmlFor="fullName" required error={errors.fullName}>
                <TextInput id="fullName" value={data.fullName} onChange={(e) => set("fullName", e.target.value)} error={errors.fullName} />
              </FieldWrap>
              <FieldWrap label="Company" htmlFor="company" required error={errors.company}>
                <TextInput id="company" value={data.company} onChange={(e) => set("company", e.target.value)} error={errors.company} />
              </FieldWrap>
              <FieldWrap label="Job title" htmlFor="jobTitle">
                <TextInput id="jobTitle" value={data.jobTitle} onChange={(e) => set("jobTitle", e.target.value)} />
              </FieldWrap>
              <FieldWrap label="Email" htmlFor="email" required error={errors.email}>
                <TextInput id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} error={errors.email} />
              </FieldWrap>
              <FieldWrap label="Phone" htmlFor="phone" required error={errors.phone}>
                <TextInput id="phone" type="tel" value={data.phone} onChange={(e) => set("phone", e.target.value)} error={errors.phone} />
              </FieldWrap>
            </div>
          </>
        )}

        {submitError && (
          <p role="alert" className="text-sm font-semibold text-accent-700">
            {submitError}
          </p>
        )}

        <div className="flex justify-between items-center pt-4 border-t divider">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className="text-sm font-extrabold text-ink/70 hover:text-ink disabled:opacity-0 disabled:pointer-events-none"
          >
            &larr; Back
          </button>
          {step < TOTAL_STEPS ? (
            <ButtonEl type="button" onClick={goNext}>
              Continue
            </ButtonEl>
          ) : (
            <ButtonEl type="button" onClick={handleSubmit} disabled={submitting}>
              {submitting ? "Submitting…" : "Submit for Assessment"}
            </ButtonEl>
          )}
        </div>
      </div>
    </div>
  );
}
