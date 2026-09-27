'use client';

import { useEffect, useState } from 'react';
import type { Language } from './page';

const navigation = [
  { id: 'honors', en: 'Honors', zh: '榮耀' },
  { id: 'education', en: 'Education', zh: '學歷' },
  { id: 'experience', en: 'Experience', zh: '經歷' },
  { id: 'contact', en: 'Contact', zh: '聯絡' },
];

export default function SiteHeader({
  language,
  onLanguageChange,
}: {
  language: Language;
  onLanguageChange: (language: Language) => void;
}) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
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
    <header className="site-header">
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
                {item[language]}
              </a>
            ))}
          </nav>
          <button
            className="language-toggle"
            type="button"
            onClick={() => onLanguageChange(language === 'zh' ? 'en' : 'zh')}
            aria-label={language === 'zh' ? 'Switch to English' : 'Switch to Chinese'}
            title={language === 'zh' ? 'Switch to English' : 'Switch to Chinese'}
          >
            <span className={language === 'en' ? 'active' : undefined}>EN</span>
            <span aria-hidden="true"> / </span>
            <span className={language === 'zh' ? 'active' : undefined}>中</span>
          </button>
        </div>
      </div>
    </header>
  );
}
