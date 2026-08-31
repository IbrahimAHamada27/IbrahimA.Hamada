import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/models/service.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements OnInit {
  readonly defaultServices: Service[] = [
    {
      _id: 'srv-1',
      title: 'Test Automation & QA Engineering',
      description: 'Designing and engineering robust automated testing frameworks using Selenium WebDriver, Java, and TestNG. Implementing Page Object Model (POM), data-driven testing, cross-browser validation, and automated Allure reporting.',
      icon: 'fa-solid fa-vial-circle-check'
    },
    {
      _id: 'srv-2',
      title: 'RESTful API Testing & Validation',
      description: 'End-to-end API testing using Postman. Validating status codes, JSON payload schemas, authorization flows, response times, and automating regression collections for microservices.',
      icon: 'fa-solid fa-network-wired'
    },
    {
      _id: 'srv-3',
      title: 'Manual QA & Quality Assurance',
      description: 'ISTQB-aligned software testing methodologies, test case formulation, boundary value analysis, exploratory testing, defect lifecycle tracking, and comprehensive test documentation.',
      icon: 'fa-solid fa-list-check'
    },
    {
      _id: 'srv-4',
      title: 'Full-Stack Web Development (MEAN)',
      description: 'Developing scalable, high-performance web applications using Angular 18 (Signals & Standalone), Node.js, Express.js, TypeScript, and MongoDB with secure JWT authentication and REST APIs.',
      icon: 'fa-solid fa-layer-group'
    },
    {
      _id: 'srv-5',
      title: 'Healthcare Portals & Business Apps',
      description: 'Crafting customized medical clinic platforms, doctor profile systems, appointment booking portals, and commercial client websites with mobile-first responsiveness and SEO optimization.',
      icon: 'fa-solid fa-hospital-user'
    },
    {
      _id: 'srv-6',
      title: 'Interactive 3D & WebGL Experiences',
      description: 'Building immersive 3D educational and commercial web applications utilizing Three.js, React Three Fiber, Framer Motion, and WebGL with responsive glassmorphism UI/UX.',
      icon: 'fa-solid fa-cubes'
    }
  ];

  services: Service[] = this.defaultServices;

  constructor(private serviceService: ServiceService) {}

  async ngOnInit() {
    try {
      const res = await lastValueFrom(this.serviceService.getServices());
      if (res && res.length > 0) {
        this.services = res;
      }
    } catch (e) {
      console.warn('Backend API unavailable or empty, displaying default services', e);
      this.services = this.defaultServices;
    }
  }
}
