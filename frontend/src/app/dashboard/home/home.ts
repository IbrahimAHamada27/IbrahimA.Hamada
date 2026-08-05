import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { SiteInfo } from '../../core/models/site-info.model';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class DashboardHomeComponent implements OnInit {
  siteInfo: SiteInfo = {};

  constructor(private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchSiteInfo();
  }

  async fetchSiteInfo() {
    try {
      const response = await lastValueFrom(this.http.get<SiteInfo>(`${environment.apiUrl}/api/siteinfo`));
      this.siteInfo = response;
    } catch (error) {
      console.error('Failed to fetch site info', error);
      this.toastService.danger('Failed to fetch site info');
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.siteInfo.profileImage = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  onLogoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.siteInfo.logoImage = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    
    try {
      await lastValueFrom(this.http.put(`${environment.apiUrl}/api/siteinfo`, this.siteInfo));
      this.toastService.success('Site information saved successfully!');
    } catch (error) {
      console.error('Failed to update site info', error);
      this.toastService.danger('Failed to update site info');
    }
  }
}
