import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SiteInfoService } from './core/services/site-info.service';
import { SeoService } from './core/services/seo.service';
import { ToastComponent } from './shared/toast/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private siteInfoService: SiteInfoService,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    this.seoService.initRouteListener();
    this.fetchSiteInfo();
  }

  fetchSiteInfo() {
    this.siteInfoService.getSiteInfo().subscribe({
      next: (siteInfo) => {
        if (siteInfo.brandName) {
          this.titleService.setTitle(siteInfo.brandName);
        }

        if (siteInfo.logoImage) {
          let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
          }
          link.href = siteInfo.logoImage;
        }
      },
      error: (error) => {
        console.error('Failed to fetch site info for tab', error);
      }
    });
  }
}
