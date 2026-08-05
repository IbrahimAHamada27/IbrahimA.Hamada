import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Certificate } from '../../core/models/certificate.model';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class DashboardCertificatesComponent implements OnInit {
  certificates: Certificate[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  formData = { title: '', issuer: '', date: '', link: '', imageUrl: '' };

  constructor(private cdr: ChangeDetectorRef, private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchCertificates();
  }

  async fetchCertificates() {
    try {
      const response = await lastValueFrom(this.http.get<Certificate[]>('https://portfoliobackend-orpin.vercel.app/api/certificates'));
      this.certificates = response;
    } catch (error) {
      console.error('Failed to fetch certificates', error);
    }
  }

  async deleteCertificate(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`https://portfoliobackend-orpin.vercel.app/api/certificates/${id}`));
      this.certificates = this.certificates.filter(c => c._id !== id);
      this.toastService.success('Certificate deleted successfully');
      this.cdr.detectChanges();
    } catch (error) {
      console.error('Failed to delete certificate', error);
      this.toastService.danger('Failed to delete certificate');
    }
  }

  editCertificate(cert: Certificate) {
    this.editingId = cert._id;
    this.formData = {
      title: cert.title,
      issuer: cert.issuer,
      date: cert.date,
      link: cert.link || '',
      imageUrl: cert.imageUrl || ''
    };
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = { title: '', issuer: '', date: '', link: '', imageUrl: '' };
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const payload = this.formData;

    try {
      const url = this.editingId 
        ? `https://portfoliobackend-orpin.vercel.app/api/certificates/${this.editingId}`
        : 'https://portfoliobackend-orpin.vercel.app/api/certificates';

      let updatedItem: Certificate;
      if (this.editingId) {
        updatedItem = await lastValueFrom(this.http.put<Certificate>(url, payload));
        const idx = this.certificates.findIndex(c => c._id === this.editingId);
        if (idx !== -1) {
          this.certificates[idx] = updatedItem;
        }
      } else {
        updatedItem = await lastValueFrom(this.http.post<Certificate>(url, payload));
        this.certificates.unshift(updatedItem);
      }
      this.certificates = [...this.certificates];

      this.toastService.success(`Certificate ${this.editingId ? 'updated' : 'added'} successfully`);
      this.cancelEdit();
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`Failed to ${this.editingId ? 'update' : 'add'} certificate`, error);
      this.toastService.danger('Error saving certificate');
    }
  }
}
