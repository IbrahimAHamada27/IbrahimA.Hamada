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

  constructor() {}
}
