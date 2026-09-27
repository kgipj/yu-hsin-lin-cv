'use client';

import { useEffect, useState } from 'react';

const navigation = [
  { id: 'education', label: 'Education' },
  { id: 'honors', label: 'Honors' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function SiteHeader() {
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
        <nav aria-label="主要導覽">
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
      </div>
    </header>
  );
}
