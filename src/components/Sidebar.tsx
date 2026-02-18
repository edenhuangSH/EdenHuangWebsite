"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/tech", label: "Tech" },
  { href: "/insights", label: "Insights" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About Me" },
  { href: "/links", label: "Links" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col justify-between px-8 py-12 border-r border-stone-200 bg-stone-50 z-40">
        {/* Name */}
        <div>
          <Link href="/" className="group text-left block">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium mb-1 group-hover:text-stone-800 transition-colors">
              Eden Huang
            </p>
            <div className="w-6 h-px bg-stone-300 group-hover:bg-stone-600 transition-colors duration-300" />
          </Link>

          {/* Nav */}
          <nav className="mt-10 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center text-sm py-1.5 transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-stone-900 font-medium"
                    : "text-stone-400 hover:text-stone-600"
                }`}
              >
                <span
                  className={`inline-block h-px mr-2 bg-stone-900 transition-all duration-200 ${
                    isActive(item.href) ? "w-4" : "w-0"
                  }`}
                />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="text-xs text-stone-300">© {new Date().getFullYear()}</p>
      </aside>

      {/* ── Mobile Header ── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-sm border-b border-stone-200">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium"
          >
            Eden Huang
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-stone-500 p-1"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-stone-100 py-3 px-6 flex flex-col gap-1 bg-stone-50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm py-2 transition-colors ${
                  isActive(item.href)
                    ? "text-stone-900 font-medium"
                    : "text-stone-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
