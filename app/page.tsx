import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const highlights = [
  { value: '3.72', label: '累積 GPA', note: '滿分 4.3' },
  { value: 'B2', label: '英語能力', note: 'IELTS 6.0' },
  { value: '2027', label: '交換計畫', note: '春季・羅蘭大學' },
  { value: '9', label: '獎項與獎學金', note: '法治・文學・學習表現' },
];

const timeline = [
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
        title: '研究獎助生',
        organization: '國立陽明交通大學人文社會學系・新竹',
        description:
          '參與「從櫻花蝦到下雜魚：臺灣近海拖網漁業的價值階序與公共性建構」研究計畫；建置 EndNote 書目資料庫，並檢索日治時期飲食文化與進出口史料。',
      },
      {
        date: 'Aug.',
        category: '青年培力',
        title: '國際青年人才培育計畫',
        organization: '新北市政府青年局',
      },
      {
        date: 'Jul. — Sep.',
        category: '實習',
        title: '實習生',
        organization: '財團法人台灣冤獄平反協會・台北',
        description:
          '製作冤案救援與刑事司法議題社群文案，轉譯案件背景與倡議重點；蒐集新聞、判決資料與相關報導，支援倡議活動與行政作業。',
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
        title: '暑期專案課程工讀學伴',
        organization: '國立臺灣師範大學國語教學中心・台北',
        description:
          '協助外籍學員參與校園導覽、文化交流與校外教學，並支援出缺勤管理、影像紀錄及團隊協調。',
      },
      {
        date: 'Jun. — Present',
        category: '領導',
        title: '首屆社長',
        organization: 'NYCU LIFE 數碼寶貝社・新竹',
        description:
          '推動 NYCU LIFE 校園資訊整合平台，統籌社團營運、進度追蹤、對外溝通與跨組協作。',
      },
      {
        date: 'May — Aug.',
        category: '公共參與',
        title: '新北文化大使',
        organization: '新北市・地方創生／文化推廣',
        description: '以青年視角轉譯在地歷史與文化，設計文化互動遊戲及體驗內容。',
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
        title: '校園服務代表',
        organization: '台灣積體電路製造股份有限公司・新竹',
        description:
          '協助陽明交大與台積電產學合作行政業務與公文送簽，運用 Excel 維護合作資料，確保資訊準確與即時。',
      },
      {
        date: 'Jun. — Dec.',
        category: '志工',
        title: '教學志工',
        organization: '惠瑜慈善協會・線上',
        description:
          '以一對一方式為偏鄉弱勢學童提供課後輔導，依學習進度調整教學內容與互動方式。',
      },
      {
        date: 'Jun.',
        category: '青年培力',
        title: '第三屆東南亞國際事務研習營',
        organization: '高雄市東南亞產學交流協會',
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
    ],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首頁">
          <span>林雨欣</span>
          <small>YU-HSIN LIN</small>
        </a>
        <nav aria-label="主要導覽">
          <a href="#about">關於我</a>
          <a href="#timeline">經歷年表</a>
          <a href="#profile">學歷</a>
          <a href="#contact">聯絡</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">LAW · HUMANITIES · PUBLIC ENGAGEMENT</p>
          <h1>林雨欣</h1>
          <p className="roman-name">Yu-Hsin Lin</p>
          <p className="hero-lead">
            陽明交大百川學士學位學程學生，主修核心法律、輔系人文社會學系。
          </p>
          <p className="hero-summary">
            我的經驗橫跨刑事司法、人類學研究、華語教育與校園資訊服務；關注制度如何被理解，也在意知識如何被轉譯成可被使用的內容。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#timeline">
              按年份瀏覽 <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a className="button quiet" href="mailto:7777ath@gmail.com">
              <Mail size={15} aria-hidden="true" /> Email
            </a>
          </div>
        </div>

        <figure className="portrait-wrap">
          <img
            className="portrait"
            src="/profile.jpeg"
            alt="林雨欣個人照片"
            width={2113}
            height={3170}
            loading="eager"
          />
        </figure>
      </section>

      <section className="metrics shell" aria-label="履歷重點">
        {highlights.map((item) => (
          <article className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.note}</small>
          </article>
        ))}
      </section>

      <section className="section shell" id="about">
        <div className="section-heading">
          <p className="eyebrow">ABOUT</p>
          <h2>把研究與公共參與放在同一張地圖上</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="lead-paragraph">
              我在法律與人文社會領域之間學習，將課堂上的制度思考帶進研究、倡議與公共服務。
            </p>
            <p>
              從日治時期飲食與漁業史料，到冤案救援與法治教育；從陪伴外籍學員認識臺灣，到整合校園資訊，我累積的每段經驗都在練習同一件事：理解複雜脈絡，並把它說清楚、做實在。
            </p>
          </div>
          <aside className="profile-panel" id="profile" aria-label="教育與能力">
            <div className="profile-group">
              <p className="mini-label">EDUCATION</p>
              <h3>國立陽明交通大學</h3>
              <p>百川學士學位學程・核心法律</p>
              <p>輔系人文社會學系</p>
            </div>
            <div className="profile-group">
              <p className="mini-label">ACADEMIC</p>
              <p>累積 GPA 3.72 / 4.3</p>
              <p>IELTS Overall 6.0・CEFR B2</p>
            </div>
            <div className="profile-group">
              <p className="mini-label">INTERESTS</p>
              <p>刑事司法・人權倡議・人類學</p>
              <p>文化轉譯・公共溝通・教育陪伴</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="shell">
          <div className="section-heading timeline-heading">
            <p className="eyebrow">SELECTED TIMELINE</p>
            <h2>所有經歷，按年份向下閱讀</h2>
            <p>由近到遠整理研究、工作、實習、公共參與、獎項與青年培力。</p>
          </div>

          <div className="timeline">
            {timeline.map((group) => (
              <section className="year-group" key={group.year} aria-labelledby={`year-${group.year}`}>
                <div className="year-marker">
                  <h3 id={`year-${group.year}`}>{group.year}</h3>
                </div>
                <div className="year-items">
                  {group.items.map((item) => (
                    <article className="timeline-item" key={`${group.year}-${item.date}-${item.title}`}>
                      <div className="timeline-meta">
                        <time>{item.date}</time>
                        <span>{item.category}</span>
                      </div>
                      <div className="timeline-content">
                        <h4>{item.title}</h4>
                        <p className="organization">{item.organization}</p>
                        {item.description ? <p className="description">{item.description}</p> : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h2>保持聯絡</h2>
            <p>歡迎就研究、公共參與、校園專案或合作機會與我聯繫。</p>
          </div>
          <div className="contact-links">
            <a href="mailto:7777ath@gmail.com">
              <Mail size={18} aria-hidden="true" />
              <span>
                <small>EMAIL</small>
                7777ath@gmail.com
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a href="tel:+886907485932">
              <Phone size={18} aria-hidden="true" />
              <span>
                <small>PHONE</small>
                +886 907 485 932
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <div className="contact-location">
              <MapPin size={18} aria-hidden="true" />
              <span>
                <small>BASED IN</small>
                Hsinchu, Taiwan
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>© 2026 Yu-Hsin Lin</p>
        <a href="#top">回到頁首 ↑</a>
      </footer>
    </main>
  );
}
