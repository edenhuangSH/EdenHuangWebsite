"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { insightArticles } from "@/lib/insights-articles";

// ─── Static media / PDF items (non-article) ──────────────────────────────────

type MediaItem = {
  title: string;
  titleZh?: string;
  date: string;
  lang: "en" | "zh" | "bilingual";
  tags: string[];
  category: string;
  description: string;
  type: "pdf" | "audio" | "video";
  link?: string;
  mediaUrl?: string;
};

const mediaItems: MediaItem[] = [
  {
    title: "Mastering Your AI Project Workflow",
    titleZh: "AI 高效工作流：提示词工程实用指南",
    date: "2024",
    lang: "bilingual",
    tags: ["AI", "Productivity", "Workflow"],
    category: "Technology & AI",
    description: "A practical guide to AI-native project workflows — covering prompt engineering, iterative refinement, task decomposition, and how to build an AI-augmented personal operating system.",
    type: "video",
    mediaUrl: "/media/ai-workflow.mp4",
  },
  {
    title: "The Business of Humanoid Robotics",
    date: "2025",
    lang: "en",
    tags: ["AI", "Robotics", "Industry Analysis"],
    category: "Technology & AI",
    description: "An industry analysis of the humanoid robotics sector — market sizing, leading players (Figure, Boston Dynamics, Agility Robotics), hardware-software moats, and the path to mass deployment.",
    type: "pdf",
    link: "/articles/humanoid-robotics-business.pdf",
  },
  {
    title: "The Human Amplifier",
    date: "2025",
    lang: "en",
    tags: ["AI", "Philosophy", "Future of Work"],
    category: "Technology & AI",
    description: "A framework for thinking about AI and robotics not as replacements for human labor but as amplifiers — redefining the relationship between cognitive capacity, physical capability, and economic value creation.",
    type: "pdf",
    link: "/articles/human-amplifier.pdf",
  },
  {
    title: "Management Becomes Systems Design",
    date: "2025",
    lang: "en",
    tags: ["Management", "Systems Thinking", "Leadership"],
    category: "Management",
    description: "In an AI-native era, effective management is less about directing people and more about designing the systems — incentive structures, feedback loops, and information flows — that enable autonomous, high-quality output.",
    type: "audio",
    mediaUrl: "/media/management-systems-design.m4a",
  },
  {
    title: "Review-Driven Management",
    date: "2025",
    lang: "en",
    tags: ["Management", "Performance", "Frameworks"],
    category: "Management",
    description: "A framework for structuring performance reviews as the core operating rhythm of a team — how to make feedback specific, actionable, and culturally embedded rather than a periodic HR ritual.",
    type: "pdf",
    link: "/articles/review-driven-management.pdf",
  },
  {
    title: "Gold Market Analysis — Feb 2025",
    date: "Feb 2025",
    lang: "en",
    tags: ["Investment", "Macro", "Gold", "Markets"],
    category: "Investment & Markets",
    description: "A macro-driven analysis of gold's role as a reserve asset in 2025 — covering central bank accumulation trends, real rate dynamics, dollar weaponization concerns, and the geopolitical premium baked into the price.",
    type: "pdf",
    link: "/articles/gold-report-feb2025.pdf",
  },
  {
    title: "US–China Equity Market",
    date: "2025",
    lang: "en",
    tags: ["Investment", "China", "US", "Equity", "Markets"],
    category: "Investment & Markets",
    description: "A comparative equity market analysis across US and Chinese markets — sector rotation, valuation divergence, earnings expectations, and capital flow implications under ongoing tech decoupling.",
    type: "pdf",
    link: "/articles/us-china-equity.pdf",
  },
];

// ─── All categories (ordered) ─────────────────────────────────────────────────

const ALL_CATEGORIES = [
  "Geopolitics & Civilization",
  "Business & Global Strategy",
  "Technology & AI",
  "Management",
  "Investment & Markets",
] as const;

// ─── Helper: collect all unique tags ─────────────────────────────────────────

const allTags = Array.from(
  new Set([
    ...insightArticles.flatMap((a) => a.tags),
    ...mediaItems.flatMap((m) => m.tags),
  ])
).sort();

// ─── Sub-components ───────────────────────────────────────────────────────────

const langLabel: Record<string, string> = {
  en: "EN",
  zh: "中文",
  bilingual: "EN / 中文",
};

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[9px] px-1.5 py-0.5 rounded-full border border-stone-200 text-stone-400 bg-stone-50 leading-none">
      {label}
    </span>
  );
}

function TypeIcon({ type }: { type: "article" | "pdf" | "audio" | "video" }) {
  const icons = { article: "✦", pdf: "↗", audio: "♬", video: "▶" };
  return <span className="text-[10px] text-stone-300 mr-1">{icons[type]}</span>;
}

