import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, distinctUntilChanged } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/utils/services/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit, OnDestroy {
  readonly breakpoint$ = this.breakpointObserver
    .observe(['(min-width: 1024px)'])
    .pipe(distinctUntilChanged());

  breakpointSubscription!: Subscription;
  isDesktop: boolean = false;

  users!: UserModel[];
  private usersSubscription!: Subscription;
  private refreshUsersSubscription!: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userRepository: UserRepository,
    private userDataService: UserDataService,
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.refreshUsersSubscription = this.userDataService.users$.subscribe(
      () => {
        this.getUsers();
      },
    );
    this.breakpointSubscription = this.breakpoint$.subscribe(() =>
      this.breakpointChanged(),
    );
  }

  private breakpointChanged(): void {
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 1024px)');
  }

  getUsers(): void {
    this.usersSubscription = this.userRepository
      .getUsers()
      .subscribe((users: UserModel[]) => {
        this.users = users;
      });
  }

  ngOnDestroy(): void {
    this.breakpointSubscription?.unsubscribe();
    this.refreshUsersSubscription?.unsubscribe();
    this.usersSubscription?.unsubscribe();
  }
}
