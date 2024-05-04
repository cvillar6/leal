import { TestBed, async } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { adminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
  }));

  it('should return true if session data is admin', async () => {
    spyOn(localStorage, 'getItem').and.returnValue('admin');

    const result = await TestBed.runInInjectionContext(() =>
      adminGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
    );

    expect(result).toBeTrue();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should navigate to login and return false if session data is not admin', async () => {
    spyOn(localStorage, 'getItem').and.returnValue('user');

    const result = await TestBed.runInInjectionContext(() =>
      adminGuard(mockActivatedRouteSnapshot(), mockRouterStateSnapshot()),
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
