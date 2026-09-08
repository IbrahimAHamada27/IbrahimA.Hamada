import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { LanguageService } from '../../core/services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css'
})
export class PrivacyComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seoService = inject(SeoService);
  readonly t = this.languageService.t;

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
