import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private apiUrl = 'http://localhost:3000/api/testimonials';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.apiUrl);
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
