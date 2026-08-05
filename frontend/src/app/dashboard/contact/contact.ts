import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { SiteInfo } from '../../core/models/site-info.model';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class DashboardContactComponent implements OnInit {
  siteInfo: SiteInfo = { socialLinks: [] };

  constructor(private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchSiteInfo();
  }

  async fetchSiteInfo() {
    try {
      const response = await lastValueFrom(this.http.get<SiteInfo>('/api/siteinfo'));
      this.siteInfo = response;
      if (!this.siteInfo.socialLinks) {
        this.siteInfo.socialLinks = [];
      }
    } catch (error) {
      console.error('Failed to fetch site info', error);
    }
  }

  addSocialLink() {
    if (!this.siteInfo.socialLinks) {
      this.siteInfo.socialLinks = [];
    }
    this.siteInfo.socialLinks.push({ name: '', url: '', icon: '' });
  }

  removeSocialLink(index: number) {
    if (this.siteInfo.socialLinks) {
      this.siteInfo.socialLinks.splice(index, 1);
    }
  }

  onIconSelected(event: Event, index: number) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && this.siteInfo.socialLinks) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target && typeof e.target.result === 'string') {
          this.siteInfo.socialLinks![index].icon = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    
    try {
      await lastValueFrom(this.http.put('/api/siteinfo', this.siteInfo));
      this.toastService.success('Contact settings saved successfully!');
    } catch (error) {
      console.error('Failed to update contact info', error);
      this.toastService.danger('Failed to update contact settings');
    }
  }
}
