import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  TITLE: string = 'Ingresar a Leal';
  DESCRIPTION: string = 'Bienvenido de nuevo';
  LOGIN: string = 'Iniciar sesión';
  ERROR: string =
    'Error iniciando sesión, verifica el nombre de usuario o la contraseña';

  USER: string = 'Usuario';
  USER_PLACEHOLDER: string = 'Ingresa tu usuario';
  USER_ERROR: string = 'El nombre de usuario es obligatorio';
  PASSWORD: string = 'Contraseña';
  PASSWORD_PLACEHOLDER: string = 'Ingresa tu contraseña';
  PASSWORD_ERROR: string = 'La contraseña es obligatoria';

  authForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  succesfullyLogin!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authRepository: AuthRepository,
  ) {}

  onSubmit() {
    const auth: AuthModel = {
      user: this.authForm.value.user ?? '',
      password: this.authForm.value.password ?? '',
    };

    this.succesfullyLogin = this.authRepository.login(auth);
  }

  getAuthFormControl(controlName: string): FormControl {
    return this.authForm.get(controlName) as FormControl;
  }
}
