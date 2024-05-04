import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { PermissionService } from 'src/app/utils/services/permission.service';
import { UserDataService } from 'src/app/utils/services/user-data.service';
import { AlertUserComponent } from '../alert-user/alert-user.component';
import { ListUserComponent } from './list-user.component';
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockUserRepository: jasmine.SpyObj<UserRepository>;
  let mockUserDataService: jasmine.SpyObj<UserDataService>;
  let mockPermissionService: jasmine.SpyObj<PermissionService>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(waitForAsync(() => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    mockUserRepository = jasmine.createSpyObj('UserRepository', ['deleteUser']);
    mockUserDataService = jasmine.createSpyObj('UserDataService', [
      'refreshUsersData',
    ]);
    mockPermissionService = jasmine.createSpyObj(
      'PermissionService',
      [],
      ['canDeleteUser'],
    );
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['openFromComponent']);

    TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      providers: [
        { provide: MatDialog, useValue: mockDialog },
        { provide: UserRepository, useValue: mockUserRepository },
        { provide: UserDataService, useValue: mockUserDataService },
        { provide: PermissionService, useValue: mockPermissionService },
        { provide: MatSnackBar, useValue: mockSnackBar },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteUser method and show snackbar when user is deleted', () => {
    const userId = '1';
    mockUserRepository.deleteUser.and.returnValue(of({ success: true }));

    component.deleteUser(userId);

    expect(mockUserRepository.deleteUser).toHaveBeenCalledWith(userId);
    expect(mockUserDataService.refreshUsersData).toHaveBeenCalled();
    expect(mockSnackBar.openFromComponent).toHaveBeenCalledWith(
      AlertUserComponent,
      {
        duration: 5000,
        data: { title: 'Usuario eliminado' },
      },
    );
  });

  it('should call updateUser method and show snackbar when user is updated', () => {
    const user: UserModel = {
      id: '1',
      name: 'John',
      lastName: 'Doe',
      points: 100,
      active: false,
    };
    const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', [
      'afterClosed',
    ]);
    dialogRefSpyObj.afterClosed.and.returnValue(of({ success: true }));

    mockDialog.open.and.returnValue(dialogRefSpyObj);

    component.updateUser(user);

    expect(mockDialog.open).toHaveBeenCalledWith(ModalUserComponent, {
      data: user,
    });
    expect(mockSnackBar.openFromComponent).toHaveBeenCalledWith(
      AlertUserComponent,
      {
        duration: 5000,
        data: { title: 'Usuario actualizado' },
      },
    );
  });
});
