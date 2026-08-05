import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteInfo } from '../models/site-info.model';

@Injectable({
  providedIn: 'root'
})
export class SiteInfoService {
  private apiUrl = `${environment.apiUrl}/api/siteinfo`;

  constructor(private http: HttpClient) {}

  getSiteInfo(): Observable<SiteInfo> {
    return this.http.get<SiteInfo>(this.apiUrl);
  }
}
