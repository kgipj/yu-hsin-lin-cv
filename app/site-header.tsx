'use client';

import { useEffect, useState } from 'react';
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

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={() => setActiveSection('')}>
          {language === 'zh' ? '林雨欣' : 'Yu-Hsin Lin'}
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
