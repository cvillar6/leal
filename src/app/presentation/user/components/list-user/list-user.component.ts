import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass'],
})
export class ListUserComponent implements OnInit, OnDestroy {
  ID: string = 'Identificación';
  NAME: string = 'Nombres';
  LAST_NAME: string = 'Apellidos';
  POINTS: string = 'Puntos acumulados';

  users$!: Observable<UserModel[]>;
  private refreshUsersSubscription!: Subscription;

  constructor(
    private userRepository: UserRepository,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.getUsers();
    this.refreshUsersSubscription = this.userDataService.users$.subscribe(
      () => {
        this.getUsers();
      }
    );
  }

  getUsers(): void {
    this.users$ = this.userRepository.getUsers();
  }

  ngOnDestroy(): void {
    this.refreshUsersSubscription?.unsubscribe();
  }
}
