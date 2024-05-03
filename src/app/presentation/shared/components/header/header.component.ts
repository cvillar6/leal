import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/utils/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  TITLE: string = '🛒 Leal';
  LOGOUT: string = 'Cerrar sesión';

  constructor(
    public loginService: LoginService,
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('authUser');
    this.router.navigate(['login']);
  }
}
