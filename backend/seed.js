const mongoose = require('mongoose');
require('dotenv').config();

// Models
const SiteInfo = require('./models/SiteInfo');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Skill = require('./models/Skill');
const Certificate = require('./models/Certificate');
const Activity = require('./models/Activity');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

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

    console.log('✅ Data seeding completed successfully with enhanced models, certificates, and activities!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  }
}

seedData();
