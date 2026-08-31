import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError, tap } from 'rxjs';
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
      this.cache$ = this.http.get<Education[]>(this.apiUrl).pipe(
        catchError(err => {
          this.cache$ = undefined;
          return throwError(() => err);
        }),
        shareReplay({ bufferSize: 1, refCount: false })
      );
    }
    return this.cache$;
  }

  clearCache() {
    this.cache$ = undefined;
  }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(this.apiUrl, education).pipe(
      tap(() => this.clearCache())
    );
  }

  updateEducation(id: string, education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiUrl}/${id}`, education).pipe(
      tap(() => this.clearCache())
    );
  }

  deleteEducation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.clearCache())
    );
  }
}
