import { Component, OnInit } from '@angular/core';
import { Education } from '../../core/models/education.model';
import { EducationService } from '../../core/services/education.service';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent implements OnInit {
  university: Education[] = [];
  courses: Education[] = [];
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor(private eduService: EducationService) {}

  ngOnInit() {
    this.fetchEducation();
  }

  async fetchEducation() {
    try {
      const all = await lastValueFrom(this.eduService.getEducation());
      this.university = all.filter(e => e.type === 'university');
      this.courses = all.filter(e => e.type === 'course');
    } catch (error) {
      console.error('Failed to fetch education records', error);
    }
  }

  openDetails(item: Education) {
    this.selectedItem = {
      title: item.title,
      subtitle: item.institution,
      date: item.date,
      category: item.type === 'university' ? 'University Academic Degree' : 'Specialized Course Track',
      description: item.desc,
      imageUrl: item.imageUrl,
      link: item.link,
      tags: item.skillsLearned
    };
    this.isModalOpen = true;
  }
}
