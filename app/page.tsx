import SiteHeader from './site-header';
import Image from 'next/image';

type TimelineItem = {
  date: string;
  category: string;
  title: string;
  organization?: string;
  location?: string;
  description?: string;
  bullets?: string[];
};

type TimelineGroup = {
  year: string;
  items: TimelineItem[];
};

const education = [
  {
    date: 'Present',
    institution: '國立陽明交通大學',
    englishName: 'National Yang Ming Chiao Tung University',
    program: '百川學士學位學程 核心法律\n輔系人文社會學系',
  },
  {
    date: '2026/2–8',
    institution: '韓國漢陽大學',
    englishName: '한양대학교 · Hanyang University',
    program: '社會學系修課',
    note: '線上・韓國',
  },
  {
    date: '2027 春季',
    institution: '匈牙利羅蘭大學',
    englishName: 'Eötvös Loránd University',
    program: '社會科學院交換學生',
    note: 'Budapest, Hungary',
  },
];

const selectedHonors = [
  {
    title: '司法院114年大專校院法治教育創新行動方案競賽',
  },
  {
    title: '2025年藍花楹創作獎',
    emphasis: '小說組首獎',
  },
  {
    title: 'NYCU LIFE 數碼寶貝社 社長',
  },
];

const timeline: TimelineGroup[] = [
  {
    year: '2027',
    items: [
      {
        date: 'Spring',
        category: '教育',
        title: '赴匈牙利羅蘭大學交換',
        organization: 'Eötvös Loránd University・Budapest, Hungary',
        description: '通過校內交換甄選，預計於 2027 年春季前往匈牙利進行交換學習。',
      },
    ],
  },
  {
    year: '2026',
    items: [
      {
        date: 'Aug. — Present',
        category: '研究',
        title: '國立陽明交通大學人文社會學系 研究獎助生',
        location: '新竹・人類學',
        bullets: [
          '研究計畫：「從櫻花蝦到下雜魚：臺灣近海拖網漁業的價值階序與公共性建構」',
          '計畫主持人：吳映青老師',
          '協助系上吳映青教授建置 EndNote 學術書目資料庫，進行書目核對、文獻分類與標籤管理',
          '檢索《臺灣日日新報》，蒐集日治時期蝦米、乾蝦之飲食文化、料理應用與進出口貿易史料',
        ],
      },
      {
        date: 'Aug.',
        category: '青年培力',
        title: '國際青年人才培育計畫',
        organization: '新北市政府青年局',
      },
      {
        date: '2026',
        category: '競賽',
        title: '2026 Impact Star 青年影響力啟動賽',
        organization: '入圍初賽・大專組全國前十名',
      },
      {
        date: 'Jul. — Sep.',
        category: '實習',
        title: '財團法人台灣冤獄平反協會 實習生',
        location: '台北・刑事司法／人權倡議',
        bullets: [
          '製作冤案救援與刑事司法議題社群文案，協助轉譯案件背景與倡議重點',
          '蒐集冤案新聞、判決資料與相關報導，支援資料彙整、行政庶務與倡議活動',
        ],
      },
      {
        date: 'Jul.',
        category: '獎學金',
        title: '新北市獎學金',
        organization: '新北市政府',
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
        location: '台北・華語教育',
        bullets: [
          '協助外籍學員參與校園導覽、文化交流與校外教學活動，增進其在臺學習與生活體驗',
          '支援活動行政與現場執行，包括出缺勤管理、影像紀錄及團隊協調作業',
        ],
      },
      {
        date: 'Jun. — Present',
        category: '領導',
        title: 'NYCU LIFE 數碼寶貝社 首屆社長',
        location: '新竹・數位開發',
        bullets: [
          '推動「NYCU LIFE 校園資訊整合平台」專案，致力於改善陽明交大學生所面臨的資訊落差',
          '統籌社團營運與行政事務，負責進度追蹤、對外溝通及跨組協作',
        ],
      },
      {
        date: 'Feb. — Aug.',
        category: '交換',
        title: '韓國漢陽大學 暑期線上交換',
        organization: '한양대학교（Hanyang University）',
        location: '線上・韓國',
        description: '於 2026 年 2 月至 8 月參與漢陽大學暑期線上交換。',
      },
      {
        date: 'May — Aug.',
        category: '公共參與',
        title: '新北文化大使',
        location: '新北・地方創生／文化推廣',
        bullets: [
          '參與新北市文化推廣與地方創生專案，以青年視角轉譯在地歷史與文化',
          '設計文化互動遊戲及體驗內容，提升地方文化推廣之互動性',
        ],
      },
      {
        date: 'Apr.',
        category: '獎學金',
        title: '台北市關渡宮獎助學金',
        organization: '台北市關渡宮',
      },
      {
        date: 'Mar.',
        category: '文學獎',
        title: '2025 年藍花楹創作獎・小說組首獎',
        organization: '文學創作',
      },
      {
        date: 'Mar.',
        category: '獎學金',
        title: '張俊彥校長紀念獎助學金',
        organization: '國立陽明交通大學',
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
    items: [
      {
        date: 'Dec.',
        category: '競賽',
        title: '大專校院法治教育創新行動方案競賽・銀獎',
        organization: '司法院 114 年度',
      },
      {
        date: 'Dec.',
        category: '徵文',
        title: 'Stan up！青開麥 Podcast 節目熱寫徵文・獲獎',
        organization: '新竹縣政府教育局',
      },
      {
        date: 'Nov.',
        category: '獎學金',
        title: '秋季獎助學金',
        organization: '正德社會福利慈善基金會',
      },
      {
        date: 'Oct. — Present',
        category: '工作',
        title: '台灣積體電路製造股份有限公司 校園服務代表',
        location: '新竹・半導體製造',
        bullets: [
          '協助陽明交大與台積電產學合作相關事宜，處理公文送簽與行政業務',
          '利用 MS Excel 進行合作相關資料之鍵入與彙整，維持資料庫之精確性與即時性',
        ],
      },
      {
        date: 'Jun. — Dec.',
        category: '志工',
        title: '惠瑜慈善協會 教學志工',
        location: '線上・教育陪伴／公益服務',
        bullets: [
          '以線上一對一的形式，為偏鄉弱勢學童提供課後輔導及長期陪伴',
          '依學生的學習進度調整教學內容與互動方式，提升其對課業的理解及學習意願',
        ],
      },
      {
        date: 'Jun.',
        category: '青年培力',
        title: '第三屆東南亞國際事務研習營',
        organization: '高雄市東南亞產學交流協會',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        date: 'May',
        category: '文學獎',
        title: '第二十屆謝東閔先生紀念文學獎・散文組貳獎',
        organization: '文學創作',
      },
      {
        date: 'Apr.',
        category: '文學獎',
        title: '第二十三屆水煙紗漣文學獎・圖文組參獎',
        organization: '文學創作',
      },
      {
        date: 'Mar.',
        category: '志工',
        title: '財團法人天使心家族社會福利基金會 第15屆336 愛奇兒家庭日 攝影志工',
      },
    ],
  },
];

function SectionHeading({
  id,
  english,
  title,
}: {
  id: string;
  english: string;
  title: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-kicker">
        <p>{english}</p>
      </div>
      <h2 id={id}>{title}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero-section" id="top" aria-labelledby="page-title">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-label">LAW · HUMANITIES · PUBLIC ENGAGEMENT</p>
              <h1 id="page-title">Yu-Hsin Lin</h1>
              <p className="chinese-name">林雨欣</p>
              <div className="identity">
                <p>陽明交大百川學士學位學程學生</p>
                <p>核心法律、輔系人文社會學系</p>
              </div>
              <p className="hero-summary">
                我的經驗橫跨刑事司法、人類學研究、華語教育與校園資訊服務；關注制度如何被理解，也在意知識如何被轉譯成可被使用的內容。
              </p>
              <div className="hero-links" aria-label="外部連結">
                <a href="mailto:7777ath@gmail.com">Email <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <figure className="portrait-wrap">
              <Image
                className="portrait"
                src="/profile.jpeg?v=academic-20260927"
                alt="林雨欣個人照片"
                width={2113}
                height={3170}
                loading="eager"
              />
            </figure>
          </div>

        </div>
      </section>

      <section className="section education-section" id="education" aria-labelledby="education-title">
        <div className="shell">
          <SectionHeading id="education-title" english="EDUCATION" title="學歷與交換經驗" />
          <div className="academic-list">
            {education.map((entry) => (
              <article className="education-item" key={`${entry.date}-${entry.institution}`}>
                <time>{entry.date}</time>
                <div className="education-record">
                  <div className="education-title-line">
                    <h3>{entry.institution}</h3>
                    <p className="education-program">{entry.program}</p>
                  </div>
                  <p className="english-name">{entry.englishName}</p>
                  {entry.note ? <p className="education-note">{entry.note}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section honors-section" id="honors" aria-labelledby="honors-title">
        <div className="shell">
          <SectionHeading id="honors-title" english="SELECTED HONORS" title="代表性榮耀" />
          <ul className="honors-list">
            {selectedHonors.map((honor) => (
              <li key={honor.title}>
                <span className="honor-bullet" aria-hidden="true">•</span>
                <h3>
                  {honor.title}
                  {honor.emphasis ? <> <strong>{honor.emphasis}</strong></> : null}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="shell">
          <SectionHeading id="experience-title" english="EXPERIENCE" title="經歷年表" />
          <p className="section-intro">由近到遠整理研究、交換、工作、實習、公共參與、獎項與青年培力。</p>

          <div className="timeline">
            {timeline.map((group) => (
              <section className="year-group" key={group.year} aria-labelledby={`year-${group.year}`}>
                <div className="year-column">
                  <h3 id={`year-${group.year}`}>{group.year}</h3>
                </div>
                <div className="experience-items">
                  {group.items.map((item) => (
                    <article className="timeline-item" key={`${group.year}-${item.date}-${item.title}`}>
                      <div className="timeline-meta">
                        <time>{item.date}</time>
                        <span>{item.category}</span>
                      </div>
                      <div className="timeline-content">
                        <h4>{item.title}</h4>
                        {item.location ? <p className="timeline-location">{item.location}</p> : null}
                        {item.organization ? <p className="organization">{item.organization}</p> : null}
                        {item.description ? <p className="description">{item.description}</p> : null}
                        {item.bullets ? (
                          <ul>
                            {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                          </ul>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <strong>Yu-Hsin Lin</strong>
            <a href="mailto:7777ath@gmail.com">Email ↗</a>
          </div>
          <p>© 2026 Yu-Hsin Lin</p>
        </div>
      </footer>
    </main>
  );
}
