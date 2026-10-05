import type { Metadata } from 'next';
import { Geist, Noto_Sans_TC } from 'next/font/google';
import './globals.css';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

const sans = Noto_Sans_TC({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://yu-hsin-lin-cv.kgipj.chatgpt.site';

const themeInitScript = `
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.dataset.theme = 'dark';
    }
  } catch {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '林雨欣 Yu-Hsin Lin',
  description:
    '我的經歷橫跨人類學、刑事司法與人權倡議、文學創作、法治教育及校園數位服務專案等，累積學術研究、社會創新、政策分析與專案管理等經驗。',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geist.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
