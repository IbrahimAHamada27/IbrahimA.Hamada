export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    education: string;
    skills: string;
    experience: string;
    services: string;
    projects: string;
    certificates: string;
    activities: string;
    contact: string;
    privacy: string;
    getInTouch: string;
    switchLangLabel: string;
  };
  hero: {
    statusBadge: string;
    greeting: string;
    name: string;
    title: string;
    description: string;
    terminalTitle: string;
    terminalBadge: string;
    terminalSelenium: string;
    terminalApi: string;
    terminalMean: string;
    chip1: string;
    chip2: string;
    chip3: string;
    chip4: string;
    viewCv: string;
    contactMe: string;
    viewProjects: string;
  };
  about: {
    title: string;
    subtitle: string;
    role: string;
    location: string;
    study: string;
    previewCv: string;
    heading: string;
    desc1: string;
    desc2: string;
    academicCardTitle: string;
    academicCardDesc: string;
    philosophyCardTitle: string;
    philosophyCardDesc: string;
  };
  education: {
    title: string;
    subtitle: string;
    universityColTitle: string;
    coursesColTitle: string;
    degreeBadge: string;
    programInfo: string;
    showDetails: string;
    items: {
      university: {
        title: string;
        institution: string;
        date: string;
        desc: string;
        skills: string[];
      }[];
      courses: {
        title: string;
        institution: string;
        date: string;
        desc: string;
        link?: string;
        skills: string[];
      }[];
    };
  };
  experience: {
    title: string;
    subtitle: string;
    showDetails: string;
    items: {
      role: string;
      company: string;
      years: string;
      desc: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    showMore: string;
    showLess: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    showDetails: string;
    showMore: string;
    showLess: string;
  };
  skills: {
    title: string;
    subtitle: string;
    categories: {
      title: string;
      icon: string;
      skills: { name: string; level: string; icon?: string }[];
    }[];
  };
  certificates: {
    title: string;
    subtitle: string;
    verify: string;
    showDetails: string;
  };
  activities: {
    title: string;
    subtitle: string;
    showDetails: string;
    items: {
      title: string;
      organization: string;
      role: string;
      date: string;
      category: string;
      desc: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cardHeading: string;
    cardDesc: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappAction: string;
    telegramLabel: string;
    telegramAction: string;
    emailLabel: string;
    linkedinLabel: string;
    linkedinAction: string;
    githubLabel: string;
    githubAction: string;
    facebookLabel: string;
    facebookAction: string;
    instagramLabel: string;
    instagramAction: string;
    locationLabel: string;
    locationValue: string;
    formHeading: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFormLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
  };
  footer: {
    brandTagline: string;
    quickLinks: string;
    contactDirect: string;
    privacyLink: string;
    rightsReserved: string;
  };
  cvModal: {
    badge: string;
    fullName: string;
    location: string;
    downloadPdf: string;
    educationTitle: string;
    summaryTitle: string;
    experienceTitle: string;
    trainingTitle: string;
    activitiesTitle: string;
    skillsTitle: string;
    languagesTitle: string;
    arabicLang: string;
    englishLang: string;
  };
  privacy: {
    backBtn: string;
    title: string;
    lastUpdated: string;
    sec1Title: string;
    sec1Desc: string;
    sec2Title: string;
    sec2Desc: string;
    sec3Title: string;
    sec3Desc: string;
    sec4Title: string;
    sec4Desc: string;
    sec5Title: string;
    sec5Desc: string;
    returnHome: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'ar', TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      experience: 'Experience',
      services: 'Services',
      projects: 'Projects',
      certificates: 'Certificates',
      activities: 'Activities',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      getInTouch: 'Get in Touch',
      switchLangLabel: 'Arabic'
    },
    hero: {
      statusBadge: 'Available for Full-Time & Project Opportunities',
      greeting: "Hi, I'm",
      name: 'Eng. Ibrahim Ahmed Hamada',
      title: 'Software Engineer | QA Tester, Full-Stack Developer & AI Solutions',
      description: 'Software Engineer & QA Automation Tester specialized in test automation (Selenium, Java, Postman), MEAN Stack web application development (Angular, Node.js, Express, MongoDB), and intelligent AI solutions.',
      terminalTitle: 'ibrahim-qa-engine --env=production',
      terminalBadge: 'ALL TESTS PASSING',
      terminalSelenium: 'Selenium E2E Tests: Cross-browser POM suites validated across Chrome, Firefox & Edge',
      terminalApi: 'RESTful API Asserter: 28+ Postman collections passing with strict JSON schema compliance',
      terminalMean: 'MEAN Stack Architecture: Angular 21 Signals + Express Node.js Engine operational',
      chip1: 'QA Automation & Tester',
      chip2: 'Front-End Development',
      chip3: 'Back-End & APIs (Node.js)',
      chip4: 'AI Solutions & Engineering',
      viewCv: 'View CV / Resume',
      contactMe: 'Contact Me',
      viewProjects: 'View My Projects'
    },
    about: {
      title: 'About Me',
      subtitle: 'Discover my engineering background, technical expertise, and career philosophy.',
      role: 'Software Engineer & QA Tester',
      location: 'El-Obour City, Qalyubia, Egypt',
      study: 'AOU Computer Science',
      previewCv: 'Preview Official CV',
      heading: 'Background & Expertise',
      desc1: 'Software Tester and aspiring Full-Stack Web Developer with hands-on experience in manual testing, API testing, database verification, and test automation utilizing Selenium WebDriver, TestNG, and Java. Trained through the Digital Egypt Pioneers Initiative (DEPI - Ministry of Communications and Information Technology), National Telecommunication Institute (NTI), and Orange Digital Center.',
      desc2: 'Undergraduate student in the Faculty of Computer Studies, Department of Computer Science at the Arab Open University (AOU). Skilled in designing comprehensive test cases, defect reporting in Jira and Excel, architecting RESTful APIs, and developing robust web applications with the MEAN Stack (MongoDB, Express.js, Angular, Node.js).',
      academicCardTitle: 'Academic Journey',
      academicCardDesc: 'Arab Open University (AOU), Faculty of Computer Studies, Department of Computer Science (Sep 2025 - Present) — Pursuing undergraduate studies in Computer Science with a focus on data structures, algorithms, and software engineering.',
      philosophyCardTitle: 'Quality Standards',
      philosophyCardDesc: 'ISTQB-aligned testing principles, structured SDLC & STLC execution, automated regression validation with Page Object Model, and clean RESTful API architectures with Angular 21 & Node.js.'
    },
    education: {
      title: 'Academic & Specialized Tracks',
      subtitle: 'Formal computer science degree and specialized professional accelerators from accredited institutions.',
      universityColTitle: 'University Degree',
      coursesColTitle: 'Specialized Programs & Scholarships',
      degreeBadge: 'Degree',
      programInfo: 'Program Info',
      showDetails: 'Show Details',
      items: {
        university: [
          {
            title: 'Bachelor of Science in Computer Science',
            institution: 'Arab Open University (AOU), Faculty of Computer Studies',
            date: 'Sep 2025 - Present',
            desc: 'Pursuing second-year undergraduate studies in Computer Science focusing on data structures, algorithms, object-oriented programming, and software engineering methodologies.',
            skills: ['Data Structures', 'Algorithms', 'OOP', 'Software Engineering', 'Database Design']
          }
        ],
        courses: [
          {
            title: 'NTI MEAN Stack: Web Developer Career Accelerator',
            institution: 'National Telecommunication Institute (NTI)',
            date: 'Jun 2026 - Aug 2026',
            desc: 'A 210-hour intensive professional training program focused on full-stack web development using MongoDB, Express.js, Angular, Node.js, and TypeScript. Building secure RESTful APIs, implementing authentication, database management, and applying modern UI/UX and web security best practices in real-world projects.',
            link: 'https://nti.sci.eg/',
            skills: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'RESTful APIs', 'JWT Auth']
          },
          {
            title: 'Digital Egypt Pioneers Initiative (DEPI) - Software Testing Track',
            institution: 'Ministry of Communications and Information Technology (MCIT)',
            date: 'Jun 2025 - Dec 2025',
            desc: 'Graduated from a 6-month intensive professional program. Mastered the full Software Development Life Cycle (SDLC) and ISTQB-aligned fundamentals. Executed manual, exploratory, and API testing (Postman), and programmed automated test scripts using Selenium and Java. Administered test cases and bug tracking via Jira and Excel, leveraging prompt engineering for AI-integrated workflows.',
            link: 'https://depi.gov.eg/',
            skills: ['Selenium WebDriver', 'Java', 'TestNG', 'Postman', 'Jira (Xray)', 'ISTQB', 'Bug Tracking']
          },
          {
            title: 'Automation Testing Training',
            institution: 'Orange Digital Center Egypt & Instant Software Solutions',
            date: 'Feb 2026',
            desc: 'Participated in a collaborative training program integrating automation testing concepts into practical real-world scenarios. Formulated and constructed automation frameworks, elevating technical skills with industry-standard tools and adhering to QA best practices.',
            link: 'https://orangedigitalcenters.com/',
            skills: ['Test Automation', 'Framework Design', 'Selenium', 'Java', 'QA Standards']
          }
        ]
      }
    },
    experience: {
      title: 'Professional Experience',
      subtitle: 'Hands-on testing automation, QA engineering, and full-stack project executions.',
      showDetails: 'Show Details',
      items: [
        {
          role: 'E-Commerce Automation Testing Engineer',
          company: 'DeFacto, Noon, Seoudi Supermarket',
          years: '2025 - 2026',
          desc: 'Engineered robust automation frameworks and authored automated test scripts using Selenium and Java to validate critical user flows, checkout flows, and UI functionality across leading e-commerce platforms.'
        },
        {
          role: 'Commercial Web Developer',
          company: 'Restaurants & Cafes',
          years: '2025 - 2026',
          desc: 'Deployed three fully functional, responsive websites utilizing AI-driven workflows and modern web technologies, prioritizing responsive UI/UX and client business requirements.'
        },
        {
          role: 'API Test Engineer',
          company: 'RESTful-Booker API Testing',
          years: '2025 - 2026',
          desc: 'Executed comprehensive API testing via Postman on booking and authentication endpoints, formulating test suites, schema assertions, and tracking defects in Excel.'
        },
        {
          role: 'QA Manual Tester',
          company: 'ISTQB Foundation Practice (Demo Systems)',
          years: '2025',
          desc: 'Implemented ISTQB-aligned manual testing and SDLC principles, executing structured test cases, boundary value analysis, exploratory passes, and detailed defect documentation.'
        },
        {
          role: 'Full-Stack Web Developer',
          company: 'Personal Portfolio & Web Solutions',
          years: '2025 - 2026',
          desc: 'Programmed a responsive portfolio leveraging HTML, CSS, JavaScript, and Angular, featuring Dark/Light modes, form processing, and REST API integrations.'
        }
      ]
    },
    services: {
      title: 'Professional Services',
      subtitle: 'Comprehensive QA testing, automation engineering, and custom web application development.',
      showMore: 'View More Services',
      showLess: 'Show Less Services',
      items: [
        {
          title: 'Test Automation & QA Engineering (Selenium & Java)',
          description: 'Designing and architecting robust automated testing suites using Selenium WebDriver, Java, and TestNG. Implementing Page Object Model (POM), data-driven testing, cross-browser execution, and automated Allure reporting.',
          icon: 'fa-solid fa-vial-circle-check'
        },
        {
          title: 'RESTful API Testing & Automated Postman Collections',
          description: 'End-to-end API validation with Postman. Writing automated test scripts, validating JSON payload schemas, asserting status codes and response latency, and setting up regression test collections.',
          icon: 'fa-solid fa-network-wired'
        },
        {
          title: 'Manual QA & Software Quality Assurance (ISTQB)',
          description: 'ISTQB-aligned software testing methodologies, comprehensive test plan design, boundary value analysis, exploratory testing, bug lifecycle management, and defect documentation.',
          icon: 'fa-solid fa-list-check'
        },
        {
          title: 'Full-Stack Web Development (MEAN Stack)',
          description: 'Building scalable, high-performance web applications using Angular 21 (Signals & Standalone), Node.js, Express.js, TypeScript, and MongoDB with secure JWT auth and REST APIs.',
          icon: 'fa-solid fa-layer-group'
        },
        {
          title: 'Restaurant & Cafe Digital Menus (Smart QR)',
          description: 'Interactive digital QR menu systems for restaurants & cafes with dynamic categories, item modifiers, real-time bill calculations, customer reviews, and administrative menu management.',
          icon: 'fa-solid fa-utensils'
        },
        {
          title: 'Medical Clinics & Doctor Digital Portals',
          description: 'Custom healthcare platforms featuring patient appointment booking, doctor schedules, medical service catalogs, patient testimonials, and SEO-optimized accessibility.',
          icon: 'fa-solid fa-hospital-user'
        },
        {
          title: 'E-Commerce Stores & Commercial Platforms',
          description: 'High-conversion online stores with dynamic product catalogs, multi-criteria filtering, shopping carts, checkout workflows, and administrative inventory control.',
          icon: 'fa-solid fa-cart-shopping'
        },
        {
          title: 'Interactive 3D Web & AI Solutions',
          description: 'Immersive 3D web applications and educational simulations utilizing Three.js, React Three Fiber, Framer Motion, and WebGL with responsive glassmorphism UI/UX and AI workflows.',
          icon: 'fa-solid fa-brain'
        },
        {
          title: 'High-Converting Business Landing Pages',
          description: 'Ultra-fast, mobile-first responsive landing pages crafted to maximize conversion rates, featuring modern glassmorphism aesthetics, fluid micro-animations, and lead capture forms.',
          icon: 'fa-solid fa-laptop-code'
        },
        {
          title: 'Digital Event & Luxury Wedding Invitation Portals',
          description: 'Tailored interactive digital invitations featuring real-time countdown timers, interactive RSVP management, venue GPS coordinates, and ambient multimedia sound effects.',
          icon: 'fa-solid fa-envelope-open-text'
        }
      ]
    },
    projects: {
      title: 'Featured Projects & QA Work',
      subtitle: 'Real-world web applications, automated testing frameworks, and API test suites.',
      showDetails: 'Show Details',
      showMore: 'View More Projects',
      showLess: 'Show Less Projects'
    },
    skills: {
      title: 'Technical Skills & Stack',
      subtitle: 'QA automation frameworks, testing methodologies, programming languages, databases, and development tools.',
      categories: [
        {
          title: 'Programming & Web Technologies',
          icon: 'fa-solid fa-code',
          skills: [
            { name: 'Java (Core)', level: 'Advanced' },
            { name: 'JavaScript (ES6+)', level: 'Advanced' },
            { name: 'TypeScript', level: 'Intermediate' },
            { name: 'Angular 21', level: 'Advanced' },
            { name: 'Node.js & Express.js', level: 'Intermediate' },
            { name: 'MongoDB', level: 'Intermediate' },
            { name: 'HTML5 & CSS3', level: 'Expert' },
            { name: 'Dart (Basics)', level: 'Foundational' },
            { name: 'C++ (Basics)', level: 'Foundational' },
            { name: 'LaTeX (Basics)', level: 'Foundational' }
          ]
        },
        {
          title: 'Testing & QA Tools',
          icon: 'fa-solid fa-vial-circle-check',
          skills: [
            { name: 'Selenium WebDriver', level: 'Advanced' },
            { name: 'TestNG', level: 'Advanced' },
            { name: 'Postman (API Testing)', level: 'Advanced' },
            { name: 'Jira (Xray)', level: 'Intermediate' },
            { name: 'Manual Testing', level: 'Expert' },
            { name: 'Test Case Design', level: 'Expert' },
            { name: 'Bug Reporting', level: 'Expert' },
            { name: 'Allure Reporting', level: 'Intermediate' }
          ]
        },
        {
          title: 'Development & Build Tools',
          icon: 'fa-solid fa-screwdriver-wrench',
          skills: [
            { name: 'Git & GitHub', level: 'Advanced' },
            { name: 'Visual Studio Code', level: 'Advanced' },
            { name: 'IntelliJ IDEA', level: 'Advanced' },
            { name: 'MongoDB Compass', level: 'Intermediate' },
            { name: 'npm', level: 'Advanced' },
            { name: 'Maven', level: 'Intermediate' },
            { name: 'Microsoft Office', level: 'Expert' }
          ]
        },
        {
          title: 'Engineering Concepts',
          icon: 'fa-solid fa-cubes-stacked',
          skills: [
            { name: 'OOP (Object-Oriented Programming)', level: 'Expert' },
            { name: 'RESTful APIs Architecture', level: 'Advanced' },
            { name: 'SDLC & STLC', level: 'Expert' },
            { name: 'Database Design', level: 'Intermediate' },
            { name: 'Agile & Scrum Methodology', level: 'Intermediate' },
            { name: 'Web Security Fundamentals', level: 'Intermediate' },
            { name: 'UI/UX Principles', level: 'Advanced' },
            { name: 'Authentication & Authorization', level: 'Intermediate' }
          ]
        },
        {
          title: 'Other Skills & AI Workflows',
          icon: 'fa-solid fa-brain',
          skills: [
            { name: 'Prompt Engineering', level: 'Advanced' },
            { name: 'AI-Integrated Workflows', level: 'Advanced' },
            { name: 'Freelancing Fundamentals', level: 'Intermediate' },
            { name: 'Project Management Basics', level: 'Intermediate' },
            { name: 'Basic Video & Photo Editing', level: 'Intermediate' }
          ]
        },
        {
          title: 'Personal & Soft Skills',
          icon: 'fa-solid fa-user-check',
          skills: [
            { name: 'Leadership & Teamwork', level: 'Exceptional' },
            { name: 'Problem Solving', level: 'Exceptional' },
            { name: 'Time Management', level: 'Advanced' },
            { name: 'Continuous Learning', level: 'Exceptional' },
            { name: 'Adaptability', level: 'Advanced' }
          ]
        }
      ]
    },
    certificates: {
      title: 'Verified Certificates & Credentials',
      subtitle: 'Professional certifications and accredited course completions.',
      verify: 'Verify',
      showDetails: 'Show Details'
    },
    activities: {
      title: 'Volunteering & Activities',
      subtitle: 'Community leadership, technical events, workshops, and extracurricular contributions.',
      showDetails: 'Show Details',
      items: [
        {
          title: 'Microsoft Student Club (MSC), AOU',
          organization: 'Arab Open University (AOU)',
          role: 'Tech Team Member (Web Committee)',
          date: 'Dec 2025 - Present',
          category: 'Technical Club',
          desc: 'Active member of the technical team (Web Committee). Contributing to community web projects, participating in technical workshops, and fostering student developer engagement.'
        },
        {
          title: 'NASA Space Apps Challenge, Benha',
          organization: 'NASA Space Apps Challenge',
          role: 'Head of Logistics, OC & Building',
          date: 'May 2025 - Oct 2025',
          category: 'Global Hackathon',
          desc: 'Spearheaded event preparations, logistics planning, and cross-functional team coordination over a six-month term for one of the largest global hackathons.'
        }
      ]
    },
    testimonials: {
      title: 'Testimonials',
      subtitle: 'What people say about my work'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a QA inquiry, project proposal, or web development opportunity? Send me a message!',
      cardHeading: 'Contact Information',
      cardDesc: 'Feel free to connect via direct phone, email, WhatsApp, or professional social networks.',
      phoneLabel: 'Phone & Call',
      whatsappLabel: 'WhatsApp Direct',
      whatsappAction: 'Chat on WhatsApp',
      telegramLabel: 'Telegram Direct',
      telegramAction: 'Message on Telegram',
      emailLabel: 'Direct Email',
      linkedinLabel: 'LinkedIn Profile',
      linkedinAction: 'Connect on LinkedIn',
      githubLabel: 'GitHub Repositories',
      githubAction: 'Explore Code & Projects',
      facebookLabel: 'Facebook Profile',
      facebookAction: 'Visit Facebook Page',
      instagramLabel: 'Instagram Profile',
      instagramAction: 'Follow on Instagram',
      locationLabel: 'Location',
      locationValue: 'El-Obour City, Qalyubia, Egypt',
      formHeading: 'Send a Message',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'John Doe',
      emailFormLabel: 'Your Email Address',
      emailPlaceholder: 'john@example.com',
      messageLabel: 'Message Details',
      messagePlaceholder: 'Describe your project, job offer, or inquiry...',
      sendBtn: 'Send Message'
    },
    footer: {
      brandTagline: 'Software Engineer & QA Automation Tester specialized in automated test suites (Selenium, Java, Postman), MEAN Stack web application development (Angular 21, Express, Node.js, MongoDB), and intelligent AI solutions.',
      quickLinks: 'Quick Navigation',
      contactDirect: 'Direct Contact',
      privacyLink: 'Privacy Policy',
      rightsReserved: 'All rights reserved.'
    },
    cvModal: {
      badge: 'Curriculum Vitae',
      fullName: 'Ibrahim Atef Abdelsatar Ahmed Hamada',
      location: 'El-Obour City, Qalyubia, Egypt',
      downloadPdf: 'Download PDF',
      educationTitle: 'EDUCATION',
      summaryTitle: 'SUMMARY',
      experienceTitle: 'EXPERIENCE',
      trainingTitle: 'SCHOLARSHIP AND TRAINING',
      activitiesTitle: 'HONORS & ACTIVITIES',
      skillsTitle: 'SKILLS',
      languagesTitle: 'LANGUAGES',
      arabicLang: 'Arabic — Native.',
      englishLang: 'English — Intermediate (Reading & Writing), Conversational (Speaking).'
    },
    privacy: {
      backBtn: 'Back to Portfolio',
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: September 2026',
      sec1Title: '1. Introduction',
      sec1Desc: 'Welcome to the official portfolio of Eng. Ibrahim Ahmed Hamada. We respect your privacy and are committed to protecting any personal information you share when contacting us or exploring this website.',
      sec2Title: '2. Information We Collect',
      sec2Desc: 'When you use the contact form, we collect the details you voluntarily provide: Your Name, Your Email Address, and Your Message Content. This information is used solely to respond to your inquiries or project discussions.',
      sec3Title: '3. Data Security & Confidentiality',
      sec3Desc: 'Your personal data is treated with strict confidentiality. We do not sell, rent, or share your contact details with any third parties or marketing agencies.',
      sec4Title: '4. Cookies & Storage',
      sec4Desc: 'This website does not utilize invasive tracking cookies or third-party ad trackers. We only use browser localStorage to remember your selected visual theme preference (Light Theme / Dark Theme) and language preference for an optimal browsing experience.',
      sec5Title: '5. Your Rights & Contact Details',
      sec5Desc: 'You have the full right to request the deletion or correction of any message or contact information you have previously submitted.',
      returnHome: 'Return to Homepage'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'نبذة عني',
      education: 'التعليم',
      skills: 'المهارات',
      experience: 'الخبرات',
      services: 'الخدمات',
      projects: 'المشاريع',
      certificates: 'الشهادات',
      activities: 'الأنشطة',
      contact: 'تواصل معي',
      privacy: 'سياسة الخصوصية',
      getInTouch: 'ابدأ التواصل',
      switchLangLabel: 'English'
    },
    hero: {
      statusBadge: 'متاح للعمل بدوام كامل وللمشاريع الهندسية',
      greeting: 'مرحبًا، أنا',
      name: 'م. إبراهيم أحمد حمادة',
      title: 'مهندس برمجيات | تيستر وفاحص جودة، مطور Full-Stack وحلول AI',
      description: 'مهندس برمجيات واختبار جودة برمجيات (تيستر QA Automation & Manual) متخصص في تصميم سايت احترافي، تطوير فرونت اند Frontend وباك اند Backend بأنظمة MEAN Stack وحلول الذكاء الاصطناعي AI والمشاريع الهندسية.',
      terminalTitle: 'ibrahim-qa-engine --env=production',
      terminalBadge: 'جميع الاختبارات ناجحة 100%',
      terminalSelenium: 'اختبارات Selenium المؤتمتة: فحص شامل عبر متصفحات Chrome و Firefox و Edge بنظام POM',
      terminalApi: 'فحص واجهات APIs: أكثر من 28 مجموعة Postman ناجحة بمطابقة تامة لمخططات JSON',
      terminalMean: 'معمارية MEAN Stack: واجهات فرونت اند Angular 21 ونظام باك اند Express/Node.js',
      chip1: 'تيستر & QA Automation',
      chip2: 'تصميم سايت & فرونت اند',
      chip3: 'باك اند & APIs (Node.js)',
      chip4: 'مشاريع هندسية & AI',
      viewCv: 'استعراض السيرة الذاتية',
      contactMe: 'تواصل معي',
      viewProjects: 'مشاهدة المشاريع'
    },
    about: {
      title: 'نبذة عني',
      subtitle: 'اكتشف خلفيتي الهندسية، خبراتي التقنية، وفلسفتي في جودة وتطوير البرمجيات.',
      role: 'مهندس برمجيات وفاحص جودة (تيستر)',
      location: 'مدينة العبور، القليوبية، مصر',
      study: 'علوم الحاسب بالجامعة العربية المفتوحة',
      previewCv: 'معاينة السيرة الذاتية الرسمية',
      heading: 'الخلفية المهنية والخبرات',
      desc1: 'مهندس برمجيات واختبار جودة برمجيات (QA Tester & Web Developer) يتمتع بخبرة عملية في الاختبار اليدوي، فحص واجهات الـ APIs، اختبار قواعد البيانات، وأتمتة الاختبارات عبر Selenium WebDriver و TestNG و Java. متدرب عبر مبادرة رواد مصر الرقمية (DEPI - وزارة الاتصالات وتكنولوجيا المعلومات)، المعهد القومي للاتصالات (NTI)، و Orange Digital Center.',
      desc2: 'طالب جامعي بكلية دراسات الحاسوب - قسم علوم الحاسب بالجامعة العربية المفتوحة (AOU). متمرس في تصميم حالات الاختبار وتوثيق تقارير العيوب عبر Jira و Excel، وبناء واجهات الـ RESTful API، وتطوير مواقع الويب والسايتات الحديثة باستخدام تقنيات MEAN Stack (MongoDB, Express.js, Angular, Node.js) وتكاملات الذكاء الاصطناعي AI.',
      academicCardTitle: 'المسار الأكاديمي',
      academicCardDesc: 'الجامعة العربية المفتوحة (AOU)، كلية دراسات الحاسوب، قسم علوم الحاسب (سبتمبر 2025 - الحالي) — دراسة جامعية بالفرقة الثانية مع التركيز على هياكل البيانات والخوارزميات والبرمجة كائنية التوجه وهندسة البرمجيات.',
      philosophyCardTitle: 'معايير الجودة الهندسية',
      philosophyCardDesc: 'تطبيق مبادئ ISTQB العالمية، دورة حياة تطوير البرمجيات SDLC ودورة الاختبار STLC، أتمتة الاختبارات بنموذج Page Object Model، وبناء أنظمة برمجية سريعة ومحمية.'
    },
    education: {
      title: 'المسار الأكاديمي والبرامج التخصصية',
      subtitle: 'الدرجة الجامعية في علوم الحاسب والمنح المهنية المعتمدة من كبرى المؤسسات التعليمية.',
      universityColTitle: 'الدرجة الجامعية',
      coursesColTitle: 'البرامج التخصصية والمنح',
      degreeBadge: 'درجة جامعية',
      programInfo: 'تفاصيل البرنامج',
      showDetails: 'عرض التفاصيل',
      items: {
        university: [
          {
            title: 'بكالوريوس علوم الحاسب (Computer Science)',
            institution: 'الجامعة العربية المفتوحة (AOU)، كلية دراسات الحاسوب',
            date: 'سبتمبر 2025 - الحالي',
            desc: 'دراسة جامعية بالفرقة الثانية في علوم الحاسب تركز على هياكل البيانات والخوارزميات، البرمجة كائنية التوجه OOP، وتصميم قواعد البيانات وهندسة البرمجيات.',
            skills: ['Data Structures', 'Algorithms', 'OOP', 'Software Engineering', 'Database Design']
          }
        ],
        courses: [
          {
            title: 'منحة مطور الويب MEAN Stack (Career Accelerator)',
            institution: 'المعهد القومي للاتصالات (NTI)',
            date: 'يونيو 2026 - أغسطس 2026',
            desc: 'برنامج تدريبي مهني مكثف لمدة 210 ساعات متخصص في تطوير تطبيقات الويب الكاملة باستخدام MongoDB و Express.js و Angular و Node.js و TypeScript. بناء واجهات برمجة تطبيقات RESTful APIs آمنة، إدارة المصادقة وقواعد البيانات، وتطبيق أفضل ممارسات أمان الويب وتجربة المستخدم في مشاريع حقيقية.',
            link: 'https://nti.sci.eg/',
            skills: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'RESTful APIs', 'JWT Auth']
          },
          {
            title: 'مبادرة رواد مصر الرقمية (DEPI) - مسار فحص البرمجيات',
            institution: 'وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)',
            date: 'يونيو 2025 - ديسمبر 2025',
            desc: 'برنامج تدريبي مكثف لمدة 6 أشهر برعاية وزارة الاتصالات. إتقان دورة حياة تطوير البرمجيات SDLC ومبادئ ISTQB، تنفيذ الاختبار اليدوي والاستكشافي واختبار الـ APIs عبر Postman، وأتمتة نصوص الاختبار باستخدام Selenium و Java، وإدارة حالات الاختبار وتتبع الأخطاء عبر Jira و Excel واستخدام الذكاء الاصطناعي AI.',
            link: 'https://depi.gov.eg/',
            skills: ['Selenium WebDriver', 'Java', 'TestNG', 'Postman', 'Jira (Xray)', 'ISTQB', 'Bug Tracking']
          },
          {
            title: 'تدريب أتمتة الاختبارات البرمجية (Automation Testing)',
            institution: 'Orange Digital Center مصر وشركة Instant Software Solutions',
            date: 'فبراير 2026',
            desc: 'برنامج تدريبي تعاوني لتطبيق مفاهيم أتمتة الاختبارات في سيناريوهات واقعية. بناء أطر عمل الأتمتة ورفع المهارات العملية باستخدام الأدوات القياسية والالتزام بأفضل ممارسات فحص الجودة العالمية.',
            link: 'https://orangedigitalcenters.com/',
            skills: ['Test Automation', 'Framework Design', 'Selenium', 'Java', 'QA Standards']
          }
        ]
      }
    },
    experience: {
      title: 'الخبرات العملية والمهنية',
      subtitle: 'تجارب واقعية في أتمتة الاختبارات، فحص الجودة كـ تيستر، وتصميم سايت ومشاريع ويب متكاملة.',
      showDetails: 'عرض التفاصيل',
      items: [
        {
          role: 'مهندس أتمتة اختبارات المتاجر الإلكترونية',
          company: 'DeFacto, Noon, Seoudi Supermarket',
          years: '2025 - 2026',
          desc: 'هندسة أطر عمل أتمتة قوية وكتابة نصوص اختبار برمجية باستخدام Selenium و Java للتحقق من تدفقات الشراء الحيوية وعمليات الدفع وواجهات المستخدم لمنصات التجارة الإلكترونية الكبرى.'
        },
        {
          role: 'مطور مواقع ويب تجارية',
          company: 'Restaurants & Cafes (المطاعم والكافيهات)',
          years: '2025 - 2026',
          desc: 'تصميم وتنفيذ ثلاثة مواقع تجارية متجاوبة وتفاعلية بالاعتماد على تقنيات الويب الذكية وحلول الذكاء الاصطناعي AI، مع التركيز على واجهات فرونت اند عصرية وتلبية متطلبات العملاء.'
        },
        {
          role: 'مهندس فحص واجهات برمجية (API Tester)',
          company: 'RESTful-Booker API Testing',
          years: '2025 - 2026',
          desc: 'تنفيذ اختبارات تكاملية شاملة لواجهات الـ APIs باستخدام Postman لنقاط المصادقة والحجز، وتصميم حالات الاختبار والتحقق من صحة البيانات وتوثيق التقارير.'
        },
        {
          role: 'فاحص جودة برمجيات يدوي (QA Manual Tester)',
          company: 'ISTQB Foundation Practice (أنظمة تجريبية)',
          years: '2025',
          desc: 'تطبيق منهجيات ISTQB ومبادئ دورة حياة البرمجيات SDLC، وتنفيذ حالات اختبار مهيكلة، وتحليل القيم الحدية، وتوثيق تقارير الأخطاء والعيوب البرمجية.'
        },
        {
          role: 'مطور ويب متكامل (Full-Stack Developer)',
          company: 'الموقع الشخصي والمشاريع الهندسية',
          years: '2025 - 2026',
          desc: 'تصميم سايت وبورتفوليو تفاعلي متجاوب باستخدام HTML و CSS و JavaScript و Angular، يدعم الوضعين الفاتح والداكن وتكاملات الـ APIs وإرسال الرسائل.'
        }
      ]
    },
    services: {
      title: 'الخدمات المهنية والهندسية',
      subtitle: 'خدمات فحص جودة واختبار البرمجيات، أتمتة الاختبارات، تصميم سايت، وتطوير مواقع الويب المتكاملة.',
      showMore: 'عرض المزيد من الخدمات',
      showLess: 'عرض خدمات أقل',
      items: [
        {
          title: 'فحص واختبار البرمجيات (تيستر & QA Automation)',
          description: 'تصميم وبناء أطر أتمتة الاختبارات باستخدام Selenium WebDriver و Java و TestNG بمفهوم Page Object Model (POM)، الفحص عبر مختلف المتصفحات، وتوليد تقارير Allure تفاعلية.',
          icon: 'fa-solid fa-vial-circle-check'
        },
        {
          title: 'فحص واختبار واجهات الـ APIs (Postman)',
          description: 'اختبار تكاملي شامل للـ RESTful APIs باستخدام Postman، التحقق من مخططات JSON schemas، وفحص الأداء والاستجابة، وبناء مجموعات اختبار انحداري مؤتمتة.',
          icon: 'fa-solid fa-network-wired'
        },
        {
          title: 'فحص برمجيات يدوي (Manual QA Tester - ISTQB)',
          description: 'تطبيق منهجيات ISTQB في اختبار البرمجيات، تصميم خطط الاختبار الشاملة، كتابة وتوثيق حالات الاختبار والـ Bug Reports لضمان أعلى جودة للمنتج.',
          icon: 'fa-solid fa-list-check'
        },
        {
          title: 'تصميم سايت وتطوير فرونت اند وباك اند (Full-Stack)',
          description: 'تصميم سايت احترافي وتطوير تطبيقات ويب متكاملة باستخدام Angular للفرونت اند و Node.js/Express للباك اند مع قواعد بيانات MongoDB وحماية JWT.',
          icon: 'fa-solid fa-layer-group'
        },
        {
          title: 'تصميم وتطوير المنيو الذكي (Smart QR Menu)',
          description: 'نظام منيو رقمي ذكي عبر QR Code للمطاعم والكافيهات، يدعم التصنيفات الديناميكية وحساب الفاتورة المباشر وتحديثات لوحة التحكم.',
          icon: 'fa-solid fa-utensils'
        },
        {
          title: 'بوابات العيادات الطبية وحجز المواعيد',
          description: 'منصات طبية مخصصة للعيادات والأطباء تتيح حجز المواعيد، عرض التخصصات، واستعراض آراء المرضى بتصميم متوافق مع كافة الأجهزة.',
          icon: 'fa-solid fa-hospital-user'
        },
        {
          title: 'تصميم المتاجر الإلكترونية والمنصات التجارية',
          description: 'متاجر إلكترونية عالية التحويل مع كتالوج منتجات ديناميكي، فلاتر بحث متعددة، سلة مشتريات، ولوحة إدارة للمخزون والطلبات.',
          icon: 'fa-solid fa-cart-shopping'
        },
        {
          title: 'حلول الويب الذكية والذكاء الاصطناعي (AI Solutions & 3D)',
          description: 'تكامل حلول الذكاء الاصطناعي (AI) وتجارب الويب التفاعلية ثلاثية الأبعاد Three.js لتحقيق أقصى درجات التفاعل وتطوير مشاريع هندسية ذكية.',
          icon: 'fa-solid fa-brain'
        },
        {
          title: 'تصميم سايت هبوط عالي التحويل (Landing Pages)',
          description: 'صفحات هبوط فائقة السرعة ومتوافقة مع الجوال، مبنية بأحدث تقنيات الفرونت اند لزيادة معدل التحويل واكتساب العملاء.',
          icon: 'fa-solid fa-laptop-code'
        },
        {
          title: 'دعوات إلكترونية تفاعلية للمناسبات والفعاليات',
          description: 'بطاقات ودعوات رقمية ذكية مع عد تنازلي مباشر، تأكيد حضور تفاعلي (RSVP)، وخريطة موقع جغرافية وتأثيرات بصرية مميزة.',
          icon: 'fa-solid fa-envelope-open-text'
        }
      ]
    },
    projects: {
      title: 'معرض المشاريع والأعمال الهندسية',
      subtitle: 'تطبيقات ويب متكاملة، مشاريع تصميم سايت، أطر عمل لاختبار البرمجيات، وفحص واجهات الـ APIs.',
      showDetails: 'عرض التفاصيل',
      showMore: 'عرض المزيد من المشاريع',
      showLess: 'عرض مشاريع أقل'
    },
    skills: {
      title: 'المهارات التقنية والأدوات البرمجية',
      subtitle: 'أطر عمل أتمتة الاختبارات، لغات البرمجة، قواعد البيانات، وأدوات تطوير الويب الشاملة.',
      categories: [
        {
          title: 'لغات البرمجة وتقنيات الويب',
          icon: 'fa-solid fa-code',
          skills: [
            { name: 'Java (Core)', level: 'متقدم' },
            { name: 'JavaScript (ES6+)', level: 'متقدم' },
            { name: 'TypeScript', level: 'متوسط' },
            { name: 'Angular 21 (فرونت اند)', level: 'متقدم' },
            { name: 'Node.js & Express.js (باك اند)', level: 'متوسط' },
            { name: 'MongoDB (قواعد بيانات)', level: 'متوسط' },
            { name: 'HTML5 & CSS3', level: 'خبير' },
            { name: 'Dart (أساسيات)', level: 'تأسيسي' },
            { name: 'C++ (أساسيات)', level: 'تأسيسي' },
            { name: 'LaTeX (أساسيات)', level: 'تأسيسي' }
          ]
        },
        {
          title: 'أدوات فحص واختبار جودة البرمجيات (تيستر)',
          icon: 'fa-solid fa-vial-circle-check',
          skills: [
            { name: 'Selenium WebDriver', level: 'متقدم' },
            { name: 'TestNG', level: 'متقدم' },
            { name: 'Postman (فحص APIs)', level: 'متقدم' },
            { name: 'Jira (Xray)', level: 'متوسط' },
            { name: 'Manual Testing (فحص يدوي)', level: 'خبير' },
            { name: 'Test Case Design (تصميم الحالات)', level: 'خبير' },
            { name: 'Bug Reporting (تقارير الأخطاء)', level: 'خبير' },
            { name: 'Allure Reporting', level: 'متوسط' }
          ]
        },
        {
          title: 'أدوات التطوير وإدارة المشروعات',
          icon: 'fa-solid fa-screwdriver-wrench',
          skills: [
            { name: 'Git & GitHub', level: 'متقدم' },
            { name: 'Visual Studio Code', level: 'متقدم' },
            { name: 'IntelliJ IDEA', level: 'متقدم' },
            { name: 'MongoDB Compass', level: 'متوسط' },
            { name: 'npm', level: 'متقدم' },
            { name: 'Maven', level: 'متوسط' },
            { name: 'Microsoft Office', level: 'خبير' }
          ]
        },
        {
          title: 'المفاهيم الهندسية والبرمجية',
          icon: 'fa-solid fa-cubes-stacked',
          skills: [
            { name: 'OOP (البرمجة كائنية التوجه)', level: 'خبير' },
            { name: 'معمارية RESTful APIs', level: 'متقدم' },
            { name: 'دورة حياة البرمجيات SDLC & STLC', level: 'خبير' },
            { name: 'تصميم قواعد البيانات', level: 'متوسط' },
            { name: 'منهجيات Agile & Scrum', level: 'متوسط' },
            { name: 'أساسيات أمان الويب', level: 'متوسط' },
            { name: 'مبادئ تجربة وواجهة المستخدم UI/UX', level: 'متقدم' },
            { name: 'المصادقة والأمان Authentication', level: 'متوسط' }
          ]
        },
        {
          title: 'حلول الذكاء الاصطناعي AI والمهارات الأخرى',
          icon: 'fa-solid fa-brain',
          skills: [
            { name: 'هندسة الأوامر Prompt Engineering', level: 'متقدم' },
            { name: 'أنظمة الذكاء الاصطناعي AI Workflows', level: 'متقدم' },
            { name: 'أساسيات العمل الحر Freelancing', level: 'متوسط' },
            { name: 'أساسيات إدارة المشاريع', level: 'متوسط' },
            { name: 'معالجة وتعديل الصور والفيديو', level: 'متوسط' }
          ]
        },
        {
          title: 'المهارات الشخصية والقيادية',
          icon: 'fa-solid fa-user-check',
          skills: [
            { name: 'القيادة والعمل الجماعي', level: 'استثنائي' },
            { name: 'حل المشكلات البرمجية', level: 'استثنائي' },
            { name: 'إدارة الوقت والالتزام', level: 'متقدم' },
            { name: 'التعلم والتطور المستمر', level: 'استثنائي' },
            { name: 'المرونة وسرعة التكيف', level: 'متقدم' }
          ]
        }
      ]
    },
    certificates: {
      title: 'الشهادات والاعتمادات المهنية الموثقة',
      subtitle: 'الشهادات المعتمدة في اختبار البرمجيات وتطوير الويب.',
      verify: 'تحقق من الشهادة',
      showDetails: 'عرض التفاصيل'
    },
    activities: {
      title: 'الأنشطة التطوعية والمشاركات القيادية',
      subtitle: 'المشاركات المجتمعية، الفعاليات التقنية، الهاكاثونات العالمية، والأنشطة الطلابية.',
      showDetails: 'عرض التفاصيل',
      items: [
        {
          title: 'نادي مايكروسوفت الطلابي (MSC) بالجامعة العربية المفتوحة',
          organization: 'الجامعة العربية المفتوحة (AOU)',
          role: 'عضو الفريق التقني (لجنة الويب)',
          date: 'ديسمبر 2025 - الحالي',
          category: 'نشاط تقني طلابي',
          desc: 'عضو فعال في الفريق التقني (لجنة الويب). المساهمة في تطوير مشاريع الويب للمجتمع الطلابي، والمشاركة في ورش العمل التقنية ونقل المعرفة البرمجية.'
        },
        {
          title: 'تحدي تطبيقات الفضاء الدولي ناسا (NASA Space Apps)',
          organization: 'NASA Space Apps Challenge Benha',
          role: 'رئيس لجنة اللوجستيات والتنظيم (Head of Logistics)',
          date: 'مايو 2025 - أكتوبر 2025',
          category: 'هاكاثون عالمي',
          desc: 'قيادة الترتيبات والتنسيق اللوجستي وإدارة الفرق والعمليات التنظيمية على مدار 6 أشهر في واحد من أكبر الهاكاثونات العالمية التابعة لوكالة ناسا.'
        }
      ]
    },
    testimonials: {
      title: 'آراء العملاء والزملاء',
      subtitle: 'ما يقوله الزملاء والعملاء عن جودة أعمالي'
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'هل لديك استفسار حول فحص البرمجيات كـ تيستر، أو ترغب في تصميم سايت وتطوير موقعك؟ يسعدني تواصلك!',
      cardHeading: 'بيانات الاتصال والتواصل',
      cardDesc: 'يمكنك التواصل مباشرة عبر الهاتف، البريد الإلكتروني، واتساب، أو الحسابات المهنية الرسمية.',
      phoneLabel: 'الاتصال الهاتفي المباشر',
      whatsappLabel: 'محادثة مباشرة عبر واتساب',
      whatsappAction: 'تحدث عبر واتساب',
      telegramLabel: 'محادثة عبر تليجرام',
      telegramAction: 'راسل عبر تليجرام',
      emailLabel: 'البريد الإلكتروني الرسمي',
      linkedinLabel: 'الملف الشخصي على LinkedIn',
      linkedinAction: 'تواصل عبر LinkedIn',
      githubLabel: 'مستودعات الأكواد على GitHub',
      githubAction: 'استعرض المشاريع على GitHub',
      facebookLabel: 'الصفحة الرسمية على Facebook',
      facebookAction: 'زيارة صفحة Facebook',
      instagramLabel: 'الحساب الرسمي على Instagram',
      instagramAction: 'متابعة على Instagram',
      locationLabel: 'الموقع الجغرافي',
      locationValue: 'مدينة العبور، القليوبية، مصر',
      formHeading: 'أرسل رسالتك مباشرة',
      nameLabel: 'الاسم بالكامل',
      namePlaceholder: 'اكتب اسمك هنا...',
      emailFormLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'name@example.com',
      messageLabel: 'تفاصيل الرسالة أو المشروع',
      messagePlaceholder: 'اكتب تفاصيل طلبك، فكرة مشروعك، أو استفسارك هنا...',
      sendBtn: 'إرسال الرسالة'
    },
    footer: {
      brandTagline: 'مهندس برمجيات واختبار جودة برمجيات (تيستر QA Automation & Manual)، متخصص في تصميم سايت احترافي، تطوير واجهات فرونت اند Frontend، وأنظمة باك اند Backend، وحلول الذكاء الاصطناعي AI والمشاريع الهندسية.',
      quickLinks: 'روابط التنقل السريع',
      contactDirect: 'الاتصال المباشر',
      privacyLink: 'سياسة الخصوصية',
      rightsReserved: 'جميع الحقوق محفوظة.'
    },
    cvModal: {
      badge: 'السيرة الذاتية الرسمية',
      fullName: 'إبراهيم عاطف عبد الستار أحمد حمادة',
      location: 'مدينة العبور، القليوبية، مصر',
      downloadPdf: 'تحميل ملف PDF',
      educationTitle: 'التعليم والمسار الأكاديمي',
      summaryTitle: 'الملخص المهني',
      experienceTitle: 'الخبرات العملية والمهنية',
      trainingTitle: 'المنح والتدريبات المهنية المتخصصة',
      activitiesTitle: 'الأنشطة الطلابية والمشاركات القيادية',
      skillsTitle: 'المهارات التقنية والشخصية',
      languagesTitle: 'اللغات',
      arabicLang: 'العربية — اللغة الأم (Native).',
      englishLang: 'الإنجليزية — مستوى متوسط في القراءة والكتابة، ومحادثة جيدة.'
    },
    privacy: {
      backBtn: 'العودة للبورتفوليو',
      title: 'سياسة الخصوصية',
      lastUpdated: 'آخر تحديث: سبتمبر 2026',
      sec1Title: '1. مقدمة',
      sec1Desc: 'مرحبًا بكم في الموقع الرسمي للمهندس إبراهيم أحمد حمادة. نحن نلتزم باحترام خصوصيتكم وحماية أي بيانات يتم تقديمها عبر نموذج التواصل أو أثناء استعراض خدمات فحص جودة البرمجيات وتطوير الويب.',
      sec2Title: '2. البيانات التي نقوم بجمعها',
      sec2Desc: 'عند استخدام نموذج التواصل، نقوم بجمع البيانات التي تقدمها طواعية: اسمك، بريدك الإلكتروني، ومحتوى رسالتك. تُستخدم هذه البيانات حصرًا للرد على استفسارك ومناقشة متطلبات المشروع.',
      sec3Title: '3. أمان وسرية البيانات',
      sec3Desc: 'يتم التعامل مع بياناتك بسرية تامة، ولا نقوم مطلقًا ببيع أو تأجير أو مشاركة معلومات التواصل مع أي جهات خارجية أو أطراف تسويقية.',
      sec4Title: '4. ملفات تعريف الارتباط والتخزين',
      sec4Desc: 'لا يستخدم الموقع أي ملفات تتبع إعلانية، ويقتصر استخدام التخزين المحلي على حفظ تفضيل المظهر المختار (الوضع النهاري أو الليلي) وتفضيل اللغة لتحسين تجربة التصفح.',
      sec5Title: '5. حقوقك وبيانات الاتصال',
      sec5Desc: 'يحق لك في أي وقت طلب تعديل أو حذف أي رسالة أو بيانات تواصل قمت بتقديمها مسبقًا.',
      returnHome: 'العودة إلى الصفحة الرئيسية'
    }
  }
};
