import SectionHeader from "./SectionHeader";

const featuredProject = {
  name: "AI Research Assistant",
  tag: "Featured",
  year: "2025",
  description:
    "A full-featured research productivity web app built for academic researchers. Combines AI-powered chat (Gemini 2.5 Flash + GPT-4o fallback), project management, literature review, notes, flashcards, a knowledge map, conference tracker, collaborative whiteboard, and a research calendar — all in one interface with full bilingual support (EN / 中文).",
  highlights: ["Gemini 2.5 Flash + GPT-4o", "Supabase Auth", "Gamification", "EN / 中文"],
  github: "https://github.com/edenhuangSH/personal-research-assistant",
  demo: "https://ai-research-assistant-mocha.vercel.app/",
};

type Project = {
  name: string;
  tag: string;
  year: string;
  builtFor: string;
  description: string;
  highlights: string[];
  github: string;
  demo?: string;
  deck?: string;
};

const projects: Project[] = [
  {
    name: "TomTor AI",
    tag: "EdTech",
    year: "2025",
    builtFor: "Built for my brother-in-law",
    description:
      "A personalised IB Math tutoring platform for students at the American International School of Budapest. AI-generated practice problems with step-by-step solutions, an interactive chat tutor with LaTeX math rendering, curriculum browser organised by IB syllabus, progress tracking, streak gamification, exam library, and a local tutor network.",
    highlights: ["GPT-4o", "KaTeX", "Supabase", "Next.js 16", "i18n"],
    github: "https://github.com/edenhuangSH/tomtor-ai",
    deck: "/tech/Democratizing_Elite_Math.pdf",
  },
  {
    name: "Weari",
    tag: "Consumer",
    year: "2025",
    builtFor: "Built for my wife",
    description:
      "A wardrobe identity platform that turns your closet into a digital, searchable collection layered with AI-powered insights. Features an Energy Signature dashboard, daily outfit engine (mood + context → 3 picks in <30 s), regret tracking, inflation-adjusted cost-per-wear, taste matching with friends, and an emotional onboarding flow.",
    highlights: ["Next.js 16", "Supabase", "Recharts", "shadcn/ui", "AI Insights"],
    github: "https://github.com/edenhuangSH/weari",
    deck: "/tech/Identity_Intelligence_Platform.pdf",
  },
];

export default function TechSection() {
  return (
    <section className="pb-16">
      <SectionHeader
        label="Tech"
        description="I enjoy vibe-coding — building utility tools for my own startup and creating products that friends actually use day-to-day. Most of what I build starts as a personal itch: something missing in my workflow, or a tool that would make a teammate's life noticeably better."
      />

      {/* Featured project */}
      <div className="mb-8">
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">
          Capstone
        </p>
        <div className="border border-stone-300 rounded-sm bg-white overflow-hidden hover:border-stone-500 hover:shadow-md transition-all duration-300 group">
          {/* Header bar */}
          <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-stone-900">
                {featuredProject.name}
              </h3>
              <span className="text-xs font-medium text-stone-600 bg-stone-100 border border-stone-200 px-2 py-0.5 rounded-full">
                {featuredProject.tag}
              </span>
            </div>
            <span className="text-xs text-stone-300">{featuredProject.year}</span>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            <p className="text-sm text-stone-500 leading-relaxed mb-5">
              {featuredProject.description}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-5">
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-800 hover:text-stone-600 transition-colors"
              >
                <span>Live Demo</span>
                <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other projects */}
      {projects.length > 0 && (
        <div>
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-4">
            Other Projects
          </p>
          <div className="grid gap-5">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group border border-stone-200 rounded-sm bg-white overflow-hidden hover:border-stone-400 hover:shadow-sm transition-all duration-200"
              >
                {/* Header */}
                <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-semibold text-stone-900">
                      {project.name}
                    </h3>
                    <span className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5 rounded-full">
                      {project.tag}
                    </span>
                  </div>
                  <span className="text-xs text-stone-300">{project.year}</span>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <p className="text-[11px] uppercase tracking-wide text-stone-400 mb-2">
                    {project.builtFor}
                  </p>
                  <p className="text-sm text-stone-500 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs text-stone-500 bg-stone-50 border border-stone-200 px-2.5 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                    {project.deck && (
                      <a
                        href={project.deck}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        <span>Business Deck</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-800 hover:text-stone-600 transition-colors"
                      >
                        <span>Live Demo</span>
                        <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
