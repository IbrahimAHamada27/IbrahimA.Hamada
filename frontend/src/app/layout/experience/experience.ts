import { Component, OnInit } from '@angular/core';
import { Experience } from '../../core/models/experience.model';
import { ExperienceService } from '../../core/services/experience.service';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor(private expService: ExperienceService) {}

  ngOnInit() {
    this.fetchExperiences();
  }

  async fetchExperiences() {
    try {
      const response = await lastValueFrom(this.expService.getExperiences());
      this.experiences = response;
    } catch (error) {
      console.error('Failed to fetch experiences', error);
    }
  }

  openDetails(exp: Experience) {
    this.selectedItem = {
      title: exp.role,
      subtitle: exp.company,
      date: exp.years,
      category: 'Professional Role',
      description: exp.desc,
      imageUrl: exp.imageUrl,
      link: exp.link
    };
    this.isModalOpen = true;
  }
}
