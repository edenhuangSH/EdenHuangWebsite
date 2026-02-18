import SectionHeader from "./SectionHeader";

const insights = [
  {
    title: "Insight Title Here",
    field: "Finance",
    date: "Feb 2026",
    summary:
      "A short summary of the research or observation. What industry trend, data point, or idea are you highlighting?",
    link: "#",
  },
  {
    title: "Another Observation",
    field: "Technology",
    date: "Jan 2026",
    summary:
      "Brief synthesis of what you found interesting about this topic and why it matters across industries.",
    link: "#",
  },
  {
    title: "Market Dynamics",
    field: "Economics",
    date: "Dec 2025",
    summary:
      "Your take on a particular market structure, behavioral trend, or emerging phenomenon worth noting.",
    link: "#",
  },
];

export default function InsightsSection() {
  return (
    <section className="pb-16">
      <SectionHeader
        label="Insights"
        description="Research and observations across industries — patterns worth paying attention to."
      />
      <div className="flex flex-col divide-y divide-stone-100">
        {insights.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="group py-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-stone-50 -mx-2 px-2 rounded transition-colors duration-150"
          >
            <div className="shrink-0 sm:w-28">
              <span className="text-xs text-stone-400">{item.date}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <h3 className="text-sm font-medium text-stone-800 group-hover:text-stone-900">
                  {item.title}
                </h3>
                <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                  {item.field}
                </span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{item.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
