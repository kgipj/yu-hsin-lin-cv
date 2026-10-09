import type { Metadata } from 'next';
import ArticlePage from './article-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: '關於這個 Blog｜林雨欣 Yu-Hsin Lin',
  description: '個人網站 Blog 的用途與內容說明。',
  alternates: {
    canonical: '/blog/about-this-blog.html',
  },
};

export default function Page() {
  return <ArticlePage />;
}
