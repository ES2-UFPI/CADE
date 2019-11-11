import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAnunciantePage } from './portal-anunciante.page';

describe('PortalAnunciantePage', () => {
  let component: PortalAnunciantePage;
  let fixture: ComponentFixture<PortalAnunciantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAnunciantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAnunciantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
