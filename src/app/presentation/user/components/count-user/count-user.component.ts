import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';

@Component({
  selector: 'app-count-user',
  templateUrl: './count-user.component.html',
  styleUrls: ['./count-user.component.sass'],
})
export class CountUserComponent {
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
