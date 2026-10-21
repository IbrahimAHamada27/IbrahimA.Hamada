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
      title: 'Eng. Ibrahim Atef Hamada | Web Development, Business Systems & QA Software Engineer',
      description: 'Official portfolio of Eng. Ibrahim Atef Hamada (Ibrahim A. Hamada) - Custom web design and development in Arabic and English for companies, retail shops, online booking systems, admin dashboards, and QA test automation.',
      keywords: 'Ibrahim Hamada, Ibrahim A Hamada, Eng Ibrahim Atef Hamada, Web Design, Web Development, Arabic and English Website, Corporate Websites, Shop Websites, Online Booking System, Admin Dashboard Systems, Software Engineer, QA Tester, MEAN Stack, Angular, Node.js, Portfolio'
    },
    'home': {
      title: 'Eng. Ibrahim Atef Hamada | Web Development, Business Systems & QA Software Engineer',
      description: 'Official portfolio of Eng. Ibrahim Atef Hamada (Ibrahim A. Hamada) - Custom web design and development in Arabic and English for companies, retail shops, online booking systems, admin dashboards, and QA test automation.',
      keywords: 'Ibrahim Hamada, Ibrahim A Hamada, Eng Ibrahim Atef Hamada, Web Design, Web Development, Arabic and English Website, Corporate Websites, Shop Websites, Online Booking System, Admin Dashboard Systems, Software Engineer, QA Tester, MEAN Stack, Angular, Node.js, Portfolio'
    },
    'about': {
      title: 'About Me | Eng. Ibrahim Atef Hamada - Software Engineer & QA Tester',
      description: 'Discover the professional background, engineering expertise, and career journey of Eng. Ibrahim Atef Hamada in software quality assurance and full-stack web development.',
      keywords: 'About Ibrahim Hamada, Software Engineer, QA Tester, Computer Science AOU, DEPI, NTI, Software Quality'
    },
    'services': {
      title: 'Services | Corporate Websites, Retail Shops, Booking Systems & QA - Eng. Ibrahim Hamada',
      description: 'Custom corporate websites, retail store portals with WhatsApp ordering, automated online booking systems, administrative ERP dashboards, QR menus, and software QA automation.',
      keywords: 'Corporate Website Design, Retail Shop Website, Online Booking System, Custom Admin Dashboard, ERP Systems, Web Development Arabic English, Software QA Services, QA Automation, Eng Ibrahim Hamada'
    },
    'projects': {
      title: 'Featured Projects & QA Work | Eng. Ibrahim Atef Hamada Portfolio',
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
      title: 'Verified Certificates & Credentials | Eng. Ibrahim Atef Hamada',
      description: 'Accredited certifications in test automation, software testing fundamentals (ISTQB), and modern full-stack web development.',
      keywords: 'Certifications, ISTQB, Selenium, Postman, NTI Certificate, DEPI Certificate, Credentials'
    },
    'activities': {
      title: 'Leadership & Extracurricular Activities | Eng. Ibrahim Atef Hamada',
      description: 'Leadership and technical community contributions: Microsoft Student Club (MSC) Tech Team at AOU and NASA Space Apps Challenge Logistics Lead.',
      keywords: 'Activities, Microsoft Student Club, NASA Space Apps Challenge, Leadership, Community Volunteering'
    },
    'contact': {
      title: 'Contact | Get in Touch with Eng. Ibrahim Atef Hamada',
      description: 'Connect with Eng. Ibrahim Atef Hamada for QA test automation roles, full-stack web development projects, or technical consultations.',
      keywords: 'Contact Ibrahim Hamada, Hire QA Engineer, Hire Web Developer, Software Engineering Consultation'
    },
    'privacy-policy': {
      title: 'Privacy Policy | Eng. Ibrahim Atef Hamada Portfolio',
      description: 'Privacy policy for Eng. Ibrahim Atef Hamada portfolio website. Protecting visitor inquiries and contact data.',
      keywords: 'Privacy Policy, Data Protection, Terms of Use'
    }
  };

  private readonly routeMetaMapAr: Record<string, RouteSeo> = {
    '': {
      title: 'م. إبراهيم عاطف حمادة | عمل مواقع ويب سايت للشركات والمحلات والسيستمز & QA Software Engineer',
      description: 'الموقع الرسمي للمهندس إبراهيم عاطف حمادة (Ibrahim A. Hamada) - عمل وتصميم مواقع ويب سايت احترافية عربي وإنجليزي للشركات والمحلات التجارية، أنظمة الحجز الإلكتروني والسيستمز ولوحات التحكم، وهندسة جودة البرمجيات QA.',
      keywords: 'ابراهيم حماده, إبراهيم حمادة, ابراهيم عاطف حماده, إبراهيم عاطف حمادة, ibrahim a. hamada, ibrahim hamada, عمل ديزاين, عمل ويب سايت, عمل موقع عربي و انجليزي, عمل موقع الكتروني, تصميم مواقع للشركات, مواقع محلات تجارية, نظام حجز, لوحة تحكم مخصصة, برمجة سيستم, مطور ويب, مهندس برمجيات'
    },
    'home': {
      title: 'م. إبراهيم عاطف حمادة | عمل مواقع ويب سايت للشركات والمحلات والسيستمز & QA Software Engineer',
      description: 'الموقع الرسمي للمهندس إبراهيم عاطف حمادة (Ibrahim A. Hamada) - عمل وتصميم مواقع ويب سايت احترافية عربي وإنجليزي للشركات والمحلات التجارية، أنظمة الحجز الإلكتروني والسيستمز ولوحات التحكم، وهندسة جودة البرمجيات QA.',
      keywords: 'ابراهيم حماده, إبراهيم حمادة, ابراهيم عاطف حماده, إبراهيم عاطف حمادة, ibrahim a. hamada, ibrahim hamada, عمل ديزاين, عمل ويب سايت, عمل موقع عربي و انجليزي, عمل موقع الكتروني, تصميم مواقع للشركات, مواقع محلات تجارية, نظام حجز, لوحة تحكم مخصصة, برمجة سيستم, مطور ويب, مهندس برمجيات'
    },
    'about': {
      title: 'نبذة عني | م. إبراهيم عاطف حمادة - مهندس برمجيات وفحص جودة ومطور ويب',
      description: 'نبذة عن المهندس إبراهيم عاطف حمادة: خبرة في هندسة البرمجيات، تطوير فرونت اند وباك اند، وفحص جودة البرمجيات (QA Tester) بأعلى المعايير الهندسية ومعايير ISTQB.',
      keywords: 'مهندس إبراهيم عاطف حمادة, About, نبذة شخصية, إبراهيم حمادة, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية'
    },
    'services': {
      title: 'الخدمات | عمل مواقع للشركات والمحلات وأنظمة الحجز واللوحات الإدارية - م. إبراهيم حمادة',
      description: 'خدمات متكاملة: تصميم وعمل مواقع للشركات والمؤسسات، متاجر ومواقع المحلات التجارية، أنظمة الحجز الإلكتروني، لوحات التحكم والسيستمز الإدارية، منيو QR للمطاعم، وفحص جودة البرمجيات QA.',
      keywords: 'عمل مواقع للشركات, عمل موقع لمحل تجاري, عمل ويب سايت, عمل ديزاين, عمل موقع عربي و انجليزي, نظام حجز, لوحات تحكم, سيستم ادارة, منيو باركود, فحص برمجيات, QA Automation, ابراهيم حماده'
    },
    'projects': {
      title: 'المشاريع الهندسية | معرض الأعمال البرمجية وفحص الجودة - م. إبراهيم عاطف حمادة',
      description: 'معرض المشاريع الهندسية للمهندس إبراهيم عاطف حمادة: أعمال تطوير الويب الكاملة، مشاريع فرونت اند، أنظمة باك اند، مشاريع فحص جودة (Selenium & Postman)، وحلول الذكاء الاصطناعي AI.',
      keywords: 'مشاريع هندسية, معرض أعمال, إبراهيم حمادة, مشاريع فرونت اند, مشاريع باك اند, تيستر, اختبارات مؤتمتة, Selenium Java, AI Projects'
    },
    'skills': {
      title: 'المهارات التقنية | مهارات فحص الجودة وتطوير الويب - م. إبراهيم عاطف حمادة',
      description: 'المهارات التقنية للمهندس إبراهيم عاطف حمادة: فرونت اند (Angular 21, TypeScript, HTML/CSS)، باك اند (Node.js, Express, MongoDB)، فحص جودة (Selenium, TestNG, Java, Postman)، وتكاملات الذكاء الاصطناعي AI.',
      keywords: 'مهارات برمجية, فرونت اند, باك اند, تيستر, أدوات فحص, Angular, Node.js, Java, Selenium, Postman, AI tools'
    },
    'experience': {
      title: 'الخبرات المهنية | الخبرات العملية والهندسية - م. إبراهيم عاطف حمادة',
      description: 'سجل الخبرات المهنية والعملية للمهندس إبراهيم عاطف حمادة في فحص واختبار الأنظمة (QA Tester)، تطوير فرونت اند وباك اند، وتنفيذ مشاريع هندسية وتجارية.',
      keywords: 'خبرات مهنية, مشاريع سابقة, تيستر, إبراهيم حمادة, فرونت اند, باك اند, مشاريع هندسية, QA Engineer'
    },
    'education': {
      title: 'التعليم والتدريب | المسار الأكاديمي والشهادات - م. إبراهيم عاطف حمادة',
      description: 'التعليم الأكاديمي للمهندس إبراهيم عاطف حمادة في علوم الحاسب بالجامعة العربية المفتوحة AOU، والتدريب المكثف بمبادرة DEPI و NTI في فحص البرمجيات وتطوير الويب.',
      keywords: 'تعليم حاسبات, الجامعة العربية المفتوحة, AOU, DEPI, NTI, شهادات هندسية, تيستر, فرونت اند, باك اند'
    },
    'certificates': {
      title: 'الشهادات المعتمدة | الشهادات والاعتمادات - م. إبراهيم عاطف حمادة',
      description: 'الشهادات المهنية المعتمدة للمهندس إبراهيم عاطف حمادة في فحص جودة البرمجيات (ISTQB, Selenium, Postman) وتطوير تطبيقات الويب (فرونت اند، باك اند).',
      keywords: 'شهادات معتمدة, ISTQB, Selenium, NTI, DEPI, Orange Digital Center, تيستر, فرونت اند, باك اند'
    },
    'activities': {
      title: 'الأنشطة والفعاليات | الأنشطة والمشاركات التقنية - م. إبراهيم عاطف حمادة',
      description: 'الأنشطة المجتمعية والمشاركات التقنية وورش العمل للمهندس إبراهيم عاطف حمادة في مجالات الذكاء الاصطناعي AI، اختبار البرمجيات، وتطوير الويب.',
      keywords: 'أنشطة تقنية, فعاليات, مجتمعات برمجية, AI, اختبار البرمجيات, تيستر, تطوير الويب'
    },
    'contact': {
      title: 'تواصل معي | تواصل مع المهندس إبراهيم عاطف حمادة',
      description: 'تواصل مع المهندس إبراهيم عاطف حمادة لمناقشة فرص العمل، استشارات مشاريع فرونت اند أو باك اند، خدمات فحص الأنظمة البرمجية (QA Tester)، أو حلول الذكاء الاصطناعي AI.',
      keywords: 'تواصل, اتصل بي, توظيف, استشارات هندسية, إبراهيم حمادة, فرونت اند, باك اند, تيستر, AI, WhatsApp, Email'
    },
    'privacy-policy': {
      title: 'سياسة الخصوصية | سياسة الخصوصية - Eng. Ibrahim Atef Hamada',
      description: 'سياسة الخصوصية لموقع وبورتفوليو المهندس إبراهيم عاطف حمادة. حماية بيانات الزوار ومعلومات التواصل وفق أفضل المعايير.',
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
