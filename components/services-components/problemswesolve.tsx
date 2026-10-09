import { PROBLEMS } from "@/lib/constants/services";

export default function ProblemsWeSolve() {
  return (
    <section className="relative overflow-hidden bg-[#0B1020] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_0%,rgba(79,102,255,0.14),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_100%_30%,rgba(147,51,234,0.12),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#B9C2FF]">
          Problems we solve
        </span>
        <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          The issues that usually bring people to us.
        </h2>

        <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
          {PROBLEMS.map((item) => (
            <div
              key={item.problem}
              className="grid grid-cols-1 gap-3 py-7 sm:grid-cols-[1fr_1fr] sm:gap-10"
            >
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  The problem
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-300 sm:text-base">
                  {item.problem}
                </p>
              </div>
              <div className="border-l border-white/10 pl-5 sm:pl-8">
                <span className="text-xs font-medium uppercase tracking-wide text-[#8FA0FF]">
                  Our approach
                </span>
                <p className="mt-2 text-[15px] leading-relaxed text-white sm:text-base">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}