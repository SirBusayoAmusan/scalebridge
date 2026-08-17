import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "inverse" | "text";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-bg hover:bg-accent-600 active:bg-accent-700",
  secondary: "border divider text-ink hover:bg-ink/[0.06]",
  dark: "bg-ink text-bg hover:bg-accent",
  inverse: "bg-bg text-ink hover:bg-ink hover:text-bg",
  text: "text-accent-700 hover:text-accent p-0",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-extrabold text-sm px-6 py-4 transition-colors";

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonEl({
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} disabled:opacity-45 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
