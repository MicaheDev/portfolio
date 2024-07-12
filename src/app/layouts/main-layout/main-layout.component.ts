import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BackgroundComponent } from '../../shared/components/background/background.component';

import { TransitionRefService } from '../services/transition-ref.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { animatePageIn } from '../utils/animation';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { CursorComponent } from '../../shared/components/cursor/cursor.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BackgroundComponent,
    NavbarComponent,
    CursorComponent,
  ],
  providers: [TransitionRefService],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
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
