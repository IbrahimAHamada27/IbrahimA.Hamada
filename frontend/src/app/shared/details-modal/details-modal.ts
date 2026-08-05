import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DetailItem {
  title: string;
  subtitle?: string;
  date?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
  meta?: { label: string; value: string }[];
}

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-modal.html',
  styleUrl: './details-modal.css'
})
export class DetailsModalComponent {
  @Input() item: DetailItem | null = null;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  getImageUrl(url?: string): string {
    if (!url) return '';
    return url.startsWith('/uploads/') ? '' + url : url;
  }
}
