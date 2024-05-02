import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.sass'],
})
export class ModalUserComponent {
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

  userForm = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    points: [''],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.userForm.value);
  }
}
