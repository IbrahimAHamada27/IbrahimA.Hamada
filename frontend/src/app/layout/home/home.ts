import { Component, OnInit } from '@angular/core';
import { SiteInfo } from '../../core/models/site-info.model';
import { lastValueFrom } from 'rxjs';
import { SiteInfoService } from '../../core/services/site-info.service';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { CvModalComponent } from '../../shared/cv-modal/cv-modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgUrlPipe, CvModalComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  isCvModalOpen = false;

  siteInfo: SiteInfo = {
    brandName: "Ibrahim A. Hamada",
    heroTitle: "Software Tester & Aspiring Full-Stack Web Developer",
    heroDesc: "Software Tester and Aspiring Full-Stack Web Developer with practical experience in Manual Testing, API Testing, Database Testing, and Test Automation using Selenium, TestNG, and Java. DEPI Graduate, NTI MEAN Stack Graduate, and AOU CS student with expertise spanning software quality assurance and full-stack MEAN development (MongoDB, Express.js, Angular 21, Node.js).",
    aboutTitle: "Professional Summary & Background",
    aboutDesc1: "Software Tester and Aspiring Full-Stack Web Developer with practical experience in Manual Testing, API Testing, Database Testing, and Test Automation using Selenium, TestNG, and Java. Trained through DEPI (Ministry of Communications and Information Technology), Orange Digital Center, and NTI programs, with expertise spanning software quality assurance and MEAN Stack development (MongoDB, Express.js, Angular 21, Node.js).",
    aboutDesc2: "Skilled in designing structured test cases, reporting defects via Jira and Excel, building secure RESTful APIs, and developing modern, responsive web applications. Eager to contribute to innovative engineering teams while continuously expanding technical and professional capabilities.",
    academicTitle: "Academic Education & Degrees",
    academicDesc: "Arab Open University (AOU), Faculty of Computer Studies, Department of Computer Science (Sep 2025 - Present) — Pursuing second-year undergraduate studies in Computer Science.",
    philosophyTitle: "Software Quality & Engineering Standards",
    philosophyDesc: "ISTQB-aligned testing principles, structured SDLC & STLC execution, automated regression validation with Page Object Model, and clean RESTful API architectures with Angular 21 & Node.js.",
    contactTitle: "Get in Touch",
    contactSubtitle: "Available for Software Testing, QA Automation, and MEAN Stack Web Development opportunities.",
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

  constructor(private siteInfoService: SiteInfoService) {}

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
