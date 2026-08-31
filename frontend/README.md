# 🎨 Portfolio Frontend (Angular 18)

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-18.2-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![RxJS](https://img.shields.io/badge/RxJS-Reactive-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)](https://rxjs.dev/)
[![AOS](https://img.shields.io/badge/AOS-Animations-FF6F61?style=for-the-badge)](https://michalsnik.github.io/aos/)

</div>

Frontend client for **Ibrahim A. Hamada's Portfolio & QA Management System**, built using **Angular 18** standalone components, modern reactive design, glassmorphism styles, and mobile-first responsiveness.

---

## 📂 Key Architecture & Components

- **Standalone Components**: Clean modular architecture with zero `NgModule` boilerplate.
- **Layout Modules**:
  - `HeroComponent`: Dynamic greeting, animated typography, and CTA buttons.
  - `AboutComponent`: Professional summary, education journey (AOU, NTI, DEPI), and core focus.
  - `ProjectsComponent`: 12 featured projects & QA automation frameworks with interactive modal inspection.
  - `SkillsComponent`: Categorized skill bars and tech pills.
  - `ExperienceComponent`: Detailed timeline of QA and web development engagements.
  - `CertificatesComponent`: Interactive certifications viewer.
  - `ActivitiesComponent`: Volunteering, community tech workshops, and hackathons.
  - `ContactComponent`: Interactive contact form with API integration.
- **Admin Dashboard**:
  - `DashboardComponent`: Real-time management interface for projects, certificates, skills, and messages.

---

## 🛠️ Development & Build

```bash
# Install dependencies
npm install

# Run local development server
ng serve

# Build for production
ng build --configuration production
```
