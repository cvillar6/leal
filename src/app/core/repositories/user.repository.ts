import { UserModel } from '../models/user.model';

export abstract class UserRepository {
  abstract getUsers(): any;
  abstract addUser(user: UserModel): any;
  abstract updateUser(user: UserModel): any;
  abstract deleteUser(id: string): any;
}
