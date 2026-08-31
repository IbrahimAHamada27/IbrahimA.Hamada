import { Component, OnInit } from '@angular/core';
import { SiteInfo } from '../../core/models/site-info.model';
import { lastValueFrom } from 'rxjs';
import { SiteInfoService } from '../../core/services/site-info.service';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  siteInfo: SiteInfo = {
    brandName: "Ibrahim A. Hamada",
    heroTitle: "QA Automation Engineer & Full-Stack Web Developer",
    heroDesc: "Passionate about software quality, test automation, manual testing, API validation with Postman, and building scalable web applications with the MEAN Stack (Angular 18, Node.js, Express, MongoDB). DEPI Graduate, NTI Trainee, and AOU CS student.",
    aboutTitle: "Engineering Background & Quality Philosophy",
    aboutDesc1: "Software Tester and Full-Stack Web Developer with hands-on experience in manual exploratory testing, TestNG/Selenium test frameworks, API validation, and modern web application development. Trained through MCIT Digital Egypt Pioneers Initiative (DEPI), Orange Digital Center, and National Telecommunication Institute (NTI).",
    aboutDesc2: "Proficient in formulating test plans, boundary value analysis, tracking defect lifecycles, and engineering clean RESTful APIs. Dedicated to delivering reliable, bug-free software and continuous technical growth.",
    academicTitle: "Academic & Professional Journey",
    academicDesc: "Undergraduate in Computer Science at Arab Open University (AOU), DEPI Software Testing Specialist, and NTI MEAN Stack Web Developer Career Accelerator graduate.",
    philosophyTitle: "Software Quality & Testing Mindset",
    philosophyDesc: "Believing that QA is not just about finding bugs, but designing maintainable, resilient architectures with automated test coverage from unit to end-to-end user journeys.",
    contactTitle: "Get in Touch",
    contactSubtitle: "Available for QA testing, automation engineering, or full-stack web development roles & projects.",
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
