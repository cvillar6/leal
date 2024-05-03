import { Injectable } from '@angular/core';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRepositoryImpl implements AuthRepository {
  constructor(private authService: AuthService) {}

  login(auth: AuthModel): boolean {
    return this.authService.login(auth);
  }
}
