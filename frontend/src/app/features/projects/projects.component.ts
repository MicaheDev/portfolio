import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SanityService } from '../../shared/services/sanity.service';
import { adaptProjects } from './adapters/all-projects.adapter';
import { Projects } from './models/Projects';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;
  isBrowser: boolean;

  modalState = {
    active: false,
    index: 0,
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public sanity: SanityService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  setModalState(newState: { active: boolean; index: number }) {
    this.modalState = newState;
    console.log('Modal State:', this.modalState);
  }

  uploadedProjects: Projects = [];
  error: any = { isError: false, msg: '' };
  isLoading = false;

  ngOnInit(): void {
    this.loadProjects();
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      /*
      const scrollTriggerSettings = {
        trigger: this.container.nativeElement,
        start: 'top top',
        toggleActions: 'play reverse play reverse', // Control de reproducción y reversa
      };

      gsap.context(() => {
        gsap.set('.title', {
          y: 900,
          opacity: 0,
        });

        gsap.to('.title', {
          y: 0,
          opacity: 1,
          scrollTrigger: scrollTriggerSettings,
        });
      }, this.container.nativeElement);
      */
    }
  }

  onMouseEnter(index: number) {
    this.setModalState({ active: true, index });
  }

  onMouseLeave(index: number) {
    this.setModalState({ active: false, index });
  }

  async loadProjects(): Promise<void> {
    this.isLoading = true;
    try {
      const query = `*[_type == "project"] | order(date desc) {
        title,
        date,
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
      const projects = await this.sanity.get(query);
      this.uploadedProjects = adaptProjects(projects, this.sanity);
    } catch (error) {
      console.error('Error loading projects:', error);
      this.error = { isError: true, msg: 'Sorry, We have a error, try again.' };
    } finally {
      this.isLoading = false;
    }
  }
}
