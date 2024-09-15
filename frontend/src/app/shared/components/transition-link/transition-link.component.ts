import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransitionRefService } from '../../services/transition-ref.service';
import { animatePageOut } from '../../utils/animation';

@Component({
  selector: 'app-transition-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<a (click)="transitionClick()" >
    <ng-content/>
  </a> `,
  encapsulation: ViewEncapsulation.None,
})
export class TransitionLinkComponent {
  @Input() href!: string;

  route = inject(ActivatedRoute);
  router = inject(Router);
  refService = inject(TransitionRefService);

  transitionClick() {
    if (this.router.url !== this.href) {
      console.log(this.router.url === this.href);
      const context = this.refService.contextRef;
      if (!this.refService.isMenuOpen) {
        animatePageOut(context, this.href, this.router);
      } else {
        this.router.navigate([this.href]);
      }
    }
  }
}


