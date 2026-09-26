import type { Metadata } from 'next';
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_TC({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const serif = Noto_Serif_TC({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yu-hsin-lin-cv.racing-fairy-3597.chatgpt.site'),
  title: '林雨欣 Yu-Hsin Lin',
  description: '林雨欣的個人履歷網站：法律、人文社會研究、公共參與與校園服務。',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: '/',
    title: '林雨欣 Yu-Hsin Lin',
    description: '法律・人文社會研究・公共參與',
    images: [
      {
        url: 'https://yu-hsin-lin-cv.racing-fairy-3597.chatgpt.site/og.png',
        width: 1200,
        height: 630,
        alt: '林雨欣 Yu-Hsin Lin 個人履歷網站',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '林雨欣 Yu-Hsin Lin',
    description: '法律・人文社會研究・公共參與',
    images: ['https://yu-hsin-lin-cv.racing-fairy-3597.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
