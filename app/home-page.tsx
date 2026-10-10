'use client';

import { useEffect, type CSSProperties } from 'react';
import { Mail } from 'lucide-react';
import SiteHeader from './site-header';
import Image from 'next/image';
import { usePersistentLanguage, type Language } from './language-preference';

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

const translations: Record<string, string> = {
  陽明交大百川學士學位學程學生:
    'Student, Arete Honors Program, National Yang Ming Chiao Tung University',
  跨域法律與社會科學領域: 'Interdisciplinary Focus in Law and Social Sciences',
  '我的經歷橫跨人類學、刑事司法與人權倡議、文學創作、法治教育及校園數位服務專案等，累積學術研究、社會創新、政策分析與專案管理等經驗。':
    'My background spans anthropology, criminal justice and human rights advocacy, literary writing, rule-of-law education, and campus digital service projects, with experience in academic research, social innovation, policy analysis, and project management.',
  外部連結: 'External links',
  林雨欣個人照片: 'Portrait of Yu-Hsin Lin',
  學歷與代表性榮耀: 'Education and Selected Honors',
  代表性榮耀: 'Selected Honors',
  跨年度最具代表性的成果: 'A selection of achievements across different years',
  '經歷年表（2024 至今）': 'Experience Timeline (2024–Present)',
  '由近至遠整理研究、交換、工作、實習、公共參與、獎項與青年培力':
    'Research, exchanges, employment, internships, public engagement, honors, and youth development, listed in reverse chronological order',
  歡迎聯繫: 'Get in Touch',
  '歡迎就研究、專案、公共參與或其他合作機會與我聯繫。':
    'Feel free to contact me about research, projects, public engagement, or other opportunities to collaborate.',
  '「求知若飢，虛心若愚。」— Steve Jobs':
    '“Stay hungry, stay foolish.” — Steve Jobs',
  '回到頁首 ↑': 'Back to top ↑',
  國立陽明交通大學: 'National Yang Ming Chiao Tung University',
  '百川學士學位學程 核心法律\n輔系人文社會學系':
    'Arete Honors Program · Legal Studies Core\nMinor in Humanities and Social Sciences',
  韓國漢陽大學: 'Hanyang University',
  社會學系: 'Department of Sociology',
  匈牙利羅蘭大學: 'Eötvös Loránd University',
  社會科學院交換學生: 'Exchange Student · Faculty of Social Sciences',
  法治教育: 'Legal Education',
  '司法院 114 年度大專校院法治教育創新行動方案競賽':
    '2025 Judicial Yuan Legal Education and Innovation Project Competition for University Students',
  全國銀獎: 'National Silver Award',
  青年影響力: 'Youth Impact',
  '2026 Impact Star 青年影響力啟動賽':
    '2026 Youth Impact Star: Action Challenge',
  '入圍複賽・大專組全國前十名':
    'Semifinalist · National Top 10, University Division',
  '2026 Impact Star 青年影響力啟動賽・入圍複賽・大專組全國前十名':
    '2026 Youth Impact Star: Action Challenge · Semifinalist · National Top 10, University Division',
  '出題組織：Teach for Taiwan 為台灣而教':
    'Challenge Provider: Teach For Taiwan',
  '作品名稱：起跑線上的共鳴': 'Project: “Resonance at the Starting Line”',
  '指導老師：曾聖凱教授': 'Faculty Adviser: Professor Sheng-Kai Tseng',
  文學創作: 'Creative Writing',
  '2025 年藍花楹創作獎': '2025 Jacaranda Creative Writing Award',
  小說組首獎: 'First Prize · Fiction',
  校園領導: 'Campus Leadership',
  '國立陽明交通大學 NYCU LIFE 數碼寶貝社':
    'NYCU LIFE, National Yang Ming Chiao Tung University',
  'NYCU LIFE 數碼寶貝社 社長': 'President, NYCU LIFE',
  社長: 'President',
  獎助學金: 'Scholarship',
  張俊彥校長紀念獎助學金: 'President Chang Chun-Yen Memorial Scholarship',
  第二十屆謝東閔先生紀念文學獎:
    '20th Mr. Shieh Tung-min Memorial Literary Award',
  散文組貳獎: 'Second Prize · Prose',
  第二十三屆水煙紗漣文學獎: '23rd Shui Sha Lian Literary Award',
  圖文組參獎: 'Third Prize · Illustrated Works',
  交換: 'Exchange',
  赴匈牙利羅蘭大學交換: 'Exchange at Eötvös Loránd University',
  '通過校內交換甄選，預計於 2027 年春季前往匈牙利布達佩斯進行交換學習':
    'Selected through NYCU’s internal exchange program; scheduled to study in Budapest, Hungary, in spring 2027',
  研究: 'Research',
  '國立陽明交通大學人文社會學系 研究獎助生':
    'Research Assistant, Department of Humanities and Social Sciences, National Yang Ming Chiao Tung University',
  '新竹・人類學': 'Hsinchu · Anthropology',
  '研究計畫：「從櫻花蝦到下雜魚：臺灣近海拖網漁業的價值階序與公共性建構」':
    'Research project: “From Sakura Shrimp to Trash Fish: Hierarchies of Value and the Construction of Publicness in Taiwan’s Coastal Trawl Fisheries”',
  '計畫主持人：吳映青教授': 'Principal Investigator: Professor Ying-ching Wu',
  青年培力: 'Youth Development',
  國際青年人才培育計畫: 'International Youth Talent Development Program',
  新北市政府青年局: 'New Taipei City Government Youth Department',
  競賽: 'Competition',
  實習: 'Internship',
  '台灣冤獄平反協會 實習生': 'Intern, Taiwan Innocence Project',
  '台北・刑事司法／人權倡議':
    'Taipei · Criminal Justice / Human Rights Advocacy',
  獎學金: 'Scholarship',
  新北市獎學金: 'New Taipei City Scholarship',
  新北市政府: 'New Taipei City Government',
  第四屆鹿農實習生半日體驗營:
    '4th Deer Farming Internship Half-Day Experience Program',
  中華民國養鹿協會: 'Taiwan Deer Association',
  春雨創生行動營: 'Spring Rain Regional Revitalization Action Camp',
  財團法人春雨文教基金會: 'Spring Rain Culture and Education Foundation',
  工作: 'Employment',
  暑期專案課程工讀學伴: 'Summer Program Work-Study Peer Mentor',
  國立臺灣師範大學國語教學中心:
    'Mandarin Training Center, National Taiwan Normal University',
  '台北・國際交流': 'Taipei · International Exchange',
  帶領美國大學生進行校外教學活動:
    'Led off-campus educational activities for university students from the United States.',
  領導: 'Leadership',
  '國立陽明交通大學 NYCU LIFE 數碼寶貝社 社長':
    'President, NYCU LIFE, National Yang Ming Chiao Tung University',
  '新竹・數位開發': 'Hsinchu · Digital Development',
  '推動「NYCU LIFE 校園資訊整合平台」專案，致力於改善陽明交大學生所面臨的資訊落差':
    'Led the NYCU LIFE campus information platform initiative to reduce information gaps among NYCU students.',
  '韓國漢陽大學 線上交換': 'Online Exchange, Hanyang University',
  '한양대학교（Hanyang University）': 'Hanyang University',
  'Hanyang Online Pre-Exchange Program': 'Hanyang Online Pre-Exchange Program',
  'Eötvös Loránd University・Budapest, Hungary':
    'Eötvös Loránd University · Budapest, Hungary',
  公共參與: 'Public Engagement',
  新北文化大使: 'New Taipei Culture Ambassador',
  新北市文化局: 'Cultural Affairs Department, New Taipei City Government',
  '新北・地方創生／文化推廣':
    'New Taipei · Regional Revitalization / Cultural Promotion',
  台北市關渡宮獎助學金: 'Taipei Guandu Temple Scholarship',
  財團法人台北市關渡宮: 'Guandu Temple Foundation, Taipei City',
  '2025 年藍花楹創作獎・小說組首獎':
    '2025 Jacaranda Creative Writing Award · First Prize in Fiction',
  民主小火青年培力營: 'Democracy Spark Youth Development Camp',
  潔伴同行挺台灣協會: 'Jieban Tongxing Ting Taiwan Association',
  '司法院 114 年度大專校院法治教育創新行動方案競賽・全國銀獎':
    '2025 Judicial Yuan Legal Education and Innovation Project Competition for University Students · National Silver Award',
  '作品名稱：「網」顧兒少－我國數位性剝削下的無法可依':
    'Project: “Safeguarding Children Online: The Legal Void in Taiwan’s Response to Digital Sexual Exploitation”',
  '指導老師：劉邦揚教授': 'Faculty Adviser: Professor Bang-Yang Liu',
  徵文: 'Writing Competition',
  '「Stan up！青開麥」 Podcast 節目熱寫徵文活動・獲獎':
    '“Stand Up! Youth Mic” Podcast Essay Competition · Award Recipient',
  新竹縣政府教育局: 'Education Bureau, Hsinchu County Government',
  秋季獎助學金: 'Autumn Scholarship',
  正德社會福利慈善基金會: 'Chengte Social Welfare and Charity Foundation',
  '台灣積體電路製造股份有限公司 校園服務代表':
    'Campus Service Representative, Taiwan Semiconductor Manufacturing Company (TSMC)',
  '新竹・半導體製造': 'Hsinchu · Semiconductor Manufacturing',
  志工: 'Volunteer Service',
  '惠瑜慈善協會 教學志工': 'Teaching Volunteer, Michelle Chiou Foundation',
  '線上・教育陪伴／公益服務':
    'Online · Educational Support / Community Service',
  '以線上一對一的形式，為偏鄉弱勢學童提供課後輔導及長期陪伴':
    'Provided one-on-one online tutoring and sustained mentorship for disadvantaged students in rural communities.',
  第三屆東南亞國際事務研習營:
    '3rd Southeast Asian International Affairs Study Camp',
  高雄市東南亞產學交流協會:
    'Kaohsiung Southeast Asia Industry and Academic Exchange Association',
  文學獎: 'Literary Award',
  '第二十屆謝東閔先生紀念文學獎・散文組貳獎':
    '20th Mr. Shieh Tung-min Memorial Literary Award · Second Prize in Prose',
  實踐大學: 'Shih Chien University',
  '第二十三屆水煙紗漣文學獎・圖文組參獎':
    '23rd Shui Sha Lian Literary Award · Third Prize in Illustrated Works',
  '益品書屋 10 週年夏日閱讀祭徵件活動・閱讀金句賞':
    'EP Books 10th Anniversary Summer Reading Festival Submission Contest · Reading Quote Award',
  財團法人戴水教育基金會: 'DS Foundation',
  國立暨南國際大學: 'National Chi Nan University',
  '第 15 屆 336 愛奇兒家庭日 攝影志工':
    'Photography Volunteer, 15th 336 Angel Family Day',
  財團法人天使心家族社會福利基金會:
    'Angel Heart Family Social Welfare Foundation',
};

