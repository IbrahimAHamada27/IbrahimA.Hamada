import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiUrl = `${environment.apiUrl}/api/skills`;
  private cache$?: Observable<Skill[]>;

  constructor(private http: HttpClient) {}

  getSkills(refresh = false): Observable<Skill[]> {
    if (!this.cache$ || refresh) {
      this.cache$ = this.http.get<Skill[]>(this.apiUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }
}

