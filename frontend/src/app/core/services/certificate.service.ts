import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private apiUrl = 'https://portfoliobackend-orpin.vercel.app/api/certificates';

  constructor(private http: HttpClient) {}

  getCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(this.apiUrl);
  }
}
