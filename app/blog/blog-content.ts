import type { Language } from '../language-preference';

export type LocalizedText = {
  zh: string;
  en: string;
};

export type BlogPost = {
  slug: string;
  publishedAt: string;
  displayDate: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  paragraphs: LocalizedText[];
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const blogPosts: BlogPost[] = [
  {
    slug: 'about-this-blog',
    publishedAt: '2026-10-10',
    displayDate: 'Oct. 10, 2026',
    category: {
      zh: '網站札記',
      en: 'Site Notes',
    },
    title: {
      zh: '關於這個 Blog',
      en: 'About This Blog',
    },
    excerpt: {
      zh: '這裡是個人網站的延伸，收錄研究、專案、公共參與與閱讀書寫中的觀察。',
      en: 'An extension of this personal website for notes on research, projects, public engagement, reading, and writing.',
    },
    paragraphs: [
      {
        zh: '這個 Blog 是個人網站的延伸，用來整理研究、專案、公共參與與閱讀書寫中的觀察。',
        en: 'This blog extends the personal website with notes on research, projects, public engagement, reading, and writing.',
      },
      {
        zh: '文章會補充履歷難以完整呈現的議題背景、實作過程與階段性思考。',
        en: 'Posts will add context, working processes, and evolving reflections that are difficult to show fully in a résumé.',
      },
      {
        zh: '內容將不定期更新，並維持簡潔、可閱讀的形式。',
        en: 'New writing will be added periodically in a concise and readable format.',
      },
    ],
  },
];

export function localize(text: LocalizedText, language: Language) {
  return text[language];
}
