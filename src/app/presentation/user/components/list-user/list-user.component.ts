import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { User2Service } from 'src/app/infrastructure/services/user2.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
})
export class ListUserComponent implements OnInit {
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';

  users$!: Observable<any>;
  private userSubscription!: Subscription;

  constructor(
    private userRepository: UserRepository,
    private userRepository2: User2Service
  ) {}

  ngOnInit() {
    this.getUsers();
    this.userSubscription = this.userRepository2.users$.subscribe(() => {
      console.log('hey?');
      this.getUsers(); // Reload the list of users when a new user is added
    });
  }

  getUsers(): void {
    this.users$ = this.userRepository.getUsers();
  }

  // loadUsers(): void {
  //   this.userRepository.getUsers().subscribe();
  // }
}
