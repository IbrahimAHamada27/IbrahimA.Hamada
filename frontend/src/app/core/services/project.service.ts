import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = `${environment.apiUrl}/api/projects`;
  private cache$?: Observable<Project[]>;

  constructor(private http: HttpClient) {}

  getProjects(refresh = false): Observable<Project[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Project[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }
}

