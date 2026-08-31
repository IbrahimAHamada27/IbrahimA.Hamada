import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError, tap } from 'rxjs';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private apiUrl = `${environment.apiUrl}/api/testimonials`;
  private cache$?: Observable<Testimonial[]>;

  constructor(private http: HttpClient) {}

  getTestimonials(refresh = false): Observable<Testimonial[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Testimonial[]>(this.apiUrl).pipe(
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

  addTestimonial(testimonial: Testimonial): Observable<Testimonial> {
    return this.http.post<Testimonial>(this.apiUrl, testimonial).pipe(
      tap(() => this.clearCache())
    );
  }

  updateTestimonial(id: string, testimonial: Testimonial): Observable<Testimonial> {
    return this.http.put<Testimonial>(`${this.apiUrl}/${id}`, testimonial).pipe(
      tap(() => this.clearCache())
    );
  }

  deleteTestimonial(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => this.clearCache())
    );
  }
}
