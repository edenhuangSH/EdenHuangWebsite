import Link from "next/link";
import { stories } from "@/lib/stories";
import SectionHeader from "./SectionHeader";

const langLabel: Record<string, string> = {
  en: "English",
  zh: "中文",
  bilingual: "EN / 中文",
};

export default function StoriesSection() {
  return (
    <section className="py-12">
      <SectionHeader
        label="Stories"
        description="Personal essays, cultural reflections, and things that stayed with me."
      />

      <div className="space-y-6">
        {stories.map((story) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="group block border border-stone-200 rounded-sm p-5 bg-white hover:border-stone-400 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                {story.category}
              </span>
              <span className="text-stone-200">·</span>
              <span className="text-[10px] text-stone-400">{langLabel[story.lang]}</span>
              <span className="text-stone-200">·</span>
              <span className="text-[10px] text-stone-400">{story.date}</span>
            </div>

            <h2 className="text-sm font-semibold text-stone-800 mb-1.5 group-hover:text-stone-600 transition-colors">
              {story.title}
              {story.titleZh && story.lang === "zh" && (
                <></>
              )}
            </h2>
            {story.titleZh && story.lang === "bilingual" && (
              <p className="text-xs text-stone-400 mb-2">{story.titleZh}</p>
            )}

            <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
              {story.excerpt}
            </p>

            <span className="inline-flex items-center gap-1 mt-3 text-xs text-stone-400 group-hover:text-stone-600 transition-colors">
              Read
              <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
