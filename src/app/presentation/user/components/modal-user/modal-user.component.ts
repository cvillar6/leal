import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.sass'],
})
export class ModalUserComponent implements OnDestroy {
  CREATE_USER: string = 'Crear usuario';
  CREATE: string = 'Crear';

  ID: string = 'Identificación';
  ID_PLACEHOLDER: string = 'Ingresa la identificación';
  NAME: string = 'Nombres';
  NAME_PLACEHOLDER: string = 'Ingresa los nombres';
  LAST_NAME: string = 'Apellidos';
  LAST_NAME_PLACEHOLDER: string = 'Ingresa los apellidos';
  POINTS: string = 'Puntos acumulados';
  POINTS_PLACEHOLDER: string = 'Ingresa los puntos acumulados';

  UNKNOW: string = 'Desconocido';

  private userAdded!: Subscription;

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    points: [],
  });

  constructor(
    private dialogRef: MatDialogRef<ModalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userRepository: UserRepository,
    private userDataService: UserDataService
  ) {}

  onSubmit() {
    const newUser: UserModel = {
      name: this.userForm.value.name ?? this.UNKNOW,
      lastName: this.userForm.value.lastName ?? this.UNKNOW,
      points: this.userForm.value.points ?? 0,
      active: true,
    };

    this.addUser(newUser);
  }

  addUser(user: UserModel): void {
    this.userAdded = this.userRepository.addUser(user).subscribe(() => {
      this.userDataService.refreshUsersData();
      this.dialogRef.close();
    });
  }

  ngOnDestroy(): void {
    this.userAdded?.unsubscribe();
  }
}
