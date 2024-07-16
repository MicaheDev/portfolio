import { Component } from '@angular/core';
import { ThreeRenderComponent } from "../../shared/components/three-render/three-render.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ThreeRenderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {}
