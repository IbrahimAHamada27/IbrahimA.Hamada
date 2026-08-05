import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activity } from '../../core/models/activity.model';
import { ActivityService } from '../../core/services/activity.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-dashboard-activities',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './activities.html',
  styleUrl: './activities.css'
})
export class DashboardActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  showForm = false;
  editingId: string | undefined = undefined;
  formData: Activity = {
    title: '',
    organization: '',
    role: '',
    date: '',
    desc: '',
    link: '',
    imageUrl: '',
    category: 'volunteering'
  };

  constructor(private cdr: ChangeDetectorRef, private activityService: ActivityService, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.activityService.getActivities().subscribe({
      next: (data) => {
        this.activities = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch activities', err)
    });
  }

  editItem(item: Activity) {
    this.editingId = item._id;
    this.formData = { ...item };
    this.showForm = true;
  }

  cancelEdit() {
    this.showForm = false;
    this.editingId = undefined;
    this.formData = {
      title: '',
      organization: '',
      role: '',
      date: '',
      desc: '',
      link: '',
      imageUrl: '',
      category: 'volunteering'
    };
  }

  deleteItem(id: string | undefined) {
    if (!id) return;
    this.activityService.deleteActivity(id).subscribe({
      next: () => {
        this.activities = this.activities.filter(a => a._id !== id);
        this.toastService.success('Activity deleted successfully');
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to delete activity', err);
        this.toastService.danger('Failed to delete activity');
      }
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.editingId) {
      this.activityService.updateActivity(this.editingId, this.formData).subscribe({
        next: (updated) => {
          const idx = this.activities.findIndex(a => a._id === this.editingId);
          if (idx !== -1) this.activities[idx] = updated;
          this.activities = [...this.activities];
          this.toastService.success('Activity updated successfully');
          this.cancelEdit();
          this.cdr.detectChanges();
        },
        error: (err) => this.toastService.danger('Failed to update activity')
      });
    } else {
      this.activityService.addActivity(this.formData).subscribe({
        next: (created) => {
          this.activities.unshift(created);
          this.activities = [...this.activities];
          this.toastService.success('Activity added successfully');
          this.cancelEdit();
          this.cdr.detectChanges();
        },
        error: (err) => this.toastService.danger('Failed to add activity')
      });
    }
  }
}
