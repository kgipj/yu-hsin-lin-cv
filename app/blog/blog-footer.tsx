import type { Language } from '../home-page';
import { basePath } from './blog-content';

export default function BlogFooter({ language }: { language: Language }) {
  return (
    <footer className="site-footer blog-footer">
      <div className="shell footer-inner">
        <p>© 2026 Yu-Hsin Lin</p>
        <a href={`${basePath}/#top`}>
          {language === 'zh' ? '返回個人履歷 ↑' : 'Back to CV ↑'}
        </a>
      </div>
    </footer>
  );
}
