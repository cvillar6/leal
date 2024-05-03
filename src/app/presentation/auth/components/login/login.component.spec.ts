import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AuthModel } from 'src/app/core/models/auth.model';
import { AuthRepository } from 'src/app/core/repositories/auth.repository';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let authRepository: jasmine.SpyObj<AuthRepository>;

  beforeEach(async () => {
    const authRepositorySpy = jasmine.createSpyObj('AuthRepository', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        FormBuilder,
        { provide: AuthRepository, useValue: authRepositorySpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    authRepository = TestBed.inject(
      AuthRepository,
    ) as jasmine.SpyObj<AuthRepository>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authRepository.login with form values on form submission', () => {
    const authModel: AuthModel = { user: 'testUser', password: 'testPassword' };
    const formValues = { user: 'testUser', password: 'testPassword' };

    component.authForm.setValue(formValues);

    component.onSubmit();

    expect(authRepository.login).toHaveBeenCalledWith(authModel);
  });
});
