import { Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
})
export class ListUserComponent {
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';
}
