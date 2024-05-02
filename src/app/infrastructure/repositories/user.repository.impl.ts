import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl implements UserRepository {
  constructor(private userService: UserService) {}

  getUsers(): Observable<UserModel[]> {
    return this.userService.getUsers();
  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.userService.addUser(user);
  }

  updateUser(user: UserModel) {
    throw new Error('Method not implemented.');
  }

  deleteUser(userId: string): Observable<{ success: boolean }> {
    return this.userService.deleteUser(userId);
  }
}
