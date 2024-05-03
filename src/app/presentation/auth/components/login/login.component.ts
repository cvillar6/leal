import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  TITLE: string = 'Ingresar a Leal shop';
  DESCRIPTION: string = 'Bienvenido de nuevo';
  LOGIN: string = 'Iniciar sesión';

  USER: string = 'Usuario';
  USER_PLACEHOLDER: string = 'Ingresa tu usuario';
  PASSWORD: string = 'Contraseña';
  PASSWORD_PLACEHOLDER: string = 'Ingresa tu contraseña';

  authForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.authForm);
  }
}
