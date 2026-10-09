import { SERVICES } from "@/lib/constants/services";

const FEATURED_INDICES = [0, 6];

export default function Services() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="inline-flex w-fit items-center rounded-full bg-[#4F66FF]/[0.08] px-3 py-1 text-xs font-medium text-[#4F66FF]">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#12141A] sm:text-4xl">
            Everything it takes to ship and run good software.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500 sm:text-base">
            Eight services, each covering a real slice of the work — not a
            marketing label. Here's what's actually included in each.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const isFeatured = FEATURED_INDICES.includes(index);

            return (
              <div
                key={service.label}
                className={`flex flex-col rounded-3xl p-8 ${
                  isFeatured
                    ? "bg-gradient-to-br from-[#4F66FF] to-[#9333EA] text-white shadow-[0_20px_60px_-15px_rgba(79,102,255,0.4)]"
                    : "border border-[#E3E5EA] bg-white text-[#12141A]"
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    isFeatured ? "text-white/60" : "text-slate-400"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {service.label}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    isFeatured ? "text-white/75" : "text-slate-500"
                  }`}
                >
                  {service.detail}
                </p>

                <div
                  className={`mt-6 border-t pt-5 ${
                    isFeatured ? "border-white/15" : "border-slate-100"
                  }`}
                >
                  <ul className="flex flex-col gap-2.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className={`flex items-start gap-2.5 text-sm leading-snug ${
                          isFeatured ? "text-white/85" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={
                            isFeatured ? "text-white" : "text-[#4F66FF]"
                          }
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="mt-0.5 shrink-0"
                          >
                            <path
                              d="M5 12.5L9.5 17L19 7"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
