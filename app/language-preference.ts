'use client';

import { useEffect, useState } from 'react';

export type Language = 'zh' | 'en';

const languageStorageKey = 'yu-hsin-lin-cv-language';

export function usePersistentLanguage() {
  const [language, setLanguage] = useState<Language>('zh');
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    try {
      const savedLanguage = window.localStorage.getItem(languageStorageKey);

      if (savedLanguage === 'zh' || savedLanguage === 'en') {
        setLanguage(savedLanguage);
      }
    } catch {
      // Keep the default language when browser storage is unavailable.
    }

    setHasLoadedPreference(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-Hant';

    if (!hasLoadedPreference) {
      return;
    }

    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
      // The current page still switches language even if storage is unavailable.
    }
  }, [hasLoadedPreference, language]);

  return [language, setLanguage] as const;
}
