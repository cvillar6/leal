import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModel } from 'src/app/core/models/user.model';
import { DataUserComponent } from './data-user.component';

describe('DataUserComponent', () => {
  let component: DataUserComponent;
  let fixture: ComponentFixture<DataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataUserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update numberOfUsers when users change', () => {
    const users: UserModel[] = [
      {
        id: '1',
        name: 'User 1',
        active: true,
        lastName: '',
        points: 0,
      },
      {
        id: '2',
        name: 'User 2',
        active: true,
        lastName: '',
        points: 0,
      },
      {
        id: '3',
        name: 'User 3',
        active: false,
        lastName: '',
        points: 0,
      },
    ];

    component.users = users;
    component.ngOnChanges();

    expect(component.numberOfUsers).toEqual(3);
  });

  it('should update activeUsers when users change', () => {
    const users: UserModel[] = [
      {
        id: '1',
        name: 'User 1',
        active: true,
        lastName: '',
        points: 0,
      },
      {
        id: '2',
        name: 'User 2',
        active: true,
        lastName: '',
        points: 0,
      },
      {
        id: '3',
        name: 'User 3',
        active: false,
        lastName: '',
        points: 0,
      },
    ];

    component.users = users;
    component.ngOnChanges();

    expect(component.activeUsers).toEqual(2);
  });

  it('should update deactivateUsers when users change', () => {
    const users: UserModel[] = [
      {
        id: '1',
        name: 'User 1',
        active: true,
        lastName: '',
        points: 0,
      },
      {
        id: '2',
        name: 'User 2',
        active: true,
        lastName: '',
        points: 0,
      },
      {
        id: '3',
        name: 'User 3',
        active: false,
        lastName: '',
        points: 0,
      },
    ];

    component.users = users;
    component.ngOnChanges();

    expect(component.deactivateUsers).toEqual(1);
  });
});
