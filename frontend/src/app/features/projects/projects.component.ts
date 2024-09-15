import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SanityService } from '../../shared/services/sanity.service';
import { adaptProjects } from './adapters/all-projects.adapter';
import { Projects } from './models/Projects';
import { ModalComponent } from './components/modal/modal.component';
import { TransitionRefService } from '../../shared/services/transition-ref.service';
import { animatePageOut } from '../../shared/utils/animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  @ViewChild('container', { static: false }) container!: ElementRef<HTMLDivElement>;
  isBrowser: boolean;

  modalState = {
    active: false,
    index: 0,
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public sanity: SanityService,
    protected router: Router,
    protected refService: TransitionRefService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // Verifica el tamaño de pantalla cuando se redimensiona
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (this.isBrowser && window.innerWidth < 768) {
      this.modalState.active = false; // Desactiva la modal si el tamaño es menor a 768px
    }
  }

  setModalState(newState: { active: boolean; index: number }) {
    if (window.innerWidth >= 768) {
      // Solo permite activar la modal si la pantalla es grande

      this.modalState = newState;
    }
  }

  uploadedProjects: Projects = [];
  error: any = { isError: false, msg: '' };
  isLoading = false;

  ngOnInit(): void {
    this.loadProjects();
    this.checkScreenSize(); // Verifica el tamaño de pantalla cuando el componente se inicializa
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

  transitionClick(href: string) {
    if (this.router.url !== href) {
      console.log(this.router.url === href);
      const context = this.refService.contextRef;
      if (!this.refService.isMenuOpen) {
        animatePageOut(context, href, this.router);
      } else {
        this.router.navigate([href]);
      }
    }
  }
}
