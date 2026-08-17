"use client";

import { useState, type FormEvent } from "react";
import { ButtonEl } from "@/components/Button";
import { FieldWrap, TextArea, TextInput } from "@/components/form/Field";
import { SuccessState } from "@/components/form/SuccessState";
import { submitContact } from "@/lib/api";
import type { ContactFormData } from "@/lib/types";

const initialData: ContactFormData = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);

  function set<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = "Enter a valid email address.";
    if (!data.subject.trim()) newErrors.subject = "Subject is required.";
    if (data.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await submitContact(data);
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
        title="Message sent"
        body="Thank you for reaching out. We'll get back to you as soon as possible."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FieldWrap label="Name" htmlFor="name" required error={errors.name}>
          <TextInput id="name" value={data.name} onChange={(e) => set("name", e.target.value)} error={errors.name} />
        </FieldWrap>
        <FieldWrap label="Email" htmlFor="email" required error={errors.email}>
          <TextInput id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} error={errors.email} />
        </FieldWrap>
      </div>
      <FieldWrap label="Subject" htmlFor="subject" required error={errors.subject}>
        <TextInput id="subject" value={data.subject} onChange={(e) => set("subject", e.target.value)} error={errors.subject} />
      </FieldWrap>
      <FieldWrap label="Message" htmlFor="message" required error={errors.message}>
        <TextArea id="message" rows={6} value={data.message} onChange={(e) => set("message", e.target.value)} error={errors.message} />
      </FieldWrap>

      {submitError && (
        <p role="alert" className="text-sm font-semibold text-accent-700">
          {submitError}
        </p>
      )}

      <div className="pt-2">
        <ButtonEl type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send Message"}
        </ButtonEl>
      </div>
    </form>
  );
}
