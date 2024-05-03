import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserDataService } from 'src/app/infrastructure/services/user-data.service';
import { PermissionService } from 'src/app/utils/services/permission.service';
import { ModalUserComponent } from '../modal-user/modal-user.component';
import { ListUserComponent } from './list-user.component';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;
  let mockUserRepository: jasmine.SpyObj<UserRepository>;
  let mockUserDataService: jasmine.SpyObj<UserDataService>;
  let mockPermissionService: jasmine.SpyObj<PermissionService>;
  let mockMatDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockUserRepository = jasmine.createSpyObj('UserRepository', ['deleteUser']);
    mockUserDataService = jasmine.createSpyObj('UserDataService', [
      'refreshUsersData',
    ]);
    mockPermissionService = jasmine.createSpyObj(
      'PermissionService',
      [],
      ['somePermission'],
    );
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      providers: [
        { provide: UserRepository, useValue: mockUserRepository },
        { provide: UserDataService, useValue: mockUserDataService },
        { provide: PermissionService, useValue: mockPermissionService },
        { provide: MatDialog, useValue: mockMatDialog },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties with correct values', () => {
    expect(component.ID).toBe('Identificación');
    expect(component.NAME).toBe('Nombres');
    expect(component.LAST_NAME).toBe('Apellidos');
    expect(component.POINTS).toBe('Puntos acumulados');
    expect(component.EDIT).toBe('Editar');
    expect(component.REMOVE).toBe('Eliminar');
  });

  it('should open modal when updateUser is called', () => {
    const user: UserModel = {
      id: '1',
      name: 'John',
      lastName: 'Doe',
      points: 100,
      active: false,
    };
    component.updateUser(user);
    expect(mockMatDialog.open).toHaveBeenCalledWith(ModalUserComponent, {
      data: user,
    });
  });

  it('should call deleteUser and refresh data when deleteUser is called', () => {
    const userId = '1';
    mockUserRepository.deleteUser.and.returnValue(of({ success: true }));
    component.deleteUser(userId);
    expect(mockUserRepository.deleteUser).toHaveBeenCalledWith(userId);
    expect(mockUserDataService.refreshUsersData).toHaveBeenCalled();
  });
});
