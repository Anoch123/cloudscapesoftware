import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}
export default function PageHeader({
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-white">
      <Navbar />

      {/* Soft glow behind the headline */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="mt-10 h-[280px] w-[720px] rounded-full bg-slate-200/50 blur-[100px]" />
        <div className="absolute mt-24 h-[180px] w-[420px] rounded-full bg-slate-100/70 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-40 text-left sm:px-8 md:pb-24 md:pt-48 md:text-center">

        <h1 className="text-[40px] font-bold leading-[1.08] tracking-tight text-[#0B1020] md:text-[84px]">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-0 mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-500 md:mx-auto md:text-[18px]">
            {subtitle}
          </p>
        )}

        {children && <div>{children}</div>}
      </div>
    </header>
  );
}