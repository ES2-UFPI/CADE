import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadanunciantePage } from './cadanunciante.page';

describe('CadanunciantePage', () => {
  let component: CadanunciantePage;
  let fixture: ComponentFixture<CadanunciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadanunciantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadanunciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
