export type InsightArticle = {
  slug: string;
  title: string;
  titleZh?: string;
  date: string;
  lang: "en" | "zh" | "bilingual";
  tags: string[];
  category: string;
  excerpt: string;
  content: { heading?: string; body: string }[];
  /** Relative path inside /public — if set, the page renders this HTML file instead of content[] */
  htmlFile?: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "civil-model",
    title: "The CIVIL Model: A Multi-Dimensional Analysis of Institutional Paths",
    titleZh: "CIVIL模型：制度路径、科技主导与产业逻辑的多维竞合分析",
    date: "2025",
    lang: "zh",
    tags: ["Geopolitics", "China", "US", "EU", "Frameworks"],
    category: "Geopolitics & Civilization",
    excerpt: "A multi-dimensional framework assessing China, the US, the EU, and Russia across five dimensions — from state mobilization capacity to long-term social resilience. Includes bull/bear scenario projections through 2035.",
    htmlFile: "articles/civil-model.html",
    content: [],
  },
  {
    slug: "nationalism-revival-civilization",
    title: "Nationalism Revival and 21st-Century Civilizational Change",
    titleZh: "从民族主义复兴看21世纪文明结构变迁",
    date: "2025",
    lang: "zh",
    tags: ["Geopolitics", "Nationalism", "Globalization", "China", "US", "Russia"],
    category: "Geopolitics & Civilization",
    excerpt: "An exploration of why the post-Cold War global order is fracturing — why multiculturalism is in retreat, how major powers are retreating into distinct civilizational paths, and what a stable future might require.",
    content: [
      {
        body: `<p>这篇分析是对21世纪民族主义复兴现象的综合性诊断。将全球化秩序的困境、多元文化主义的退潮、民族国家的回潮、以及中美俄三国的竞争格局交织在一起，精准地抓住了当下世界的结构性张力。</p>`,
      },
      {
        heading: "一、民族主义复兴：历史钟摆还是结构反弹？",
        body: `<p>答案可能是：两者都有，但更像是"制度重构的阶段性反弹"，而非简单复古。</p>
<p>历史确实有"摆荡"，例如19世纪民族主义→两次世界大战→冷战后全球化→今日民族主义回潮。但重要的是——这个摆动轨迹是在"更高的台阶"上进行的，并非返回原地，而是在结构重构中的震荡。</p>
<p>民族主义回潮，反映的是全球化的"制度赤字"：全球化确实促进了资本、技术和市场的一体化，但它没有同步提供有效的社会治理机制来照顾被边缘化的人群；世界各国的"基层人民"感受到身份失落、文化焦虑、阶级固化，这种不满就被右翼民族主义挪用来煽动"反全球化"的政治动员。</p>`,
      },
      {
        heading: `二、为何欧洲多元文化主义看起来"失败了"？`,
        body: `<p>欧洲强调"多元文化"，但并未在文化治理层面实现深度融合，反而让"身份政治"激化，导致本土居民与移民社群互相排斥；与中国那种"主文化吸纳边文化"的同化型传统不同，欧洲的"并置型多元文化"缺乏凝聚力。</p>
<p>欧盟这套超国家结构本身就过于复杂，民主决策迟缓、难以应对高压对抗环境；在面对中美俄这种"高集权+高动员"的对手时，欧洲制度显得温吞、不成气候。</p>`,
      },
      {
        heading: "三、未来路线选择：融合还是对抗？",
        body: `<p><strong>路线一："世界大同"的理想仍具指引意义。</strong>如果要实现长期和平，多元文化+制度共存+市场整合的方向仍是文明演化的长线。</p>
<p><strong>路线二："民族国家+文明竞争"可能是现实中不可避免的阶段。</strong>现代的强国（中美俄）实际都是强政府+民族认同+制度独特性强，他们不会自愿进入"全球一体治理"。</p>
<p><strong>路线三：新融合模型或将诞生——"强主权+多元融合"的混合型国家。</strong>未来最有竞争力的制度，可能是那种既能动员民族精神，又能吸纳多元文化与创新力量的混合型政体。</p>`,
      },
      {
        heading: "四、三大文明路径的科技与产业潜力比较",
        body: `<table>
<thead><tr><th>项目</th><th>中国</th><th>美国</th><th>欧盟</th></tr></thead>
<tbody>
<tr><td>科技主导模式</td><td>政府主导+政策驱动</td><td>市场主导+科技资本整合</td><td>政策愿景主导但执行力弱</td></tr>
<tr><td>产业升级方式</td><td>国家级规划+龙头带动</td><td>科创平台+独角兽孵化</td><td>环保主导+协同制造</td></tr>
<tr><td>科技前沿突破</td><td>新能源、通信、制造、AI</td><td>半导体、生物科技、AI、航天</td><td>氢能、绿色科技、基础科研</td></tr>
</tbody>
</table>`,
      },
      {
        heading: "结语：我们走在什么路上？",
        body: `<p>从历史观角度看，我们不是在"错误的道路"上，而是在文明转型期中的制度竞逐。全球化与多元文化主义并未失败，只是它们还未发展出成熟的"治理模型"来驾驭社会裂缝。</p>
<p>真正的挑战在于，如何在民族主权与全球整合之间，找到真正可持续的平衡点。</p>`,
      },
    ],
  },
  {
    slug: "chinese-model-analysis",
    title: "The Chinese Model: Governance and Development Analysis",
    titleZh: "中国模式分析",
    date: "2025",
    lang: "zh",
    tags: ["China", "Governance", "Political Economy", "Geopolitics"],
    category: "Geopolitics & Civilization",
    excerpt: "An analytical breakdown of China's governance model — state mobilization, party-market relations, and long-run sustainability under demographic and geopolitical pressure.",
    content: [
      {
        body: `<p>中国在过去十年里，确实在国内和国际两个层面同时推进一套与传统西方模式不同的发展路径。从"一带一路"倡议到"人类命运共同体"，再到国内的"高压维稳"和"中国式现代化"，这套战略展示了一种试图超越西方模式的雄心。</p>`,
      },
      {
        heading: "一、中国式现代化的战略特点",
        body: `<p><strong>国内层面：高压维稳与统一价值观</strong></p>
<p>强化中央权力：习近平执政十年间，党政军全面加强中央集权，确保政治上的高度统一。推进国家资本主义：通过强化国企、限制民企，政府在资源分配中的主导作用更加明显。</p>
<p><strong>国际层面：区域合作与规则重塑</strong></p>
<p>"一带一路"：通过基础设施建设、能源项目和经贸合作，加强与亚非拉发展中国家的联系。去美元化与经济联盟：与多国推进本币结算，试图削弱美元在国际贸易和金融中的垄断地位。</p>`,
      },
      {
        heading: "二、策略面临的瓶颈",
        body: `<p><strong>国内：经济增长放缓与社会隐忧</strong></p>
<p>人口红利消失：人口老龄化和少子化问题正在侵蚀中国的长期经济增长潜力。高压政策虽然维稳，但也让社会创新和活力受到抑制。</p>
<p><strong>国际：外交孤立与项目可持续性</strong></p>
<p>"一带一路"债务陷阱质疑：部分项目因融资问题或不透明合同遭到批评。地缘政治对抗升级：随着美国"印太战略"的推进，中国在东南亚和太平洋地区面临更强的美国联盟网络。</p>`,
      },
      {
        heading: "三、政治挂帅与人治带来的系统性问题",
        body: `<p><strong>一言堂与从上而下的决策模式</strong></p>
<p>中国的政治体制强调自上而下的决策模式，领导层制定"大方向"，下面的各级机构负责执行。虽然这种模式在短期内高效，但也非常容易导致"上行下效"的问题。政策执行中的"一刀切"现象：由于地方官员的主要考核指标是服从与执行，很多基层有能力和创造力的人被迫迎合上层意志，而非基于实际情况因地制宜。</p>
<p><strong>高压治理的"wishful thinking"</strong></p>
<p>高压治理看似可以在短期内保持"稳定"，但实际上只是一种延迟问题爆发的策略。历史经验表明，压制社会的多样性和活力最终只会带来内部的不满累积。社会稳定的基础在于公平与信任：通过高压手段塑造的稳定是脆弱的，真正的稳定应该建立在民众对制度的公平性和社会信任的基础上。</p>`,
      },
      {
        heading: "四、中国目前面临的最大挑战",
        body: `<p><strong>信息闭塞与决策的失真</strong></p>
<p>中国的政治体系和宣传体系现在存在很大的信息闭塞问题。领导层往往只能听到自己想听的内容，而真实的信息和基层的声音却无法传递到上层。</p>
<p><strong>社会信任的断裂</strong></p>
<p>中国目前最大的危机不是外部的地缘政治压力，而是内部社会信任的断裂。从普通民众对精英阶层的不满，到年轻人对未来的失望，再到国际社会对中国的疑虑，这些信任的断裂可能成为中国长期发展的最大阻碍。</p>`,
      },
    ],
  },
  {
    slug: "taiwan-policy-identity",
    title: "Taiwan Policy and Identity",
    titleZh: "中国的台湾政策和认同",
    date: "2025",
    lang: "zh",
    tags: ["Geopolitics", "Taiwan", "China", "Democracy", "Identity"],
    category: "Geopolitics & Civilization",
    excerpt: "An examination of China's Taiwan policy from both strategic and identity dimensions — including public sentiment, cross-strait economic interdependence, and the role of great-power competition.",
    content: [
      {
        body: `<p>这篇论述展现了一个深入思考两岸关系、文化多样性和普世价值观的立场，并将重点放在法理依据和情感层面的分析上，提供了支持台湾民主自由和自主性的系统性理由。</p>`,
      },
      {
        heading: "一、法理依据的分析",
        body: `<p><strong>历史与主权现实</strong></p>
<p>论述清晰地说明了台湾实际独立运行的政体现状，基于历史、现实和法律文本的局限性剖析中国政府的主张，指出其国际法依据薄弱。</p>
<p><strong>民主化成就与民族自决原则</strong></p>
<p>结合台湾民主宪政的成熟与国际法中的民族自决权，说明台湾人民享有决定未来的正当性和合法性。这部分强化了对台湾作为一个实质独立政体的论证。</p>`,
      },
      {
        heading: "二、大陆的反击逻辑与回应",
        body: `<p><strong>关于国际视角的"双标"与地缘政治棋子论</strong></p>
<p>大陆观点：西方国家在苏格兰、加泰罗尼亚问题上并未支持其独立，却对台湾采取"双标"。<br/>
回应：台湾的独立性并不是"争取自治"，而是已经实现的事实独立（de facto independence）。西方并未正式承认台湾独立，且大多遵循"一中政策"，并非大陆所描述的"赤裸裸双标"。</p>
<p><strong>关于民族自决应由全体中国人决定</strong></p>
<p>大陆观点：台湾问题应该包含全体中国人民的意见。<br/>
回应：民族自决原则强调的是受影响的民族群体。台湾自1949年以来实际独立运行，其人民拥有独立的政府和生活方式，因此民族自决的主体应是台湾人民，而非整个中国。</p>`,
      },
      {
        heading: "三、信息封闭与认知差距",
        body: `<p>大陆对台湾的基本情况缺乏普及性教育，例如台湾的历史、地理、族群、政治制度等，这不仅导致民众对于台湾的实际情况有误解，还延续了一些过时甚至错误的认知框架。</p>
<p>大陆高度信息管控的结果，通过筛选和有选择性的引用台湾政治言论，只呈现对自己叙事有利的信息。同时，用社论批驳和标签化的方式，试图将台湾描绘成"对立面"，强化了大陆民众对台湾的负面刻板印象。</p>`,
      },
      {
        heading: "四、开放心态与务实合作",
        body: `<p>如果大陆以更开放的心态与台湾相处，减少民族主义情绪，转而推动务实的交流，可能会创造更多的理解和信任基础。</p>
<p>德国和奥地利、美国和加拿大的例子非常有启发性。即使语言、文化相似，它们仍能作为独立国家共存并形成深度合作。大陆与台湾完全可以在双方承认差异的前提下，追求双赢的务实关系。</p>`,
      },
    ],
  },
  {
    slug: "pan-german-east-asian-assimilation",
    title: "Pan-German Nationalism vs. East Asian Cultural Assimilation",
    titleZh: "大德意志主义和东亚文化同化异同对比",
    date: "2025",
    lang: "zh",
    tags: ["Geopolitics", "History", "Nationalism", "East Asia", "Germany"],
    category: "Geopolitics & Civilization",
    excerpt: "A comparative historical analysis of Pan-German nationalism and East Asian cultural assimilation — asking why unified identity succeeded in some regions and devolved into catastrophe in others.",
    content: [
      {
        body: `<p>站在历史结构主义或民族主义视角，"大德意志主义"并非空穴来风，也不是仅仅源于个人疯狂，而是承载了很深的地缘政治逻辑与历史文化动因。本文将"逻辑合理性"与"现实恶果"区分清楚，看出为什么它在当时会有吸引力，但又为何最终走向灾难。</p>`,
      },
      {
        heading: `一、德意志民族的"被历史错过了统一的时机"`,
        body: `<p>长期作为神圣罗马帝国（962–1806）的"碎片联邦"，内部藩王割据，受教会和贵族制衡，错过了民族国家形成的黄金期（16-18世纪）。法国、英国、西班牙早已建立中央集权国家，德意志却还在打"三十年战争"、分封林立。到19世纪俾斯麦统一德意志（1871），已是民族国家浪潮的"末班车"。</p>`,
      },
      {
        heading: `二、希特勒思想的"历史逻辑" vs. "现实扭曲"`,
        body: `<p>如果要继承神圣罗马帝国的"德意志正统"，那奥地利、捷克、波兰、甚至北欧都有一定"潜在融合空间"。这在思想上确实有它的系统性。</p>
<p>但问题在于：他采用的是极端种族主义+军事征服+排他式同化；对犹太人、斯拉夫人等少数族群不仅排除，而且"消灭"；他没有建立"融合帝国"，而是试图通过"种族净化"建立一元化的国家。</p>
<p>相比之下，中华帝国的统一是"文化同化+多族群协同治理"，虽然也带有强权色彩，但远比纳粹式排他模式"柔和"得多。</p>`,
      },
      {
        heading: `三、为什么"文化同化"在亚洲更容易成功？`,
        body: `<p><strong>文明轴心早期统一叙事——中国的"天下观"</strong></p>
<p>东亚文化圈早在春秋战国时期就提出"天下"概念，强调"王道"统一天下。中华文明强调"文化即政治"——谁掌握儒家礼制、正音正书、制度典范，谁就是"正统王朝"，这种逻辑天然利于文化同化。</p>
<p><strong>汉字书写系统与行政文化的稳固</strong></p>
<p>汉字是表意系统，相较于拼音语言更容易跨方言传播，增强了文化连贯性。中央官僚制、科举制、律令体系的渗透，使得边疆精英也趋于文化认同，而不是民族割裂。</p>`,
      },
      {
        heading: "四、德意志一体化与中华帝国大一统的底层结构比较",
        body: `<table>
<thead><tr><th>对比维度</th><th>中华帝国大一统</th><th>德意志一体化</th></tr></thead>
<tbody>
<tr><td>核心理念</td><td>天下、文化正统</td><td>民族、血缘统一</td></tr>
<tr><td>同化机制</td><td>文化/行政汉化</td><td>语言/种族认同</td></tr>
<tr><td>地缘结构</td><td>相对闭合、易整合</td><td>四面受压、易分裂</td></tr>
<tr><td>统一路径</td><td>官僚体制、文化吸纳</td><td>军事扩张、民族动员</td></tr>
<tr><td>成果稳定性</td><td>长期稳定（朝代更替但框架不崩）</td><td>短暂统一，常被外部重塑</td></tr>
</tbody>
</table>
<p>简言之：中华帝国统一靠的是一种"文明逻辑"与"文化融合+权力整合"的柔性方式；而德意志一体化是"民族逻辑"的极端推演，更容易因排他性与扩张性而引发战争。</p>`,
      },
    ],
  },
  {
    slug: "scandinavia-languages",
    title: "Scandinavia: Why Didn't Denmark, Sweden, and Norway Unify?",
    titleZh: "丹麦、瑞典、挪威：为何没统一语言？",
    date: "2025",
    lang: "zh",
    tags: ["History", "Geopolitics", "Europe", "Linguistics", "Identity"],
    category: "Geopolitics & Civilization",
    excerpt: "Why didn't Denmark — strategically placed between the North Sea and the Baltic — get absorbed by Germany or Sweden? A deep dive into geopolitical buffering, linguistic divergence, and the Nordic model of governance.",
    content: [
      {
        body: `<p>丹麦确实地理位置极其重要，控制着北海和波罗的海之间的出入口——厄勒海峡和丹麦海峡，历史上确实多次卷入强权争夺，比如德国、瑞典甚至更早期的英国和法国都对它虎视眈眈。那为什么丹麦没有被彻底吞并呢？</p>`,
      },
      {
        heading: "一、历史上的强大与先发优势",
        body: `<p>丹麦在中世纪和近代早期其实曾经是北欧霸主之一：它曾控制整个斯堪的纳维亚（丹麦、挪威、瑞典）——比如卡尔玛联盟（1397-1523），曾试图统一北欧；它也长期控制着挪威、冰岛、格陵兰、法罗群岛等地；它曾在17世纪前期与瑞典争夺波罗的海霸权。换句话说，丹麦不是个弱国，而是一个曾经的大国，只是在近现代相对衰落了。</p>`,
      },
      {
        heading: "二、地缘政治缓冲与平衡",
        body: `<p>丹麦在地理上位于北欧和德意志之间，常被大国当作缓冲区。大国之间会维持一个"相对独立但不中立的丹麦"更符合利益。比如：英国、法国、俄国过去常常利用丹麦来制衡德国或瑞典。二战时德国确实占领了丹麦（1940-1945），但只是军事占领而非正式吞并，战后恢复独立。</p>`,
      },
      {
        heading: "三、丹麦、瑞典、挪威：为何没统一语言？",
        body: `<p>这三国语言其实都属于北日耳曼语支（斯堪的纳维亚语群），有点像中文的粤语、闽南语、吴语——听得懂一部分，但各自写法和口音差异大到不能完全通用。</p>
<p><strong>地理隔阂造成语言演化分化：</strong>斯堪的纳维亚半岛地形复杂，山高水远，村落分散，各地语言在中世纪逐渐分化。</p>
<p><strong>中世纪各国王权独立：</strong>虽有短暂的卡尔玛联盟（1397-1523）试图统一三国，但联盟松散且不持久。</p>
<p><strong>书面语受到不同方向影响：</strong>丹麦语受到德语影响更重；挪威语有两种书写标准（Bokmål和Nynorsk）；瑞典语则相对自成一派，独立发展。</p>`,
      },
      {
        heading: "四、芬兰：为何语言更独立、文化更特殊？",
        body: `<p>芬兰在北欧语言体系中完全是个"异类"。芬兰语不是日耳曼语，而是芬兰-乌戈尔语系，与匈牙利语、爱沙尼亚语亲缘更近，和瑞典语、丹麦语、挪威语完全不同。</p>
<p>芬兰历史上长期是瑞典的附属地，从13世纪起被瑞典统治长达600多年。1809年被沙俄吞并，成为"芬兰大公国"。在沙俄统治下，芬兰人开始强调自己语言与文化的独特性，对抗瑞典和俄国的同化，这让芬兰语在19世纪成功"复兴"，成为国家语言、民族认同核心。</p>`,
      },
    ],
  },
  {
    slug: "china-going-out-strategy",
    title: "China's New Age of Discovery: The Going-Out Strategy",
    titleZh: `中国的"新大航海时代"：从历史回声到全球化反思`,
    date: "2025",
    lang: "zh",
    tags: ["China", "Globalization", "Belt and Road", "Business Strategy", "History"],
    category: "Business & Global Strategy",
    excerpt: "China's global expansion through the Belt and Road Initiative and industrial \"going-out\" strategy mirrors Europe's Age of Discovery — with strong state will, ideological cohesion, and an ambitious young generation driving the new wave.",
    content: [
      {
        body: `<p>高度总结当代中国正处于一个类似欧洲大航海时代的全球经济扩张阶段。在美国孤立主义政策的外部压力下，中国凭借强大的生产力和高效的中央政府，通过"一带一路"倡议和产业"出海"战略，逐步重塑全球经济版图。</p>`,
      },
      {
        heading: "一、分析框架：新时代出海与大航海时代的特征对比",
        body: `<p><strong>外部驱动与内在需求</strong></p>
<p>大航海时代：欧洲因奥斯曼帝国封锁传统贸易路线，寻求新市场与资源。中国现状：美国通过高关税、技术封锁等手段限制中国，迫使中国企业探索海外市场。</p>
<p><strong>强权与集中</strong></p>
<p>大航海时代：英国、西班牙、荷兰等依赖强大的中央王权，推动远洋贸易和殖民扩张。中国现状：强有力的政府通过政策统一部署"一带一路"等战略性项目，协调内外资源。</p>
<p><strong>意识形态的凝聚力</strong></p>
<p>大航海时代：通过宗教信仰（基督教）凝聚内部力量，并向外传播文化。中国现状：通过社会主义核心价值观和文化输出，增强国内社会稳定，并为产业"出海"提供精神支持。</p>`,
      },
      {
        heading: "二、文化输出的多样化与全球化渗透",
        body: `<p><strong>短视频的文化渗透</strong></p>
<p>TikTok是中国文化输出的核心代表，2023年全球月活跃用户数突破15亿，其中东南亚市场贡献了超过30%的用户增长。</p>
<p><strong>游戏产业的强劲表现</strong></p>
<p>《黑神话：悟空》作为中国游戏技术与文化结合的代表性作品，在全球引发高度关注。2023年，中国游戏出海收入达218亿美元，同比增长10%。</p>
<p><strong>产业升级：新能源与制造业全球领先</strong></p>
<p>中国的光伏、风电和新能源汽车出口在全球占据主导地位。2023年，中国新能源汽车出口突破100万辆，同比增长超过100%；光伏组件出口占全球市场的70%。</p>`,
      },
      {
        heading: "三、历史启示与未来展望",
        body: `<p>历史表明，经济和社会的剧烈变革时期常需要强大的中央政府。从大航海时代到工业革命，虽然催生了经济繁荣和技术突破，但普通人往往难以真正受益，甚至成为代价的承担者。</p>
<p>面对当前的全球化布局，中国不仅需要学习欧洲产业扩张的成功经验，更应警惕重复历史的错误，通过平衡内外政策，为全体人民创造可持续的繁荣。</p>`,
      },
    ],
  },
  {
    slug: "global-city-comparison-2030",
    title: "Multi-City Comparison: Where to Live and Build in 2030",
    titleZh: "全球化多地对比",
    date: "2025",
    lang: "zh",
    tags: ["Globalization", "Cities", "Lifestyle", "Investment", "Strategy"],
    category: "Business & Global Strategy",
    excerpt: "A structured 7-dimension scoring framework comparing Boston, the SF Bay Area, Singapore, Shenzhen, Hong Kong, and European cities — across climate, career opportunity, investment channels, and global connectivity.",
    content: [
      {
        body: `<p>2030年：对波士顿、湾区、新加坡、深圳等地的气候、健康、便利性、国际化、职业发展、投资渠道及便捷性进行综合评分预测。</p>`,
      },
      {
        heading: "评价维度与权重",
        body: `<ul>
<li><strong>气候与环境（10%）</strong>：整体居住舒适度，包括温度、湿度、空气质量及极端天气影响。</li>
<li><strong>健康风险（10%）</strong>：环境因素对健康的潜在威胁，如UV指数、空气污染、慢性病风险。</li>
<li><strong>生活便利程度（20%）</strong>：包括城市基础设施（如公共交通、医疗）、数字化服务及日常便利性。</li>
<li><strong>国际化与多元文化体验（20%）</strong>：语言环境、文化包容性、国际社区活跃程度。</li>
<li><strong>职业发展与经济机会（20%）</strong>：包括产业多样性、职业发展潜力、创新氛围和经济机会。</li>
<li><strong>投资渠道与财富增值（10%）</strong>：房地产市场、金融投资机会、税务优化及资产管理灵活性。</li>
<li><strong>地理位置及便捷性（10%）</strong>：城市在全球及区域网络中的位置。</li>
</ul>`,
      },
      {
        heading: "综合评分预测（2030年）",
        body: `<table>
<thead><tr><th>城市</th><th>综合评分（2030年）</th><th>优势</th><th>挑战</th></tr></thead>
<tbody>
<tr><td>湾区</td><td>8.5/10</td><td>气候宜人，国际化程度高，职业与创业机会丰富</td><td>高生活成本，山火对空气质量的潜在威胁</td></tr>
<tr><td>新加坡</td><td>8.5/10</td><td>国际化与便利性全球领先，投资与财富增值渠道丰富</td><td>高温高湿气候，生活需适应UV和湿热环境</td></tr>
<tr><td>上海</td><td>7.9/10</td><td>国际化程度高，职业机会多，生活便利性极高</td><td>湿热与湿冷气候挑战，政策限制对外籍人士有一定影响</td></tr>
<tr><td>深圳</td><td>7.8/10</td><td>数字化生活便利性高，职业发展迅速，地理位置优越</td><td>湿热气候适应性差，文化多样性与包容性需提升</td></tr>
<tr><td>波士顿</td><td>7.4/10</td><td>医疗和教育资源一流，气候改善带来健康宜居性提升</td><td>夏季热浪增加，国际化程度不如湾区和新加坡</td></tr>
</tbody>
</table>`,
      },
      {
        heading: "结论与建议",
        body: `<p><strong>最佳选择：湾区与新加坡</strong></p>
<p>湾区：全球科技产业和多元文化的顶级选择，适合职业发展与国际化需求。新加坡：便捷的全球连通性、多元文化和投资优势，使其成为亚洲最佳基地。</p>
<p><strong>次佳选择：上海与深圳</strong></p>
<p>上海：中国大陆的核心城市，连通东南亚和欧洲便捷，但需适应湿冷气候和政策限制。深圳：快速发展的科技中心，适合抓住职业和财富积累机会，但国际化体验稍逊。</p>`,
      },
    ],
  },
  {
    slug: "ai-era-talent-cultivation",
    title: "AI Era Talent Cultivation: China, US, and Germany Compared",
    titleZh: "AI时代下中美欧（德国）三大模式培养",
    date: "2025",
    lang: "zh",
    tags: ["AI", "Education", "China", "US", "Germany", "Talent"],
    category: "Technology & AI",
    excerpt: "From education systems, industry integration, skill structures, and social environments — a systematic comparison of China, the US, and Germany's talent cultivation models in the AI era.",
    content: [
      {
        body: `<p>从教育体系、产业融合、技能结构、社会环境四个维度，系统对比中美欧（德国）在AI时代下的人才培养模式。</p>`,
      },
      {
        heading: "一、不同维度下的对比分析",
        body: `<table>
<thead><tr><th>维度</th><th>中国</th><th>美国</th><th>德国</th></tr></thead>
<tbody>
<tr><td>教育体系</td><td>强调统一标准，基础扎实、注重考试成绩，但实践导向不足，批判思维相对缺乏</td><td>多元开放，注重个性化、批判性思维和创造力培养，理论与实践结合度高</td><td>注重"双元制"教育，实践与理论并重，工程类与职业教育结合紧密</td></tr>
<tr><td>产业融合</td><td>产教融合近年快速推进，政府支持力度大，但企业自主创新能力参差不齐</td><td>产学研高度融合，尤其在硅谷等创新生态突出，科研成果迅速产业化</td><td>传统制造业基础雄厚，"工业4.0"推动AI与制造业高度融合</td></tr>
<tr><td>技能结构</td><td>偏理论型、通识性强，数学与计算机基础扎实，但跨领域整合能力相对弱</td><td>偏创新型，强调跨学科整合，软技能、领导力和沟通表达突出</td><td>偏技术与应用型，工程与技术实现能力强，但创新创业技能培养不足</td></tr>
<tr><td>社会环境</td><td>内卷化明显，教育竞争压力大，创新意识和风险承受能力不足</td><td>鼓励冒险、创业文化浓厚，创新人才更容易脱颖而出，但社会不平等显著</td><td>社会稳定、职业发展路径明确，但整体社会氛围偏保守，风险承担意愿低</td></tr>
</tbody>
</table>`,
      },
      {
        heading: "二、结论",
        body: `<p>如果要培养全球领先的AI理论与创新人才，<strong>美国模式最佳</strong>；如果要培养AI时代最优秀的工业技术和应用型人才，<strong>德国模式更优</strong>；如果要大规模培养扎实基础与普及型技术人才，<strong>中国模式更具优势</strong>，但仍需优化跨学科与创新能力的培养体系。</p>`,
      },
    ],
  },
  {
    slug: "china-regional-languages",
    title: "China's Regional Languages: The Role of Chinese Characters in Unification",
    titleZh: "中国地区语言：汉字在国家统一中的作用",
    date: "2025",
    lang: "zh",
    tags: ["China", "Linguistics", "Culture", "History", "Identity"],
    category: "Geopolitics & Civilization",
    excerpt: "An exploration of the vast differences between Mandarin, Cantonese, Shanghainese, and Hokkien — and how Chinese characters served as the invisible glue holding a linguistically diverse civilization together.",
    content: [
      {
        body: `<p>闽南话和普通话之间的差距确实非常大，甚至可以说接近欧洲不同同语系语言之间的差距，比如法语和意大利语、德语和荷兰语之间的关系。</p>`,
      },
      {
        heading: "一、闽南话和普通话的语言差异",
        body: `<p><strong>语音系统差异</strong></p>
<p>普通话有四个声调，而闽南话有七到八个声调，且声调的使用规则和调值完全不同。如果两个人分别只会讲普通话和闽南话，即便是同一句话，彼此的语音几乎完全无法辨识。</p>
<p><strong>词汇差异</strong></p>
<p>虽然两者共享许多汉语核心词汇，但闽南话保留了更多古汉语词汇和表达方式，也有许多独特的本地词汇，普通话使用者可能完全无法理解。</p>`,
      },
      {
        heading: `二、中文文字作为"统一媒介"的作用`,
        body: `<p>如果没有汉字作为载体，普通话和闽南话的互通性将显著下降。汉字为闽南话和普通话提供了一种共同的"书面表达"体系，但在实际口语交流中，汉字无法弥合语音和语法的巨大差异。</p>
<p>如果将汉字改为拉丁文字记录语音，闽南话和普通话几乎可以被视为完全不同的语言。</p>`,
      },
      {
        heading: "三、没有汉字时的可能局面",
        body: `<p>如果中国早期没有汉字，而是采用了拼音化文字，今天的吴语、粤语、普通话、闽南话等可能会被认为是不同的语言，而不是"方言"。中国的局面可能会更接近于中世纪欧洲——各地区不仅语言互不相通，还可能形成不同的文化认同、政治体系，甚至国家。</p>
<p>汉字的存在在一定程度上模糊了汉语"方言"之间的独立性，使闽南话等地方语言可以在文字层面与普通话保持统一。这种统一的代价是，方言（语言）的多样性在书面层面上被压缩。</p>`,
      },
    ],
  },
];

export function getInsightArticle(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug);
}

export function getInsightsByCategory(): Record<string, InsightArticle[]> {
  const result: Record<string, InsightArticle[]> = {};
  for (const article of insightArticles) {
    if (!result[article.category]) result[article.category] = [];
    result[article.category].push(article);
  }
  return result;
}
