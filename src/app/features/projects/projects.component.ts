import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

type Modal = {
  active: boolean;
  index: number;
};
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit {
  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {}

  modal!: Modal;
  projects = [
    { title: 'C2 Montreal', src: '/images/c2montreal.png', color: '#000000' },
    { title: 'Office Studio', src: '/images/officestudio.png', color: '#8C8C8C' },
    { title: 'Locomotive', src: '/images/locomotive.png', color: '#EFE8D3' },
    { title: 'Silencio', src: '/images/silencio.png', color: '#706D63' },
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this.modal.index) {
        const slider: HTMLDivElement | null = window.document.querySelector('.modal-slider');
        if (slider) {
          slider.style.transform = `translateY(${this.modal.index * -100})%`;
        }
      }
    }
  }

  setModal(object: any) {
    if (isPlatformBrowser(this.platformId)) {
      console.log(object);
      this.modal = object;
      if (this.modal.index !== 0) {
        const slider: HTMLDivElement | null = window.document.querySelector('.modal-slider');
        if (slider) {
          slider.style.top = `${this.modal.index * -100}%`;
        }
      } else {
        const slider: HTMLDivElement | null = window.document.querySelector('.modal-slider');
        if (slider) {
          slider.style.top = '0%';
        }
      }
    }
  }
}
