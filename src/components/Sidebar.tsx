"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const SubscribeModal = dynamic(() => import("./SubscribeModal"), { ssr: false });

const navItems = [
  { href: "/tech", label: "Tech" },
  { href: "/insights", label: "Insights" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "About Me" },
  { href: "/links", label: "Links" },
];

// ── Second-level sub-navigation ───────────────────────────────────────────────

const insightSubNav = [
  { label: "Geopolitics & Civilization", anchor: "Geopolitics & Civilization" },
  { label: "Business & Strategy", anchor: "Business & Global Strategy" },
  { label: "Technology & AI", anchor: "Technology & AI" },
  { label: "Management", anchor: "Management" },
  { label: "Investment & Markets", anchor: "Investment & Markets" },
];

const storiesSubNav = [
  { label: "Cultural Essay", anchor: "Cultural Essay" },
  { label: "文化随笔", anchor: "文化随笔" },
  { label: "AI Ethics", anchor: "AI Ethics" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const showInsightSub = isActive("/insights");
  const showStoriesSub = isActive("/stories");

  return (
    <>
      {/* ── Subscribe Modal ── */}
      {showSubscribe && <SubscribeModal onClose={() => setShowSubscribe(false)} />}

      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-56 flex-col justify-between px-8 py-12 border-r border-stone-200 bg-stone-50 z-40">
        {/* Name / Logo */}
        <div>
          <Link href="/" className="group text-left block">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 font-medium mb-1 group-hover:text-stone-800 transition-colors">
              Eden Huang
            </p>
            <div className="w-6 h-px bg-stone-300 group-hover:bg-stone-600 transition-colors duration-300" />
          </Link>

          {/* Primary Nav */}
          <nav className="mt-10 flex flex-col gap-0.5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center text-sm py-1.5 transition-all duration-200 ${
                      active
                        ? "text-stone-900 font-medium"
                        : "text-stone-400 hover:text-stone-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-px mr-2 bg-stone-900 transition-all duration-200 ${
                        active ? "w-4" : "w-0"
                      }`}
                    />
                    {item.label}
                  </Link>

                  {/* Sub-nav: Insights */}
                  {item.href === "/insights" && showInsightSub && (
                    <div className="ml-6 mt-1 mb-2 flex flex-col gap-0.5">
                      {insightSubNav.map((sub) => {
                        const isSubActive =
                          pathname === `/insights` &&
                          typeof window !== "undefined" &&
                          window.location.hash === `#${sub.anchor}`;
                        return (
                          <button
                            key={sub.anchor}
                            onClick={() => {
                              const el = document.getElementById(sub.anchor);
                              if (el)
                                el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className={`text-left text-xs py-0.5 transition-colors ${
                              isSubActive
                                ? "text-stone-700 font-medium"
                                : "text-stone-400 hover:text-stone-600"
                            }`}
                          >
                            {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Sub-nav: Stories */}
                  {item.href === "/stories" && showStoriesSub && (
                    <div className="ml-6 mt-1 mb-2 flex flex-col gap-0.5">
                      {storiesSubNav.map((sub) => (
                        <button
                          key={sub.anchor}
                          onClick={() => {
                            const el = document.getElementById(sub.anchor);
                            if (el)
                              el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className="text-left text-xs py-0.5 text-stone-400 hover:text-stone-600 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setShowSubscribe(true)}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors group"
          >
            <span className="group-hover:scale-110 transition-transform duration-200">✦</span>
            <span>Subscribe</span>
          </button>
          <p className="text-xs text-stone-300">© {new Date().getFullYear()}</p>
        </div>
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
                className={`block h-px bg-stone-600 transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-stone-600 transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-stone-100 py-3 px-6 flex flex-col gap-1 bg-stone-50">
            {/* Mobile Subscribe */}
            <button
              onClick={() => { setMenuOpen(false); setShowSubscribe(true); }}
              className="flex items-center gap-1.5 text-sm py-2 text-stone-400"
            >
              <span>✦</span>
              <span>Subscribe</span>
            </button>
            <div className="border-t border-stone-100 my-1" />
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm py-2 block transition-colors ${
                    isActive(item.href)
                      ? "text-stone-900 font-medium"
                      : "text-stone-400"
                  }`}
                >
                  {item.label}
                </Link>
                {/* Mobile sub-nav: Insights */}
                {item.href === "/insights" && showInsightSub && (
                  <div className="ml-4 flex flex-col gap-0.5 mb-1">
                    {insightSubNav.map((sub) => (
                      <button
                        key={sub.anchor}
                        onClick={() => {
                          setMenuOpen(false);
                          setTimeout(() => {
                            const el = document.getElementById(sub.anchor);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="text-left text-xs py-1 text-stone-400 hover:text-stone-600"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
                {/* Mobile sub-nav: Stories */}
                {item.href === "/stories" && showStoriesSub && (
                  <div className="ml-4 flex flex-col gap-0.5 mb-1">
                    {storiesSubNav.map((sub) => (
                      <button
                        key={sub.anchor}
                        onClick={() => {
                          setMenuOpen(false);
                          setTimeout(() => {
                            const el = document.getElementById(sub.anchor);
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }}
                        className="text-left text-xs py-1 text-stone-400 hover:text-stone-600"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
