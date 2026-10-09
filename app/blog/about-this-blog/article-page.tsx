'use client';

import { usePersistentLanguage } from '../../language-preference';
import SiteHeader from '../../site-header';
import { withSiteVersion } from '../../site-version';
import BlogFooter from '../blog-footer';
import { basePath, blogPosts, localize } from '../blog-content';

const post = blogPosts.find((entry) => entry.slug === 'about-this-blog')!;

export default function ArticlePage() {
  const [language, setLanguage] = usePersistentLanguage();

  return (
    <main>
      <SiteHeader
        language={language}
        onLanguageChange={setLanguage}
        currentPage="blog"
      />

      <article className="blog-article">
        <div className="shell blog-article-shell">
          <a className="blog-back-link" href={withSiteVersion(`${basePath}/blog.html`)}>
            <span aria-hidden="true">←</span>
            {language === 'zh' ? '返回文章列表' : 'Back to all posts'}
          </a>

          <header className="blog-article-header">
            <p className="blog-kicker">{localize(post.category, language)}</p>
            <h1>{localize(post.title, language)}</h1>
            <time dateTime={post.publishedAt}>{post.displayDate}</time>
          </header>

          <div className="blog-prose">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.zh}>{localize(paragraph, language)}</p>
            ))}
          </div>
        </div>
      </article>

      <BlogFooter language={language} />
    </main>
  );
}
