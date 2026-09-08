import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), pathMatch: 'full', title: 'Eng. Ibrahim Ahmed Hamada | Software Engineer & QA Portfolio' },
      { path: 'home', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Home | Eng. Ibrahim Ahmed Hamada Portfolio' },
      { path: 'about', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'About Me | Eng. Ibrahim Ahmed Hamada' },
      { path: 'education', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Education & Academic Tracks | Eng. Ibrahim Ahmed Hamada' },
      { path: 'skills', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Technical Skills & Stack | Eng. Ibrahim Ahmed Hamada' },
      { path: 'experience', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Professional Experience | Eng. Ibrahim Ahmed Hamada' },
      { path: 'services', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Engineering & QA Services | Eng. Ibrahim Ahmed Hamada' },
      { path: 'projects', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Featured Projects & QA Work | Eng. Ibrahim Ahmed Hamada' },
      { path: 'certificates', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Verified Credentials & Certificates | Eng. Ibrahim Ahmed Hamada' },
      { path: 'activities', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Community & Events Activities | Eng. Ibrahim Ahmed Hamada' },
      { path: 'contact', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), title: 'Contact | Eng. Ibrahim Ahmed Hamada' },
      { path: 'privacy-policy', loadComponent: () => import('./layout/privacy/privacy').then(m => m.PrivacyComponent), title: 'Privacy Policy | سياسة الخصوصية - Eng. Ibrahim Ahmed Hamada' }
    ]
  },
  {
    path: 'admin/login',
    loadComponent: () => import('./dashboard/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./dashboard/dashboard/dashboard').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./dashboard/home/home').then(m => m.DashboardHomeComponent) },
      { path: 'list-projects', loadComponent: () => import('./dashboard/list-projects/list-projects').then(m => m.ListProjectsComponent) },
      { path: 'certificates', loadComponent: () => import('./dashboard/certificates/certificates').then(m => m.DashboardCertificatesComponent) },
      { path: 'experience', loadComponent: () => import('./dashboard/experience/experience').then(m => m.DashboardExperienceComponent) },
      { path: 'skills', loadComponent: () => import('./dashboard/skills/skills').then(m => m.SkillsComponent) },
      { path: 'messages', loadComponent: () => import('./dashboard/messages/messages').then(m => m.MessagesComponent) },
      { path: 'contact', loadComponent: () => import('./dashboard/contact/contact').then(m => m.DashboardContactComponent) },
      { path: 'testimonials', loadComponent: () => import('./dashboard/testimonials/testimonials').then(m => m.DashboardTestimonialsComponent) },
      { path: 'education', loadComponent: () => import('./dashboard/education/education').then(m => m.DashboardEducationComponent) },
      { path: 'services', loadComponent: () => import('./dashboard/services/services').then(m => m.DashboardServicesComponent) },
      { path: 'activities', loadComponent: () => import('./dashboard/activities/activities').then(m => m.DashboardActivitiesComponent) },
      { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFoundComponent) }
    ]
  },
  { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFoundComponent) }
];
