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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '林雨欣 Yu-Hsin Lin',
  description: '林雨欣的個人履歷網站：法律、人文社會研究、公共參與與校園服務。',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geist.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
