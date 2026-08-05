import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = `${environment.apiUrl}/api/services`;
  private cache$?: Observable<Service[]>;

  constructor(private http: HttpClient) {}

  getServices(refresh = false): Observable<Service[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Service[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(this.apiUrl, service);
  }

  updateService(id: string, service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.apiUrl}/${id}`, service);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
