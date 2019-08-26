import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderListPage } from './provider-list.page';

describe('ProviderListPage', () => {
  let component: ProviderListPage;
  let fixture: ComponentFixture<ProviderListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
