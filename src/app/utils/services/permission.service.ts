import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor() {}

  isAdmin(): boolean {
    const isAdmin = localStorage.getItem('authUser');

    return isAdmin === 'admin';
  }
}
