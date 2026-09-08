import { Component, OnInit } from '@angular/core';
import { SiteInfo } from '../../core/models/site-info.model';
import { lastValueFrom } from 'rxjs';
import { SiteInfoService } from '../../core/services/site-info.service';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { CvModalComponent } from '../../shared/cv-modal/cv-modal';

import { LanguageService } from '../../core/services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgUrlPipe, CvModalComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  private languageService = inject(LanguageService);
  isCvModalOpen = false;

  readonly t = this.languageService.t;
  readonly currentLang = this.languageService.currentLang;

  siteInfo: SiteInfo = {
    brandName: "Eng. Ibrahim Ahmed Hamada",
    heroTitle: "Software Engineer | QA Tester, Full-Stack Developer & AI Solutions",
    heroDesc: "Software Engineer & QA Automation Tester specialized in test automation (Selenium, Java, Postman), MEAN Stack web application development (Angular, Node.js, Express, MongoDB), and intelligent AI solutions.",
    aboutTitle: "Professional Background & Engineering Portfolio",
    aboutDesc1: "Software Tester and aspiring Full-Stack Web Developer with hands-on experience in manual testing, API testing, database verification, and test automation utilizing Selenium WebDriver, TestNG, and Java. Trained through the Digital Egypt Pioneers Initiative (DEPI - MCIT), National Telecommunication Institute (NTI), and Orange Digital Center.",
    aboutDesc2: "Undergraduate student in the Faculty of Computer Studies, Department of Computer Science at the Arab Open University (AOU). Skilled in designing comprehensive test cases, defect reporting in Jira and Excel, architecting RESTful APIs, and developing robust web applications with the MEAN Stack.",
    academicTitle: "Academic Education & Degrees",
    academicDesc: "Arab Open University (AOU), Faculty of Computer Studies, Department of Computer Science (Sep 2025 - Present) — Pursuing undergraduate studies in Computer Science with a focus on data structures, algorithms, and software engineering.",
    philosophyTitle: "Software Quality & Engineering Standards",
    philosophyDesc: "ISTQB-aligned testing principles, structured SDLC & STLC execution, automated regression validation with Page Object Model, and clean RESTful API architectures with Angular 21 & Node.js.",
    contactTitle: "Get in Touch",
    contactSubtitle: "Available for full-time QA roles, test automation engineering, and custom web development projects.",
    contactEmail: "ibrahima.hamada277@gmail.com",
    phone: "+20 111 254 0997",
    githubUrl: "https://github.com/IbrahimAHamada27",
    linkedinUrl: "https://www.linkedin.com/in/ibrahim-a-hamada-0ba411287/",
    facebookUrl: "https://web.facebook.com/ibrahima.hamada27",
    instagramUrl: "https://www.instagram.com/ibrahim_a._hamada/",
    telegramUrl: "https://t.me/+201112540997",
    whatsappUrl: "https://wa.me/201112540997",
    profileImage: "https://github.com/ibrahimahamada27.png",
    logoImage: "https://github.com/ibrahimahamada27.png"
  };

  constructor(
    private siteInfoService: SiteInfoService
  ) {}

  ngOnInit() {
    this.fetchSiteInfo();
  }

  async fetchSiteInfo() {
    try {
      const response = await lastValueFrom(this.siteInfoService.getSiteInfo());
      if (response && (response.brandName || response.heroTitle)) {
        this.siteInfo = { ...this.siteInfo, ...response };
      }
    } catch (error) {
      console.warn('Using default site info', error);
    }
  }

  openCvModal() {
    this.isCvModalOpen = true;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    window.history.replaceState(null, '', `/${sectionId}`);
  }
}
