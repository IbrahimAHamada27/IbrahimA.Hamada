const mongoose = require('mongoose');
require('dotenv').config();

// Models
const SiteInfo = require('./models/SiteInfo');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Skill = require('./models/Skill');
const Certificate = require('./models/Certificate');
const Activity = require('./models/Activity');
const Project = require('./models/Project');
const Service = require('./models/Service');

const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

async function seedData() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await SiteInfo.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Skill.deleteMany({});
    await Certificate.deleteMany({});
    await Activity.deleteMany({});
    await Project.deleteMany({});
    await Service.deleteMany({});

    // 1. Site Info
    await SiteInfo.create({
      brandName: "Ibrahim A. Hamada",
      fullName: "Ibrahim Atef Abdelsatar Ahmed Hamada",
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
      location: "El-Obour City, Qalyubia, Egypt",
      githubUrl: "https://github.com/IbrahimAHamada27",
      linkedinUrl: "https://www.linkedin.com/in/ibrahim-a-hamada-0ba411287/",
      facebookUrl: "https://web.facebook.com/ibrahima.hamada27",
      instagramUrl: "https://www.instagram.com/ibrahim_a._hamada/",
      telegramUrl: "https://t.me/+201112540997",
      whatsappUrl: "https://wa.me/201112540997",
      profileImage: "https://github.com/ibrahimahamada27.png",
      logoImage: "https://github.com/ibrahimahamada27.png",
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ibrahim-a-hamada-0ba411287/", icon: "fab fa-linkedin" },
        { name: "GitHub", url: "https://github.com/IbrahimAHamada27", icon: "fab fa-github" },
        { name: "WhatsApp", url: "https://wa.me/201112540997", icon: "fab fa-whatsapp" },
        { name: "Telegram", url: "https://t.me/+201112540997", icon: "fab fa-telegram" },
        { name: "Facebook", url: "https://web.facebook.com/ibrahima.hamada27", icon: "fab fa-facebook" },
        { name: "Instagram", url: "https://www.instagram.com/ibrahim_a._hamada/", icon: "fab fa-instagram" }
      ]
    });

    // 2. Experience (Directly from CV)
    const experiences = [
      {
        role: "E-Commerce Automation Testing",
        company: "DeFacto, Noon, Seoudi Supermarket",
        years: "Practical Project Experience",
        desc: "Engineered robust automation frameworks and authored test scripts using Selenium WebDriver and Java to validate critical user flows, checkout pipelines, and UI functionality."
      },
      {
        role: "Commercial Web Development",
        company: "Restaurants & Cafes (Double Shot, The Face Coffee, Yuki Cafe)",
        years: "Commercial Projects",
        desc: "Deployed three fully functional, responsive websites utilizing AI-driven Vibe Coding, prioritizing modern UI/UX, mobile responsiveness, and client business requirements."
      },
      {
        role: "RESTful-Booker API Testing",
        company: "API Testing Project",
        years: "API Validation",
        desc: "Executed manual and automated API testing via Postman on the authentication and booking endpoints, formulating comprehensive test cases, validating payload schemas, and tracking defects using Excel."
      },
      {
        role: "ISTQB Foundation Practice",
        company: "Demo Site & Quality Assurance",
        years: "QA Fundamentals",
        desc: "Implemented ISTQB-aligned manual testing and SDLC principles, executing structured test cases, boundary value analysis, equivalence partitioning, and generating detailed defect documentation."
      },
      {
        role: "Personal Portfolio Development",
        company: "Personal Project",
        years: "Frontend Architecture",
        desc: "Programmed a responsive modern portfolio leveraging HTML, Tailwind CSS, Angular 21, and JavaScript, featuring Dark/Light mode theming and contact integrations."
      }
    ];
    await Experience.insertMany(experiences);

    // 3. Education & Scholarships / Training (Directly from CV)
    const educations = [
      {
        title: "Undergraduate in Computer Science",
        institution: "Arab Open University (AOU), Faculty of Computer Studies",
        date: "Sep 2025 - Present",
        desc: "Pursuing second-year undergraduate studies in Computer Science, Department of Computer Science. Deep focus on algorithms, data structures, OOP, database design, and software engineering.",
        type: "university",
        skillsLearned: ["Algorithms", "Data Structures", "OOP", "Database Design", "Computer Science Fundamentals"]
      },
      {
        title: "NTI MEAN Stack: Web Developer Career Accelerator",
        institution: "National Telecommunication Institute (NTI)",
        date: "Jun 2026 - Aug 2026",
        desc: "Graduated from a 210-hour intensive professional training program focused on MEAN Stack web development. Developing full-stack applications using MongoDB, Express.js, Angular 21, Node.js, and TypeScript. Building secure RESTful APIs, implementing authentication, database management, web security, UI/UX principles, and freelancing best practices.",
        type: "course",
        link: "https://nti.sci.eg/",
        skillsLearned: ["MongoDB", "Express.js", "Angular 21", "Node.js", "TypeScript", "RESTful APIs", "Authentication", "Web Security"]
      },
      {
        title: "Digital Egypt Pioneers Initiative (DEPI) — Software Testing Track",
        institution: "Ministry of Communications and Information Technology (MCIT)",
        date: "Jun 2025 - Dec 2025",
        desc: "Graduated from a six-month intensive program sponsored by MCIT. Mastered the full Software Development Life Cycle (SDLC) and ISTQB-aligned fundamentals (static/dynamic techniques, test design). Performed manual, exploratory, and API testing (Postman), and programmed automated test scripts using Selenium and Java. Administered test cases and bug tracking via Jira and Excel.",
        type: "course",
        link: "https://depi.gov.eg/",
        skillsLearned: ["Software Testing", "Selenium WebDriver", "Java Automation", "Postman API", "Jira / Xray", "Defect Tracking", "ISTQB Standards", "SDLC / STLC"]
      },
      {
        title: "Automation Testing Training",
        institution: "Orange Digital Center Egypt & Instant Software Solutions",
        date: "Feb 2026",
        desc: "Participated in a collaborative training program. Integrated automation testing concepts into practical, real-world scenarios. Formulated and constructed automation frameworks, elevating practical skills with industry-standard tools and QA best practices.",
        type: "course",
        skillsLearned: ["TestNG", "Selenium Frameworks", "Automation Standards", "Test Design Patterns"]
      }
    ];
    await Education.insertMany(educations);

    // 4. Skills (Directly categorized from CV)
    const skills = [
      { name: "Java (Core & Test Automation)", description: "OOP, Selenium Scripts & POM", iconUrl: "" },
      { name: "Selenium WebDriver", description: "Automated Browser Testing & UI Flows", iconUrl: "" },
      { name: "TestNG", description: "Test Framework, Annotations & Reports", iconUrl: "" },
      { name: "Postman & REST API Testing", description: "Endpoint Validation & Schema Tests", iconUrl: "" },
      { name: "Manual Testing & ISTQB", description: "Test Case Design, SDLC & STLC", iconUrl: "" },
      { name: "Jira (Xray) & Bug Reporting", description: "Defect Tracking & Agile Sprints", iconUrl: "" },
      { name: "Angular 21", description: "Signals, Standalone & Reactive UI", iconUrl: "" },
      { name: "Node.js & Express.js", description: "Backend Services & REST APIs", iconUrl: "" },
      { name: "MongoDB & Database Design", description: "NoSQL Schemas & Mongoose ORM", iconUrl: "" },
      { name: "TypeScript & JavaScript (ES6+)", description: "Typed Full-Stack Development", iconUrl: "" },
      { name: "HTML5 & CSS3 / Tailwind", description: "Modern Responsive Web Layouts", iconUrl: "" },
      { name: "Git, GitHub & Maven", description: "Version Control & Build Automation", iconUrl: "" }
    ];
    await Skill.insertMany(skills);

    // 5. Certificates
    const certificates = [
      {
        title: "Software Testing Track Certificate",
        issuer: "Digital Egypt Pioneers Initiative (DEPI) / MCIT",
        date: "Dec 2025",
        link: "https://depi.gov.eg/",
        imageUrl: ""
      },
      {
        title: "Automation Testing Training Certificate",
        issuer: "Orange Digital Center Egypt & Instant Software Solutions",
        date: "Feb 2026",
        link: "https://www.orangedigitalcenters.com/",
        imageUrl: ""
      },
      {
        title: "NTI MEAN Stack Web Developer Certificate",
        issuer: "National Telecommunication Institute (NTI)",
        date: "Aug 2026",
        link: "https://nti.sci.eg/",
        imageUrl: ""
      },
      {
        title: "Medical Analysis Principles",
        issuer: "Syndicate of Scientific Professions",
        date: "Recent",
        link: "",
        imageUrl: ""
      },
      {
        title: "Bloodborne Pathogens Certification",
        issuer: "NHCPS",
        date: "Recent",
        link: "",
        imageUrl: ""
      }
    ];
    await Certificate.insertMany(certificates);

    // 6. University & Extracurricular Activities (Directly from CV)
    const activities = [
      {
        title: "Tech Team Member (Web Committee)",
        organization: "Microsoft Student Club (MSC), AOU",
        role: "Web Team Developer & Tech Committee",
        date: "Dec 2025 – Present",
        desc: "Active member in the Web Committee at Microsoft Student Club (MSC) - Arab Open University, contributing to technical development projects, web workshops, and collaborative coding initiatives.",
        category: "activity",
        link: "https://github.com/IbrahimAHamada27"
      },
      {
        title: "Head of Logistics, OC & Building",
        organization: "NASA Space Apps Challenge, Benha",
        role: "Head of Logistics & Organizing Committee",
        date: "May 2025 – Oct 2025",
        desc: "Spearheaded event preparations, logistics planning, on-ground organization, and cross-functional team coordination over a six-month term for the global hackathon.",
        category: "volunteering",
        link: "https://www.spaceappschallenge.org/"
      }
    ];
    await Activity.insertMany(activities);

    // 7. Projects & QA Suites
    const projects = [
      {
        title: "DEPI E-Commerce QA Automation Framework",
        description: "Enterprise test automation suite for leading e-commerce platforms (Noon, DeFacto, Seoudi). Implements Page Object Model (POM), data-driven testing, custom locators, and automated Allure test execution reports.",
        link: "https://github.com/IbrahimAHamada27/graduation-project-from-depi",
        technologies: ["Java", "Selenium WebDriver", "TestNG", "Maven", "POM", "Allure Reports"],
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Dar Al-Yusr Clinics & Medical Management Portal",
        description: "Full-scale medical clinics platform featuring patient appointment booking, doctor schedules, department navigation, and high-performance clinic administrative workflows.",
        link: "https://github.com/IbrahimAHamada27/Dar-AlYusr-Clinics",
        technologies: ["TypeScript", "Angular", "TailwindCSS", "RESTful API", "Responsive UI"],
        imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Hedera Hashgraph Interactive 3D Experience",
        description: "Interactive cinematic 3D educational web app developed for MLSA AOU Hedera Track. Visualizes Hedera consensus algorithms, token services (HTS), and live HBAR transfer simulations with WebGL.",
        link: "https://ibrahimahamada27.github.io/hedera-hashgraph-interactive-session/",
        technologies: ["React", "Three.js", "React Three Fiber", "Framer Motion", "TailwindCSS", "WebGL"],
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Dr. Ibrahim Elsharkawy Clinic Portal",
        description: "Medical practitioner digital portal delivering seamless patient consultation inquiries, service showcases, testimonials, and optimized responsive accessibility.",
        link: "https://github.com/IbrahimAHamada27/Dr.Ibrahim_Elsharkawy",
        technologies: ["TypeScript", "Modern Web", "CSS Grid", "SEO Optimization", "Mobile-First"],
        imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Dr. Aml Abd ELsattar Healthcare Profile",
        description: "Specialized clinical website tailored for patient communication, healthcare clinic schedule coordination, and interactive medical service portfolios.",
        link: "https://github.com/IbrahimAHamada27/-Dr.Aml-Abd-ELsattar-",
        technologies: ["TypeScript", "Modern UI/UX", "Glassmorphism", "CSS3 Animations"],
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Vexa SaaS & AI Application Platform",
        description: "Modern, high-performance web application designed for scalable SaaS workflows with sleek glassmorphic UI components, dynamic data handling, and AI-ready integrations.",
        link: "https://github.com/IbrahimAHamada27/vexa",
        technologies: ["TypeScript", "Next.js / Web", "TailwindCSS", "State Management", "REST APIs"],
        imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Athr Baqy Community & Charity Platform",
        description: "Dedicated digital platform for charitable initiatives and sustainable community impact, highlighting initiative goals, live progress milestones, and community participation.",
        link: "https://github.com/IbrahimAHamada27/-AthrBaqy",
        technologies: ["TypeScript", "Modern Web", "Interactive UI", "Accessibility", "Responsive"],
        imageUrl: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb7?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "El-Koptan Mobile & Tech Store",
        description: "Commercial e-commerce store for smartphones and accessories featuring dynamic product catalogs, multi-criteria filtering, cart management, and checkout interfaces.",
        link: "https://github.com/IbrahimAHamada27/ElKoptanMobileStore",
        technologies: ["TypeScript", "E-Commerce", "State Management", "TailwindCSS", "REST API"],
        imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "The Face Coffee & Smart QR Ordering",
        description: "Commercial cafe ordering system and interactive digital QR menu with customizable modifiers, live order calculations, and administrative menu controls.",
        link: "https://ibrahimahamada27.github.io/thefacecoffee/",
        technologies: ["Python", "FastAPI / Flask", "Modern Web", "QR System", "REST API"],
        imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Full-Stack E-Commerce & QA Suite",
        description: "Comprehensive e-commerce platform accompanied by automated & manual test scripts covering user authentication, payment processing, product reviews, and inventory controls.",
        link: "https://github.com/IbrahimAHamada27/E-commerce",
        technologies: ["TypeScript", "Node.js", "Express", "MongoDB", "Postman", "QA Test Suites"],
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Double Shot Cafe Digital Experience",
        description: "High-conversion commercial cafe showcase featuring responsive visual menus, signature specialty drink cards, customer reviews, and location mapping.",
        link: "https://ibrahimahamada27.github.io/double.shot/",
        technologies: ["HTML5", "CSS3", "JavaScript", "Mobile-First", "Vibe Coding"],
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Interactive Luxury Wedding Invitation Suite",
        description: "Luxury digital wedding invitation with real-time countdown timers, interactive RSVP forms, venue location coordinates, and smooth multimedia ambient sound effects.",
        link: "https://ibrahimahamada27.github.io/Mostafa_And_Yasmine_Wedding_Invitation/",
        technologies: ["HTML5", "CSS3 Keyframes", "JavaScript", "Audio API", "Responsive UX"],
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60"
      }
    ];
    await Project.insertMany(projects);

    // 8. Services (Tailored for QA & Custom Web Solutions)
    const services = [
      {
        title: "Test Automation & QA Engineering (Selenium & Java)",
        description: "Designing and architecting robust automated testing suites using Selenium WebDriver, Java, and TestNG. Implementing Page Object Model (POM), data-driven testing, cross-browser execution, and automated Allure reporting.",
        icon: "fa-solid fa-vial-circle-check"
      },
      {
        title: "RESTful API Testing & Automated Postman Collections",
        description: "End-to-end API validation with Postman. Writing automated test scripts, validating JSON payload schemas, asserting status codes and response latency, and setting up regression test collections.",
        icon: "fa-solid fa-network-wired"
      },
      {
        title: "Manual QA & Software Quality Assurance (ISTQB)",
        description: "ISTQB-aligned software testing methodologies, comprehensive test plan design, boundary value analysis, exploratory testing, bug lifecycle management, and defect documentation.",
        icon: "fa-solid fa-list-check"
      },
      {
        title: "Full-Stack Web Development (MEAN Stack)",
        description: "Building scalable, high-performance web applications using Angular 21 (Signals & Standalone), Node.js, Express.js, TypeScript, and MongoDB with secure JWT auth and REST APIs.",
        icon: "fa-solid fa-layer-group"
      },
      {
        title: "Restaurant & Cafe Digital Menus (Smart QR)",
        description: "Interactive digital QR menu systems for restaurants & cafes with dynamic categories, item modifiers, real-time bill calculations, customer reviews, and administrative menu management.",
        icon: "fa-solid fa-utensils"
      },
      {
        title: "Medical Clinics & Doctor Digital Portals",
        description: "Custom healthcare platforms featuring patient appointment booking, doctor schedules, medical service catalogs, patient testimonials, and SEO-optimized accessibility.",
        icon: "fa-solid fa-hospital-user"
      },
      {
        title: "E-Commerce Stores & Commercial Platforms",
        description: "High-conversion online stores with dynamic product catalogs, multi-criteria filtering, shopping carts, checkout workflows, and administrative inventory control.",
        icon: "fa-solid fa-cart-shopping"
      },
      {
        title: "Interactive 3D Web & WebGL Experiences",
        description: "Immersive 3D web applications and educational simulations utilizing Three.js, React Three Fiber, Framer Motion, and WebGL with responsive glassmorphism UI/UX.",
        icon: "fa-solid fa-cubes"
      },
      {
        title: "High-Converting Business Landing Pages",
        description: "Ultra-fast, mobile-first responsive landing pages crafted to maximize conversion rates, featuring modern glassmorphism aesthetics, fluid micro-animations, and lead capture forms.",
        icon: "fa-solid fa-laptop-code"
      },
      {
        title: "Digital Event & Luxury Wedding Invitation Portals",
        description: "Tailored interactive digital invitations featuring real-time countdown timers, interactive RSVP management, venue GPS coordinates, and ambient multimedia sound effects.",
        icon: "fa-solid fa-envelope-open-text"
      }
    ];
    await Service.insertMany(services);

    console.log('✅ Data seeding completed successfully with all featured projects, services, certificates, and activities!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  }
}

seedData();
