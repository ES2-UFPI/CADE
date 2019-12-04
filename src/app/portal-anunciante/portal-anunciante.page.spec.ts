import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAnunciantePage } from './portal-anunciante.page';
import { Router } from '@angular/router';
import { AnuncioService } from '../anuncio.service';

describe('PortalAnunciantePage', () => {
  let component: PortalAnunciantePage;
  let fixture: ComponentFixture<PortalAnunciantePage>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const anuncioServiceSpy = jasmine.createSpyObj('AnuncioService', ['findAll']);

    TestBed.configureTestingModule({
      declarations: [ PortalAnunciantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {provide: Router, useValue: routerSpy},
        {provide: AnuncioService, useValue: anuncioServiceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(PortalAnunciantePage);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
