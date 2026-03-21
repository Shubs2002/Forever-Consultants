import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a0c]/80 backdrop-blur-xl border-t border-[#3B82F6]/5">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="28"
                height="16"
                viewBox="0 0 100 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="ft-logo" x1="0" y1="0" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#93C5FD" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 25 C50 10, 30 2, 18 10 C6 18, 6 32, 18 40 C30 48, 50 40, 50 25 C50 10, 70 2, 82 10 C94 18, 94 32, 82 40 C70 48, 50 40, 50 25Z"
                  stroke="url(#ft-logo)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="font-semibold text-zinc-200">
                Forever Consultants
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed mb-6">
              Comprehensive wealth management and health protection tailored to
              secure your financial future, forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-2 glass-sm px-3 py-1.5">
                <span className="w-1 h-1 rounded-full bg-[#3B82F6] shadow-sm shadow-[#3B82F6]/50" />
                Nitin Gandhi — 9769660363
              </span>
              <span className="flex items-center gap-2 glass-sm px-3 py-1.5">
                <span className="w-1 h-1 rounded-full bg-[#3B82F6] shadow-sm shadow-[#3B82F6]/50" />
                Sujata Gandhi — 8087907776
              </span>
            </div>
          </div>

          <div className="glass-footer p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-zinc-600 mb-4">
              Services
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#lic" className="text-zinc-500 hover:text-[#3B82F6] transition-colors">
                  LIC Insurance
                </a>
              </li>
              <li>
                <a href="#mutual-funds" className="text-zinc-500 hover:text-[#3B82F6] transition-colors">
                  Mutual Funds
                </a>
              </li>
              <li>
                <a href="#health" className="text-zinc-500 hover:text-[#3B82F6] transition-colors">
                  Health Insurance
                </a>
              </li>
            </ul>
          </div>

          <div className="glass-footer p-6">
            <p className="text-xs font-medium tracking-wider uppercase text-zinc-600 mb-4">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm">
              <li className="text-zinc-500">ntngandhi65@gmail.com</li>
              <li className="text-zinc-500">sujatagandhi72@gmail.com</li>
              <li>
                <Link href="#book" className="text-[#3B82F6] hover:text-[#60A5FA] font-medium transition-colors">
                  Book Consultation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Forever Consultants. All rights
            reserved.
          </p>
          <p className="text-[10px] text-zinc-700 text-center md:text-right max-w-xl leading-relaxed">
            Mutual Fund investments are subject to market risks. Read all scheme
            related documents carefully. Insurance is a subject matter of
            solicitation.
          </p>
        </div>
      </div>
    </footer>
  );
}
