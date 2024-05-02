import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://leal-api.free.beeceptor.com/api';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${this.apiUrl}/users`);
  }

  addUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(`${this.apiUrl}/users`, user);
  }

  updateUser(user: UserModel): Observable<UserModel> {
    return this.httpClient.put<UserModel>(
      `${this.apiUrl}/users/${user.id}`,
      user
    );
  }

  deleteUser(userId: string): Observable<{ success: boolean }> {
    return this.httpClient.delete<{ success: boolean }>(
      `${this.apiUrl}/users/${userId}`
    );
  }
}
