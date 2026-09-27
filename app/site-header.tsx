'use client';

import { useEffect, useState } from 'react';
import type { Language } from './page';

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
          Yu-Hsin Lin
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
          <div className="language-toggle" role="group" aria-label="Language selection">
            <button
              className={`language-option${language === 'en' ? ' active' : ''}`}
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              aria-label="English"
            >
              EN
            </button>
            <span aria-hidden="true"> / </span>
            <button
              className={`language-option${language === 'zh' ? ' active' : ''}`}
              type="button"
              onClick={() => onLanguageChange('zh')}
              aria-pressed={language === 'zh'}
              aria-label="中文"
            >
              中
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
