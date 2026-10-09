export default function ReadyToHaveChat() {
  return (
    <section className="relative overflow-hidden bg-[#0B1020] px-6 py-20 text-center md:px-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(79,102,255,0.16),transparent_65%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Ready to build with software and AI together?
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/talk-to-us"
            className="inline-flex items-center justify-center rounded-full bg-[#ff0000] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_24px_rgba(79,102,255,0.35)] transition-colors hover:bg-[#3D53E8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8FA0FF]"
          >
            Book a Consultation
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
