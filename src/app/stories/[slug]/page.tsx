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
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-stone-400 border border-stone-200 px-2 py-0.5 rounded-full">
            {story.category}
          </span>
          <span className="text-xs text-stone-300">·</span>
          <span className="text-xs text-stone-400">{langLabel[story.lang]}</span>
          <span className="text-xs text-stone-300">·</span>
          <span className="text-xs text-stone-400">{story.date}</span>
        </div>
        <h1 className="text-xl font-semibold text-stone-900 leading-snug mb-2">
          {story.title}
        </h1>
        {story.titleZh && story.lang === "bilingual" && (
          <p className="text-sm text-stone-400">{story.titleZh}</p>
        )}
      </header>

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
