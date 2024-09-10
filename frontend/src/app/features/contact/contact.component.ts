import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixFileCopyLine } from '@ng-icons/remixicon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({
    remixFileCopyLine
  })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
