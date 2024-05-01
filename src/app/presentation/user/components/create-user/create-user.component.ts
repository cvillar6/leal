import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass'],
})
export class CreateUserComponent {
  USERS: string = 'Usuarios';
  USERS_DESCRIPTION: string =
    'Aquí puedes crear, editar y eliminar tus usuarios';
  CREATE: string = 'Crear usuario';
}
