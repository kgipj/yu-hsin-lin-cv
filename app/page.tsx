import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { SiteHeader } from './site-header';

type ExperienceEntry = {
  date: string;
  category: string;
  title: string;
  organization?: string;
  meta?: string;
  bullets?: string[];
};

const research = {
  date: 'Aug. 2026 — Present',
  meta: '新竹 · 人類學',
  title: '國立陽明交通大學人文社會學系 研究獎助生',
  bullets: [
    '研究計畫：「從櫻花蝦到下雜魚：臺灣近海拖網漁業的價值階序與公共性建構」',
    '計畫主持人：吳映青老師',
    '協助系上吳映青教授建置 EndNote 學術書目資料庫，進行書目核對、文獻分類與標籤管理',
    '檢索《臺灣日日新報》，蒐集日治時期蝦米、乾蝦之飲食文化、料理應用與進出口貿易史料',
  ],
};

const experienceGroups: { year: string; entries: ExperienceEntry[] }[] = [
  {
    year: '2026',
    entries: [
      {
        date: 'Aug.',
        category: '青年培力',
        title: '國際青年人才培育計畫',
        organization: '新北市政府青年局',
      },
      {
        date: 'Jul. — Sep.',
        category: '實習',
        title: '財團法人台灣冤獄平反協會 實習生',
        meta: '台北 · 刑事司法／人權倡議',
        bullets: [
          '製作冤案救援與刑事司法議題社群文案，協助轉譯案件背景與倡議重點',
          '蒐集冤案新聞、判決資料與相關報導，支援資料彙整、行政庶務與倡議活動',
        ],
      },
      {
        date: 'Jul.',
        category: '青年培力',
        title: '第四屆鹿農實習生半日體驗營',
        organization: '中華民國養鹿協會',
      },
      {
        date: 'Jul.',
        category: '青年培力',
        title: '春雨創生行動營',
        organization: '財團法人春雨文教基金會',
      },
      {
        date: 'Jun. — Jul.',
        category: '工作',
        title: '國立臺灣師範大學國語教學中心 暑期專案課程工讀學伴',
        meta: '台北 · 華語教育',
        bullets: [
          '協助外籍學員參與校園導覽、文化交流與校外教學活動，增進其在臺學習與生活體驗',
          '支援活動行政與現場執行，包括出缺勤管理、影像紀錄及團隊協調作業',
        ],
      },
      {
        date: 'Jun. — Present',
        category: '領導',
        title: 'NYCU LIFE 數碼寶貝社 首屆社長',
        meta: '新竹 · 數位開發',
        bullets: [
          '推動「NYCU LIFE 校園資訊整合平台」專案，致力於改善陽明交大學生所面臨的資訊落差',
          '統籌社團營運與行政事務，負責進度追蹤、對外溝通及跨組協作',
        ],
      },
      {
        date: 'May — Aug.',
        category: '公共參與',
        title: '新北文化大使',
        meta: '新北 · 地方創生／文化推廣',
        bullets: [
          '參與新北市文化推廣與地方創生專案，以青年視角轉譯在地歷史與文化',
          '設計文化互動遊戲及體驗內容，提升地方文化推廣之互動性',
        ],
      },
      {
        date: 'Jan.',
        category: '青年培力',
        title: '民主小火青年培力營',
        organization: '潔伴同行挺台灣協會',
      },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        date: 'Oct. — Present',
        category: '工作',
        title: '台灣積體電路製造股份有限公司 校園服務代表',
        meta: '新竹 · 半導體製造',
        bullets: [
          '協助陽明交大與台積電產學合作相關事宜，處理公文送簽與行政業務',
          '利用 MS Excel 進行合作相關資料之鍵入與彙整，維持資料庫之精確性與即時性',
        ],
      },
      {
        date: 'Jun. — Dec.',
        category: '志工',
        title: '惠瑜慈善協會 教學志工',
        meta: '線上 · 教育陪伴／公益服務',
        bullets: [
          '以線上一對一的形式，為偏鄉弱勢學童提供課後輔導及長期陪伴',
          '依學生的學習進度調整教學內容與互動方式，提升其對課業的理解及學習意願',
        ],
      },
      {
        date: 'Jun.',
        category: '青年培力',
        title: '第三屆東南亞國際事務研習營',
        organization: '財團法人高雄市東南亞產學交流協會',
      },
    ],
  },
];

