import { Injectable } from '@angular/core';
import { AuthModel } from 'src/app/core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(auth: AuthModel): boolean {
    return true;
  }
}
