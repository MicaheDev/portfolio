import { Component, OnInit } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixHand } from '@ng-icons/remixicon';
import { ThreeRenderComponent } from '../../shared/components/three-render/three-render.component';
import { SanityService } from '../../shared/services/sanity.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent, ThreeRenderComponent],
  providers: [
    provideIcons({
      remixHand,
    }),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  data!: any;

  /**
   * 
   *   constructor(public sanity: SanityService) {}

   * ngOnInit(): void {
    this.sanity.get('*[_type == "home"]').then((data) => {
      console.log(data);
      this.data = data[0]
    });
  }
   */
}
