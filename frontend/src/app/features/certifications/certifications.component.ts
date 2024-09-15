import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { SanityService } from '../../shared/services/sanity.service';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { adaptCertifications } from './adapters/all-certifications.dapater';
import { Certifications } from './models/Certifications';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent implements OnInit {
  isLoading: boolean = false;
  certifications: Certifications = [];
  isBrowser: boolean;
  error: any = { isError: false, msg: '' };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public sanity: SanityService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.loadCertifications();
  }

  async loadCertifications(): Promise<void> {
    this.isLoading = true;
    try {
      const query = `*[_type == "certification"]  {
        title,
        categories,
        description,
        slug,
        preview {
          asset->{
            url
          }
        },
        technologies
      }`;
      const certifications = await this.sanity.get(query);
      this.certifications = adaptCertifications(certifications, this.sanity);
    } catch (error) {
      console.error('Error loading projects:', error);
      this.error = { isError: true, msg: 'Sorry, We have a error, try again.' };
    } finally {
      this.isLoading = false;
    }
  }
}
