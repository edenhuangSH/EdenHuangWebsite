import SectionHeader from "./SectionHeader";

const stories = [
  {
    title: "Story or Article Title",
    category: "Essay",
    date: "Feb 2026",
    excerpt:
      "The opening line or a compelling excerpt from your story. Make the reader want to continue...",
    link: "#",
    readTime: "5 min read",
  },
  {
    title: "A Reflection on Something",
    category: "Reflection",
    date: "Jan 2026",
    excerpt:
      "A thought, memory, or experience you've distilled into words. Personal writing that feels true.",
    link: "#",
    readTime: "3 min read",
  },
  {
    title: "Notes on a Journey",
    category: "Travel",
    date: "Nov 2025",
    excerpt:
      "What you saw, what surprised you, what stayed with you long after you returned.",
    link: "#",
    readTime: "7 min read",
  },
];

export default function StoriesSection() {
  return (
    <section className="pb-16">
      <SectionHeader
        label="Stories"
        description="Articles, essays, and stories I want to share — experiences and ideas worth putting into words."
      />
      <div className="grid gap-6">
        {stories.map((story) => (
          <a
            key={story.title}
            href={story.link}
            className="group block"
          >
            <div className="border-l-2 border-stone-200 group-hover:border-stone-500 pl-5 transition-colors duration-300">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                  {story.category}
                </span>
                <span className="text-xs text-stone-300">·</span>
                <span className="text-xs text-stone-400">{story.date}</span>
                <span className="text-xs text-stone-300">·</span>
                <span className="text-xs text-stone-400">{story.readTime}</span>
              </div>
              <h3 className="text-sm font-medium text-stone-800 group-hover:text-stone-900 mb-2 transition-colors">
                {story.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{story.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
