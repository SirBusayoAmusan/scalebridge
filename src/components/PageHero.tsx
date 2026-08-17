import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(3.5rem,8vw,6rem)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-[0.78rem] font-extrabold tracking-[0.12em] uppercase text-accent-700 mb-5">
          {eyebrow}
        </div>
        <h1 className="font-extrabold text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.06] tracking-[-0.02em] max-w-3xl mb-6">
          {title}
        </h1>
        {children && (
          <div className="text-[clamp(1rem,1.2vw,1.1rem)] leading-[1.6] max-w-2xl text-ink/72">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section
      className={`border-b-2 divider px-5 sm:px-8 lg:px-12 py-[clamp(3.5rem,7vw,5.5rem)] ${className}`}
      {...rest}
    >
      <div className="max-w-[1280px] mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-extrabold text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.12] mb-8 ${className}`}
    >
      {children}
    </h2>
  );
}
