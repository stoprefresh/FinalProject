import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationListComponent } from './medication-list.component';

describe('MedicationListComponent', () => {
  let component: MedicationListComponent;
  let fixture: ComponentFixture<MedicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
