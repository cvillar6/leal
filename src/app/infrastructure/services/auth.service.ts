import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModel } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(auth: AuthModel): boolean {
    if (auth.user === 'Admin' && auth.password === 'LealAdmin') {
      localStorage.setItem('authUser', 'admin');
      this.router.navigate(['dashboard/admin']);
      return true;
    } else if (auth.user === 'Cajero' && auth.password === 'LealCajero') {
      localStorage.setItem('authUser', 'cashier');
      this.router.navigate(['dashboard/cajero']);
      return true;
    } else {
      return false;
    }
  }
}