function translate(value: string, language: Language) {
  return language === 'en' ? (translations[value] ?? value) : value;
}

const education = [
  {
    date: 'Sep. 2025 - Present',
    institution: '國立陽明交通大學',
    englishName: 'National Yang Ming Chiao Tung University',
    program: '百川學士學位學程 核心法律\n輔系人文社會學系',
  },
  {
    date: 'Feb. - Aug. 2026',
    institution: '韓國漢陽大學',
    englishName: '한양대학교 · Hanyang University',
    program: '社會學系',
  },
];

const selectedHonors = [
  {
    category: '法治教育',
    date: 'Dec. 2025',
    title: '司法院 114 年度大專校院法治教育創新行動方案競賽',
    distinction: '全國銀獎',
  },
  {
    category: '青年影響力',
    date: 'May 2026',
    title: '2026 Impact Star 青年影響力啟動賽',
    distinction: '入圍複賽・大專組全國前十名',
  },
  {
    category: '文學創作',
    date: 'Mar. 2026',
    title: '2025 年藍花楹創作獎',
    distinction: '小說組首獎',
  },
  {
    category: '校園領導',
    date: 'Jun. 2026 — Present',
    title: 'NYCU LIFE 數碼寶貝社 社長',
    distinction: '國立陽明交通大學',
  },
  {
    category: '獎助學金',
    date: 'Mar. 2026',
    title: '張俊彥校長紀念獎助學金',
    distinction: '國立陽明交通大學',
  },
  {
    category: '文學創作',
    date: 'May 2024',
    title: '第二十屆謝東閔先生紀念文學獎',
    distinction: '散文組貳獎',
  },
  {
    category: '文學創作',
    date: 'Apr. 2024',
    title: '第二十三屆水煙紗漣文學獎',
    distinction: '圖文組參獎',
  },
];

