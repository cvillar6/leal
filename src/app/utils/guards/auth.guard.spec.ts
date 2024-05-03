import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
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

  it('should return true and not navigate if no session data is present', async () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = await TestBed.runInInjectionContext(() =>
      authGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
    );

    expect(result).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to dashboard and return false if session data is present', async () => {
    spyOn(localStorage, 'getItem').and.returnValue('someUser');

    const result = await TestBed.runInInjectionContext(() =>
      authGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
    );

    expect(result).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});

function mockActivatedRouteSnapshot(): ActivatedRouteSnapshot {
  return {} as ActivatedRouteSnapshot;
}

function mockRouterStateSnapshot(): RouterStateSnapshot {
  return {} as RouterStateSnapshot;
}
