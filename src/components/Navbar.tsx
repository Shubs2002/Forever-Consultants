import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg
              width="32"
              height="18"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Forever Consultants Logo"
            >
              <defs>
                <linearGradient id="nav-logo" x1="0" y1="0" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#93C5FD" />
                </linearGradient>
              </defs>
              <path
                d="M50 25 C50 10, 30 2, 18 10 C6 18, 6 32, 18 40 C30 48, 50 40, 50 25 C50 10, 70 2, 82 10 C94 18, 94 32, 82 40 C70 48, 50 40, 50 25Z"
                stroke="url(#nav-logo)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="font-semibold text-lg tracking-tight text-zinc-200 group-hover:text-white transition-colors">
              Forever Consultants
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#lic" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
              Insurance
            </Link>
            <Link href="#mutual-funds" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
              Investments
            </Link>
            <Link href="#health" className="text-sm text-zinc-500 hover:text-zinc-200 transition-colors">
              Health
            </Link>
            <a
              href="#book"
              className="text-sm font-semibold px-5 py-2 rounded-full text-white bg-[#3B82F6] hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#3B82F6]/25"
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden text-zinc-400 hover:text-white transition-colors" aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 5h14M3 10h14M3 15h14" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
