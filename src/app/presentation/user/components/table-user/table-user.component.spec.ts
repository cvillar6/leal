import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/core/models/user.model';
import { TableUserComponent } from './table-user.component';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserRepositoryImpl } from 'src/app/infrastructure/repositories/user.repository.impl';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TableUserComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableUserComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [{ provide: UserRepository, useClass: UserRepositoryImpl }],
    });
    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize MatTableDataSource with users', () => {
    // Arrange
    const mockUsers: UserModel[] = [
      { id: '1', name: 'John', lastName: 'Doe', points: 100, active: true },
      { id: '2', name: 'Jane', lastName: 'Smith', points: 200, active: false },
    ];
    component.users = mockUsers;

    // Act
    component.getUsers();

    // Assert
    expect(component.dataSource).toBeInstanceOf(MatTableDataSource);
    expect(component.dataSource.data).toEqual(mockUsers);
  });
});
