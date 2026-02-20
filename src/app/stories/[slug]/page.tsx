import { notFound } from "next/navigation";
import Link from "next/link";
import { getStory, stories } from "@/lib/stories";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: `${story.title} — Eden Huang`,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const langLabel: Record<string, string> = {
    en: "English",
    zh: "中文",
    bilingual: "EN / 中文",
  };

  return (
    <article className="pb-16 max-w-2xl">
      {/* Back */}
      <Link
        href="/stories"
        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors mb-10"
      >
        <span>←</span>
        <span>Stories</span>
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
            {story.category}
          </span>
          <span className="text-stone-200">·</span>
          <span className="text-[10px] text-stone-400">{langLabel[story.lang]}</span>
          <span className="text-stone-200">·</span>
          <span className="text-[10px] text-stone-400">{story.date}</span>
        </div>
        <h1 className="text-xl font-semibold text-stone-900 leading-snug mb-2">
          {story.title}
        </h1>
        {story.titleZh && story.titleZh !== story.title && (
          <p className="text-sm text-stone-400 mb-3">{story.titleZh}</p>
        )}
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {story.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] px-1.5 py-0.5 rounded-full border border-stone-200 text-stone-400 bg-stone-50 leading-none"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Excerpt */}
      <p className="text-sm text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-4 mb-10 italic">
        {story.excerpt}
      </p>

      {/* Content */}
      <div className="space-y-8 text-[15px] leading-[1.85] text-stone-600">
        {story.content.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="text-sm font-semibold text-stone-800 mb-3 tracking-wide">
                {section.heading}
              </h2>
            )}
            <div
              className="prose-section"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-stone-100">
        <Link
          href="/stories"
          className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          <span>←</span>
          <span>Back to Stories</span>
        </Link>
      </div>
    </article>
  );
}
