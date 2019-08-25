import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxnavPage } from './rxnav.page';

describe('RxnavPage', () => {
  let component: RxnavPage;
  let fixture: ComponentFixture<RxnavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxnavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxnavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
