import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, DetailsModalComponent, ImgUrlPipe],
  templateUrl: './activities.html',
  styleUrl: './activities.css'
})
export class ActivitiesComponent {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor() {}

  getCategoryClass(category?: string): string {
    const cat = (category || '').toLowerCase();
    if (cat.includes('hackathon') || cat.includes('هاكاثون') || cat.includes('space')) return 'badge-hackathon';
    if (cat.includes('club') || cat.includes('طلابي') || cat.includes('web')) return 'badge-club';
    if (cat.includes('volunteering') || cat.includes('تطوع')) return 'badge-volunteering';
    return 'badge-activity';
  }

  getCategoryIcon(category?: string): string {
    const cat = (category || '').toLowerCase();
    if (cat.includes('hackathon') || cat.includes('هاكاثون') || cat.includes('space')) return 'fa-solid fa-rocket';
    if (cat.includes('club') || cat.includes('طلابي') || cat.includes('web')) return 'fa-solid fa-laptop-code';
    if (cat.includes('volunteering') || cat.includes('تطوع')) return 'fa-solid fa-hand-holding-heart';
    return 'fa-solid fa-star';
  }

  openDetails(item: any) {
    this.selectedItem = {
      title: item.title,
      subtitle: item.organization,
      date: item.date,
      category: item.category,
      description: item.desc,
      imageUrl: item.imageUrl
    };
    this.isModalOpen = true;
  }
}
