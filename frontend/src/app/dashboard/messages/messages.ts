import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Message } from '../../core/models/message.model';
import { lastValueFrom } from 'rxjs';
import { DatePipe } from '@angular/common';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private http: HttpClient, private toastService: ToastService) {}

  ngOnInit() {
    this.fetchMessages();
  }

  async fetchMessages() {
    try {
      const response = await lastValueFrom(this.http.get<Message[]>(`${environment.apiUrl}/api/messages`));
      this.messages = response;
    } catch (error) {
      console.error('Failed to fetch messages', error);
    }
  }

  async deleteMessage(id: string | undefined) {
    if (!id) return;
    try {
      await lastValueFrom(this.http.delete(`https://portfoliobackend-orpin.vercel.app/api/messages/${id}`));
      this.messages = this.messages.filter(m => m._id !== id);
      this.toastService.success('Message deleted successfully');
    } catch (error) {
      console.error('Failed to delete message', error);
      this.toastService.danger('Failed to delete message');
    }
  }
}
