import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://leal-api.free.beeceptor.com/api/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): any {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
