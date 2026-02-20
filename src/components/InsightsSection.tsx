import SectionHeader from "./SectionHeader";

// ─── Types ───────────────────────────────────────────────────────────────────

type BaseItem = {
  title: string;
  titleZh?: string;
  date: string;
  lang: "en" | "zh" | "bilingual";
  description: string;
};

type ArticleItem = BaseItem & {
  type: "article";
  link: string;
};

type PdfItem = BaseItem & {
  type: "pdf";
  link: string;
};

type AudioItem = BaseItem & {
  type: "audio";
  mediaUrl: string;
};

type VideoItem = BaseItem & {
  type: "video";
  mediaUrl: string;
};

type InsightItem = ArticleItem | PdfItem | AudioItem | VideoItem;

type Category = {
  label: string;
  items: InsightItem[];
};

// ─── Data ────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    label: "Geopolitics & Civilization",
    items: [
      {
        type: "article",
        title: "CIVIL Model: Capacity, Innovation, Value Integration, Institutional Flexibility, Long-term Resilience",
        titleZh: "CIVIL模型：制度路径、科技主导与产业逻辑的多维竞合分析",
        date: "2025",
        lang: "zh",
        description:
          "A multi-dimensional framework assessing China, the US, the EU, and Russia across five dimensions — from state mobilization capacity to long-term social resilience. Includes bull/bear scenario projections through 2035.",
        link: "/articles/civil-model.html",
      },
      {
        type: "article",
        title: "Nationalism Revival and 21st-Century Civilizational Change",
        titleZh: "从民族主义复兴看21世纪文明结构变迁",
        date: "2025",
        lang: "zh",
        description:
          "An exploration of why the post-Cold War global order is fracturing — why multiculturalism is in retreat, how major powers are retreating into distinct civilizational paths, and what a stable future might require.",
        link: "#",
      },
      {
        type: "article",
        title: "The Chinese Model: Governance and Development Analysis",
        titleZh: "中国模式分析",
        date: "2025",
        lang: "zh",
        description:
          "An analytical breakdown of China's governance model — state mobilization, party-market relations, and long-run sustainability under demographic and geopolitical pressure.",
        link: "#",
      },
      {
        type: "article",
        title: "Taiwan Policy and Identity",
        titleZh: "中国的台湾政策和认同",
        date: "2025",
        lang: "zh",
        description:
          "An examination of China's Taiwan policy from both strategic and identity dimensions — including public sentiment, cross-strait economic interdependence, and the role of great-power competition.",
        link: "#",
      },
      {
        type: "article",
        title: "Greater German Nationalism vs. East Asian Cultural Assimilation",
        titleZh: "大德意志主义和东亚文化同化异同对比",
        date: "2025",
        lang: "zh",
        description:
          "A comparative historical analysis of Pan-German nationalism and East Asian cultural assimilation — asking why unified identity succeeded in some regions and devolved into catastrophe in others.",
        link: "#",
      },
      {
        type: "article",
        title: "Scandinavia: Denmark, Sweden, Norway",
        titleZh: "丹麦、瑞典、挪威",
        date: "2025",
        lang: "zh",
        description:
          "Why didn't Denmark — strategically placed between the North Sea and the Baltic — get absorbed by Germany or Sweden? A deep dive into geopolitical buffering, linguistic divergence, and the Nordic model of governance.",
        link: "#",
      },
    ],
  },
  {
    label: "Business & Global Strategy",
    items: [
      {
        type: "article",
        title: "China's New Age of Discovery: The Going-Out Strategy",
        titleZh: "出海——大航海时代",
        date: "2025",
        lang: "zh",
        description:
          "China's global expansion through the Belt and Road Initiative and industrial \"going-out\" strategy mirrors Europe's Age of Discovery — with strong state will, ideological cohesion, and an ambitious young generation driving the new wave.",
        link: "#",
      },
      {
        type: "article",
        title: "Multi-City Comparison: Where to Live and Build in 2030",
        titleZh: "全球化多地对比",
        date: "2025",
        lang: "zh",
        description:
          "A structured 7-dimension scoring framework comparing Boston, the SF Bay Area, Singapore, Shenzhen, Hong Kong, and European cities — across climate, career opportunity, investment channels, and global connectivity.",
        link: "#",
      },
    ],
  },
  {
    label: "Technology & AI",
    items: [
      {
        type: "video",
        title: "Mastering Your AI Project Workflow",
        titleZh: "AI 高效工作流：提示词工程实用指南",
        date: "2024",
        lang: "bilingual",
        description:
          "A practical guide to AI-native project workflows — covering prompt engineering, iterative refinement, task decomposition, and how to build an AI-augmented personal operating system.",
        mediaUrl: "/media/ai-workflow.mp4",
      },
      {
        type: "pdf",
        title: "The Business of Humanoid Robotics",
        date: "2025",
        lang: "en",
        description:
          "An industry analysis of the humanoid robotics sector — market sizing, leading players (Figure, Boston Dynamics, Agility Robotics), hardware-software moats, and the path to mass deployment.",
        link: "/articles/humanoid-robotics-business.pdf",
      },
      {
        type: "pdf",
        title: "The Human Amplifier",
        date: "2025",
        lang: "en",
        description:
          "A framework for thinking about AI and robotics not as replacements for human labor but as amplifiers — redefining the relationship between cognitive capacity, physical capability, and economic value creation.",
        link: "/articles/human-amplifier.pdf",
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        type: "audio",
        title: "Management Becomes Systems Design",
        date: "2025",
        lang: "en",
        description:
          "In an AI-native era, effective management is less about directing people and more about designing the systems — incentive structures, feedback loops, and information flows — that enable autonomous, high-quality output.",
        mediaUrl: "/media/management-systems-design.m4a",
      },
      {
        type: "pdf",
        title: "Review-Driven Management",
        date: "2025",
        lang: "en",
        description:
          "A framework for structuring performance reviews as the core operating rhythm of a team — how to make feedback specific, actionable, and culturally embedded rather than a periodic HR ritual.",
        link: "/articles/review-driven-management.pdf",
      },
    ],
  },
  {
    label: "Investment & Markets",
    items: [
      {
        type: "pdf",
        title: "Gold Market Analysis",
        date: "Feb 2025",
        lang: "en",
        description:
          "A macro-driven analysis of gold's role as a reserve asset in 2025 — covering central bank accumulation trends, real rate dynamics, dollar weaponization concerns, and the geopolitical premium baked into the price.",
        link: "/articles/gold-report-feb2025.pdf",
      },
      {
        type: "pdf",
        title: "US–China Equity Market",
        date: "2025",
        lang: "en",
        description:
          "A comparative equity market analysis across US and Chinese markets — sector rotation, valuation divergence, earnings expectations, and capital flow implications under ongoing tech decoupling.",
        link: "/articles/us-china-equity.pdf",
      },
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const langLabel: Record<string, string> = {
  en: "EN",
  zh: "中文",
  bilingual: "EN / 中文",
};

function TypeBadge({ type }: { type: InsightItem["type"] }) {
  const map: Record<string, string> = {
    article: "Article",
    pdf: "PDF",
    audio: "Audio",
    video: "Video",
  };
  return (
    <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
      {map[type]}
    </span>
  );
}

function ItemLink({ item }: { item: ArticleItem | PdfItem }) {
  const isExternal = !item.link.startsWith("#");
  return (
    <a
      href={item.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-700 transition-colors mt-2 ${
        item.link === "#" ? "pointer-events-none opacity-40" : ""
      }`}
    >
      {item.link === "#" ? "Coming soon" : item.type === "pdf" ? "Open PDF ↗" : "Read ↗"}
    </a>
  );
}

function InsightCard({ item }: { item: InsightItem }) {
  return (
    <div className="border-b border-stone-100 pb-6 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 mb-1.5">
        <TypeBadge type={item.type} />
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{langLabel[item.lang]}</span>
        <span className="text-stone-200">·</span>
        <span className="text-[10px] text-stone-400">{item.date}</span>
      </div>

      <h3 className="text-sm font-semibold text-stone-800 leading-snug">
        {item.title}
      </h3>
      {item.titleZh && (
        <p className="text-xs text-stone-400 mt-0.5">{item.titleZh}</p>
      )}
      <p className="text-xs text-stone-500 leading-relaxed mt-2">
        {item.description}
      </p>

      {/* Embedded Video */}
      {item.type === "video" && (
        <div className="mt-4 rounded-sm overflow-hidden border border-stone-200">
          <video
            controls
            preload="metadata"
            className="w-full max-h-64 bg-stone-900"
          >
            <source src={item.mediaUrl} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>
      )}

      {/* Embedded Audio */}
      {item.type === "audio" && (
        <div className="mt-3">
          <audio controls preload="metadata" className="w-full h-9">
            <source src={item.mediaUrl} type="audio/mp4" />
            Your browser does not support audio playback.
          </audio>
        </div>
      )}

      {/* Link for article / pdf */}
      {(item.type === "article" || item.type === "pdf") && (
        <ItemLink item={item} />
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function InsightsSection() {
  return (
    <section className="py-12">
      <SectionHeader
        label="Insights"
        description="Research, frameworks, and analysis across geopolitics, technology, business, and markets."
      />

      <div className="space-y-10">
        {categories.map((cat) => (
          <div key={cat.label}>
            <p className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mb-4 border-b border-stone-100 pb-2">
              {cat.label}
            </p>
            <div className="space-y-6">
              {cat.items.map((item) => (
                <InsightCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
