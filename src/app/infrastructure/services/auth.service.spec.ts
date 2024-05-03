import { TestBed } from '@angular/core/testing';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login as admin', () => {
    const auth: AuthModel = { user: 'Admin', password: 'LealAdmin' };
    spyOn(localStorage, 'setItem');
    spyOn(router, 'navigate');

    const result = service.login(auth);

    expect(result).toBeTrue();
    expect(localStorage.setItem).toHaveBeenCalledWith('authUser', 'admin');
    expect(router.navigate).toHaveBeenCalledWith(['dashboard/admin']);
  });

  it('should login as cashier', () => {
    const auth: AuthModel = { user: 'Cajero', password: 'LealCajero' };
    spyOn(localStorage, 'setItem');
    spyOn(router, 'navigate');

    const result = service.login(auth);

    expect(result).toBeTrue();
    expect(localStorage.setItem).toHaveBeenCalledWith('authUser', 'cashier');
    expect(router.navigate).toHaveBeenCalledWith(['dashboard/cajero']);
  });

  it('should fail to login with incorrect credentials', () => {
    const auth: AuthModel = {
      user: 'InvalidUser',
      password: 'InvalidPassword',
    };

    const result = service.login(auth);

    expect(result).toBeFalse();
  });
});
