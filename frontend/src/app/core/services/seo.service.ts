import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface RouteSeo {
  title: string;
  description: string;
  keywords: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseUrl = 'https://www.eng-ibrahim-a-hamada.website';
  private currentLanguage: 'en' | 'ar' = 'en';
  private currentPath = '';

  private readonly routeMetaMapEn: Record<string, RouteSeo> = {
    '': {
      title: 'Eng. Ibrahim Ahmed Hamada | Software Engineer, QA Tester & Web Developer Portfolio',
      description: 'Official portfolio of Eng. Ibrahim Ahmed Hamada - Software Engineer & QA Automation Tester. Specializing in Selenium WebDriver, Java, Postman API testing, MEAN Stack web development (Angular, Node.js, MongoDB), and AI solutions.',
      keywords: 'Eng Ibrahim Ahmed Hamada, Software Engineer, QA Tester, Automation Testing, Selenium WebDriver, Java, Postman, API Testing, Full Stack Developer, MEAN Stack, Angular, Node.js, Express, MongoDB, Web Development, Portfolio'
    },
    'home': {
      title: 'Eng. Ibrahim Ahmed Hamada | Software Engineer, QA Tester & Web Developer Portfolio',
      description: 'Official portfolio of Eng. Ibrahim Ahmed Hamada - Software Engineer & QA Automation Tester. Specializing in Selenium WebDriver, Java, Postman API testing, MEAN Stack web development (Angular, Node.js, MongoDB), and AI solutions.',
      keywords: 'Eng Ibrahim Ahmed Hamada, Software Engineer, QA Tester, Automation Testing, Selenium WebDriver, Java, Postman, API Testing, Full Stack Developer, MEAN Stack, Angular, Node.js, Express, MongoDB, Web Development, Portfolio'
    },
    'about': {
      title: 'About Me | Eng. Ibrahim Ahmed Hamada - Software Engineer & QA Tester',
      description: 'Discover the professional background, engineering expertise, and career journey of Eng. Ibrahim Ahmed Hamada in software quality assurance and full-stack web development.',
      keywords: 'About Ibrahim Hamada, Software Engineer, QA Tester, Computer Science AOU, DEPI, NTI, Software Quality'
    },
    'services': {
      title: 'Professional Services | QA Automation, API Testing & Full-Stack Development - Eng. Ibrahim Hamada',
      description: 'Comprehensive software engineering services: Selenium automated testing, Postman API collections, manual QA (ISTQB), MEAN Stack web apps, restaurant QR menus, and AI web solutions.',
      keywords: 'Software QA Services, Automation Testing, API Testing, Web Development, MEAN Stack, Angular, Node.js, Test Automation'
    },
    'projects': {
      title: 'Featured Projects & QA Work | Eng. Ibrahim Ahmed Hamada Portfolio',
      description: 'Showcasing real-world engineering projects: e-commerce automation frameworks, commercial web platforms, RESTful API testing suites, and responsive web applications.',
      keywords: 'Engineering Projects, QA Automation Frameworks, Selenium Java, Postman API Testing, Web Applications, Portfolio Projects'
    },
    'skills': {
      title: 'Technical Skills & Stack | QA Tools, Programming & Web - Eng. Ibrahim Hamada',
      description: 'Technical proficiencies: Java, JavaScript, TypeScript, Angular, Node.js, MongoDB, Selenium WebDriver, TestNG, Postman, Jira Xray, SDLC, STLC, and AI prompt engineering.',
      keywords: 'Technical Skills, Selenium WebDriver, Java, Angular, Node.js, Postman, QA Tools, Full Stack Developer'
    },
    'experience': {
      title: 'Professional Experience | QA Engineering & Web Development - Eng. Ibrahim Hamada',
      description: 'Hands-on experience in test automation frameworks, commercial web applications, RESTful API testing, and ISTQB-aligned quality assurance.',
      keywords: 'Professional Experience, Test Automation Engineer, Web Developer, E-Commerce Testing, QA Work History'
    },
    'education': {
      title: 'Education & Specialized Tracks | AOU, NTI & DEPI - Eng. Ibrahim Hamada',
      description: 'Academic computer science education at Arab Open University (AOU) and specialized accelerators by NTI, DEPI (MCIT), and Orange Digital Center.',
      keywords: 'Education, Arab Open University, Computer Science, NTI MEAN Stack, DEPI Software Testing, Orange Digital Center'
    },
    'certificates': {
      title: 'Verified Certificates & Credentials | Eng. Ibrahim Ahmed Hamada',
      description: 'Accredited certifications in test automation, software testing fundamentals (ISTQB), and modern full-stack web development.',
      keywords: 'Certifications, ISTQB, Selenium, Postman, NTI Certificate, DEPI Certificate, Credentials'
    },
    'activities': {
      title: 'Leadership & Extracurricular Activities | Eng. Ibrahim Ahmed Hamada',
      description: 'Leadership and technical community contributions: Microsoft Student Club (MSC) Tech Team at AOU and NASA Space Apps Challenge Logistics Lead.',
      keywords: 'Activities, Microsoft Student Club, NASA Space Apps Challenge, Leadership, Community Volunteering'
    },
    'contact': {
      title: 'Contact | Get in Touch with Eng. Ibrahim Ahmed Hamada',
      description: 'Connect with Eng. Ibrahim Ahmed Hamada for QA test automation roles, full-stack web development projects, or technical consultations.',
      keywords: 'Contact Ibrahim Hamada, Hire QA Engineer, Hire Web Developer, Software Engineering Consultation'
    },
    'privacy-policy': {
      title: 'Privacy Policy | Eng. Ibrahim Ahmed Hamada Portfolio',
      description: 'Privacy policy for Eng. Ibrahim Ahmed Hamada portfolio website. Protecting visitor inquiries and contact data.',
      keywords: 'Privacy Policy, Data Protection, Terms of Use'
    }
  };

  private readonly routeMetaMapAr: Record<string, RouteSeo> = {
    '': {
      title: 'المهندس إبراهيم أحمد حمادة | مهندس برمجيات، تيستر فاحص جودة ومطور ويب',
      description: 'الموقع الرسمي وبورتفوليو المهندس إبراهيم أحمد حمادة (Eng. Ibrahim A. Hamada) - مهندس برمجيات وتطوير ويب متكامل (فرونت اند Frontend، باك اند Backend) وفحص جودة البرمجيات (تيستر QA Tester). تصميم سايت، مشاريع هندسية، وحلول برمجية ذكية AI.',
      keywords: 'مهندس إبراهيم أحمد حمادة, Eng. Ibrahim Ahmed Hamada, تصميم سايت, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية, استشارات هندسية, Angular, Node.js, QA Tester, Selenium, Postman, Full Stack Developer'
    },
    'home': {
      title: 'المهندس إبراهيم أحمد حمادة | مهندس برمجيات، تيستر فاحص جودة ومطور ويب',
      description: 'الموقع الرسمي وبورتفوليو المهندس إبراهيم أحمد حمادة - هندسة البرمجيات، تصميم سايت متكامل، تطوير واجهات فرونت اند وأنظمة باك اند، فحص واختبار البرمجيات كـ تيستر متخصص، وحلول الـ AI والمشاريع الهندسية.',
      keywords: 'مهندس إبراهيم أحمد حمادة, تصميم سايت, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية, استشارات هندسية, بورتفوليو'
    },
    'about': {
      title: 'نبذة عني | م. إبراهيم أحمد حمادة - مهندس برمجيات وتطوير ويب وQA Tester',
      description: 'نبذة عن المهندس إبراهيم أحمد حمادة: خبرة في هندسة البرمجيات، تصميم سايت، تطوير فرونت اند وباك اند، وفحص جودة البرمجيات (تيستر QA) بأعلى المعايير الهندسية ومعايير ISTQB.',
      keywords: 'مهندس إبراهيم أحمد حمادة, About, نبذة شخصية, تصميم سايت, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية'
    },
    'services': {
      title: 'الخدمات الهندسية | خدمات تصميم سايت، فرونت اند، باك اند، تيستر، AI - م. إبراهيم حمادة',
      description: 'خدمات هندسية متكاملة يقدمها المهندس إبراهيم أحمد حمادة: تصميم سايت احترافي، تطوير فرونت اند Front-End، تطوير باك اند Back-End وقواعد بيانات، خدمات فحص واختبار الأنظمة (تيستر QA Automation)، وتطبيقات الذكاء الاصطناعي AI.',
      keywords: 'خدمات برمجية, تصميم سايت, تصميم مواقع, فرونت اند, باك اند, تيستر, اختبار برمجيات, QA Automation, Selenium, APIs, حلول AI, مشاريع هندسية'
    },
    'projects': {
      title: 'المشاريع الهندسية | مشاريع تصميم سايت، فرونت اند، باك اند، تيستر، AI',
      description: 'معرض المشاريع الهندسية للمهندس إبراهيم أحمد حمادة: أعمال تصميم سايت كامل، مشاريع فرونت اند، أنظمة باك اند، مشاريع فحص جودة كـ تيستر (Selenium & Postman)، وحلول الذكاء الاصطناعي AI.',
      keywords: 'مشاريع هندسية, معرض أعمال, تصميم سايت, مشاريع فرونت اند, مشاريع باك اند, تيستر, اختبارات مؤتمتة, Selenium Java, AI Projects'
    },
    'skills': {
      title: 'المهارات التقنية | مهارات فرونت اند، باك اند، تيستر، AI - م. إبراهيم حمادة',
      description: 'المهارات التقنية للمهندس إبراهيم أحمد حمادة: فرونت اند (Angular 21, TypeScript, HTML/CSS)، باك اند (Node.js, Express, MongoDB)، تيستر (Selenium, TestNG, Java, Postman)، وتكاملات الذكاء الاصطناعي AI.',
      keywords: 'مهارات برمجية, فرونت اند, باك اند, تيستر, أدوات فحص, Angular, Node.js, Java, Selenium, Postman, AI tools'
    },
    'experience': {
      title: 'الخبرات المهنية | الخبرات العملية والهندسية - م. إبراهيم أحمد حمادة',
      description: 'سجل الخبرات المهنية والعملية للمهندس إبراهيم أحمد حمادة في فحص واختبار الأنظمة (تيستر QA)، تصميم سايت وتطوير فرونت اند وباك اند، وتنفيذ مشاريع هندسية تجارية.',
      keywords: 'خبرات مهنية, مشاريع سابقة, تيستر, تصميم سايت, فرونت اند, باك اند, مشاريع هندسية, QA Engineer'
    },
    'education': {
      title: 'التعليم والتدريب | المسار الأكاديمي والشهادات - م. إبراهيم أحمد حمادة',
      description: 'التعليم الأكاديمي للمهندس إبراهيم أحمد حمادة في علوم الحاسب بالجامعة العربية المفتوحة AOU، والتدريب المكثف بمبادرة DEPI و NTI في فحص البرمجيات وتطوير الويب.',
      keywords: 'تعليم حاسبات, الجامعة العربية المفتوحة, AOU, DEPI, NTI, شهادات هندسية, تيستر, فرونت اند, باك اند'
    },
    'certificates': {
      title: 'الشهادات المعتمدة | الشهادات والاعتمادات - م. إبراهيم أحمد حمادة',
      description: 'الشهادات المهنية المعتمدة للمهندس إبراهيم أحمد حمادة في فحص جودة البرمجيات (تيستر ISTQB, Selenium, Postman) وتطوير تطبيقات الويب (فرونت اند، باك اند).',
      keywords: 'شهادات معتمدة, ISTQB, Selenium, NTI, DEPI, Orange Digital Center, تيستر, فرونت اند, باك اند'
    },
    'activities': {
      title: 'الأنشطة والفعاليات | الأنشطة والمشاركات التقنية - م. إبراهيم أحمد حمادة',
      description: 'الأنشطة المجتمعية والمشاركات التقنية وورش العمل للمهندس إبراهيم أحمد حمادة في مجالات الذكاء الاصطناعي AI، اختبار البرمجيات، وتطوير الويب.',
      keywords: 'أنشطة تقنية, فعاليات, مجتمعات برمجية, AI, اختبار البرمجيات, تيستر, تطوير الويب'
    },
    'contact': {
      title: 'تواصل معي | تواصل مع المهندس إبراهيم حمادة - تصميم سايت، فرونت اند، باك اند، تيستر',
      description: 'تواصل مع المهندس إبراهيم أحمد حمادة لمناقشة فرص العمل، طلب تصميم سايت، استشارات مشاريع فرونت اند أو باك اند، خدمات فحص الأنظمة البرمجية (تيستر QA)، أو حلول الذكاء الاصطناعي AI.',
      keywords: 'تواصل, اتصل بي, توظيف, استشارات هندسية, تصميم سايت, فرونت اند, باك اند, تيستر, AI, WhatsApp, Email'
    },
    'privacy-policy': {
      title: 'سياسة الخصوصية | سياسة الخصوصية - Eng. Ibrahim Ahmed Hamada',
      description: 'سياسة الخصوصية لموقع وبورتفوليو المهندس إبراهيم أحمد حمادة. حماية بيانات الزوار ومعلومات التواصل وفق أفضل المعايير.',
      keywords: 'سياسة الخصوصية, Privacy Policy, حماية البيانات, شروط الاستخدام'
    }
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  initRouteListener(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = (event.urlAfterRedirects || event.url || '').split('?')[0];
        this.currentPath = url;
        this.updateCurrentPageSeo();
      });
  }

  onLanguageChange(lang: 'en' | 'ar'): void {
    this.currentLanguage = lang;
    this.updateCurrentPageSeo();
  }

  private updateCurrentPageSeo(): void {
    const routeKey = this.currentPath.replace(/^\/+/, '');
    this.updateCanonicalUrl(this.currentPath);

    const map = this.currentLanguage === 'ar' ? this.routeMetaMapAr : this.routeMetaMapEn;
    const routeSeo = map[routeKey] || map[''];
    if (routeSeo) {
      this.updateSeoData({
        title: routeSeo.title,
        description: routeSeo.description,
        keywords: routeSeo.keywords,
        path: this.currentPath
      });
    }
  }

  updateCanonicalUrl(path: string = ''): void {
    const cleanPath = path === '/' ? '' : path;
    const fullUrl = `${this.baseUrl}${cleanPath}`;
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullUrl);
    this.metaService.updateTag({ property: 'og:url', content: fullUrl });
  }

  updateSeoData(options: {
    title?: string;
    description?: string;
    keywords?: string;
    path?: string;
  }): void {
    if (options.title) {
      this.titleService.setTitle(options.title);
      this.metaService.updateTag({ property: 'og:title', content: options.title });
      this.metaService.updateTag({ name: 'twitter:title', content: options.title });
    }

    if (options.description) {
      this.metaService.updateTag({ name: 'description', content: options.description });
      this.metaService.updateTag({ property: 'og:description', content: options.description });
      this.metaService.updateTag({ name: 'twitter:description', content: options.description });
    }

    if (options.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: options.keywords });
    }

    if (options.path !== undefined) {
      this.updateCanonicalUrl(options.path);
    }
  }
}
