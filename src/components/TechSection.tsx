import SectionHeader from "./SectionHeader";

const tools = [
  {
    name: "Project Name",
    tag: "Open Source",
    description:
      "A brief description of what this tool does and the problem it solves. Add your real projects here.",
    link: "#",
    year: "2025",
  },
  {
    name: "Another Tool",
    tag: "Internal",
    description:
      "Description of the tool, its purpose, and the technology stack used to build it.",
    link: "#",
    year: "2024",
  },
];

export default function TechSection() {
  return (
    <section id="tech" className="py-20">
      <SectionHeader
        label="Tech"
        description="Tools and projects I've built — from quick experiments to production systems."
      />
      <div className="grid gap-5">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-stone-200 rounded-sm p-6 hover:border-stone-400 transition-all duration-200 hover:shadow-sm bg-white"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-medium text-stone-800 group-hover:text-stone-900">
                  {tool.name}
                </h3>
                <span className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5 rounded-full">
                  {tool.tag}
                </span>
              </div>
              <span className="text-xs text-stone-300 shrink-0">{tool.year}</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              {tool.description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs text-stone-400 group-hover:text-stone-600 transition-colors">
              <span>View project</span>
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
