import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransitionRefService {
  contextRef!: Element;
  isMenuOpen!: boolean
}
