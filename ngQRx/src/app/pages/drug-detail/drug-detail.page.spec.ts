import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugDetailPage } from './drug-detail.page';

describe('DrugDetailPage', () => {
  let component: DrugDetailPage;
  let fixture: ComponentFixture<DrugDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