const honorGroups = [
  {
    year: '2026',
    entries: [
      { title: '2026 Impact Star 青年影響力競賽', detail: '入圍初賽・大專組全國前十名', date: '2026' },
      { title: '新北市獎學金', detail: '新北市政府', date: 'Jul. 2026' },
      { title: '台北市關渡宮獎助學金', detail: '台北市關渡宮', date: 'Apr. 2026' },
      { title: '2025年藍花楹創作獎 小說組首獎', detail: '文學創作', date: 'Mar. 2026', featured: true },
      { title: '張俊彥校長紀念獎助學金', detail: '國立陽明交通大學', date: 'Mar. 2026' },
    ],
  },
  {
    year: '2025',
    entries: [
      {
        title: '司法院114年大專校院法治教育創新行動方案競賽 銀獎',
        detail: '司法院',
        date: 'Dec. 2025',
        featured: true,
      },
      {
        title: '「Stan up！青開麥」Podcast節目熱寫徵文活動 獲獎',
        detail: '新竹縣政府教育局',
        date: 'Dec. 2025',
      },
      { title: '秋季獎助學金', detail: '正德社會福利慈善基金會', date: 'Nov. 2025' },
    ],
  },
  {
    year: '2024',
    entries: [
      { title: '第二十屆謝創辦人東閔先生紀念文學獎 散文組貳獎', detail: '文學創作', date: 'May 2024' },
      { title: '第二十三屆水煙紗漣文學獎 圖文組參獎', detail: '文學創作', date: 'Apr. 2024' },
    ],
  },
];

const education = [
  {
    type: 'DEGREE EDUCATION',
    institution: '國立陽明交通大學',
    date: 'Present',
    lines: ['百川學士學位學程・核心法律', '輔系人文社會學系'],
  },
  {
    type: 'EXCHANGE STUDY',
    institution: '韓國漢陽大學 Hanyang University',
    date: '114-2 — 暑假',
    lines: ['暑期線上交換', '線上・韓國'],
  },
  {
    type: 'EXCHANGE STUDY',
    institution: '匈牙利羅蘭大學 Eötvös Loránd University',
    date: 'Spring 2027',
    lines: ['通過校內交換甄選，預計赴匈牙利交換', 'Budapest, Hungary'],
  },
];

