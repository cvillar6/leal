import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { userGuard } from './user.guard';

describe('UserGuard', () => {
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

  it('should return true and not navigate if session data exists', async () => {
    spyOn(localStorage, 'getItem').and.returnValue('someUser');

    const result = await TestBed.runInInjectionContext(() =>
      userGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
    );

    expect(result).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to login and return false if session data does not exist', async () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const result = await TestBed.runInInjectionContext(() =>
      userGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
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
