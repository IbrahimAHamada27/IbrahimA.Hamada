import { Component, inject } from '@angular/core';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor() {}

  openDetails(exp: any) {
    this.selectedItem = {
      title: exp.role,
      subtitle: exp.company,
      date: exp.years,
      category: this.t().experience.title,
      description: exp.desc,
      imageUrl: exp.imageUrl,
      link: exp.link
    };
    this.isModalOpen = true;
  }
}
