import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout';
import { authGuard } from './core/guards/auth.guard';

import { DashboardComponent } from './dashboard/dashboard/dashboard';
import { DashboardHomeComponent } from './dashboard/home/home';
import { ListProjectsComponent } from './dashboard/list-projects/list-projects';
import { DashboardCertificatesComponent } from './dashboard/certificates/certificates';
import { DashboardExperienceComponent } from './dashboard/experience/experience';
import { SkillsComponent as DashboardSkillsComponent } from './dashboard/skills/skills';
import { LoginComponent } from './dashboard/login/login';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent), pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'about', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'education', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'skills', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'experience', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'services', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'projects', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'certificates', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'activities', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) },
      { path: 'contact', loadComponent: () => import('./layout/main/main').then(m => m.MainComponent) }
    ]
  },
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardHomeComponent },
      { path: 'list-projects', component: ListProjectsComponent },
      { path: 'certificates', component: DashboardCertificatesComponent },
      { path: 'experience', component: DashboardExperienceComponent },
      { path: 'skills', component: DashboardSkillsComponent },
      { path: 'messages', loadComponent: () => import('./dashboard/messages/messages').then(m => m.MessagesComponent) },
      { path: 'contact', loadComponent: () => import('./dashboard/contact/contact').then(m => m.DashboardContactComponent) },
      { path: 'testimonials', loadComponent: () => import('./dashboard/testimonials/testimonials').then(m => m.DashboardTestimonialsComponent) },
      { path: 'education', loadComponent: () => import('./dashboard/education/education').then(m => m.DashboardEducationComponent) },
      { path: 'services', loadComponent: () => import('./dashboard/services/services').then(m => m.DashboardServicesComponent) },
      { path: 'activities', loadComponent: () => import('./dashboard/activities/activities').then(m => m.DashboardActivitiesComponent) },
      { path: '**', component: NotFoundComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];
