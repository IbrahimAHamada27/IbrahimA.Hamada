import { Component, inject } from '@angular/core';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;

  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor() {}

  openDetails(item: any, type: 'university' | 'course') {
    this.selectedItem = {
      title: item.title,
      subtitle: item.institution,
      date: item.date,
      category: type === 'university' ? this.t().education.universityColTitle : this.t().education.coursesColTitle,
      description: item.desc,
      imageUrl: item.imageUrl,
      link: item.link,
      tags: item.skills
    };
    this.isModalOpen = true;
  }
}
