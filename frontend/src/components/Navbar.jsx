import { useState, useEffect } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Work", "About", "Contact"];

  return (
    <nav
      style={{
        background: scrolled
          ? isLight ? "rgba(248,248,246,0.93)" : "rgba(10,10,10,0.93)"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
<a href="#" className="flex-shrink-0 flex items-center gap-3">
  {/* Logo image */}
  <img
    src="/ma2.png"
    alt="Mohammed Ayub"
    className="h-10 w-auto object-contain"
    style={{
      maxWidth: "180px",
      filter: isLight
        ? "none"
        : "brightness(1.8) contrast(1.1)",
    }}
  />
  
  {/* Name text */}
  <span className="font-bold text-lg tracking-tight hidden sm:inline">
    <span style={{ color: "#faf8f4" }}>MOHAMMED </span>
    <span style={{ color: "#a8842c " }}>AYUB</span>
  </span>
</a>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm transition-opacity hover:opacity-100"
              style={{ color: "var(--fg-muted)" }}>
              {l}
            </a>
          ))}
        </div>

        {/* ── Right actions ── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ border: "1px solid var(--border)", background: "var(--pill-bg)", color: "var(--fg-muted)" }}
            aria-label="Toggle theme">
            {isLight ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>

          <a href="#book"
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "var(--accent)", color: isLight ? "#fff" : "#0a0a0a" }}>
            Book a Call
          </a>
        </div>

        {/* ── Mobile ── */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs"
            style={{ border: "1px solid var(--border)", background: "var(--pill-bg)" }}>
            {isLight ? "🌙" : "☀️"}
          </button>
          <button className="p-1.5" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--fg)" }}>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-b px-6 py-5 flex flex-col gap-4"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              className="text-sm font-medium" style={{ color: "var(--fg-muted)" }}>
              {l}
            </a>
          ))}
          <a href="#book" onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold px-4 py-3 rounded-full text-center"
            style={{ background: "var(--accent)", color: isLight ? "#fff" : "#0a0a0a" }}>
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
