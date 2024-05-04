import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersSubject = new Subject<void>();
  users$ = this.usersSubject.asObservable();

  refreshUsersData(): void {
    this.usersSubject.next();
  }
}
