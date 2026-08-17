import Link from "next/link";
import { routes } from "@/lib/routes";

export function SuccessState({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="text-center py-16">
      <div
        aria-hidden="true"
        className="w-14 h-14 mx-auto mb-6 border-2 border-accent flex items-center justify-center"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 12.5l5 5L20 6.5"
            stroke="#ec3013"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
        </svg>
      </div>
      <h2 className="font-extrabold text-2xl mb-3">{title}</h2>
      <p className="text-[0.98rem] text-ink/70 max-w-md mx-auto mb-8">{body}</p>
      <Link
        href={routes.home}
        className="text-sm font-extrabold text-accent-700 hover:text-accent"
      >
        &larr; Back to homepage
      </Link>
    </div>
  );
}
