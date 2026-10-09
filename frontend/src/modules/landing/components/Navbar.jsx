function NavBar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
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

        {/* Navigation Links */}
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

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 sm:px-5"
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
      </div>
    </nav>
  );
}

export default NavBar;