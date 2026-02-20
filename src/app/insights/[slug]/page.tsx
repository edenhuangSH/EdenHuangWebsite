import { getInsightArticle, insightArticles } from "@/lib/insights-articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) return { title: "Not Found — Eden Huang" };
  return {
    title: `${article.titleZh ?? article.title} — Eden Huang`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  return insightArticles.map((a) => ({ slug: a.slug }));
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightArticle(slug);
  if (!article) notFound();

  return (
    <article className="py-12">
      {/* Back */}
      <Link
        href="/insights"
        className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors mb-10"
      >
        ← Insights
      </Link>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
          {article.category}
        </span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{article.date}</span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">
          {article.lang === "zh" ? "中文" : article.lang === "bilingual" ? "EN / 中文" : "EN"}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-stone-800 leading-snug mb-2">
        {article.title}
      </h1>
      {article.titleZh && article.titleZh !== article.title && (
        <p className="text-base text-stone-500 mb-4">{article.titleZh}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-8">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-0.5 rounded-full border border-stone-200 text-stone-500 bg-stone-50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Excerpt */}
      <p className="text-sm text-stone-500 leading-relaxed border-l-2 border-stone-200 pl-4 mb-10 italic">
        {article.excerpt}
      </p>

      {/* Content */}
      <div className="space-y-8">
        {article.content.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="text-base font-semibold text-stone-800 mb-3">
                {section.heading}
              </h2>
            )}
            <div
              className="prose-insight text-sm text-stone-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
          </div>
        ))}
      </div>
    </article>
  );
}
