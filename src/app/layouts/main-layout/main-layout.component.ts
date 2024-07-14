import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { TransitionRefService } from '../services/transition-ref.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { animatePageIn } from '../utils/animation';
import {
  CursorComponent,
  NavigationComponent,
} from '../../shared';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CursorComponent,
    NavigationComponent,
],
  providers: [TransitionRefService],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('transitionDiv', { static: false }) transitionDiv!: ElementRef;

  refService = inject(TransitionRefService);
  router = inject(Router);
  private routerSubscription!: Subscription;

  ngAfterViewInit(): void {
    this.refService.contextRef = this.transitionDiv.nativeElement;

    // Ejecutar animación la primera vez
    animatePageIn(this.transitionDiv.nativeElement);

    // Suscribirse a eventos de navegación
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.refService.isMenuOpen) {
          animatePageIn(this.transitionDiv.nativeElement);
        }
      }
    });
  }

  ngOnDestroy(): void {
    // Cancelar suscripción para evitar pérdidas de memoria
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
