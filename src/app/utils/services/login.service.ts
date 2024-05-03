import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  isLogged(): boolean {
    const isLogged = localStorage.getItem('authUser');

    return isLogged ? true : false;
  }
}
