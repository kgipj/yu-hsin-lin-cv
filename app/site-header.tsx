'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Language } from './home-page';

const navigation = [
  { id: 'honors', label: 'Honors' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function SiteHeader({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 4);

      const marker = window.scrollY + 160;
      let current = '';

      navigation.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
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
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem('theme', nextTheme);
    } catch {
      // Keep the toggle functional when storage is unavailable.
    }
  };

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={() => setActiveSection('')}>
          <span>林雨欣</span>
          <span>Yu-Hsin Lin</span>
        </a>
        <div className="header-actions">
          <nav aria-label={language === 'en' ? 'Primary navigation' : '主要導覽'}>
            {navigation.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                className={activeSection === item.id ? 'active' : undefined}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-controls">
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
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={language === 'zh' ? '切換深色或淺色模式' : 'Toggle light or dark mode'}
              title={language === 'zh' ? '切換明暗模式' : 'Toggle theme'}
            >
              <Moon className="theme-icon theme-icon-moon" aria-hidden="true" size={14} strokeWidth={1.9} />
              <Sun className="theme-icon theme-icon-sun" aria-hidden="true" size={14} strokeWidth={1.9} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