function ArticleCard({ article }: { article: (typeof insightArticles)[number] }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col gap-1.5 py-4 border-b border-stone-100 last:border-0 hover:bg-stone-50/60 -mx-3 px-3 rounded-sm transition-colors duration-150"
    >
      <div className="flex items-center gap-2">
        <TypeIcon type="article" />
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
          Article
        </span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{langLabel[article.lang]}</span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{article.date}</span>
      </div>

      <h3 className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-stone-600 transition-colors">
        {article.title}
      </h3>
      {article.titleZh && article.titleZh !== article.title && (
        <p className="text-xs text-stone-400 leading-snug">{article.titleZh}</p>
      )}
      <p className="text-xs text-stone-500 leading-relaxed">{article.excerpt}</p>

      <div className="flex flex-wrap gap-1 mt-0.5">
        {article.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      <span className="text-xs text-stone-400 group-hover:text-stone-600 transition-colors mt-0.5">
        Read →
      </span>
    </Link>
  );
}

function MediaCard({ item }: { item: MediaItem }) {
  const isVideo = item.type === "video";
  const isAudio = item.type === "audio";
  const isPdf = item.type === "pdf";

  return (
    <div className="flex flex-col gap-1.5 py-4 border-b border-stone-100 last:border-0">
      <div className="flex items-center gap-2">
        <TypeIcon type={item.type} />
        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
          {item.type.toUpperCase()}
        </span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{langLabel[item.lang]}</span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{item.date}</span>
      </div>

      <h3 className="text-sm font-semibold text-stone-800 leading-snug">
        {item.title}
      </h3>
      {item.titleZh && (
        <p className="text-xs text-stone-400 leading-snug">{item.titleZh}</p>
      )}
      <p className="text-xs text-stone-500 leading-relaxed">{item.description}</p>

      <div className="flex flex-wrap gap-1 mt-0.5">
        {item.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>

      {isVideo && item.mediaUrl && (
        <div className="mt-2 rounded-sm overflow-hidden border border-stone-200">
          <video controls preload="metadata" className="w-full max-h-56 bg-stone-900">
            <source src={item.mediaUrl} type="video/mp4" />
          </video>
        </div>
      )}
      {isAudio && item.mediaUrl && (
        <div className="mt-2">
          <audio controls preload="metadata" className="w-full h-9">
            <source src={item.mediaUrl} type="audio/mp4" />
          </audio>
        </div>
      )}
      {isPdf && item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors mt-0.5"
        >
          Open PDF ↗
        </a>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function InsightsSection({
  activeCategory,
  activeTag,
}: {
  activeCategory?: string;
  activeTag?: string;
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(activeTag ?? null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    activeCategory ?? null
  );

  // Build unified list of items with category
  const filteredArticles = insightArticles.filter((a) => {
    if (selectedCategory && a.category !== selectedCategory) return false;
    if (selectedTag && !a.tags.includes(selectedTag)) return false;
    return true;
  });

  const filteredMedia = mediaItems.filter((m) => {
    if (selectedCategory && m.category !== selectedCategory) return false;
    if (selectedTag && !m.tags.includes(selectedTag)) return false;
    return true;
  });

  // Group by category
  const categoriesInView = ALL_CATEGORIES.filter((cat) => {
    if (selectedCategory && cat !== selectedCategory) return false;
    const hasArticle = filteredArticles.some((a) => a.category === cat);
    const hasMedia = filteredMedia.some((m) => m.category === cat);
    return hasArticle || hasMedia;
  });

  return (
    <section className="py-12">
      <SectionHeader
        label="Insights"
        description="Research, frameworks, and analysis across geopolitics, technology, business, and markets."
      />

      {/* ── Filter bar ── */}
      <div className="mb-8 space-y-3">
        {/* Category filters */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`text-[10px] px-2.5 py-1 rounded-full border transition-colors ${
              !selectedCategory
                ? "bg-stone-800 text-white border-stone-800"
                : "border-stone-200 text-stone-500 hover:border-stone-400"
            }`}
          >
            All Topics
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

        {/* Tag filters */}
        <div className="flex flex-wrap gap-1">
          {allTags.map((tag) => (
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

      {/* ── Content grouped by category ── */}
      {categoriesInView.length === 0 ? (
        <p className="text-sm text-stone-400 py-8 text-center">No items match this filter.</p>
      ) : (
        <div className="space-y-10">
          {categoriesInView.map((cat) => {
            const catArticles = filteredArticles.filter((a) => a.category === cat);
            const catMedia = filteredMedia.filter((m) => m.category === cat);

            return (
              <div key={cat} id={cat}>
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">
                    {cat}
                  </p>
                  <div className="flex-1 h-px bg-stone-100" />
                  <span className="text-[10px] text-stone-300">
                    {catArticles.length + catMedia.length} items
                  </span>
                </div>

                <div>
                  {catArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                  {catMedia.map((item) => (
                    <MediaCard key={item.title} item={item} />
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
