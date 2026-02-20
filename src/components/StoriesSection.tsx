"use client";

import { useState } from "react";
import Link from "next/link";
import { stories } from "@/lib/stories";
import SectionHeader from "./SectionHeader";

const langLabel: Record<string, string> = {
  en: "English",
  zh: "中文",
  bilingual: "EN / 中文",
};

const ALL_CATEGORIES = Array.from(new Set(stories.map((s) => s.category)));
const ALL_TAGS = Array.from(new Set(stories.flatMap((s) => s.tags))).sort();

export default function StoriesSection({
  activeCategory,
}: {
  activeCategory?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    activeCategory ?? null
  );
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = stories.filter((s) => {
    if (selectedCategory && s.category !== selectedCategory) return false;
    if (selectedTag && !s.tags.includes(selectedTag)) return false;
    return true;
  });

  // Group by category for display
  const categoriesInView = ALL_CATEGORIES.filter((cat) => {
    if (selectedCategory && cat !== selectedCategory) return false;
    return filtered.some((s) => s.category === cat);
  });

  return (
    <section className="py-12">
      <SectionHeader
        label="Stories"
        description="Personal essays, cultural reflections, and things that stayed with me."
      />

      {/* ── Filters ── */}
      <div className="mb-8 space-y-3">
        {/* Category pills */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`text-[10px] px-2.5 py-1 rounded-full border transition-colors ${
              !selectedCategory
                ? "bg-stone-800 text-white border-stone-800"
                : "border-stone-200 text-stone-500 hover:border-stone-400"
            }`}
          >
            All
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? null : cat)
              }
              className={`text-[10px] px-2.5 py-1 rounded-full border transition-colors ${
                selectedCategory === cat
                  ? "bg-stone-800 text-white border-stone-800"
                  : "border-stone-200 text-stone-500 hover:border-stone-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-1">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`text-[9px] px-1.5 py-0.5 rounded-full border transition-colors ${
                selectedTag === tag
                  ? "bg-stone-600 text-white border-stone-600"
                  : "border-stone-200 text-stone-400 hover:border-stone-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Story list grouped by category ── */}
      {categoriesInView.length === 0 ? (
        <p className="text-sm text-stone-400 py-8 text-center">No stories match this filter.</p>
      ) : (
        <div className="space-y-10">
          {categoriesInView.map((cat) => {
            const catStories = filtered.filter((s) => s.category === cat);
            return (
              <div key={cat} id={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                    {cat}
                  </p>
                  <div className="flex-1 h-px bg-stone-100" />
                  <span className="text-[10px] text-stone-300">
                    {catStories.length} {catStories.length === 1 ? "story" : "stories"}
                  </span>
                </div>

                <div className="space-y-0">
                  {catStories.map((story) => (
                    <Link
                      key={story.slug}
                      href={`/stories/${story.slug}`}
                      className="group flex flex-col gap-1.5 py-4 border-b border-stone-100 last:border-0 hover:bg-stone-50/60 -mx-3 px-3 rounded-sm transition-colors duration-150"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                          Essay
                        </span>
                        <span className="text-stone-200">·</span>
                        <span className="text-[10px] text-stone-400">
                          {langLabel[story.lang]}
                        </span>
                        <span className="text-stone-200">·</span>
                        <span className="text-[10px] text-stone-400">{story.date}</span>
                      </div>

                      <h2 className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-stone-600 transition-colors">
                        {story.title}
                      </h2>
                      {story.titleZh && story.titleZh !== story.title && (
                        <p className="text-xs text-stone-400 leading-snug">{story.titleZh}</p>
                      )}

                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                        {story.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-0.5">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] px-1.5 py-0.5 rounded-full border border-stone-200 text-stone-400 bg-stone-50 leading-none"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs text-stone-400 group-hover:text-stone-600 transition-colors mt-0.5">
                        Read →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
