import { Component } from '@angular/core';
import { ThreeRenderComponent } from "../../shared/components/three-render/three-render.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowDownLine, remixLinkedinBoxLine } from '@ng-icons/remixicon';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ThreeRenderComponent, NgIconComponent],
  providers: [provideIcons({
    remixArrowDownLine,
    remixLinkedinBoxLine

  })],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
