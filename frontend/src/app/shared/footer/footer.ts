import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteInfo } from '../../core/models/site-info.model';
import { SiteInfoService } from '../../core/services/site-info.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent implements OnInit {
  siteInfo: SiteInfo = {
    brandName: 'Eng. Ibrahim Ahmed Hamada',
    contactEmail: 'ibrahima.hamada277@gmail.com',
    phone: '+20 111 254 0997',
    linkedinUrl: 'https://www.linkedin.com/in/ibrahim-a-hamada-0ba411287/',
    githubUrl: 'https://github.com/IbrahimAHamada27',
    facebookUrl: 'https://web.facebook.com/ibrahima.hamada27',
    instagramUrl: 'https://www.instagram.com/ibrahim_a._hamada/',
    telegramUrl: 'https://t.me/+201112540997',
    whatsappUrl: 'https://wa.me/201112540997'
  };

  constructor(private siteInfoService: SiteInfoService) {}

  ngOnInit() {
    this.fetchSiteInfo();
  }

  fetchSiteInfo() {
    this.siteInfoService.getSiteInfo().subscribe({
      next: (response) => {
        if (response && response.brandName) {
          this.siteInfo = { ...this.siteInfo, ...response };
        }
      },
      error: (error) => {
        console.warn('Using default footer info', error);
      }
    });
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }
}
