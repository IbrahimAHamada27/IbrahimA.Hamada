import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../../core/services/activity.service';
import { Activity } from '../../core/models/activity.model';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule, DetailsModalComponent],
  templateUrl: './activities.html',
  styleUrl: './activities.css'
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.fetchActivities();
  }

  async fetchActivities() {
    try {
      const response = await lastValueFrom(this.activityService.getActivities());
      this.activities = response;
    } catch (error) {
      console.error('Failed to fetch activities', error);
    }
  }

  getCategoryBadgeClass(category: string): string {
    switch (category) {
      case 'volunteering':
        return 'badge-volunteering';
      case 'event':
        return 'badge-event';
      case 'activity':
      default:
        return 'badge-activity';
    }
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'volunteering':
        return 'fa-hand-holding-heart';
      case 'event':
        return 'fa-calendar-check';
      case 'activity':
      default:
        return 'fa-people-group';
    }
  }

  openDetails(item: Activity) {
    this.selectedItem = {
      title: item.title,
      subtitle: `${item.organization}${item.role ? ' • ' + item.role : ''}`,
      date: item.date,
      category: item.category,
      description: item.desc,
      imageUrl: item.imageUrl,
      link: item.link
    };
    this.isModalOpen = true;
  }
}
