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
      title: 'Test Automation & QA Engineering (Selenium & Java)',
      description: 'Designing and architecting robust automated testing suites using Selenium WebDriver, Java, and TestNG. Implementing Page Object Model (POM), data-driven testing, cross-browser execution, and automated Allure reporting.',
      icon: 'fa-solid fa-vial-circle-check'
    },
    {
      _id: 'srv-2',
      title: 'RESTful API Testing & Automated Postman Collections',
      description: 'End-to-end API validation with Postman. Writing automated test scripts, validating JSON payload schemas, asserting status codes and response latency, and setting up regression test collections.',
      icon: 'fa-solid fa-network-wired'
    },
    {
      _id: 'srv-3',
      title: 'Manual QA & Software Quality Assurance (ISTQB)',
      description: 'ISTQB-aligned software testing methodologies, comprehensive test plan design, boundary value analysis, exploratory testing, bug lifecycle management, and defect documentation.',
      icon: 'fa-solid fa-list-check'
    },
    {
      _id: 'srv-4',
      title: 'Full-Stack Web Development (MEAN Stack)',
      description: 'Building scalable, high-performance web applications using Angular 18 (Signals & Standalone), Node.js, Express.js, TypeScript, and MongoDB with secure JWT auth and REST APIs.',
      icon: 'fa-solid fa-layer-group'
    },
    {
      _id: 'srv-5',
      title: 'Restaurant & Cafe Digital Menus (Smart QR)',
      description: 'Interactive digital QR menu systems for restaurants & cafes with dynamic categories, item modifiers, real-time bill calculations, customer reviews, and administrative menu management.',
      icon: 'fa-solid fa-utensils'
    },
    {
      _id: 'srv-6',
      title: 'Medical Clinics & Doctor Digital Portals',
      description: 'Custom healthcare platforms featuring patient appointment booking, doctor schedules, medical service catalogs, patient testimonials, and SEO-optimized accessibility.',
      icon: 'fa-solid fa-hospital-user'
    },
    {
      _id: 'srv-7',
      title: 'E-Commerce Stores & Commercial Platforms',
      description: 'High-conversion online stores with dynamic product catalogs, multi-criteria filtering, shopping carts, checkout workflows, and administrative inventory control.',
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      _id: 'srv-8',
      title: 'Interactive 3D Web & WebGL Experiences',
      description: 'Immersive 3D web applications and educational simulations utilizing Three.js, React Three Fiber, Framer Motion, and WebGL with responsive glassmorphism UI/UX.',
      icon: 'fa-solid fa-cubes'
    },
    {
      _id: 'srv-9',
      title: 'High-Converting Business Landing Pages',
      description: 'Ultra-fast, mobile-first responsive landing pages crafted to maximize conversion rates, featuring modern glassmorphism aesthetics, fluid micro-animations, and lead capture forms.',
      icon: 'fa-solid fa-laptop-code'
    },
    {
      _id: 'srv-10',
      title: 'Digital Event & Luxury Wedding Invitation Portals',
      description: 'Tailored interactive digital invitations featuring real-time countdown timers, interactive RSVP management, venue GPS coordinates, and ambient multimedia sound effects.',
      icon: 'fa-solid fa-envelope-open-text'
    }
  ];

  services: Service[] = this.defaultServices;
  showAllServices = false;

  get displayedServices(): Service[] {
    return this.showAllServices ? this.services : this.services.slice(0, 8);
  }

  toggleShowMore() {
    this.showAllServices = !this.showAllServices;
  }

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
