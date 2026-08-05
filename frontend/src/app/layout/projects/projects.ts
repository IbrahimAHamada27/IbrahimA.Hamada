import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ProjectService } from '../../core/services/project.service';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  async fetchProjects() {
    try {
      const response = await lastValueFrom(this.projectService.getProjects());
      this.projects = response;
    } catch (error) {
      console.error('Failed to fetch projects', error);
    }
  }

  openDetails(project: Project) {
    this.selectedItem = {
      title: project.title,
      category: 'Software & QA Automation Project',
      description: project.description,
      imageUrl: project.imageUrl,
      link: project.link,
      tags: project.technologies
    };
    this.isModalOpen = true;
  }
}
