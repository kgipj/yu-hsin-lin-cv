'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#research', label: 'Research' },
  { href: '#experience', label: 'Experience' },
  { href: '#honors', label: 'Honors' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: '-28% 0px -58%', threshold: [0.08, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="回到首頁" onClick={() => setOpen(false)}>
        <span>林雨欣</span>
        <small>YU-HSIN LIN</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? '關閉導覽選單' : '開啟導覽選單'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={open ? 'is-open' : ''} aria-label="主要導覽">
        {links.map((link) => {
          const id = link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              className={active === id ? 'is-active' : ''}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
