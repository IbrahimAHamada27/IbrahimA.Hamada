import { Component, OnInit, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home';
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { ContactComponent } from '../contact/contact';
import { CertificatesComponent } from '../certificates/certificates';
import { ExperienceComponent } from '../experience/experience';
import { EducationComponent } from '../education/education';
import { ServicesComponent } from '../services/services';
import { ActivitiesComponent } from '../activities/activities';

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
    EducationComponent,
    ServicesComponent,
    ActivitiesComponent
  ],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class MainComponent implements OnInit, AfterViewInit {
  private aosInstance: any = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Dynamic import AOS to ensure main bundle is not blocked
  }

  ngAfterViewInit() {
    import('aos').then((aosModule) => {
      const AOS = (aosModule as any).default || aosModule;
      this.aosInstance = AOS;
      AOS.init({
        duration: 500,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });

    // Scroll to target section if path matches section id
    const handleInitialScroll = () => {
      const path = window.location.pathname.replace(/^\//, '');
      if (path && path !== 'admin') {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      if (this.aosInstance) {
        this.aosInstance.refresh();
      }
    };

    setTimeout(handleInitialScroll, 100);
    setTimeout(handleInitialScroll, 500);
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
    if (this.aosInstance) {
      this.aosInstance.refresh();
    }
  }
}
