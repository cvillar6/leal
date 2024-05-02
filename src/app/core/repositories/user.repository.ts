import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class UserRepository {
  abstract getUsers(): Observable<UserModel[]>;
  abstract addUser(user: UserModel): Observable<UserModel>;
  abstract updateUser(user: UserModel): any;
  abstract deleteUser(userId: string): Observable<{ success: boolean }>;
}
