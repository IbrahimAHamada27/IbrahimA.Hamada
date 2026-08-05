import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = `${environment.apiUrl}/api/activities`;
  private cache$?: Observable<Activity[]>;

  constructor(private http: HttpClient) {}

  getActivities(refresh = false): Observable<Activity[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Activity[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  addActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.apiUrl, activity);
  }

  updateActivity(id: string, activity: Activity): Observable<Activity> {
    return this.http.put<Activity>(`${this.apiUrl}/${id}`, activity);
  }

  deleteActivity(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
