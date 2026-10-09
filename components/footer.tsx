import Link from "next/link";
import { common_texts } from "@/lib/constants/common_text";
import { footerRows } from "@/lib/constants/footer";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white mt-20">
      {footerRows.map((row, index) => (
        <div
          key={row.title}
          className={`w-full ${index > 0 ? "border-t border-gray-200" : ""}`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-12">
            <span className="text-lg text-gray-900">{row.title}</span>
            <nav className="flex flex-wrap gap-x-10 gap-y-2 sm:justify-end">
              {row.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ))}

      <div className="w-full border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between lg:px-12 mt-10">
          <p className="text-sm text-gray-400">
            © Copyright {year} {common_texts.App_name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-gray-400">
            {common_texts.App_name}
          </div>
        </div>
      </div>
    </footer>
  );
}