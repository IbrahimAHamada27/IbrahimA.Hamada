import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
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
      this.cache$ = this.http.get<Testimonial[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  addTestimonial(testimonial: Testimonial): Observable<Testimonial> {
    return this.http.post<Testimonial>(this.apiUrl, testimonial);
  }

  updateTestimonial(id: string, testimonial: Testimonial): Observable<Testimonial> {
    return this.http.put<Testimonial>(`${this.apiUrl}/${id}`, testimonial);
  }

  deleteTestimonial(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
