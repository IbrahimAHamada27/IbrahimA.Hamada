import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError } from 'rxjs';
import { SiteInfo } from '../models/site-info.model';

@Injectable({
  providedIn: 'root'
})
export class SiteInfoService {
  private apiUrl = `${environment.apiUrl}/api/siteinfo`;
  private cache$?: Observable<SiteInfo>;

  constructor(private http: HttpClient) {}

  getSiteInfo(refresh = false): Observable<SiteInfo> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<SiteInfo>(this.apiUrl).pipe(
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

