import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Project } from '../../core/models/project.model';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list-projects.html',
  styleUrl: './list-projects.css'
})
export class ListProjectsComponent implements OnInit {
  projects: Project[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  
  formData = {
    title: '',
    description: '',
    link: '',
    technologies: '',
    imageUrl: ''
  };

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  async fetchProjects() {
    try {
      const response = await lastValueFrom(this.http.get<Project[]>(`${environment.apiUrl}/api/projects`));
      this.projects = response;
    } catch (error) {
      console.error('Failed to fetch projects', error);
    }
  }

  async deleteProject(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`https://portfoliobackend-orpin.vercel.app/api/projects/${id}`));
      this.projects = this.projects.filter(p => p._id !== id);
      this.toastService.success('Project deleted successfully');
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to delete project', error);
      this.toastService.danger('Failed to delete project');
    }
  }

  editProject(project: Project) {
    this.editingId = project._id;
    this.formData = {
      title: project.title,
      description: project.description,
      link: project.link,
      technologies: project.technologies.join(', '),
      imageUrl: project.imageUrl || ''
    };
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = { title: '', description: '', link: '', technologies: '', imageUrl: '' };
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    
    const techs = this.formData.technologies.split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0);
    
    const payload = {
      title: this.formData.title,
      description: this.formData.description,
      link: this.formData.link,
      technologies: techs,
      imageUrl: this.formData.imageUrl
    };

    try {
      const url = this.editingId 
        ? `https://portfoliobackend-orpin.vercel.app/api/projects/${this.editingId}`
        : `${environment.apiUrl}/api/projects`;

      let updatedItem: Project;
      if (this.editingId) {
        updatedItem = await lastValueFrom(this.http.put<Project>(url, payload));
      } else {
        updatedItem = await lastValueFrom(this.http.post<Project>(url, payload));
      }

      if (this.editingId) {
        const idx = this.projects.findIndex(p => p._id === this.editingId);
        if (idx !== -1) {
          this.projects[idx] = updatedItem;
        }
      } else {
        this.projects.unshift(updatedItem);
      }
      this.projects = [...this.projects];

      this.toastService.success(`Project ${this.editingId ? 'updated' : 'added'} successfully`);
      this.cancelEdit();
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`Error ${this.editingId ? 'updating' : 'adding'} project:`, error);
      this.toastService.danger('Error saving project');
    }
  }
}
