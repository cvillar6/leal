import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountUserComponent } from './count-user.component';

describe('CountUserComponent', () => {
  let component: CountUserComponent;
  let fixture: ComponentFixture<CountUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountUserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(CountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
