import { Component, OnInit } from '@angular/core';
import { Certificate } from '../../core/models/certificate.model';
import { CertificateService } from '../../core/services/certificate.service';
import { lastValueFrom } from 'rxjs';
import { DetailsModalComponent, DetailItem } from '../../shared/details-modal/details-modal';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

import { LanguageService } from '../../core/services/language.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [DetailsModalComponent, ImgUrlPipe],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class CertificatesComponent implements OnInit {
  private languageService = inject(LanguageService);
  readonly t = this.languageService.t;

  readonly defaultCertificates: Certificate[] = [
    {
      _id: 'cert-1',
      title: 'Software Testing Track Certificate',
      issuer: 'Digital Egypt Pioneers Initiative (DEPI) / MCIT',
      date: 'Dec 2025',
      link: 'https://depi.gov.eg/',
      imageUrl: ''
    },
    {
      _id: 'cert-2',
      title: 'Automation Testing Training Certificate',
      issuer: 'Orange Digital Center Egypt & Instant Software Solutions',
      date: 'Feb 2026',
      link: 'https://www.orangedigitalcenters.com/',
      imageUrl: ''
    },
    {
      _id: 'cert-3',
      title: 'NTI MEAN Stack Web Developer Certificate',
      issuer: 'National Telecommunication Institute (NTI)',
      date: 'Aug 2026',
      link: 'https://nti.sci.eg/',
      imageUrl: ''
    },
    {
      _id: 'cert-4',
      title: 'Medical Analysis Principles Certification',
      issuer: 'Syndicate of Scientific Professions',
      date: 'Recent',
      link: '',
      imageUrl: ''
    },
    {
      _id: 'cert-5',
      title: 'Bloodborne Pathogens Certification',
      issuer: 'NHCPS',
      date: 'Recent',
      link: '',
      imageUrl: ''
    }
  ];

  certificates: Certificate[] = [];
  selectedItem: DetailItem | null = null;
  isModalOpen = false;

  constructor(private certService: CertificateService) {}

  ngOnInit() {
    this.certificates = this.defaultCertificates;
    this.fetchCertificates();
  }

  async fetchCertificates() {
    try {
      const response = await lastValueFrom(this.certService.getCertificates());
      if (response && response.length > 0) {
        this.certificates = response;
      }
    } catch (error) {
      console.warn('Failed to fetch certificates from API, using default accredited credentials', error);
      this.certificates = this.defaultCertificates;
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
