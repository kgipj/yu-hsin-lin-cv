import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Mail,
  MapPin,
  Phone,
  Scale,
  Trophy,
  Users,
} from 'lucide-react';

const highlights = [
  { value: '3.72', label: '累積 GPA', note: '滿分 4.3' },
  { value: 'B2', label: '英語能力', note: 'IELTS 6.0' },
  { value: '5+', label: '獎項肯定', note: '法律・文學・公共參與' },
  { value: '2027', label: '交換計畫', note: '春季・匈牙利羅蘭大學' },
];

const experience = [
  {
    period: 'Aug. 2026 — Present',
    role: '研究獎助生',
    organization: '國立陽明交通大學人文社會學系',
    meta: '新竹・人類學',
    description:
      '參與「從櫻花蝦到下雜魚：臺灣近海拖網漁業的價值階序與公共性建構」研究計畫，協助建置 EndNote 學術書目資料庫，並檢索日治時期飲食文化與進出口史料。',
    icon: BookOpen,
  },
  {
    period: 'Jul. — Sep. 2026',
    role: '實習生',
    organization: '財團法人台灣冤獄平反協會',
    meta: '台北・刑事司法／人權倡議',
    description:
      '製作冤案救援與刑事司法議題社群文案，轉譯案件背景與倡議重點；蒐集新聞、判決資料與相關報導，支援倡議活動與行政作業。',
    icon: Scale,
  },
  {
    period: 'Jun. — Jul. 2026',
    role: '暑期專案課程工讀學伴',
    organization: '國立臺灣師範大學國語教學中心',
    meta: '台北・華語教育',
    description:
      '協助外籍學員參與校園導覽、文化交流與校外教學，並支援出缺勤管理、影像紀錄及團隊協調。',
    icon: Users,
  },
  {
    period: 'Oct. 2025 — Present',
    role: '校園服務代表',
    organization: '台灣積體電路製造股份有限公司',
    meta: '新竹・半導體製造',
    description:
      '協助陽明交大與台積電產學合作行政業務與公文送簽，運用 Excel 維護合作資料，確保資訊準確與即時。',
    icon: ArrowUpRight,
  },
];

const activities = [
  {
    period: 'Jun. 2026 — Present',
    title: 'NYCU LIFE 數碼寶貝社・首屆社長',
    meta: '校園資訊整合／數位開發',
    description:
      '推動 NYCU LIFE 校園資訊整合平台，統籌社團營運、進度追蹤、對外溝通與跨組協作。',
  },
  {
    period: 'May. — Aug. 2026',
    title: '新北文化大使',
    meta: '地方創生／文化推廣',
    description:
      '以青年視角轉譯在地歷史與文化，設計文化互動遊戲與體驗內容。',
  },
  {
    period: 'Jun. — Dec. 2025',
    title: '惠瑜慈善協會・教學志工',
    meta: '教育陪伴／公益服務',
    description:
      '以線上一對一方式為偏鄉弱勢學童提供課後輔導，依學習進度調整內容與互動方式。',
  },
];

const awards = [
  ['司法院 114 年大專校院法治教育創新行動方案競賽', '銀獎', 'Dec. 2025'],
  ['2025 年藍花楹創作獎', '小說組首獎', 'Mar. 2026'],
  ['新竹縣教育局 Stan up！青開麥 Podcast 熱寫徵文', '獲獎', 'Dec. 2025'],
  ['第二十屆謝東閔先生紀念文學獎', '散文組貳獎', 'May. 2024'],
  ['第二十三屆水煙紗漣文學獎', '圖文組參獎', 'Apr. 2024'],
];

const scholarships = [
  ['新北市獎學金', 'Jul. 2026'],
  ['張俊彥校長紀念獎助學金', 'Mar. 2026'],
  ['台北市關渡宮獎助學金', 'Apr. 2026'],
  ['正德社會福利慈善基金會秋季獎助學金', 'Nov. 2025'],
];

const programs = [
  ['新北市政府青年局', '國際青年人才培育計畫', 'Aug. 2026'],
  ['中華民國養鹿協會', '第四屆鹿農實習生半日體驗營', 'Jul. 2026'],
  ['春雨文教基金會', '春雨創生行動營', 'Jul. 2026'],
  ['潔伴同行挺台灣協會', '民主小火青年培力營', 'Jan. 2026'],
  ['高雄市東南亞產學交流協會', '第三屆東南亞國際事務研習營', 'Jun. 2025'],
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
          <a href="#experience">經歷</a>
          <a href="#awards">獎項</a>
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
            <a className="button primary" href="#experience">
              瀏覽履歷 <ArrowDownRight size={16} aria-hidden="true" />
            </a>
            <a className="button quiet" href="mailto:7777ath@gmail.com">
              <Mail size={15} aria-hidden="true" /> Email
            </a>
          </div>
        </div>

        <figure className="portrait-wrap">
          <span className="portrait-shadow" aria-hidden="true" />
          <img
            className="portrait"
            src="/profile.jpeg"
            alt="林雨欣個人照片"
            width={640}
            height={800}
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
            <p>
              2027 年春季預計赴匈牙利羅蘭大學交換，持續擴展跨文化學習與公共議題觀察。
            </p>
          </div>
          <aside className="profile-panel" aria-label="教育與能力">
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

      <section className="section experience-section" id="experience">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2>研究與實務經驗</h2>
            </div>
            <p>跨越研究、司法倡議、教育與產學行政，累積資料整理、內容轉譯與協作能力。</p>
          </div>
          <div className="experience-list">
            {experience.map((item) => {
              const Icon = item.icon;
              return (
                <article className="experience-item" key={`${item.organization}-${item.role}`}>
                  <div className="experience-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className="experience-title">
                    <p className="period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p className="organization">{item.organization}</p>
                    <p className="meta">{item.meta}</p>
                  </div>
                  <p className="experience-description">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section shell" id="activities">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">LEADERSHIP & SERVICE</p>
            <h2>課外活動</h2>
          </div>
          <p>從平台專案、地方文化到教育陪伴，持續把想法落成可共同參與的行動。</p>
        </div>
        <div className="activity-grid">
          {activities.map((item, index) => (
            <article className="activity" key={item.title}>
              <span className="activity-number">0{index + 1}</span>
              <p className="period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="meta">{item.meta}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section honors-section" id="awards">
        <div className="shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">HONORS</p>
              <h2>獎項與獎學金</h2>
            </div>
            <Trophy className="section-symbol" size={42} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div className="honors-grid">
            <div>
              <h3 className="list-title">競賽與文學獎項</h3>
              <div className="honor-list">
                {awards.map(([name, result, date]) => (
                  <article className="honor-row" key={name}>
                    <div>
                      <h4>{name}</h4>
                      <p>{result}</p>
                    </div>
                    <time>{date}</time>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="list-title">獎助學金</h3>
              <div className="honor-list compact">
                {scholarships.map(([name, date]) => (
                  <article className="honor-row" key={name}>
                    <h4>{name}</h4>
                    <time>{date}</time>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="programs">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">YOUTH DEVELOPMENT</p>
            <h2>青年培力</h2>
          </div>
          <p>透過跨域營隊與國際事務研習，延伸對地方、產業與公共議題的理解。</p>
        </div>
        <div className="program-list">
          {programs.map(([organization, program, date]) => (
            <article className="program-row" key={`${organization}-${program}`}>
              <p>{organization}</p>
              <h3>{program}</h3>
              <time>{date}</time>
            </article>
          ))}
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
