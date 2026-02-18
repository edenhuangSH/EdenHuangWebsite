import Link from "next/link";

const sections = [
  {
    href: "/tech",
    label: "Tech",
    description: "Tools and projects I've built.",
  },
  {
    href: "/insights",
    label: "Insights",
    description: "Research and observations across industries.",
  },
  {
    href: "/stories",
    label: "Stories",
    description: "Articles, essays, and things worth putting into words.",
  },
  {
    href: "/about",
    label: "About Me",
    description: "A bit about who I am.",
  },
  {
    href: "/links",
    label: "Links",
    description: "Find me elsewhere on the internet.",
  },
];

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center">
      {/* Intro */}
      <div className="mb-16">
        <h1 className="text-2xl font-medium text-stone-900 tracking-tight mb-3">
          Eden Huang
        </h1>
        <p className="text-sm text-stone-500 leading-relaxed max-w-sm">
          Building tools, exploring ideas, and writing about what I find
          along the way.
        </p>
      </div>

      {/* Section index */}
      <nav className="flex flex-col divide-y divide-stone-100">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group flex items-center justify-between py-5 hover:pl-1 transition-all duration-200"
          >
            <div>
              <p className="text-sm font-medium text-stone-800 group-hover:text-stone-900 mb-0.5">
                {section.label}
              </p>
              <p className="text-xs text-stone-400 group-hover:text-stone-500 transition-colors">
                {section.description}
              </p>
            </div>
            <span className="text-stone-300 group-hover:text-stone-500 group-hover:translate-x-1 transition-all duration-200 text-sm">
              →
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
