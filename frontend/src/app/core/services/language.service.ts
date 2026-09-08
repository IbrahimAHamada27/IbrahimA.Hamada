import { Injectable, signal, computed, inject } from '@angular/core';
import { TRANSLATIONS, TranslationSchema } from '../i18n/translations';
import { SeoService } from './seo.service';

export type SupportedLanguage = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private seoService = inject(SeoService);

  // ALWAYS initialize in English by default as required
  readonly currentLang = signal<SupportedLanguage>('en');

  // Reactive translation dictionary
  readonly t = computed<TranslationSchema>(() => TRANSLATIONS[this.currentLang()]);

  // Is RTL boolean signal
  readonly isRtl = computed<boolean>(() => this.currentLang() === 'ar');

  constructor() {
    // ALWAYS open in English first unconditionally as strictly requested: "عاوزك تظبط ان السايت يفتح انجليزي الاول ديما"
    this.applyLanguage('en', false);
  }

  setLanguage(lang: SupportedLanguage): void {
    if (this.currentLang() === lang) return;
    this.applyLanguage(lang, true);
  }

  toggleLanguage(): void {
    const nextLang: SupportedLanguage = this.currentLang() === 'en' ? 'ar' : 'en';
    this.applyLanguage(nextLang, true);
  }

  private applyLanguage(lang: SupportedLanguage, persist: boolean): void {
    this.currentLang.set(lang);

    if (persist) {
      localStorage.setItem('user_lang', lang);
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

      if (lang === 'ar') {
        document.body.classList.add('rtl-mode');
        document.body.classList.remove('ltr-mode');
      } else {
        document.body.classList.add('ltr-mode');
        document.body.classList.remove('rtl-mode');
      }
    }

    // Inform SeoService of language change
    this.seoService.onLanguageChange(lang);
  }
}
