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
