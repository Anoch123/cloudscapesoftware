import { PILLARS } from "@/lib/constants/services";

export default function WhatWeDo() {
  return (
    <section className="bg-white px-5 py-6 sm:px-8 sm:py-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: intro */}
          <div className="lg:col-span-5">
            <span className="inline-flex w-fit items-center rounded-full bg-[#4F66FF]/[0.08] px-3 py-1 text-xs font-medium text-[#4F66FF]">
              What we do
            </span>
            <h2 className="mt-6 text-3xl font-semibold leading-[1.15] tracking-tight text-[#0B1020] sm:text-[34px]">
              Software and AI, handled by one team from day one.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-slate-500">
              Most studios hand you off between a dev team and an "AI team." We
              don't split the work that way. The same people who build your
              product decide where automation and intelligence belong in it — so
              it fits, instead of getting bolted on afterward.
            </p>
          </div>

          {/* Right: pillars as an editorial list, not a card grid */}
          <div className="lg:col-span-7">
            <div className="border-t border-slate-200">
              {PILLARS.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="group flex gap-6 border-b border-slate-200 py-8 sm:gap-10"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${pillar.color}14`,
                      color: pillar.color,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-[#0B1020]">
                      {pillar.title}
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: pillar.color }}
                      />
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
