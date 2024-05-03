import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cashierGuard } from './cashier.guard';

describe('CashierGuard', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    });
    router = TestBed.inject(Router);
  });

  it('should return true and not navigate if session data is cashier', async () => {
    spyOn(localStorage, 'getItem').and.returnValue('cashier');

    const result = await TestBed.runInInjectionContext(() =>
      cashierGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
    );

    expect(result).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to login and return false if session data is not cashier', async () => {
    spyOn(localStorage, 'getItem').and.returnValue('admin');

    const result = await TestBed.runInInjectionContext(() =>
      cashierGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
    );

    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});

function mockActivatedRouteSnapshot(): ActivatedRouteSnapshot {
  return {} as ActivatedRouteSnapshot;
}

function mockRouterStateSnapshot(): RouterStateSnapshot {
  return {} as RouterStateSnapshot;
}
