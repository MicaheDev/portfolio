import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { remixCheckFill, remixFileCopyLine } from '@ng-icons/remixicon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIconComponent, CommonModule],
  providers: [
    provideIcons({
      remixFileCopyLine,
      remixCheckFill
    }),
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  copied: boolean = false
  email: string = "webdev.michell@gmail.com"

  copy() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000); // Ocultar el mensaje después de 2 segundos
    }).catch(err => {
      console.error('Error al copiar el email: ', err);
    });
  }
}
