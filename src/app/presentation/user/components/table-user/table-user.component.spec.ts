import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { of } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/utils/services/user-data.service';
import { PermissionService } from 'src/app/utils/services/permission.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { TableUserComponent } from './table-user.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TableUserComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;
  let userRepositorySpy: jasmine.SpyObj<UserRepository>;
  let userDataServiceSpy: jasmine.SpyObj<UserDataService>;
  let permissionServiceSpy: jasmine.SpyObj<PermissionService>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    const userRepositorySpyObj = jasmine.createSpyObj('UserRepository', [
      'deleteUser',
    ]);
    const userDataServiceSpyObj = jasmine.createSpyObj('UserDataService', [
      'refreshUsersData',
    ]);
    const permissionServiceSpyObj = jasmine.createSpyObj('PermissionService', [
      'isAdmin',
    ]);

    await TestBed.configureTestingModule({
      declarations: [TableUserComponent],
      providers: [
        { provide: UserRepository, useValue: userRepositorySpyObj },
        { provide: UserDataService, useValue: userDataServiceSpyObj },
        { provide: PermissionService, useValue: permissionServiceSpyObj },
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj('MatDialog', ['open']),
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    userRepositorySpy = TestBed.inject(
      UserRepository,
    ) as jasmine.SpyObj<UserRepository>;
    userDataServiceSpy = TestBed.inject(
      UserDataService,
    ) as jasmine.SpyObj<UserDataService>;
    permissionServiceSpy = TestBed.inject(
      PermissionService,
    ) as jasmine.SpyObj<PermissionService>;
    matDialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize dataSource with users', () => {
    const users: UserModel[] = [
      {
        id: '1',
        name: 'User 1',
        points: 10,
        active: true,
        lastName: '',
      },
      {
        id: '2',
        name: 'User 2',
        points: 20,
        active: false,
        lastName: '',
      },
    ];
    component.users = users;
    component.getUsers();
    expect(component.dataSource).toEqual(jasmine.any(MatTableDataSource));
    expect(component.dataSource.data).toEqual(users);
  });

  it('should delete user and refresh data service', () => {
    const userId = '1';
    userRepositorySpy.deleteUser.and.returnValue(of({ success: true }));
    component.deleteUser(userId);
    expect(userRepositorySpy.deleteUser).toHaveBeenCalledWith(userId);
    expect(userDataServiceSpy.refreshUsersData).toHaveBeenCalled();
  });

  it('should open modal when updating user', () => {
    const user: UserModel = {
      id: '1',
      name: 'User 1',
      points: 10,
      active: true,
      lastName: '',
    };
    component.updateUser(user);
    expect(matDialogSpy.open).toHaveBeenCalledWith(ModalUserComponent, {
      data: user,
    });
  });

  it('should apply filter to dataSource', () => {
    const event = { target: { value: 'User' } };
    component.dataSource = new MatTableDataSource<UserModel>([
      {
        id: '1',
        name: 'User 1',
        points: 10,
        active: true,
        lastName: '',
      },
      {
        id: '2',
        name: 'User 2',
        points: 20,
        active: false,
        lastName: '',
      },
    ]);
    component.applyFilter(event as unknown as Event);
    expect(component.dataSource.filter).toEqual('user');
  });
});
