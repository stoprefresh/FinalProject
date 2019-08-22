import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtViewPage } from './emt-view.page';

describe('EmtViewPage', () => {
  let component: EmtViewPage;
  let fixture: ComponentFixture<EmtViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmtViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmtViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
