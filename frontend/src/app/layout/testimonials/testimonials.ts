import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../../core/services/testimonial.service';
import { Testimonial } from '../../core/models/testimonial.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css'
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(private testimonialService: TestimonialService) {}

  async ngOnInit() {
    try {
      this.testimonials = await lastValueFrom(this.testimonialService.getTestimonials());
    } catch (e) {
      console.error(e);
    }
  }
}
