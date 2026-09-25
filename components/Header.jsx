import Navbar from "./Navbar";

const STATS = [
  { value: "150+", label: "Products shipped" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40+", label: "Engineers on call" },
];

const TERMINAL_LINES = [
  { text: "$ cloudscap deploy --env=production", tone: "muted" },
  { text: "✓ Build complete in 4.2s", tone: "ok" },
  { text: "✓ 12 services healthy", tone: "ok" },
  { text: "→ live at cloudscap.app", tone: "muted" },
];

export default function Header() {
  return (
    <header className="relative flex h-[92dvh] w-full flex-col justify-end overflow-hidden bg-[#0B1020] md:h-dvh md:items-center">
      <Navbar />

      {/* Background: deep navy base + soft indigo glow + faint grid, no photo asset required */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(79,102,255,0.18),transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1020] to-transparent" />
      </div>

      {/* Floating status pill */}
      <div className="relative z-10 mx-6 mt-24 flex w-fit items-center gap-2.5 self-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur md:mx-auto md:mt-0 md:self-auto">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[13px] text-slate-300">
          All systems operational — now supporting multi-cloud deploys
        </span>
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

      {/* Content */}
      <div className="relative z-10 px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-0 md:text-center">
        <h1 className="max-w-5xl text-[40px] font-semibold leading-[1.08] tracking-tight text-white md:mx-auto md:text-[78px]">
          Smart software. Seamless automation. Scalable cloud.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-slate-300 md:mx-auto md:text-[19px]">
          CloudScap designs, builds and ships production software for teams
          that can&apos;t afford to slow down — from first commit to
          global scale.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row md:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#4F66FF] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(79,102,255,0.35)] transition-colors hover:bg-[#3D53E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FA0FF]"
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

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/10 px-6 py-6 md:px-10 md:py-7">
        <div className="flex max-w-4xl flex-wrap justify-between gap-y-4 divide-x divide-white/10 md:mx-auto md:justify-center md:gap-x-16 md:divide-x-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="min-w-[7.5rem] px-4 first:pl-0 md:px-0">
              <p className="text-[26px] font-semibold text-white md:text-[32px]">
                {stat.value}
              </p>
              <p className="mt-1 text-[13px] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
