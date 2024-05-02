import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, distinctUntilChanged, switchMap, take } from 'rxjs';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { User2Service } from 'src/app/infrastructure/services/user2.service';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userRepository: UserRepository,
    private userRepository2: User2Service
  ) {}

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged() {
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 1024px)');
  }

  addUser() {
    this.userRepository
      .addUser({
        name: 'Oelo',
        lastName: 'xd',
        points: 1000,
        active: true,
      })
      .subscribe(() => this.userRepository2.refreshUsers());
  }

  ngOnDestroy(): void {
    this.breakpointSubscription?.unsubscribe();
  }
}
