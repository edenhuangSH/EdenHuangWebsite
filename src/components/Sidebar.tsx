"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "tech", label: "Tech" },
  { id: "insights", label: "Insights" },
  { id: "stories", label: "Stories" },
  { id: "about", label: "About Me" },
  { id: "links", label: "Links" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("tech");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col justify-between px-8 py-12 border-r border-stone-200 bg-stone-50 z-40">
        {/* Name / Logo */}
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left group"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-medium mb-1">
              Eden Huang
            </p>
            <div className="w-6 h-px bg-stone-300 group-hover:bg-stone-500 transition-colors duration-300" />
          </button>

          {/* Nav */}
          <nav className="mt-10 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-sm py-1.5 transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-stone-900 font-medium"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                {activeSection === item.id && (
                  <span className="inline-block w-4 h-px bg-stone-900 mr-2 align-middle" />
                )}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <p className="text-xs text-stone-300">© {new Date().getFullYear()}</p>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium"
          >
            Eden Huang
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-stone-500 p-1"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav className="border-t border-stone-100 py-3 px-6 flex flex-col gap-1 bg-stone-50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left text-sm py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-stone-900 font-medium"
                    : "text-stone-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
