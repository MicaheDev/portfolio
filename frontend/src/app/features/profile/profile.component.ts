import { Component } from '@angular/core';
import { ThreeRenderComponent } from "../../shared/components/three-render/three-render.component";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixArrowDownLine, remixLinkedinBoxLine } from '@ng-icons/remixicon';
import { InfiniteBandComponent } from '../../shared/components/infinite-band/infinite-band.component';
import { CommonModule } from '@angular/common';
type BandItem = {
  name: string;
  styles: string;
};
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ThreeRenderComponent, NgIconComponent, InfiniteBandComponent, CommonModule],
  providers: [provideIcons({
    remixArrowDownLine,
    remixLinkedinBoxLine

  })],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {

  services: BandItem[] = [
    {
      name: "Freelance",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
    {
      name: "Web Designer",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
    {
      name: "Front-End Dev",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
    {
      name: "Back-End Dev",
      styles: ""
    },
    {
      name: "/",
      styles: "font-bold"
    },
  ];
}
