import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Experience } from '../models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = `${environment.apiUrl}/api/experience`;
  private cache$?: Observable<Experience[]>;

  constructor(private http: HttpClient) {}

  getExperiences(refresh = false): Observable<Experience[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Experience[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }
}

