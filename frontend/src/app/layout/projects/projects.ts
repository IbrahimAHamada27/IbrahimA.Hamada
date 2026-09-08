import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

import { LanguageService } from '../../core/services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;

  readonly defaultProjectsEn: Project[] = [
    {
      _id: 'proj-1',
      title: 'DEPI E-Commerce QA Automation Framework',
      description: 'Enterprise test automation suite for leading e-commerce platforms (Noon, DeFacto, Seoudi). Implements Page Object Model (POM), data-driven testing, custom locators, and automated Allure test execution reports.',
      link: 'https://github.com/IbrahimAHamada27/graduation-project-from-depi',
      technologies: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'POM', 'Allure Reports'],
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-moaz-samir',
      title: 'Dr. Moaz Samir Dental Clinic Platform',
      description: 'Production front-end dental clinic web platform engineered with Angular 21 and reactive Signals. Features digital dentistry showcases, multi-branch location guidance (Borg El Arab), appointment booking integrations, PWA offline support, and advanced medical Schema.org SEO.',
      link: 'https://www.drmoazsamir.com/',
      technologies: ['Angular 21', 'TypeScript', 'Front-End Architecture', 'PWA', 'SEO & Schema.org', 'Responsive UI'],
      imageUrl: 'https://www.drmoazsamir.com/assets/images/logo/logo-square.jpg'
    },
    {
      _id: 'proj-2',
      title: 'Dar Al-Yusr Clinics & Medical Management Portal',
      description: 'Full-scale medical clinics platform featuring patient appointment booking, doctor schedules, department navigation, and high-performance clinic administrative workflows.',
      link: 'https://github.com/IbrahimAHamada27/Dar-AlYusr-Clinics',
      technologies: ['TypeScript', 'Angular', 'TailwindCSS', 'RESTful API', 'Responsive UI'],
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-3',
      title: 'Hedera Hashgraph Interactive 3D Experience',
      description: 'Interactive cinematic 3D educational web app developed for MLSA AOU Hedera Track. Visualizes Hedera consensus algorithms, token services (HTS), and live HBAR transfer simulations with WebGL.',
      link: 'https://ibrahimahamada27.github.io/hedera-hashgraph-interactive-session/',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Framer Motion', 'TailwindCSS', 'WebGL'],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-4',
      title: 'Dr. Ibrahim Elsharkawy Clinic Portal',
      description: 'Medical practitioner digital portal delivering seamless patient consultation inquiries, service showcases, testimonials, and optimized responsive accessibility.',
      link: 'https://github.com/IbrahimAHamada27/Dr.Ibrahim_Elsharkawy',
      technologies: ['TypeScript', 'Modern Web', 'CSS Grid', 'SEO Optimization', 'Mobile-First'],
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-5',
      title: 'Dr. Aml Abd ELsattar Healthcare Profile',
      description: 'Specialized clinical website tailored for patient communication, healthcare clinic schedule coordination, and interactive medical service portfolios.',
      link: 'https://github.com/IbrahimAHamada27/-Dr.Aml-Abd-ELsattar-',
      technologies: ['TypeScript', 'Modern UI/UX', 'Glassmorphism', 'CSS3 Animations'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-6',
      title: 'Vexa SaaS & AI Application Platform',
      description: 'Modern, high-performance web application designed for scalable SaaS workflows with sleek glassmorphic UI components, dynamic data handling, and AI-ready integrations.',
      link: 'https://github.com/IbrahimAHamada27/vexa',
      technologies: ['TypeScript', 'Next.js / Web', 'TailwindCSS', 'State Management', 'REST APIs'],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-7',
      title: 'Athr Baqy Community & Charity Platform',
      description: 'Dedicated digital platform for charitable initiatives and sustainable community impact, highlighting initiative goals, live progress milestones, and community participation.',
      link: 'https://github.com/IbrahimAHamada27/-AthrBaqy',
      technologies: ['TypeScript', 'Modern Web', 'Interactive UI', 'Accessibility', 'Responsive'],
      imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-8',
      title: 'El-Koptan Mobile & Tech Store',
      description: 'Commercial e-commerce store for smartphones and accessories featuring dynamic product catalogs, multi-criteria filtering, cart management, and checkout interfaces.',
      link: 'https://github.com/IbrahimAHamada27/ElKoptanMobileStore',
      technologies: ['TypeScript', 'E-Commerce', 'State Management', 'TailwindCSS', 'REST API'],
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-9',
      title: 'The Face Coffee & Smart QR Ordering',
      description: 'Commercial cafe ordering system and interactive digital QR menu with customizable modifiers, live order calculations, and administrative menu controls.',
      link: 'https://ibrahimahamada27.github.io/thefacecoffee/',
      technologies: ['Python', 'FastAPI / Flask', 'Modern Web', 'QR System', 'REST API'],
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-10',
      title: 'Full-Stack E-Commerce & QA Suite',
      description: 'Comprehensive e-commerce platform accompanied by automated & manual test scripts covering user authentication, payment processing, product reviews, and inventory controls.',
      link: 'https://github.com/IbrahimAHamada27/E-commerce',
      technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Postman', 'QA Test Suites'],
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-11',
      title: 'Double Shot Cafe Digital Experience',
      description: 'High-conversion commercial cafe showcase featuring responsive visual menus, signature specialty drink cards, customer reviews, and location mapping.',
      link: 'https://ibrahimahamada27.github.io/double.shot/',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Mobile-First', 'Vibe Coding'],
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-12',
      title: 'Interactive Luxury Wedding Invitation Suite',
      description: 'Luxury digital wedding invitation with real-time countdown timers, interactive RSVP forms, venue location coordinates, and smooth multimedia ambient sound effects.',
      link: 'https://ibrahimahamada27.github.io/Mostafa_And_Yasmine_Wedding_Invitation/',
      technologies: ['HTML5', 'CSS3 Keyframes', 'JavaScript', 'Audio API', 'Responsive UX'],
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60'
    }
  ];

  readonly defaultProjectsAr: Project[] = [
    {
      _id: 'proj-1',
      title: 'إطار الفحص المؤتمت لمتاجر التجارة الإلكترونية (DEPI)',
      description: 'منظومة فحص واختبار أوتوماتيكية متطورة لمتاجر كبرى (Noon, DeFacto, Seoudi). تطبيق نموذج كائن الصفحة (POM)، الفحص القائم على البيانات، والمحددات المخصصة مع تقارير Allure التفاعلية.',
      link: 'https://github.com/IbrahimAHamada27/graduation-project-from-depi',
      technologies: ['Java', 'Selenium WebDriver', 'TestNG', 'Maven', 'POM', 'Allure Reports'],
      imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-moaz-samir',
      title: 'منصة عيادة الحياة لطب الأسنان — د. معاذ سمير',
      description: 'منصة ويب طبية متكاملة لعيادة الحياة لطب الأسنان بإشراف د. معاذ سمير، مطورة بالكامل فرونت اند باستخدام Angular 21 ونظام الإشارات Signals. تتضمن استعراض خدمات تقويم وتجميل الأسنان وحشو العصب، حجز المواعيد، خريطة فروع برج العرب، ودعم PWA وتهيئات الـ SEO المتقدمة.',
      link: 'https://www.drmoazsamir.com/',
      technologies: ['Angular 21', 'TypeScript', 'Front-End Architecture', 'PWA', 'SEO & Schema.org', 'Responsive UI'],
      imageUrl: 'https://www.drmoazsamir.com/assets/images/logo/logo-square.jpg'
    },
    {
      _id: 'proj-2',
      title: 'بوابة عيادات دار اليسر وإدارة الرعاية الطبية',
      description: 'منصة طبية شاملة لإدارة العيادات تتيح حجز مواعيد المرضى، جداول الأطباء، تصفح الأقسام الطبية، وسلاسة العمليات الإدارية بأداء فائق.',
      link: 'https://github.com/IbrahimAHamada27/Dar-AlYusr-Clinics',
      technologies: ['TypeScript', 'Angular', 'TailwindCSS', 'RESTful API', 'Responsive UI'],
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-3',
      title: 'تجربة هيديرا هاشغراف التفاعلية ثلاثية الأبعاد (Hedera)',
      description: 'تطبيق ويب تعليمي ثلاثي الأبعاد تم تطويره لمسار هيديرا في مبادرة مايكروسوفت (MLSA AOU). يجسد خوارزميات التوافق، خدمات الرموز الرقمية (HTS)، ومحاكاة تحويلات HBAR باستخدام WebGL.',
      link: 'https://ibrahimahamada27.github.io/hedera-hashgraph-interactive-session/',
      technologies: ['React', 'Three.js', 'React Three Fiber', 'Framer Motion', 'TailwindCSS', 'WebGL'],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-4',
      title: 'الموقع الطبي للدكتور إبراهيم الشرقاوي',
      description: 'بوابة رقمية متكاملة لعيادة طبية تسهل استشارات المرضى، عرض الخدمات والشهادات، وسرعة وصول فائقة متوافقة مع جميع الأجهزة.',
      link: 'https://github.com/IbrahimAHamada27/Dr.Ibrahim_Elsharkawy',
      technologies: ['TypeScript', 'Modern Web', 'CSS Grid', 'SEO Optimization', 'Mobile-First'],
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-5',
      title: 'الموقع الطبي للدكتورة أمل عبد الستار',
      description: 'موقع عيادة متخصصة يعزز تواصل المرضى، تنظيم المواعيد، واستعراض الخدمات الطبية المعتمدة بواجهات عصرية.',
      link: 'https://github.com/IbrahimAHamada27/-Dr.Aml-Abd-ELsattar-',
      technologies: ['TypeScript', 'Modern UI/UX', 'Glassmorphism', 'CSS3 Animations'],
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-6',
      title: 'منصة Vexa السحابية وتطبيقات الذكاء الاصطناعي',
      description: 'تطبيق ويب متطور عالي الأداء مصمم لبيئات SaaS مع مكونات بصرية زجاجية ومعالجة بيانات ذكية ودمج تقنيات الـ AI.',
      link: 'https://github.com/IbrahimAHamada27/vexa',
      technologies: ['TypeScript', 'Next.js / Web', 'TailwindCSS', 'State Management', 'REST APIs'],
      imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-7',
      title: 'منصة أثر باقٍ للعمل الخيري والمبادرات المجتمعية',
      description: 'منصة مخصصة للمبادرات الخيرية والتنمية المستدامة، تستعرض أهداف الحملات، مراحل الإنجاز الحية، وآليات التبرع والمشاركة.',
      link: 'https://github.com/IbrahimAHamada27/-AthrBaqy',
      technologies: ['TypeScript', 'Modern Web', 'Interactive UI', 'Accessibility', 'Responsive'],
      imageUrl: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-8',
      title: 'متجر القبطان للهواتف الذكية والتكنولوجيا',
      description: 'متجر إلكتروني تجاري للهواتف والإكسسوارات يوفر تصفحاً ديناميكياً للمنتجات، الفلترة المتقدمة، وسلة المشتريات والدفع السلس.',
      link: 'https://github.com/IbrahimAHamada27/ElKoptanMobileStore',
      technologies: ['TypeScript', 'E-Commerce', 'State Management', 'TailwindCSS', 'REST API'],
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-9',
      title: 'نظام كافيه The Face والطلب الذكي بالـ QR',
      description: 'نظام طلبات ذكي وقائمة طعام رقمية تفاعلية بكود QR مع خيارات تخصيص المشروبات وحساب تكلفة الطلبات فوريًا وإدارة الأصناف.',
      link: 'https://ibrahimahamada27.github.io/thefacecoffee/',
      technologies: ['Python', 'FastAPI / Flask', 'Modern Web', 'QR System', 'REST API'],
      imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-10',
      title: 'متجر إلكتروني شامل مع حزمة اختبارات الجودة (Full-Stack & QA)',
      description: 'متجر متكامل مدعوم بملفات وسيناريوهات فحص مؤتمتة ويدوية تشمل تسجيل الدخول، بوابات الدفع، وإدارة المخزون والتقييمات.',
      link: 'https://github.com/IbrahimAHamada27/E-commerce',
      technologies: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Postman', 'QA Test Suites'],
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-11',
      title: 'موقع كافيه دبل شوت الرقمي (Double Shot)',
      description: 'واجهة تجارية تسويقية لكافيه شهير توفر عرض المنيو بصور جذابة، بطاقات المشروبات الخاصة، آراء العملاء، والموقع الجغرافي.',
      link: 'https://ibrahimahamada27.github.io/double.shot/',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Mobile-First', 'Vibe Coding'],
      imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60'
    },
    {
      _id: 'proj-12',
      title: 'دعوة زفاف فاخرة تفاعلية متعددة الوسائط',
      description: 'دعوة زفاف إلكترونية مع عد تنازلي حي للموعد، نموذج تأكيد حضور تفاعلي (RSVP)، خرائط للموقع وتأثيرات صوتية هادئة.',
      link: 'https://ibrahimahamada27.github.io/Mostafa_And_Yasmine_Wedding_Invitation/',
      technologies: ['HTML5', 'CSS3 Keyframes', 'JavaScript', 'Audio API', 'Responsive UX'],
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60'
    }
  ];

  backendProjects: Project[] = [];
  showAllProjects = false;
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  get currentProjects(): Project[] {
    if (this.backendProjects.length > 0) {
      return this.backendProjects;
    }
    return this.languageService.currentLang() === 'ar' ? this.defaultProjectsAr : this.defaultProjectsEn;
  }

  get projects(): Project[] {
    return this.currentProjects;
  }

  get displayedProjects(): Project[] {
    return this.showAllProjects ? this.currentProjects : this.currentProjects.slice(0, 6);
  }

  toggleShowMore() {
    this.showAllProjects = !this.showAllProjects;
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  async fetchProjects() {
    try {
      const response = await lastValueFrom(this.projectService.getProjects());
      if (response && response.length > 0) {
        this.backendProjects = response;
      }
    } catch (error) {
      console.warn('Backend API unavailable or empty, displaying featured showcase projects', error);
    }
  }

  openDetails(project: Project) {
    const isAr = this.languageService.currentLang() === 'ar';
    this.selectedItem = {
      title: project.title,
      category: isAr ? 'مشروع فرونت اند وتطوير برمجيات' : 'Software & Front-End Project',
      description: project.description,
      imageUrl: project.imageUrl,
      link: project.link,
      tags: project.technologies
    };
    this.isModalOpen = true;
  }
}
