import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyDetailPage } from './allergy-detail.page';

describe('AllergyDetailPage', () => {
  let component: AllergyDetailPage;
  let fixture: ComponentFixture<AllergyDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergyDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
