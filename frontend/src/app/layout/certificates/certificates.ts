import { Component, OnInit } from '@angular/core';
import { Certificate } from '../../core/models/certificate.model';
import { CertificateService } from '../../core/services/certificate.service';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class CertificatesComponent implements OnInit {
  certificates: Certificate[] = [];
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor(private certService: CertificateService) {}

  ngOnInit() {
    this.fetchCertificates();
  }

  async fetchCertificates() {
    try {
      const response = await lastValueFrom(this.certService.getCertificates());
      this.certificates = response;
    } catch (error) {
      console.error('Failed to fetch certificates', error);
    }
  }

  openDetails(cert: Certificate) {
    this.selectedItem = {
      title: cert.title,
      subtitle: cert.issuer,
      date: cert.date,
      category: 'Verified Certificate',
      imageUrl: cert.imageUrl,
      link: cert.link,
      description: `Verified professional credential issued by ${cert.issuer} on ${cert.date}. Click the link below to verify authenticity.`
    };
    this.isModalOpen = true;
  }
}
