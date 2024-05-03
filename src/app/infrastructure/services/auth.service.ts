import { Injectable } from '@angular/core';
import { AuthModel } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(auth: AuthModel): boolean {
    if (auth.user === 'Admin' && auth.password === 'LealAdmin') {
      return true;
    } else if (auth.user === 'Cajero' && auth.password === 'LealCajero') {
      return true;
    } else {
      return false;
    }
  }
}
