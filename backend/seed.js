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
      heroTitle: "Software Tester & Web Developer",
      heroDesc: "I am an Aspiring Full-Stack Web Developer and Software Tester with practical experience in Manual Testing, API Testing, Database Testing, and Test Automation using Selenium, TestNG, and Java. Skilled in MEAN Stack development.",
      aboutTitle: "About Me",
      aboutDesc1: "Software Tester and Aspiring Full-Stack Web Developer with practical experience in Manual Testing, API Testing, Database Testing, and Test Automation using Selenium, TestNG, and Java. Trained through DEPI, Orange Digital Center, and NTI programs.",
      aboutDesc2: "Skilled in designing test cases, reporting defects, building RESTful APIs, and developing modern web applications. Eager to contribute to innovative teams while continuously expanding technical and professional capabilities.",
      contactTitle: "Get in Touch",
      contactSubtitle: "Feel free to reach out to me for QA testing, automation, or full-stack web development projects.",
      contactEmail: "ibrahima.hamada277@gmail.com",
      githubUrl: "https://github.com/ibrahimahamada27",
      linkedinUrl: "https://www.linkedin.com/in/ibrahim-a-hamada",
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ibrahim-a-hamada", icon: "fab fa-linkedin" },
        { name: "GitHub", url: "https://github.com/ibrahimahamada27", icon: "fab fa-github" }
      ]
    });

    // 2. Experience
    const experiences = [
      {
        role: "E-Commerce Automation Testing",
        company: "DeFacto, Noon, Seoudi Supermarket",
        years: "Recent",
        desc: "Engineered robust automation frameworks and authored test scripts using Selenium and Java to validate critical user flows and UI functionality."
      },
      {
        role: "Commercial Web Development",
        company: "Restaurants & Cafes",
        years: "Recent",
        desc: "Deployed three fully functional, responsive websites utilizing AI-driven Vibe Coding, prioritizing modern UI/UX and client business requirements."
      },
      {
        role: "RESTful-Booker API Testing",
        company: "Demo Site",
        years: "Recent",
        desc: "Executed manual API testing via Postman on the authentication endpoint, formulating test cases and tracking defects using Excel."
      },
      {
        role: "ISTQB Foundation Practice",
        company: "Demo Site",
        years: "Recent",
        desc: "Implemented ISTQB-aligned manual testing and SDLC principles, executing structured test cases and generating detailed documentation."
      }
    ];
    await Experience.insertMany(experiences);

    // 3. Education & Courses
    const educations = [
      {
        title: "Computer Science (Undergraduate)",
        institution: "Arab Open University (AOU)",
        date: "Sep 2025 - Present",
        desc: "Pursuing second-year undergraduate studies in Computer Science focusing on software engineering principles, algorithms, and database management systems.",
        type: "university",
        skillsLearned: ["Algorithms", "Data Structures", "OOP", "Database Design"]
      },
      {
        title: "NTI MEAN Stack: Web Developer Career Accelerator",
        institution: "National Telecommunication Institute (NTI)",
        date: "Jun 2026 - Present",
        desc: "210-hour intensive professional training program focused on MEAN Stack web development. Developing scalable full-stack applications using MongoDB, Express.js, Angular, Node.js, and TypeScript.",
        type: "course",
        link: "https://nti.sci.eg/",
        skillsLearned: ["MongoDB", "Express.js", "Angular 18", "Node.js", "TypeScript", "REST APIs"]
      },
      {
        title: "Software Testing Track",
        institution: "Digital Egypt Pioneers Initiative (DEPI)",
        date: "Jun 2025 - Dec 2025",
        desc: "Six-month intensive program sponsored by MCIT. Mastered SDLC and ISTQB-aligned fundamentals. Performed manual, exploratory, and API testing (Postman), and programmed automated test scripts using Selenium and Java.",
        type: "course",
        link: "https://depi.gov.eg/",
        skillsLearned: ["Software Testing", "Selenium WebDriver", "Java Automation", "Postman API", "Defect Tracking", "ISTQB Standards"]
      },
      {
        title: "Automation Testing Training",
        institution: "Orange Digital Center Egypt & Instant Software Solutions",
        date: "Feb 2026",
        desc: "Formulated and constructed automation frameworks, elevating practical skills with industry-standard test runner tools and assertions.",
        type: "course",
        skillsLearned: ["TestNG", "Page Object Model", "Automation Frameworks", "CI/CD Basics"]
      }
    ];
    await Education.insertMany(educations);

    // 4. Skills
    const skills = [
      { name: "Java", description: "Core & Automation Scripts", iconUrl: "" },
      { name: "JavaScript / TypeScript", description: "ES6+ Modern Syntax", iconUrl: "" },
      { name: "HTML5 / CSS3", description: "Frontend markup & Responsive Styling", iconUrl: "" },
      { name: "Angular 18", description: "Frontend Framework & Standalone Components", iconUrl: "" },
      { name: "Node.js / Express.js", description: "Backend REST API Development", iconUrl: "" },
      { name: "MongoDB", description: "NoSQL Database & Mongoose ORM", iconUrl: "" },
      { name: "Selenium WebDriver", description: "Web Test Automation", iconUrl: "" },
      { name: "TestNG", description: "Test Execution & Reporting Framework", iconUrl: "" },
      { name: "Postman / API Testing", description: "API Endpoint Validation", iconUrl: "" },
      { name: "Manual & QA Testing", description: "Test Plans & Defect Reporting", iconUrl: "" },
      { name: "Git & GitHub", description: "Version Control & Collaboration", iconUrl: "" }
    ];
    await Skill.insertMany(skills);

    // 5. Certificates
    const certificates = [
      {
        title: "Software Testing & Automation Specialist",
        issuer: "Digital Egypt Pioneers Initiative (DEPI)",
        date: "Dec 2025",
        link: "https://depi.gov.eg/",
        imageUrl: ""
      },
      {
        title: "Automation Testing Certificate",
        issuer: "Orange Digital Center Egypt & Instant Software Solutions",
        date: "Feb 2026",
        link: "https://www.orangedigitalcenters.com/",
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

    // 6. Volunteering, Events & Activities
    const activities = [
      {
        title: "Community Tech Workshop Lead & Organizer",
        organization: "Student Tech Club",
        role: "Event Coordinator & Workshop Lead",
        date: "Oct 2025 - Present",
        desc: "Organized technical workshops on web development basics and software testing fundamentals for university students.",
        category: "volunteering",
        link: "https://github.com/ibrahimahamada27"
      },
      {
        title: "DEPI Hackathon & Technical Showcase",
        organization: "Digital Egypt Pioneers Initiative",
        role: "Participant & Project Presenter",
        date: "Nov 2025",
        desc: "Participated in the annual technical showcase presenting test automation frameworks and web application solutions.",
        category: "event",
        link: "https://depi.gov.eg/"
      },
      {
        title: "Open Source QA & Testing Contributor",
        organization: "Open Source Community",
        role: "Volunteer QA Tester",
        date: "Jan 2026 - Present",
        desc: "Contributed bug reports, exploratory test scripts, and UI test cases for open-source community projects.",
        category: "activity",
        link: "https://github.com/ibrahimahamada27"
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
        link: "https://github.com/IbrahimAHamada27/hedera-hashgraph-interactive-session",
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
        link: "https://github.com/IbrahimAHamada27/thefacecoffee",
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
        link: "https://github.com/IbrahimAHamada27/double.shot",
        technologies: ["HTML5", "CSS3", "JavaScript", "Mobile-First", "Vibe Coding"],
        imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=60"
      },
      {
        title: "Interactive Luxury Wedding Invitation Suite",
        description: "Luxury digital wedding invitation with real-time countdown timers, interactive RSVP forms, venue location coordinates, and smooth multimedia ambient sound effects.",
        link: "https://github.com/IbrahimAHamada27/Mostafa_And_Yasmine_Wedding_Invitation",
        technologies: ["HTML5", "CSS3 Keyframes", "JavaScript", "Audio API", "Responsive UX"],
        imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=60"
      }
    ];
    await Project.insertMany(projects);

    // 8. Services
    const services = [
      {
        title: "Test Automation & QA Engineering",
        description: "Designing and engineering robust automated testing frameworks using Selenium WebDriver, Java, and TestNG. Implementing Page Object Model (POM), data-driven testing, cross-browser validation, and automated Allure reporting.",
        icon: "fa-solid fa-vial-circle-check"
      },
      {
        title: "RESTful API Testing & Validation",
        description: "End-to-end API testing using Postman. Validating status codes, JSON payload schemas, authorization flows, response times, and automating regression collections for microservices.",
        icon: "fa-solid fa-network-wired"
      },
      {
        title: "Manual QA & Quality Assurance",
        description: "ISTQB-aligned software testing methodologies, test case formulation, boundary value analysis, exploratory testing, defect lifecycle tracking, and comprehensive test documentation.",
        icon: "fa-solid fa-list-check"
      },
      {
        title: "Full-Stack Web Development (MEAN Stack)",
        description: "Developing scalable, high-performance web applications using Angular 18 (Signals & Standalone), Node.js, Express.js, TypeScript, and MongoDB with secure JWT authentication and REST APIs.",
        icon: "fa-solid fa-layer-group"
      },
      {
        title: "Healthcare Portals & Business Web Apps",
        description: "Crafting customized medical clinic platforms, doctor profile systems, appointment booking portals, and commercial client websites with mobile-first responsiveness and SEO optimization.",
        icon: "fa-solid fa-hospital-user"
      },
      {
        title: "Interactive 3D & WebGL Experiences",
        description: "Building immersive 3D educational and commercial web applications utilizing Three.js, React Three Fiber, Framer Motion, and WebGL with responsive glassmorphism UI/UX.",
        icon: "fa-solid fa-cubes"
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
