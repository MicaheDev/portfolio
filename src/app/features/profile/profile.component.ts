import { Component } from '@angular/core';
import { ThreeRenderComponent } from "../../shared/components/three-render/three-render.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowDownLine, remixLinkedinBoxLine } from '@ng-icons/remixicon';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ThreeRenderComponent, NgIconComponent, InfiniteBandComponent],
  providers: [provideIcons({
    remixArrowDownLine,
    remixLinkedinBoxLine

  })],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
