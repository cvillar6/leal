import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { AlertUserComponent } from './alert-user.component';

describe('AlertUserComponent', () => {
  let component: AlertUserComponent;
  let fixture: ComponentFixture<AlertUserComponent>;
  let mockSnackBarRef: jasmine.SpyObj<MatSnackBarRef<AlertUserComponent>>;

  beforeEach(async () => {
    mockSnackBarRef = jasmine.createSpyObj('MatSnackBarRef', ['dismiss']);

    await TestBed.configureTestingModule({
      declarations: [AlertUserComponent],
      providers: [
        { provide: MatSnackBarRef, useValue: mockSnackBarRef },
        { provide: MAT_SNACK_BAR_DATA, useValue: { title: 'Test Title' } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title correctly', () => {
    const titleElement: HTMLElement | null =
      fixture.nativeElement.querySelector('.text-general-1');
    expect(titleElement).not.toBeNull();
    if (titleElement) {
      expect(titleElement.textContent).toContain('Test Title');
    }
  });
});
