import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl implements UserRepository {
  constructor(private userService: UserService) {}
  getUsers() {
    return this.userService.getUsers();
  }
  addUser(user: UserModel) {
    return this.userService.addUser(user);
  }
  updateUser(user: UserModel) {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string) {
    throw new Error('Method not implemented.');
  }
}
