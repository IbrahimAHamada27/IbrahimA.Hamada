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

  private readonly routeMetaMap: Record<string, RouteSeo> = {
    '': {
      title: 'Eng. Ibrahim Ahmed Hamada | Software Engineer, QA Tester & Web Developer - م. إبراهيم أحمد حمادة',
      description: 'الموقع الرسمي وبورتفوليو المهندس إبراهيم أحمد حمادة (Eng. Ibrahim A. Hamada) - مهندس برمجيات وتطوير ويب متكامل (فرونت اند Frontend، باك اند Backend) وفحص جودة البرمجيات (تيستر QA Tester). تصميم سايت، مشاريع هندسية، وحلول برمجية ذكية AI.',
      keywords: 'مهندس إبراهيم أحمد حمادة, Eng. Ibrahim Ahmed Hamada, تصميم سايت, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية, استشارات هندسية, Angular, Node.js, QA Tester, Selenium, Postman, Full Stack Developer'
    },
    'home': {
      title: 'Eng. Ibrahim Ahmed Hamada | Software Engineer, QA Tester & Web Developer - م. إبراهيم أحمد حمادة',
      description: 'الموقع الرسمي وبورتفوليو المهندس إبراهيم أحمد حمادة - هندسة البرمجيات، تصميم سايت متكامل، تطوير واجهات فرونت اند وأنظمة باك اند، فحص واختبار البرمجيات كـ تيستر متخصص، وحلول الـ AI والمشاريع الهندسية.',
      keywords: 'مهندس إبراهيم أحمد حمادة, تصميم سايت, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية, استشارات هندسية, بورتفوليو'
    },
    'about': {
      title: 'About Me | م. إبراهيم أحمد حمادة - مهندس برمجيات وتطوير ويب وQA Tester',
      description: 'نبذة عن المهندس إبراهيم أحمد حمادة: خبرة في هندسة البرمجيات، تصميم سايت، تطوير فرونت اند وباك اند، وفحص جودة البرمجيات (تيستر QA) بأعلى المعايير الهندسية ومعايير ISTQB.',
      keywords: 'مهندس إبراهيم أحمد حمادة, About, نبذة شخصية, تصميم سايت, فرونت اند, باك اند, تيستر, ai, مشاريع هندسية'
    },
    'services': {
      title: 'Services | خدمات تصميم سايت، فرونت اند، باك اند، تيستر، AI - م. إبراهيم حمادة',
      description: 'خدمات هندسية متكاملة يقدمها المهندس إبراهيم أحمد حمادة: تصميم سايت احترافي، تطوير فرونت اند Front-End، تطوير باك اند Back-End وقواعد بيانات، خدمات فحص واختبار الأنظمة (تيستر QA Automation)، وتطبيقات الذكاء الاصطناعي AI.',
      keywords: 'خدمات برمجية, تصميم سايت, تصميم مواقع, فرونت اند, باك اند, تيستر, اختبار برمجيات, QA Automation, Selenium, APIs, حلول AI, مشاريع هندسية'
    },
    'projects': {
      title: 'Projects | مشاريع هندسية، تصميم سايت، فرونت اند، باك اند، تيستر، AI',
      description: 'معرض المشاريع الهندسية للمهندس إبراهيم أحمد حمادة: أعمال تصميم سايت كامل، مشاريع فرونت اند، أنظمة باك اند، مشاريع فحص جودة كـ تيستر (Selenium & Postman)، وحلول الذكاء الاصطناعي AI.',
      keywords: 'مشاريع هندسية, معرض أعمال, تصميم سايت, مشاريع فرونت اند, مشاريع باك اند, تيستر, اختبارات مؤتمتة, Selenium Java, AI Projects'
    },
    'skills': {
      title: 'Technical Skills | مهارات فرونت اند، باك اند، تيستر، AI - م. إبراهيم حمادة',
      description: 'المهارات التقنية للمهندس إبراهيم أحمد حمادة: فرونت اند (Angular 21, TypeScript, HTML/CSS)، باك اند (Node.js, Express, MongoDB)، تيستر (Selenium, TestNG, Java, Postman)، وتكاملات الذكاء الاصطناعي AI.',
      keywords: 'مهارات برمجية, فرونت اند, باك اند, تيستر, أدوات فحص, Angular, Node.js, Java, Selenium, Postman, AI tools'
    },
    'experience': {
      title: 'Professional Experience | الخبرات العملية والهندسية - م. إبراهيم أحمد حمادة',
      description: 'سجل الخبرات المهنية والعملية للمهندس إبراهيم أحمد حمادة في فحص واختبار الأنظمة (تيستر QA)، تصميم سايت وتطوير فرونت اند وباك اند، وتنفيذ مشاريع هندسية تجارية.',
      keywords: 'خبرات مهنية, مشاريع سابقة, تيستر, تصميم سايت, فرونت اند, باك اند, مشاريع هندسية, QA Engineer'
    },
    'education': {
      title: 'Education & Training | المسار الأكاديمي والشهادات - م. إبراهيم أحمد حمادة',
      description: 'التعليم الأكاديمي للمهندس إبراهيم أحمد حمادة في علوم الحاسب بالجامعة العربية المفتوحة AOU، والتدريب المكثف بمبادرة DEPI و NTI في فحص البرمجيات وتطوير الويب.',
      keywords: 'تعليم حاسبات, الجامعة العربية المفتوحة, AOU, DEPI, NTI, شهادات هندسية, تيستر, فرونت اند, باك اند'
    },
    'certificates': {
      title: 'Certificates & Credentials | الشهادات والاعتمادات - م. إبراهيم أحمد حمادة',
      description: 'الشهادات المهنية المعتمدة للمهندس إبراهيم أحمد حمادة في فحص جودة البرمجيات (تيستر ISTQB, Selenium, Postman) وتطوير تطبيقات الويب (فرونت اند، باك اند).',
      keywords: 'شهادات معتمدة, ISTQB, Selenium, NTI, DEPI, Orange Digital Center, تيستر, فرونت اند, باك اند'
    },
    'activities': {
      title: 'Community & Activities | الأنشطة والمشاركات التقنية - م. إبراهيم أحمد حمادة',
      description: 'الأنشطة المجتمعية والمشاركات التقنية وورش العمل للمهندس إبراهيم أحمد حمادة في مجالات الذكاء الاصطناعي AI، اختبار البرمجيات، وتطوير الويب.',
      keywords: 'أنشطة تقنية, فعاليات, مجتمعات برمجية, AI, اختبار البرمجيات, تيستر, تطوير الويب'
    },
    'contact': {
      title: 'Contact | تواصل مع المهندس إبراهيم حمادة - تصميم سايت، فرونت اند، باك اند، تيستر',
      description: 'تواصل مع المهندس إبراهيم أحمد حمادة لمناقشة فرص العمل، طلب تصميم سايت، استشارات مشاريع فرونت اند أو باك اند، خدمات فحص الأنظمة البرمجية (تيستر QA)، أو حلول الذكاء الاصطناعي AI.',
      keywords: 'تواصل, اتصل بي, توظيف, استشارات هندسية, تصميم سايت, فرونت اند, باك اند, تيستر, AI, WhatsApp, Email'
    },
    'privacy-policy': {
      title: 'Privacy Policy | سياسة الخصوصية - Eng. Ibrahim Ahmed Hamada',
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
        const routeKey = url.replace(/^\/+/, '');
        this.updateCanonicalUrl(url);

        const routeSeo = this.routeMetaMap[routeKey] || this.routeMetaMap[''];
        if (routeSeo) {
          this.updateSeoData({
            title: routeSeo.title,
            description: routeSeo.description,
            keywords: routeSeo.keywords,
            path: url
          });
        }
      });
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

