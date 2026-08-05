import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Service } from '../../core/models/service.model';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard-services',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class DashboardServicesComponent implements OnInit {
  services: Service[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  formData: Service = { title: '', description: '', icon: '' };

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await lastValueFrom(this.http.get<Service[]>('http://localhost:3000/api/services'));
      this.services = response;
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  async deleteItem(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`http://localhost:3000/api/services/${id}`));
      this.services = this.services.filter(s => s._id !== id);
      this.toastService.success('Service deleted successfully');
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to delete', error);
      this.toastService.danger('Failed to delete service');
    }
  }

  editItem(item: Service) {
    this.editingId = item._id;
    this.formData = { ...item };
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = { title: '', description: '', icon: '' };
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    try {
      const url = this.editingId 
        ? `http://localhost:3000/api/services/${this.editingId}`
        : 'http://localhost:3000/api/services';
      
      let updated: Service;
      if (this.editingId) {
        updated = await lastValueFrom(this.http.put<Service>(url, this.formData));
      } else {
        updated = await lastValueFrom(this.http.post<Service>(url, this.formData));
      }

      if (this.editingId) {
        const idx = this.services.findIndex(x => x._id === this.editingId);
        if (idx !== -1) this.services[idx] = updated;
      } else {
        this.services.unshift(updated);
      }

      this.services = [...this.services];
      this.toastService.success(`Service ${this.editingId ? 'updated' : 'added'} successfully`);
      this.cancelEdit();
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`Failed to ${this.editingId ? 'update' : 'add'} item`, error);
      this.toastService.danger('Error saving service');
    }
  }
}