function SectionHeader({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-header">
      <div className="section-kicker">
        <span>{number}</span>
        <p>{label}</p>
      </div>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero shell" aria-labelledby="hero-name">
        <div className="hero-copy">
          <p className="eyebrow">LEGAL STUDIES · HUMANITIES · PUBLIC ENGAGEMENT</p>
          <h1 id="hero-name">林雨欣</h1>
          <p className="roman-name">Yu-Hsin Lin</p>
          <p className="hero-lead">
            <span>陽明交大百川學士學位學程學生</span>
            <span>核心法律、輔系人文社會學系</span>
          </p>
          <p className="hero-interests">刑事司法 · 人權倡議 · 人類學 · 公共溝通</p>
          <p className="hero-summary">
            我的經驗橫跨刑事司法、人類學研究、華語教育與校園資訊服務；關注制度如何被理解，也在意知識如何被轉譯成可被使用的內容。
          </p>
          <div className="hero-actions" aria-label="主要連結">
            <a className="text-link strong" href="#experience">
              CV / 經歷 <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="mailto:7777ath@gmail.com">
              Email <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className="portrait-wrap">
          <img
            className="portrait"
            src="/profile-optimized.jpg?v=editorial-20260927"
            alt="林雨欣在藍色天空背景前的個人照片"
            width={933}
            height={1400}
            loading="eager"
          />
          <figcaption>Yu-Hsin Lin · Hsinchu, Taiwan</figcaption>
        </figure>
      </section>

      <section className="editorial-section shell" id="about">
        <SectionHeader number="01" label="ABOUT" title="關於我" />
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">我在法律與人文社會領域之間學習，將課堂上的制度思考帶進研究、倡議與公共服務。</p>
            <p>
              從日治時期飲食與漁業史料，到冤案救援與法治教育；從陪伴外籍學員認識臺灣，到整合校園資訊，我累積的每段經驗都在練習同一件事：理解複雜脈絡，並把它說清楚、做實在。
            </p>
          </div>
          <dl className="about-facts">
            <div><dt>Currently</dt><dd>國立陽明交通大學</dd></div>
            <div><dt>Focus</dt><dd>核心法律・人文社會學</dd></div>
            <div><dt>Interests</dt><dd>刑事司法・人權倡議・人類學</dd></div>
            <div><dt>Location</dt><dd>Hsinchu, Taiwan</dd></div>
          </dl>
        </div>
      </section>

      <section className="editorial-section research-section" id="research">
        <div className="shell">
          <SectionHeader number="02" label="RESEARCH" title="研究經驗" description="以人類學視角梳理漁業、飲食文化與公共性的形成。" />
          <article className="research-entry">
            <div className="entry-rail"><time>{research.date}</time><span>{research.meta}</span></div>
            <div className="research-body">
              <p className="entry-label">RESEARCH ASSISTANTSHIP</p>
              <h3>{research.title}</h3>
              <ul className="detail-list">
                {research.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="editorial-section shell" id="experience">
        <SectionHeader number="03" label="EXPERIENCE" title="實務與公共參與" description="研究之外，持續在倡議、教育、數位服務與青年行動中累積實作。" />
        <div className="experience-timeline">
          {experienceGroups.map((group) => (
            <section className="experience-year" key={group.year} aria-labelledby={`experience-${group.year}`}>
              <h3 id={`experience-${group.year}`}>{group.year}</h3>
              <div className="experience-entries">
                {group.entries.map((entry) => (
                  <article className="experience-entry" key={`${group.year}-${entry.date}-${entry.title}`}>
                    <div className="entry-rail">
                      <time>{entry.date}</time>
                      {entry.meta ? <span>{entry.meta}</span> : null}
                    </div>
                    <div className="entry-body">
                      <p className="entry-label">{entry.category}</p>
                      <h4>{entry.title}</h4>
                      {entry.organization ? <p className="entry-organization">{entry.organization}</p> : null}
                      {entry.bullets ? <ul className="detail-list compact">{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="editorial-section honors-section" id="honors">
        <div className="shell">
          <SectionHeader number="04" label="HONORS" title="榮耀與獎項" description="依年份整理競賽、文學創作與獎助學金成果。" />
          <div className="honors-chronology">
            {honorGroups.map((group) => (
              <section className="honor-year" key={group.year} aria-labelledby={`honor-${group.year}`}>
                <h3 id={`honor-${group.year}`}>{group.year}</h3>
                <div>
                  {group.entries.map((honor) => (
                    <article className={honor.featured ? 'honor-row is-featured' : 'honor-row'} key={honor.title}>
                      <span className="honor-dot" aria-hidden="true">•</span>
                      <div><h4>{honor.title}</h4><p>{honor.detail}</p></div>
                      <time>{honor.date}</time>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section shell" id="education">
        <SectionHeader number="05" label="EDUCATION" title="學歷與交換" description="學位教育、學術焦點與國際交換經驗。" />
        <div className="education-list">
          {education.map((item) => (
            <article className="education-entry" key={item.institution}>
              <div className="education-meta"><p>{item.type}</p><time>{item.date}</time></div>
              <div><h3>{item.institution}</h3>{item.lines.map((line) => <p key={line}>{line}</p>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-layout">
          <div><p className="contact-kicker">06 CONTACT</p><h2>Let&apos;s connect.</h2></div>
          <div className="contact-copy">
            <p>關於研究合作、實習、公共參與或專業機會，歡迎來信交流。</p>
            <div className="contact-links">
              <a href="mailto:7777ath@gmail.com"><span>Email</span><strong>7777ath@gmail.com</strong><ArrowUpRight aria-hidden="true" /></a>
              <a href="#experience"><span>CV</span><strong>瀏覽完整經歷</strong><ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>© 2026 Yu-Hsin Lin</p>
        <p>Legal studies · Humanities · Public engagement</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
