import { TERMINAL_LINES } from "@/lib/constants/header";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="relative flex min-h-[80dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020] md:min-h-dvh md:items-center">
        <Navbar />

        {/* Background: deep navy base, layered glows, faint grid, drifting orbit ring */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(79,102,255,0.18),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_30%,rgba(147,51,234,0.12),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />
          <svg
            className="absolute -right-40 -top-40 hidden opacity-[0.15] lg:block"
            width="640"
            height="640"
            viewBox="0 0 640 640"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="320" cy="320" r="319" stroke="#8FA0FF" strokeWidth="1" />
            <circle cx="320" cy="320" r="230" stroke="#8FA0FF" strokeWidth="1" />
            <circle cx="320" cy="90" r="5" fill="#8FA0FF" />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1020] to-transparent" />
        </div>

        {/* Floating terminal card — desktop only, purely decorative */}
        <div className="pointer-events-none absolute right-10 top-28 z-10 hidden w-[340px] rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-mono text-[13px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur lg:block">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="space-y-1.5">
            {TERMINAL_LINES.map((line, i) => (
              <p
                key={i}
                className={
                  line.tone === "ok" ? "text-emerald-400" : "text-slate-400"
                }
              >
                {line.text}
              </p>
            ))}
            <p className="text-slate-400">
              <span className="animate-pulse motion-reduce:animate-none">▍</span>
            </p>
          </div>
        </div>

        {/* Content — pt-24 on mobile guarantees clearance under the fixed navbar
            regardless of how tall the rest of the hero content gets */}
        <div className="relative z-10 px-6 pb-12 pt-44 md:px-10 md:pb-16 md:pt-0 md:text-center">
          <h1 className="max-w-5xl text-[40px] font-semibold leading-[1.08] tracking-tight text-white md:mx-auto md:text-[78px]">
            Smart software. Seamless automation. Scalable cloud.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300 md:mx-auto md:text-[19px]">
            CloudScap builds production software that scales with your business — from idea to launch and beyond.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row md:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#ff0000] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(79,102,255,0.35)] transition-colors hover:bg-[#3D53E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FA0FF]"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              See our work
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
