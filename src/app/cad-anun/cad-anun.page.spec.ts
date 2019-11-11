import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAnunPage } from './cad-anun.page';

describe('CadAnunPage', () => {
  let component: CadAnunPage;
  let fixture: ComponentFixture<CadAnunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAnunPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAnunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
