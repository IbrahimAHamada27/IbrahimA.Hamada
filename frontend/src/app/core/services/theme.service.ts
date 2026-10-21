import { Injectable, signal } from '@angular/core';

export type AppTheme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly currentTheme = signal<AppTheme>('dark');
  readonly isDark = signal<boolean>(true);

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('theme') as AppTheme | null;
    // Default to dark mode for modern executive feel, or respect user preference
    const initialTheme: AppTheme = saved === 'light' ? 'light' : 'dark';
    this.applyTheme(initialTheme);
  }

  toggleTheme(): void {
    const next: AppTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  setTheme(theme: AppTheme): void {
    this.applyTheme(theme);
  }

  private applyTheme(theme: AppTheme): void {
    this.currentTheme.set(theme);
    const isDark = theme === 'dark';
    this.isDark.set(isDark);

    if (typeof document !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);

      if (isDark) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
      }
    }
  }
}
