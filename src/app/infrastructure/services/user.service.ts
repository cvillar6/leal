import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://leal-5.free.beeceptor.com/api';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${this.apiUrl}/users`);
  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(`${this.apiUrl}/users`, user);
  }
}
