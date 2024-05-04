import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/utils/services/user-data.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.sass'],
})
export class ModalUserComponent implements OnInit, OnDestroy {
  CREATE_USER: string = 'Crear usuario';
  EDIT_USER: string = 'Editar usuario';
  CREATE: string = 'Crear';
  EDIT: string = 'Editar';
  CANCEL: string = 'Cancelar';

  ID: string = 'Identificación';
  ID_PLACEHOLDER: string = 'Ingresa la identificación';
  NAME: string = 'Nombres';
  NAME_PLACEHOLDER: string = 'Ingresa los nombres';
  LAST_NAME: string = 'Apellidos';
  LAST_NAME_PLACEHOLDER: string = 'Ingresa los apellidos';
  POINTS: string = 'Puntos acumulados';
  POINTS_PLACEHOLDER: string = 'Ingresa los puntos acumulados';

  ACTIVE: string = 'Activar';
  DEACTIVE: string = 'Desactivar';

  UNKNOW: string = 'Desconocido';

  private userAdded!: Subscription;
  private userUpdated!: Subscription;

  userForm = this.formBuilder.group({
    id: [{ value: '', disabled: true }],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    points: [0],
    active: [true],
  });

  constructor(
    private dialogRef: MatDialogRef<ModalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public editUser: UserModel | undefined,
    private formBuilder: FormBuilder,
    private userRepository: UserRepository,
    private userDataService: UserDataService,
  ) {}

  ngOnInit(): void {
    if (this.editUser) {
      this.userForm.patchValue({
        id: this.editUser.id,
        name: this.editUser.name,
        lastName: this.editUser.lastName,
        points: this.editUser.points,
        active: this.editUser.active,
      });
    }
  }

  onSubmit() {
    const newUser: UserModel = {
      name: this.userForm.value.name ?? this.UNKNOW,
      lastName: this.userForm.value.lastName ?? this.UNKNOW,
      points: this.userForm.value.points ?? 0,
      active: this.userForm.value.active ?? true,
    };

    this.editUser
      ? this.updateUser({ id: this.editUser.id, ...newUser })
      : this.addUser(newUser);
  }

  addUser(user: UserModel): void {
    this.userAdded = this.userRepository.addUser(user).subscribe(() => {
      this.userDataService.refreshUsersData();
      this.closeDialog();
    });
  }

  updateUser(user: UserModel): void {
    this.userUpdated = this.userRepository.updateUser(user).subscribe(() => {
      this.userDataService.refreshUsersData();
      this.closeDialog();
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.userAdded?.unsubscribe();
    this.userUpdated?.unsubscribe();
  }
}
