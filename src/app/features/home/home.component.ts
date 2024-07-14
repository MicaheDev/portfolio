import { Component} from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixHand } from '@ng-icons/remixicon';
import { ThreeRenderComponent } from "../../shared/components/three-render/three-render.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIconComponent, ThreeRenderComponent],
  providers: [provideIcons({
    remixHand
  })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
