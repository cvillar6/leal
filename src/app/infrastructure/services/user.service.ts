import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://leal-2.free.beeceptor.com/api';

  constructor(private httpClient: HttpClient) {}

  getUsers(): any {
    return this.httpClient.get<any>(`${this.apiUrl}/users`);
  }

  addUser(user: UserModel): any {
    return this.httpClient.post<any>(`${this.apiUrl}/users`, user);
  }
}
