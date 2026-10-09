import type { Metadata } from 'next';
import BlogPage from './blog-page';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog｜林雨欣 Yu-Hsin Lin',
  description: '研究、專案、公共參與與閱讀書寫中的觀察與反思。',
  alternates: {
    canonical: '/blog.html',
  },
};

export default function Page() {
  return <BlogPage />;
}
