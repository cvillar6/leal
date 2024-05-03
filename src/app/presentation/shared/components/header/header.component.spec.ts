import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/utils/services/login.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: jasmine.SpyObj<Router>;
  let loginService: jasmine.SpyObj<LoginService>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['isLogged']);

    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: LoginService, useValue: loginServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout user and navigate to login page', () => {
    spyOn(localStorage, 'removeItem');

    component.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('authUser');

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
