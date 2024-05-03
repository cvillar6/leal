import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PermissionService } from 'src/app/utils/services/permission.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';

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

  constructor(
    public dialog: MatDialog,
    public permissionService: PermissionService
  ) {}

  openDialog() {
    this.dialog.open(ModalUserComponent);
  }
}
