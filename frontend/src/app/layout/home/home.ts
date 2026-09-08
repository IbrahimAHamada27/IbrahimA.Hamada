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
    brandName: "Eng. Ibrahim Ahmed Hamada",
    heroTitle: "Software Engineer | QA Tester, Full-Stack Developer & AI Solutions",
    heroDesc: "Portfolio المهندس إبراهيم أحمد حمادة — مهندس برمجيات واختبار جودة (تيستر QA Automation & Manual Testing) متخصص في تصميم وتطوير المواقع والأنظمة الهندسية المتكاملة (فرونت اند Frontend، باك اند Backend) بتقنيات MEAN Stack وحلول الذكاء الاصطناعي AI.",
    aboutTitle: "Professional Background & Engineering Portfolio",
    aboutDesc1: "مهندس برمجيات واختبار جودة برمجيات (QA Tester & Web Developer) حاصل على تدريب مكثف من مبادرة DEPI (وزارة الاتصالات وتكنولوجيا المعلومات) ومعهد NTI وOrange Digital Center، وطالب علوم الحاسب بالجامعة العربية المفتوحة AOU. متخصص في تصميم سايت احترافي، هندسة وتطوير الفرونت اند والباك اند (Angular 21, Express, Node.js, MongoDB)، وأتمتة الاختبارات عبر Selenium و TestNG و Java و Postman.",
    aboutDesc2: "متمرس في إدارة وتنفيذ المشاريع الهندسية البرمجية، إعداد وتوثيق حالات الاختبار (Test Cases & Bug Reports)، بناء واجهات الـ RESTful API، وتطبيق أفضل معايير ISTQB وحلول الذكاء الاصطناعي (AI) لضمان موثوقية الأنظمة.",
    academicTitle: "Academic Education & Degrees",
    academicDesc: "Arab Open University (AOU), Faculty of Computer Studies, Department of Computer Science (Sep 2025 - Present) — Pursuing undergraduate studies in Computer Science with focus on Software Engineering & Quality.",
    philosophyTitle: "Software Quality & Engineering Standards",
    philosophyDesc: "ISTQB-aligned testing principles, structured SDLC & STLC execution, automated regression validation with Page Object Model, and clean RESTful API architectures with Angular 21 & Node.js.",
    contactTitle: "Get in Touch",
    contactSubtitle: "متاح للمشاريع الهندسية، استشارات فحص جودة البرمجيات (تيستر)، تصميم سايت، وتطوير أنظمة الفرونت اند والباك اند والـ AI.",
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
