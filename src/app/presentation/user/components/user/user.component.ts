import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, distinctUntilChanged } from 'rxjs';

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

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointSubscription = this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }

  private breakpointChanged() {
    this.isDesktop = this.breakpointObserver.isMatched('(min-width: 1024px)');
  }

  ngOnDestroy(): void {
    this.breakpointSubscription?.unsubscribe();
  }
}
