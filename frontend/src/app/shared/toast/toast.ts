import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css'
})
export class ToastComponent implements OnInit {
  toasts: ToastMessage[] = [];

  constructor(public toastService: ToastService) {}

  ngOnInit() {
    this.toastService.toasts$.subscribe(list => {
      this.toasts = list;
    });
  }

  dismiss(id: number) {
    this.toastService.remove(id);
  }
}
