import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Testimonial } from '../../core/models/testimonial.model';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard-testimonials',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class DashboardTestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  formData: Testimonial = { name: '', position: '', message: '', image: '' };

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await lastValueFrom(this.http.get<Testimonial[]>(`${environment.apiUrl}/api/testimonials`));
      this.testimonials = response;
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  async deleteItem(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`https://portfoliobackend-orpin.vercel.app/api/testimonials/${id}`));
      this.testimonials = this.testimonials.filter(s => s._id !== id);
      this.toastService.success('Testimonial deleted successfully');
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to delete', error);
      this.toastService.danger('Failed to delete testimonial');
    }
  }

  editItem(item: Testimonial) {
    this.editingId = item._id;
    this.formData = { ...item };
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = { name: '', position: '', message: '', image: '' };
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.formData.image = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      const url = this.editingId 
        ? `https://portfoliobackend-orpin.vercel.app/api/testimonials/${this.editingId}`
        : `${environment.apiUrl}/api/testimonials`;
      
      let updated: Testimonial;
      if (this.editingId) {
        updated = await lastValueFrom(this.http.put<Testimonial>(url, this.formData));
      } else {
        updated = await lastValueFrom(this.http.post<Testimonial>(url, this.formData));
      }

      if (this.editingId) {
        const idx = this.testimonials.findIndex(x => x._id === this.editingId);
        if (idx !== -1) this.testimonials[idx] = updated;
      } else {
        this.testimonials.unshift(updated);
      }

      this.testimonials = [...this.testimonials];
      this.toastService.success(`Testimonial ${this.editingId ? 'updated' : 'added'} successfully`);
      this.cancelEdit();
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`Failed to ${this.editingId ? 'update' : 'add'} item`, error);
      this.toastService.danger('Error saving testimonial');
    }
  }
}