const timeline: TimelineGroup[] = [
  {
    year: '2027',
    items: [
      {
        date: 'Spring',
        category: '交換',
        title: '赴匈牙利羅蘭大學交換',
        organization: 'Eötvös Loránd University・Budapest, Hungary',
        description:
          '通過校內交換甄選，預計於 2027 年春季前往匈牙利布達佩斯進行交換學習',
      },
    ],
  },
  {
    year: '2026',
    items: [
      {
        date: 'Oct.',
        category: '徵文',
        title: '益品書屋 10 週年夏日閱讀祭徵件活動・閱讀金句賞',
        organization: '財團法人戴水教育基金會',
      },
      {
        date: 'Aug. — Present',
        category: '研究',
        title: '國立陽明交通大學人文社會學系 研究獎助生',
        location: '新竹・人類學',
        bullets: [
          '研究計畫：「從櫻花蝦到下雜魚：臺灣近海拖網漁業的價值階序與公共性建構」',
          '計畫主持人：吳映青教授',
        ],
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
        title: '台灣冤獄平反協會 實習生',
        location: '台北・刑事司法／人權倡議',
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
        date: 'Jun. — Present',
        category: '領導',
        title: 'NYCU LIFE 數碼寶貝社 社長',
        organization: '國立陽明交通大學',
        location: '新竹・數位開發',
        bullets: [
          '推動「NYCU LIFE 校園資訊整合平台」專案，致力於改善陽明交大學生所面臨的資訊落差',
        ],
      },
      {
        date: 'Jun. — Jul.',
        category: '工作',
        title: '暑期專案課程工讀學伴',
        organization: '國立臺灣師範大學國語教學中心',
        location: '台北・國際交流',
        bullets: ['帶領美國大學生進行校外教學活動'],
      },
      {
        date: 'May — Aug.',
        category: '公共參與',
        title: '新北文化大使',
        organization: '新北市文化局',
        location: '新北・地方創生／文化推廣',
      },
      {
        date: 'May',
        category: '競賽',
        title: '2026 Impact Star 青年影響力啟動賽・入圍複賽・大專組全國前十名',
        bullets: [
          '出題組織：Teach for Taiwan 為台灣而教',
          '作品名稱：起跑線上的共鳴',
          '指導老師：曾聖凱教授',
        ],
      },
      {
        date: 'Apr.',
        category: '獎學金',
        title: '台北市關渡宮獎助學金',
        organization: '財團法人台北市關渡宮',
      },
      {
        date: 'Mar.',
        category: '文學獎',
        title: '2025 年藍花楹創作獎・小說組首獎',
        organization: '國立陽明交通大學',
      },
      {
        date: 'Mar.',
        category: '獎學金',
        title: '張俊彥校長紀念獎助學金',
        organization: '國立陽明交通大學',
      },
      {
        date: 'Feb. — Aug.',
        category: '交換',
        title: '韓國漢陽大學 線上交換',
        organization: '한양대학교（Hanyang University）',
        description: 'Hanyang Online Pre-Exchange Program',
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
        title: '司法院 114 年度大專校院法治教育創新行動方案競賽・全國銀獎',
        bullets: [
          '作品名稱：「網」顧兒少－我國數位性剝削下的無法可依',
          '指導老師：劉邦揚教授',
        ],
      },
      {
        date: 'Dec.',
        category: '徵文',
        title: '「Stan up！青開麥」 Podcast 節目熱寫徵文活動・獲獎',
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
      },
      {
        date: 'Jun. — Dec.',
        category: '志工',
        title: '惠瑜慈善協會 教學志工',
        location: '線上・教育陪伴／公益服務',
        bullets: ['以線上一對一的形式，為偏鄉弱勢學童提供課後輔導及長期陪伴'],
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
        organization: '實踐大學',
      },
      {
        date: 'Apr.',
        category: '文學獎',
        title: '第二十三屆水煙紗漣文學獎・圖文組參獎',
        organization: '國立暨南國際大學',
      },
      {
        date: 'Mar.',
        category: '志工',
        title: '第 15 屆 336 愛奇兒家庭日 攝影志工',
        organization: '財團法人天使心家族社會福利基金會',
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
  const [language, setLanguage] = usePersistentLanguage();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );

    if (!targets.length) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('reveal-enabled');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  const t = (value: string) => translate(value, language);

  return (
    <main>
      <SiteHeader language={language} onLanguageChange={setLanguage} />

      <section className="hero-section" id="top" aria-labelledby="page-title">
        <div className="shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-label">
                LAW ＆ HUMANITIES AND SOCIAL SCIENCES
              </p>
              <h1 id="page-title">
                {language === 'zh' ? '林雨欣' : 'Yu-Hsin Lin'}
              </h1>
              <p className="english-name">
                {language === 'zh' ? 'Yu-Hsin Lin' : '林雨欣'}
              </p>
              <div className="identity">
                <p>{t('陽明交大百川學士學位學程學生')}</p>
                <p>{t('跨域法律與社會科學領域')}</p>
              </div>
              <p className="hero-summary">
                {t(
                  '我的經歷橫跨人類學、刑事司法與人權倡議、文學創作、法治教育及校園數位服務專案等，累積學術研究、社會創新、政策分析與專案管理等經驗。',
                )}
              </p>
              <p className="hero-location">Based in Hsinchu, Taiwan</p>
              <div className="hero-links" aria-label={t('外部連結')}>
                <a
                  className="hero-icon-link"
                  href="mailto:7777ath@gmail.com"
                  aria-label="Email"
                >
                  <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
                </a>
                <a
                  className="hero-icon-link"
                  href="https://www.linkedin.com/in/yu-hsin-lin-48406a403?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    aria-hidden="true"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.42a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.99H7.1v11.46Z" />
                  </svg>
                </a>
              </div>
            </div>

            <figure className="portrait-wrap">
              <Image
                className="portrait"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/profile.jpeg?v=academic-20260927`}
                alt={t('林雨欣個人照片')}
                width={2113}
                height={3170}
                loading="eager"
              />
            </figure>
          </div>
        </div>
      </section>

      <section
        className="section records-section"
        aria-label={t('學歷與代表性榮耀')}
      >
        <div className="shell records-grid">
          <section
            className="record-card honors-card"
            id="honors"
            aria-labelledby="honors-title"
            data-reveal="section"
          >
            <header className="honors-header">
              <div className="section-kicker">
                <p>HIGHLIGHTS</p>
              </div>
              <h2 id="honors-title">{t('代表性榮耀')}</h2>
              <p className="honors-subtitle">{t('跨年度最具代表性的成果')}</p>
            </header>
            <ul className="honors-list">
              {selectedHonors.map((honor) => (
                <li key={honor.title}>
                  <h3>{t(honor.title)}</h3>
                  <p className="honor-details">
                    <time>{honor.date}</time>
                    <span aria-hidden="true">・</span>
                    <span>{t(honor.distinction)}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="record-card education-card"
            id="education"
            aria-labelledby="education-title"
            data-reveal="section"
          >
            <h2 id="education-title">
              {language === 'en' ? (
                'EDUCATION & EXCHANGE'
              ) : (
                <>
                  EDUCATION <span aria-hidden="true">・</span> 學歷與交換經驗
                </>
              )}
            </h2>
            <div className="academic-list">
              {education.map((entry) => (
                <article
                  className="education-item"
                  key={`${entry.date}-${entry.institution}`}
                >
                  <h3>{t(entry.institution)}</h3>
                  <p className="education-program">{t(entry.program)}</p>
                  <time>{entry.date}</time>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section
        className="section experience-section"
        id="experience"
        aria-labelledby="experience-title"
        data-reveal="section"
      >
        <div className="shell">
          <SectionHeading
            id="experience-title"
            english="EXPERIENCE"
            title={t('經歷年表（2024 至今）')}
          />
          <p className="section-intro">
            {t('由近至遠整理研究、交換、工作、實習、公共參與、獎項與青年培力')}
          </p>

          <div className="timeline">
            {timeline.map((group) => (
              <section
                className="year-group"
                key={group.year}
                aria-labelledby={`year-${group.year}`}
                data-reveal="timeline-group"
              >
                <div className="year-column">
                  <h3 id={`year-${group.year}`}>{group.year}</h3>
                </div>
                <div className="experience-items">
                  {group.items.map((item, itemIndex) => (
                    <article
                      className={`timeline-item${
                        item.location ||
                        item.organization ||
                        item.description ||
                        item.bullets
                          ? ''
                          : ' timeline-item-compact'
                      }`}
                      key={`${group.year}-${item.date}-${item.title}`}
                      style={
                        {
                          '--reveal-delay': `${110 + itemIndex * 75}ms`,
                        } as CSSProperties
                      }
                    >
                      <div className="timeline-meta">
                        <time>{item.date}</time>
                        <span>{t(item.category)}</span>
                      </div>
                      <div className="timeline-content">
                        <h4>{t(item.title)}</h4>
                        {item.location ? (
                          <p className="timeline-location">
                            {t(item.location)}
                          </p>
                        ) : null}
                        {item.organization ? (
                          <p className="organization">{t(item.organization)}</p>
                        ) : null}
                        {item.description ? (
                          <p className="description">{t(item.description)}</p>
                        ) : null}
                        {item.bullets ? (
                          <ul>
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{t(bullet)}</li>
                            ))}
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

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
        data-reveal="section"
      >
        <div className="shell contact-grid">
          <div>
            <p className="contact-eyebrow">CONTACT</p>
            <h2 id="contact-title">{t('歡迎聯繫')}</h2>
            <p>{t('歡迎就研究、專案、公共參與或其他合作機會與我聯繫。')}</p>
          </div>
          <div className="contact-links">
            <a href="mailto:7777ath@gmail.com">
              <span>
                <small>EMAIL</small>7777ath@gmail.com
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yu-hsin-lin-48406a403?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>LINKEDIN</small>Yu-Hsin Lin
              </span>
              <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-location">
              <span>
                <small>BASED IN</small>Hsinchu, Taiwan
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© 2026 Yu-Hsin Lin</p>
          <p className="footer-motto">
            {t('「求知若飢，虛心若愚。」— Steve Jobs')}
          </p>
          <a href="#top">{t('回到頁首 ↑')}</a>
        </div>
      </footer>
    </main>
  );
}
