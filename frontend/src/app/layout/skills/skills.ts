import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;

  getSkillIcon(name: string): string {
    const n = name.toLowerCase();
    if (n.includes('java') && !n.includes('script')) return 'fa-brands fa-java text-orange';
    if (n.includes('javascript')) return 'fa-brands fa-js text-yellow';
    if (n.includes('typescript')) return 'fa-solid fa-code text-blue';
    if (n.includes('angular')) return 'fa-brands fa-angular text-red';
    if (n.includes('node') || n.includes('express')) return 'fa-brands fa-node text-green';
    if (n.includes('html') || n.includes('css')) return 'fa-brands fa-html5 text-orange';
    if (n.includes('git')) return 'fa-brands fa-git-alt text-red';
    if (n.includes('mongo') || n.includes('database')) return 'fa-solid fa-database text-green';
    if (n.includes('selenium') || n.includes('automation')) return 'fa-solid fa-vial-circle-check text-green';
    if (n.includes('testng') || n.includes('allure')) return 'fa-solid fa-flask text-purple';
    if (n.includes('postman')) return 'fa-solid fa-bolt text-orange';
    if (n.includes('jira')) return 'fa-brands fa-jira text-blue';
    if (n.includes('manual') || n.includes('test case')) return 'fa-solid fa-list-check text-cyan';
    if (n.includes('api')) return 'fa-solid fa-network-wired text-blue';
    if (n.includes('bug') || n.includes('defect')) return 'fa-solid fa-bug text-red';
    if (n.includes('prompt') || n.includes('ai') || n.includes('ذكاء')) return 'fa-solid fa-brain text-purple';
    if (n.includes('leadership') || n.includes('team') || n.includes('قياد')) return 'fa-solid fa-users text-blue';
    if (n.includes('problem') || n.includes('حل المشكلات')) return 'fa-solid fa-lightbulb text-yellow';
    if (n.includes('time') || n.includes('إدارة الوقت')) return 'fa-regular fa-clock text-cyan';
    if (n.includes('learning') || n.includes('تعلم')) return 'fa-solid fa-graduation-cap text-purple';
    return 'fa-solid fa-circle-check text-primary';
  }
}
