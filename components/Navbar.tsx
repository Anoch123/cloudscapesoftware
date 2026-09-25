"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants/navbar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);

  // Lock background scroll while the panel is expanded
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset any open mobile accordion whenever the panel itself closes
  useEffect(() => {
    if (!open) setOpenMobileMenu(null);
  }, [open]);

  // Close whichever desktop dropdown is open on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        desktopMenuRef.current &&
        !desktopMenuRef.current.contains(e.target as Node)
      ) {
        setOpenDesktopMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    // One element morphs between the collapsed pill and the full-screen panel.
    // On desktop it's locked to the pill shape regardless of `open`.
    <div
      className={`fixed z-50 flex flex-col overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] md:left-1/2 md:right-auto md:top-6 md:h-16 md:w-[calc(100%-3rem)] md:max-w-6xl md:-translate-x-1/2 md:overflow-visible md:rounded-full ${
        open
          ? "inset-0 h-[100dvh] rounded-none"
          : "inset-x-6 top-6 h-16 rounded-[32px]"
      }`}
    >
      {/* Header row: fixed height, pinned at the top of the morphing box.
          Nudged down a bit on mobile once the panel is expanded, so the
          logo and close button aren't flush against the very top edge. */}
      <div
        className={`flex h-16 w-full shrink-0 items-center justify-between px-10 transition-[margin] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] md:px-6 md:!mt-0 md:transition-none ${
          open ? "mt-6" : "mt-0"
        }`}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-[25px] md:text-[20px] font-[500] tracking-tight text-slate-900"
        >
          CloudScap
        </Link>

        {/* Desktop nav */}
        <nav
          ref={desktopMenuRef}
          className="hidden items-center gap-10 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const hasChildren = !!link.children?.length;
            const isOpen = openDesktopMenu === link.href;

            if (!hasChildren) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[18px] font-medium text-slate-800 transition-colors hover:text-slate-500"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDesktopMenu((v) =>
                      v === link.href ? null : link.href,
                    )
                  }
                  aria-expanded={isOpen}
                  className="flex items-center gap-2 text-[18px] font-medium text-slate-800 transition-colors hover:text-slate-500"
                >
                  {link.label}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`shrink-0 transition-transform duration-200 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1.5 3.5L5 7L8.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 transition-all duration-200 ease-out ${
                    isOpen
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                    {link.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDesktopMenu(null)}
                        className="block rounded-xl px-4 py-2.5 text-[16px] font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center rounded-full bg-[#ff0000] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 md:inline-flex"
        >
          Contact us
        </Link>

        {/* Mobile toggle: burger <-> X */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center text-slate-900 md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-5 bg-current transition-transform duration-300 ease-out ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-5 bg-current transition-opacity duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-5 bg-current transition-transform duration-300 ease-out ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Menu content — clipped and non-interactive while collapsed */}
      <div
        className={`flex flex-1 flex-col overflow-y-auto px-10 pb-8 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav className="flex flex-col">
          {NAV_LINKS.map((link, i) => {
            const hasChildren = !!link.children?.length;
            const isOpen = openMobileMenu === link.href;
            const delay = {
              transitionDelay: open ? `${150 + i * 50}ms` : "0ms",
            };

            if (!hasChildren) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={delay}
                  className={`border-b border-slate-200 py-7 text-[26px] font-medium transition-all duration-300 ease-out ${
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <div
                key={link.href}
                style={delay}
                className={`border-b border-slate-200 transition-all duration-300 ease-out ${
                  open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                }`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMobileMenu((v) =>
                      v === link.href ? null : link.href,
                    )
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-7 text-[26px] font-medium"
                >
                  {link.label}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 10 10"
                    fill="none"
                    className={`shrink-0 transition-transform duration-200 ease-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1.5 3.5L5 7L8.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col px-4 pb-6">
                      {link.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="py-2.5 text-[22px] font-medium text-slate-600"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div
          style={{
            transitionDelay: open ? `${150 + NAV_LINKS.length * 50}ms` : "0ms",
          }}
          className={`pt-6 transition-all duration-300 ease-out ${
            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center rounded-[10px] text-[20px] bg-[#ff0000] px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-700"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
