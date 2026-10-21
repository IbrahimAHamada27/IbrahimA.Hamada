import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../core/services/testimonial.service';
import { Testimonial } from '../../core/models/testimonial.model';
import { lastValueFrom } from 'rxjs';

import { LanguageService } from '../../core/services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent implements OnInit {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;

  readonly defaultTestimonialsEn: Testimonial[] = [
    {
      _id: 'test-1',
      name: 'Dr. Moaz Samir',
      position: 'Founder & Lead Dentist, Dr. Moaz Samir Dental Clinic',
      message: 'Eng. Ibrahim delivered an outstanding digital platform for our dental center. The performance, booking integration, and mobile responsiveness exceeded our expectations with exceptional attention to detail.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80'
    },
    {
      _id: 'test-2',
      name: 'Ahmed Mostafa',
      position: 'Senior QA Lead & Tech Mentor, DEPI Track',
      message: 'Ibrahim demonstrated exemplary competence in automated testing with Selenium and Java. His framework architecture, Page Object Model design, and defect reporting in Jira reflect high engineering standards.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
    },
    {
      _id: 'test-3',
      name: 'Karim El-Sayed',
      position: 'Operations Manager, The Face Coffee & Cafe Group',
      message: 'The smart QR ordering menu system built by Eng. Ibrahim transformed our customer service flow. Fast loading, beautiful UI, and flawless mobile experience.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
    }
  ];

  readonly defaultTestimonialsAr: Testimonial[] = [
    {
      _id: 'test-1-ar',
      name: 'د. معاذ سمير',
      position: 'مؤسس ومدير مركز د. معاذ سمير لطب الأسنان',
      message: 'قدم البشمهندس إبراهيم منصة ويب متميزة واستثنائية لمركز الأسنان، مع تكامل سلس لخدمات الحجز وسرعة فائقة وتجاوب تام على الموبايل يعكس احترافية هندسية عالية.',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80'
    },
    {
      _id: 'test-2-ar',
      name: 'م. أحمد مصطفى',
      position: 'قائد فريق فحص جودة البرمجيات (QA Lead)',
      message: 'أظهر إبراهيم كفاءة رفيعة في أتمتة اختبارات الويب باستخدام Selenium و Java وبناء أطر فحص POM متينة وتوثيق دقيق لحالات الفحص وتقارير العيوب.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80'
    },
    {
      _id: 'test-3-ar',
      name: 'كريم السيد',
      position: 'مدير العمليات، مجموعة The Face Coffee',
      message: 'نظام قائمة الـ QR الذكية الذي صممه ونفذه م. إبراهيم أحدث فارقًا كبيرًا في سرعة خدمة العملاء وتجربة الطلب، بتصميم عصري وأداء فائق على جميع الأجهزة.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
    }
  ];

  testimonials: Testimonial[] = [];

  get displayTestimonials(): Testimonial[] {
    if (this.testimonials.length > 0) {
      return this.testimonials;
    }
    return this.languageService.currentLang() === 'ar' ? this.defaultTestimonialsAr : this.defaultTestimonialsEn;
  }

  constructor(private testimonialService: TestimonialService) {}

  async ngOnInit() {
    try {
      const result = await lastValueFrom(this.testimonialService.getTestimonials());
      if (result && result.length > 0) {
        this.testimonials = result;
      }
    } catch (e) {
      console.warn('Backend testimonials API offline, using curated client testimonials');
    }
  }
}
