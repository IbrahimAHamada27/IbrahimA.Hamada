import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiUrl = `${environment.apiUrl}/api/education`;
  private cache$?: Observable<Education[]>;

  constructor(private http: HttpClient) {}

  getEducation(refresh = false): Observable<Education[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Education[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(this.apiUrl, education);
  }

  updateEducation(id: string, education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiUrl}/${id}`, education);
  }

  deleteEducation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
