import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Project } from '../../models/Projects';
import gsap from 'gsap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent implements AfterViewInit, OnChanges {
  @ViewChild('container', { static: false }) container!: ElementRef;
  @ViewChild('slider', { static: false }) slider!: ElementRef;
  @ViewChild('cursor', { static: false }) cursor!: ElementRef;
  @ViewChild('cursorLabel', { static: false }) cursorLabel!: ElementRef;

  @Input() modalState!: { active: boolean; index: number };
  @Input() projects: Project[] = [];
  @Input() isRendered: boolean = false

  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
       // Inicializa la escala a 0
       gsap.set([this.container.nativeElement, this.cursor.nativeElement, this.cursorLabel.nativeElement], {
        scale: 0,
        x: '0',
        y: '0',
      });

      const moveContainerX = gsap.quickTo(this.container.nativeElement, 'left', { duration: 0.8, ease: 'power3' });
      const moveContainerY = gsap.quickTo(this.container.nativeElement, 'top', { duration: 0.8, ease: 'power3' });

      const moveCursorX = gsap.quickTo(this.cursor.nativeElement, 'left', { duration: 0.5, ease: 'power3' });
      const moveCursorY = gsap.quickTo(this.cursor.nativeElement, 'top', { duration: 0.5, ease: 'power3' });

      const moveCursorLabelX = gsap.quickTo(this.cursorLabel.nativeElement, 'left', { duration: 0.45, ease: 'power3' });
      const moveCursorLabelY = gsap.quickTo(this.cursorLabel.nativeElement, 'top', { duration: 0.45, ease: 'power3' });

      window.addEventListener('mousemove', (e: MouseEvent) => {
        const { clientX, clientY } = e;
        moveContainerX(clientX);
        moveContainerY(clientY);
        moveCursorX(clientX)
        moveCursorY(clientY)
        moveCursorLabelX(clientX)
        moveCursorLabelY(clientY)
      });
     }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isBrowser && changes['modalState'] && !this.isRendered) {
      const elements = [this.container.nativeElement, this.cursor.nativeElement, this.cursorLabel.nativeElement]

      if (this.modalState.active) {

        gsap.to(elements, {
          scale: 1,
          x: '-50%',
          y: '-50%',
          duration: 0.4,
        });
      } else {
        gsap.to(elements, {
          scale: 0,
          x: '-50%',
          y: '-50%',
          duration: 0.4,
        });
      }
    }
  }
}
