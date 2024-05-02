import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User2Service {
  private usersSubject = new Subject<any>();
  users$ = this.usersSubject.asObservable();

  refreshUsers() {
    console.log('hola');

    this.usersSubject.next({});
  }
}
