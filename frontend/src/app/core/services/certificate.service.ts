import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError } from 'rxjs';
import { Certificate } from '../models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private apiUrl = `${environment.apiUrl}/api/certificates`;
  private cache$?: Observable<Certificate[]>;

  constructor(private http: HttpClient) {}

  getCertificates(refresh = false): Observable<Certificate[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Certificate[]>(this.apiUrl).pipe(
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
}

