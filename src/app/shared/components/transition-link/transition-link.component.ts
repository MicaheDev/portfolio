import { Component, Input, ViewEncapsulation } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transition-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<a (click)="transitionClick()" class="bounce-hover">
    {{ label }}
  </a> `,
  styles: [``],
  encapsulation: ViewEncapsulation.None,
})
export class TransitionLinkComponent {
  @Input() href!: string;
  @Input() label!: string;



  transitionClick() {
 
  }
}
