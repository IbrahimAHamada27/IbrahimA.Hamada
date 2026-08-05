import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../../core/models/skill.model';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  formData = { name: '', description: '' as string | undefined, iconUrl: '' as string | undefined, category: '' };
  selectedFile: File | null = null;

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchSkills();
  }

  async fetchSkills() {
    try {
      const response = await lastValueFrom(this.http.get<Skill[]>('http://localhost:3000/api/skills'));
      this.skills = response;
    } catch (error) {
      console.error('Failed to fetch skills', error);
    }
  }

  async deleteSkill(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`http://localhost:3000/api/skills/${id}`));
      this.skills = this.skills.filter(s => s._id !== id);
      this.toastService.success('Skill deleted successfully');
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to delete skill', error);
      this.toastService.danger('Failed to delete skill');
    }
  }

  editSkill(skill: Skill) {
    this.editingId = skill._id;
    this.formData = {
      name: skill.name,
      description: skill.description,
      iconUrl: skill.iconUrl,
      category: ''
    };
    this.selectedFile = null;
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = { name: '', description: '', iconUrl: '', category: '' };
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0] || null;
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    
    const payload = new FormData();
    payload.append('name', this.formData.name);
    payload.append('category', this.formData.category);
    if (this.formData.description) {
      payload.append('description', this.formData.description);
    }
    
    if (this.selectedFile) {
      payload.append('icon', this.selectedFile);
    } else if (this.formData.iconUrl) {
      payload.append('iconUrl', this.formData.iconUrl);
    }

    try {
      const url = this.editingId 
        ? `http://localhost:3000/api/skills/${this.editingId}`
        : 'http://localhost:3000/api/skills';

      let updatedSkill: { skill: Skill };
      if (this.editingId) {
        updatedSkill = await lastValueFrom(this.http.put<{ skill: Skill }>(url, payload));
      } else {
        updatedSkill = await lastValueFrom(this.http.post<{ skill: Skill }>(url, payload));
      }

      if (this.editingId) {
        const idx = this.skills.findIndex(x => x._id === this.editingId);
        if (idx !== -1) {
          this.skills[idx] = updatedSkill.skill;
        }
      } else {
        this.skills.unshift(updatedSkill.skill);
      }
      this.skills = [...this.skills];

      this.toastService.success(`Skill ${this.editingId ? 'updated' : 'added'} successfully`);
      this.cancelEdit();
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`Failed to ${this.editingId ? 'update' : 'add'} skill`, error);
      this.toastService.danger('Error saving skill');
    }
  }
}
