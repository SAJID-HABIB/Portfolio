import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/85 px-5 py-4 text-white shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-7">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            className="shrink-0 text-xl font-bold tracking-tight sm:text-2xl"
          >
            Sajid<span className="text-blue-500"> </span>
            <span className="ml-1 text-slate-400">Habib</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 sm:inline-flex"
          >
            <span>Resume</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M14 3h7v7" />
              <path d="M10 14 21 3" />
              <path d="M21 14v7H3V3h7" />
            </svg>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-sidebar"
          >
            {isMenuOpen ? (
              /* Close Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <aside
        id="mobile-sidebar"
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[280px] max-w-[85%] flex-col border-l border-white/10 bg-slate-950 p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        {/* Sidebar Header */}
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xl font-bold">
            Sajid <span className="text-slate-400">Habib</span>
          </span>

          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMenuOpen(false)}
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold transition-colors hover:bg-blue-500"
        >
          View Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M14 3h7v7" />
            <path d="M10 14 21 3" />
            <path d="M21 14v7H3V3h7" />
          </svg>
        </a>
      </aside>
    </>
  );
}

export default NavBar;