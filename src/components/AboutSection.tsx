import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section className="pb-16">
      <SectionHeader label="About Me" />
      <div className="max-w-prose space-y-5 text-sm text-stone-600 leading-loose">
        <p>
          Hi, I&apos;m Eden Huang. [Write a short introduction about yourself here —
          your background, what you work on, and what drives you.]
        </p>
        <p>
          [A second paragraph about your interests, experience, or perspective.
          What fields are you curious about? What problems are you trying to
          solve?]
        </p>
        <p>
          [Optional: Where you are now — current role, location, or what
          you&apos;re currently focused on.]
        </p>
      </div>

      {/* Quick facts */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
        {[
          { label: "Based in", value: "—" },
          { label: "Currently", value: "—" },
          { label: "Interested in", value: "—" },
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
