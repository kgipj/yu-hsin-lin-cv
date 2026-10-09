'use client';

import { usePersistentLanguage } from '../language-preference';
import SiteHeader from '../site-header';
import { withSiteVersion } from '../site-version';
import BlogFooter from './blog-footer';
import { basePath, blogPosts, localize } from './blog-content';

export default function BlogPage() {
  const [language, setLanguage] = usePersistentLanguage();

  return (
    <main>
      <SiteHeader
        language={language}
        onLanguageChange={setLanguage}
        currentPage="blog"
      />

      <section className="blog-hero" aria-labelledby="blog-title">
        <div className="shell blog-hero-inner">
          <p className="blog-kicker">BLOG</p>
          <h1 id="blog-title">{language === 'zh' ? '文章與札記' : 'Notes & Essays'}</h1>
          <p>
            {language === 'zh'
              ? '收錄研究、專案、公共參與與閱讀書寫中的觀察與反思。'
              : 'Notes on research, projects, public engagement, reading, and writing.'}
          </p>
        </div>
      </section>

      <section className="blog-index" aria-label={language === 'zh' ? '文章列表' : 'Posts'}>
        <div className="shell">
          <ol className="blog-list">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <a
                  className="blog-post-link"
                  href={withSiteVersion(`${basePath}/blog/${post.slug}.html`)}
                >
                  <span className="blog-post-copy">
                    <span className="blog-post-category">
                      {localize(post.category, language)}
                    </span>
                    <span className="blog-post-title">{localize(post.title, language)}</span>
                    <span className="blog-post-excerpt">
                      {localize(post.excerpt, language)}
                    </span>
                  </span>
                  <span className="blog-post-meta">
                    <time dateTime={post.publishedAt}>{post.displayDate}</time>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <BlogFooter language={language} />
    </main>
  );
}
