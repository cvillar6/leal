import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { UserRepository } from 'src/app/core/repositories/user.repository';
import { UserRepositoryImpl } from 'src/app/infrastructure/repositories/user.repository.impl';
import { ListUserComponent } from './list-user.component';

describe('ListUserComponent', () => {
  let component: ListUserComponent;
  let fixture: ComponentFixture<ListUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserComponent],
      imports: [MatDialogModule, HttpClientTestingModule],
      providers: [{ provide: UserRepository, useClass: UserRepositoryImpl }],
    });
    fixture = TestBed.createComponent(ListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
