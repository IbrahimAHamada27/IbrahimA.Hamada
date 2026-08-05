import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Education } from '../../core/models/education.model';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class DashboardEducationComponent implements OnInit {
  educationList: Education[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  formData: Education = { title: '', institution: '', date: '', desc: '', type: 'university', link: '', imageUrl: '' };
  skillsLearnedInput = '';

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await lastValueFrom(this.http.get<Education[]>('/api/education'));
      this.educationList = response;
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  async deleteItem(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`/api/education/${id}`));
      this.educationList = this.educationList.filter(s => s._id !== id);
      this.toastService.success('Record deleted successfully');
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to delete', error);
      this.toastService.danger('Failed to delete record');
    }
  }

  editItem(item: Education) {
    this.editingId = item._id;
    this.formData = { ...item };
    this.skillsLearnedInput = item.skillsLearned ? item.skillsLearned.join(', ') : '';
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = { title: '', institution: '', date: '', desc: '', type: 'university', link: '', imageUrl: '' };
    this.skillsLearnedInput = '';
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      const skillsArray = this.skillsLearnedInput
        ? this.skillsLearnedInput.split(',').map(s => s.trim()).filter(s => s.length > 0)
        : [];
      const payload: Education = {
        ...this.formData,
        skillsLearned: skillsArray
      };

      const url = this.editingId 
        ? `/api/education/${this.editingId}`
        : '/api/education';
      
      let updated: Education;
      if (this.editingId) {
        updated = await lastValueFrom(this.http.put<Education>(url, payload));
      } else {
        updated = await lastValueFrom(this.http.post<Education>(url, payload));
      }

      if (this.editingId) {
        const idx = this.educationList.findIndex(x => x._id === this.editingId);
        if (idx !== -1) this.educationList[idx] = updated;
      } else {
        this.educationList.unshift(updated);
      }

      this.educationList = [...this.educationList];
      this.toastService.success(`Education record ${this.editingId ? 'updated' : 'added'} successfully`);
      this.cancelEdit();
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`Failed to ${this.editingId ? 'update' : 'add'} item`, error);
      this.toastService.danger('Error saving education record');
    }
  }
}
