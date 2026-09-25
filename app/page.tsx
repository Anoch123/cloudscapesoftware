import Header from "@/components/Header";
import { CAPABILITIES } from "@/components/header_capabilities";

export default function Home() {
  return (
    <section className="relative app-shell">
      <Header />
      <div className="relative border-y border-slate-200 bg-white px-6 py-7 md:px-0 md:py-0">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-6 md:mx-0 md:max-w-none md:grid-cols-4 md:gap-0 md:divide-x md:divide-slate-200">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.label}
              className="flex items-start gap-3 md:flex-col md:items-center md:justify-center md:gap-2 md:px-8 md:py-10 md:text-center"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-[#4F66FF]/[0.06] text-[#4F66FF] md:h-10 md:w-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  {cap.icon}
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-medium text-slate-900">
                  {cap.label}
                </p>
                <p className="mt-0.5 text-[13px] text-slate-500">
                  {cap.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Statement section — left-aligned on mobile, centered on desktop */}
      <div className="relative bg-white px-6 py-12 text-left md:px-10 md:py-16 md:text-center">
        <span className="mx-auto block max-w-3xl text-[30px] font-medium leading-snug text-slate-900 md:text-[48px]">
          Helping ambitious teams turn ideas into products that scale.
        </span>
      </div>
    </section>
  );
}
