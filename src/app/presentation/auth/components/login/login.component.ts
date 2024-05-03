import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  USER: string = 'Usuario';
  USER_PLACEHOLDER: string = 'Ingresa tu usuario';
  PASSWORD: string = 'Contraseña';
  PASSWORD_PLACEHOLDER: string = 'Ingresa tu contraseña';

  authForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authRepository: AuthRepository,
  ) {}

  onSubmit() {
    const auth: AuthModel = {
      user: this.authForm.value.user ?? '',
      password: this.authForm.value.password ?? '',
    };

    this.authRepository.login(auth);
  }
}
