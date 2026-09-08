import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css'
})
export class PrivacyComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.seoService.updateSeoData({
      title: 'Privacy Policy | سياسة الخصوصية - Eng. Ibrahim Ahmed Hamada',
      description: 'Privacy Policy and Data Protection guidelines for Eng. Ibrahim Ahmed Hamada Portfolio website.',
      path: '/privacy-policy'
    });
  }
}
