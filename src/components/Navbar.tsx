"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav, routes } from "@/lib/routes";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg border-b-2 divider">
      <nav
        aria-label="Primary"
        className="flex items-center gap-8 px-5 sm:px-8 lg:px-12 py-4"
      >
        <Link
          href={routes.home}
          className="font-extrabold text-xl tracking-tight text-ink mr-auto"
          onClick={() => setOpen(false)}
        >
          SCALEBRIDGE
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href={routes.becomeCapitalPartner}
            className="text-[0.82rem] font-extrabold text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Become a Capital Partner
          </Link>
          <Link
            href={routes.submitOpportunity}
            className="bg-accent text-bg font-extrabold text-[0.82rem] px-5 py-3 hover:bg-accent-600 transition-colors"
          >
            Submit an Opportunity
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden ml-auto flex flex-col justify-center gap-1.5 w-9 h-9"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t-2 divider px-5 sm:px-8 py-6 flex flex-col gap-5 bg-bg"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-semibold text-ink hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <hr className="border-t divider" />
          <Link
            href={routes.becomeCapitalPartner}
            className="text-sm font-extrabold text-ink"
            onClick={() => setOpen(false)}
          >
            Become a Capital Partner
          </Link>
          <Link
            href={routes.submitOpportunity}
            className="bg-accent text-bg font-extrabold text-sm px-5 py-3.5 text-center"
            onClick={() => setOpen(false)}
          >
            Submit an Opportunity
          </Link>
        </div>
      )}
    </header>
  );
}
