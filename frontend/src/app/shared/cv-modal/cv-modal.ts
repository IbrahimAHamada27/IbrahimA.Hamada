import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-modal.html',
  styleUrl: './cv-modal.css'
})
export class CvModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape() {
    if (this.isOpen) {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }

  downloadOrPrintCv() {
    window.print();
  }
}
