import { AuthModel } from '../models/auth.model';

export abstract class AuthRepository {
  abstract login(auth: AuthModel): boolean;
}
