import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  REPOSITORY: string = 'Repositorio';
  STENCIL_REPOSITORY: string = 'Repositorio Stenciljs';
  NPM_LIBRARY: string = 'Librería Stenciljs';
  README: string = 'README';
  LINKEDIN: string = 'LinkedIn';
  WHATSAPP: string = 'Whatsapp';
}
