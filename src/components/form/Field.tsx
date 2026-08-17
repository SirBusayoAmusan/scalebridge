import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

const fieldBase =
  "w-full min-h-11 px-3.5 py-2.5 text-sm text-ink bg-surface border divider focus-visible:border-accent focus-visible:outline-none placeholder:text-ink/40";

export function FieldWrap({
  label,
  htmlFor,
  error,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-bold text-ink/85">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
      {hint && !error && <span className="text-xs text-ink/50">{hint}</span>}
      {error && (
        <span role="alert" className="text-xs font-semibold text-accent-700">
          {error}
        </span>
      )}
    </div>
  );
}

export function TextInput({
  error,
  className = "",
  ...rest
}: { error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${fieldBase} ${error ? "border-accent" : ""} ${className}`}
      aria-invalid={!!error}
      {...rest}
    />
  );
}

export function TextArea({
  error,
  className = "",
  ...rest
}: { error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`${fieldBase} min-h-28 resize-y ${error ? "border-accent" : ""} ${className}`}
      aria-invalid={!!error}
      {...rest}
    />
  );
}

export function SelectInput({
  error,
  className = "",
  children,
  ...rest
}: { error?: string } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`${fieldBase} ${error ? "border-accent" : ""} ${className}`}
      aria-invalid={!!error}
      {...rest}
    >
      {children}
    </select>
  );
}
