import SectionHeader from "./SectionHeader";

const themes = [
  {
    title: "MedTech & Neuromodulation",
    items: [
      "Non-invasive neuromodulation for OAB & pelvic health",
      "Clinical pathway design (China NMPA, U.S. regulatory strategy)",
      "TTNS / PTNS device localization",
      "AI-enhanced therapy protocols",
    ],
  },
  {
    title: "AI-Native Startup Systems",
    items: [
      "Designing AI-augmented workflows",
      "Structured decision frameworks for founders",
      "Product-driven regulatory scaling",
      "AI as strategic leverage, not chatbot novelty",
    ],
  },
  {
    title: "Capital & Systems Thinking",
    items: [
      "Global asset allocation",
      "Cross-border entity design (U.S. / China / HK)",
      "Founder equity strategy",
      "Long-term macro positioning",
    ],
  },
];

const philosophy = [
  "Most innovation fails not because of technology, but because of regulatory, operational, and structural blind spots.",
  "AI is not a tool — it is a workflow redesign event.",
  "Geography is optional. Systems thinking is not.",
  "Health technology should move from invasive and reactive to non-invasive and preventative.",
];

export default function AboutSection() {
  return (
    <section className="pb-16">
      <SectionHeader label="About Me" />

      {/* Bio */}
      <div className="max-w-prose space-y-4 text-sm text-stone-600 leading-loose mb-14">
        <p>
          I&apos;m Eden Huang — a global MedTech founder, operator, and AI-native
          product builder working at the intersection of neuromodulation, digital
          health, and cross-border innovation.
        </p>
        <p>
          I&apos;m the Co-Founder &amp; COO of{" "}
          <span className="text-stone-800 font-medium">Innostim MedTech</span>{" "}
          (未电科技), a Beijing- and Hong Kong-based medical device company focused
          on non-invasive neuromodulation for Overactive Bladder (OAB) and related
          pelvic health conditions. We operate across China, the U.S., and Australia
          in collaboration with Australis Scientific, advancing regulatory approvals,
          localized manufacturing, and AI-enhanced therapeutic systems.
        </p>
        <p>
          I&apos;m based between Boston (Harvard Life Lab), Beijing, and Hong Kong —
          bridging clinical science, product strategy, manufacturing, and global
          commercialization.
        </p>
      </div>

      {/* Core themes */}
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-medium mb-6">
          What I Work On
        </p>
        <div className="grid sm:grid-cols-3 gap-8">
          {themes.map((theme) => (
            <div key={theme.title}>
              <p className="text-xs font-semibold text-stone-700 mb-3">{theme.title}</p>
              <ul className="space-y-1.5">
                {theme.items.map((item) => (
                  <li key={item} className="text-xs text-stone-500 leading-relaxed flex gap-2">
                    <span className="text-stone-300 shrink-0 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Philosophy */}
      <div className="mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 font-medium mb-6">
          Philosophy
        </p>
        <div className="space-y-3">
          {philosophy.map((belief) => (
            <div key={belief} className="flex gap-3">
              <span className="text-stone-200 shrink-0 text-sm mt-0.5">◦</span>
              <p className="text-sm text-stone-500 leading-relaxed italic">{belief}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick facts */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-stone-100">
        {[
          { label: "Based in", value: "Boston · Beijing · HK" },
          { label: "Role", value: "Co-Founder & COO" },
          { label: "Education", value: "UMN · Duke" },
          { label: "Focus (2026)", value: "Innostim MedTech" },
        ].map((fact) => (
          <div key={fact.label}>
            <p className="text-xs tracking-wider uppercase text-stone-400 mb-1">
              {fact.label}
            </p>
            <p className="text-sm text-stone-700">{fact.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
