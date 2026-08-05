import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl = `${environment.apiUrl}/api/messages`;

  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }

  sendMessage(payload: any): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
