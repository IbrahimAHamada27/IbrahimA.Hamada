import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/models/service.model';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  constructor(private serviceService: ServiceService) {}

  async ngOnInit() {
    try {
      this.services = await lastValueFrom(this.serviceService.getServices());
    } catch (e) {
      console.error(e);
    }
  }
}
