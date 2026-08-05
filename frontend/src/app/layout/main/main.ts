import { Component, OnInit, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home';
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { ContactComponent } from '../contact/contact';
import { CertificatesComponent } from '../certificates/certificates';
import { ExperienceComponent } from '../experience/experience';
import { TestimonialsComponent } from '../testimonials/testimonials';
import { EducationComponent } from '../education/education';
import { ServicesComponent } from '../services/services';
import { ActivitiesComponent } from '../activities/activities';
import * as AOS from 'aos';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    CertificatesComponent,
    ExperienceComponent,
    TestimonialsComponent,
    EducationComponent,
    ServicesComponent,
    ActivitiesComponent
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  ngAfterViewInit() {
    // Scroll to target section if path matches section id
    setTimeout(() => {
      let path = window.location.pathname.replace(/^\//, '');
      if (path && path !== 'admin') {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = this.el.nativeElement.querySelectorAll('section');
    let current = '';

    sections.forEach((section: HTMLElement) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 220)) {
        current = section.getAttribute('id') || '';
      }
    });

    if (current) {
      const targetPath = `/${current}`;
      if (window.location.pathname !== targetPath && !window.location.pathname.startsWith('/admin')) {
        window.history.replaceState(null, '', targetPath);
      }
    }
  }
}
