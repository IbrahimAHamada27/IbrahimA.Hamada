import { Component, Input, Output, EventEmitter, HostListener, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-cv-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-modal.html',
  styleUrl: './cv-modal.css'
})
export class CvModalComponent {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;
  readonly isArabic = computed(() => this.languageService.currentLang() === 'ar');

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
