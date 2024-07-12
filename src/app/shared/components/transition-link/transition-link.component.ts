import { Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TransitionRefService } from '../../../layouts/services/transition-ref.service';
import { animatePageOut } from '../../../layouts/utils/animation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transition-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './transition-link.component.html',
  styleUrl: './transition-link.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class TransitionLinkComponent {
  @Input() href!: string;
  @Input() label!: string;

  route = inject(ActivatedRoute);
  router = inject(Router);
  refService = inject(TransitionRefService);

  transitionClick() {
    if (this.router.url !== this.href) {
      console.log(this.router.url === this.href);
      const context = this.refService.contextRef;
      if(!this.refService.isMenuOpen){
        animatePageOut(context, this.href, this.router);
      }
      else {
        this.router.navigate([this.href])
      }
    }
  }
}
