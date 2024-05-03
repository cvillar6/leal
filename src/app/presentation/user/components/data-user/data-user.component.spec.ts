import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DataUserComponent } from './data-user.component';

describe('DataUserComponent', () => {
  let component: DataUserComponent;
  let fixture: ComponentFixture<DataUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataUserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(DataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
