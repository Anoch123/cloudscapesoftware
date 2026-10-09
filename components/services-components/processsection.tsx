import { STEPS } from "@/lib/constants/services";

export default function ProcessSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <span className="inline-flex w-fit items-center rounded-full bg-[#4F66FF]/[0.08] px-3 py-1 text-xs font-medium text-[#4F66FF]">
          How we work
        </span>
        <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-[#0B1020] sm:text-4xl">
          A process built to avoid surprises.
        </h2>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting line, desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-slate-200 lg:block" />

          {STEPS.map((step, index) => (
            <div key={step.title} className="relative flex flex-col">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-[#4F66FF]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#0B1020]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}