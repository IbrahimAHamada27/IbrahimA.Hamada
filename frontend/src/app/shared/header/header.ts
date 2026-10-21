import { Component, OnInit, HostListener, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { SiteInfo } from '../../core/models/site-info.model';
import { SiteInfoService } from '../../core/services/site-info.service';
import { ImgUrlPipe } from '../pipes/img-url.pipe';

import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ImgUrlPipe],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);
  isMobileMenuOpen = false;
  siteInfo: SiteInfo = {};
  activeSection = 'home';

  readonly t = this.languageService.t;
  readonly isRtl = this.languageService.isRtl;

  get isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  constructor(
    private siteInfoService: SiteInfoService
  ) {}

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  ngOnInit() {
    this.fetchSiteInfo();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    let current = 'home';
    sections.forEach((section: any) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 220)) {
        current = section.getAttribute('id') || 'home';
      }
    });
    this.activeSection = current;
  }

  fetchSiteInfo() {
    this.siteInfoService.getSiteInfo().subscribe({
      next: (data) => {
        this.siteInfo = data;
        const iconUrl = data.logoImage || data.profileImage || 'https://github.com/ibrahimahamada27.png';
        this.updateFavicon(iconUrl);
      },
      error: (error) => {
        console.error('Failed to fetch site info', error);
        this.updateFavicon('https://github.com/ibrahimahamada27.png');
      }
    });
  }

  updateFavicon(iconUrl: string) {
    if (!iconUrl) return;
    const finalUrl = iconUrl.startsWith('/uploads/') ? `${environment.apiUrl}${iconUrl}` : iconUrl;
    let links = document.querySelectorAll("link[rel*='icon']");
    if (links.length > 0) {
      links.forEach((link: any) => {
        link.href = finalUrl;
      });
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = finalUrl;
      document.head.appendChild(link);
    }
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
    window.history.replaceState(null, '', `/${sectionId}`);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
