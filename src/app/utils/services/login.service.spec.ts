import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if authUser is set in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue('authUser');

    const isLogged = service.isLogged();
    expect(isLogged).toBeTrue();
  });

  it('should return false if authUser is not set in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    const isLogged = service.isLogged();
    expect(isLogged).toBeFalse();
  });
});
