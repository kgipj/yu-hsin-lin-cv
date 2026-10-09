'use client';

import { useEffect, useState } from 'react';
import type { Language } from './home-page';
import { withSiteVersion } from './site-version';

const resumeSections = ['honors', 'education', 'experience'];
const trackedSections = [...resumeSections, 'contact'];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function SiteHeader({
  language,
  onLanguageChange,
  currentPage = 'home',
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
  currentPage?: 'home' | 'blog';
}) {
  const [activeSection, setActiveSection] = useState(currentPage === 'blog' ? 'blog' : '');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 4);

      if (currentPage === 'blog') {
        setActiveSection('blog');
        frame = 0;
        return;
      }

      const marker = window.scrollY + 160;
      let current = '';

      trackedSections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          current = resumeSections.includes(id) ? 'resume' : id;
        }
      });

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = 'contact';
      }

      setActiveSection(current);
      frame = 0;
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    frame = window.requestAnimationFrame(updateActiveSection);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [currentPage]);

  const homeHref = `${basePath}/`;
  const blogHref = withSiteVersion(`${basePath}/blog.html`);

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a
          className="brand"
          href={currentPage === 'home' ? '#top' : `${homeHref}#top`}
          onClick={() => setActiveSection('')}
        >
          <span>林雨欣</span>
          <span>Yu-Hsin Lin</span>
        </a>
        <div className="header-actions">
          <nav aria-label={language === 'en' ? 'Primary navigation' : '主要導覽'}>
            <a
              href={currentPage === 'home' ? '#honors' : `${homeHref}#honors`}
              className={activeSection === 'resume' ? 'active' : undefined}
              aria-current={activeSection === 'resume' ? 'location' : undefined}
              onClick={() => setActiveSection('resume')}
            >
              Resume
            </a>
            <a
              href={blogHref}
              className={activeSection === 'blog' ? 'active' : undefined}
              aria-current={activeSection === 'blog' ? 'page' : undefined}
              onClick={() => setActiveSection('blog')}
            >
              Blog
            </a>
            <a
              href={currentPage === 'home' ? '#contact' : `${homeHref}#contact`}
              className={activeSection === 'contact' ? 'active' : undefined}
              aria-current={activeSection === 'contact' ? 'location' : undefined}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </a>
          </nav>
          <div className="language-toggle">
            <button
              className="language-option"
              type="button"
              onClick={() => onLanguageChange(language === 'zh' ? 'en' : 'zh')}
              aria-label={language === 'zh' ? 'Switch to English' : '切換至中文'}
            >
              {language === 'zh' ? 'EN' : '中'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
