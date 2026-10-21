import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/models/service.model';
import { lastValueFrom } from 'rxjs';
import { LanguageService } from '../../core/services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements OnInit {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;
  showAllServices = false;
  backendServices: Service[] = [];

  get displayedServices() {
    const list = this.t().services.items;
    return this.showAllServices ? list : list.slice(0, 8);
  }

  getWhatsAppInquiryUrl(serviceTitle: string): string {
    const isAr = this.languageService.currentLang() === 'ar';
    const message = isAr
      ? `مرحباً م. إبراهيم، أود الاستفسار وطلب تفاصيل خدمة: "${serviceTitle}".`
      : `Hello Eng. Ibrahim, I would like to inquire about and request the service: "${serviceTitle}".`;
    return `https://wa.me/201112540997?text=${encodeURIComponent(message)}`;
  }

  toggleShowMore() {
    this.showAllServices = !this.showAllServices;
  }

  constructor(
    private serviceService: ServiceService
  ) {}

  async ngOnInit() {
    try {
      const res = await lastValueFrom(this.serviceService.getServices());
      if (res && res.length > 0) {
        this.backendServices = res;
      }
    } catch (e) {
      // Handled via reactive translation dictionary
    }
  }
}
