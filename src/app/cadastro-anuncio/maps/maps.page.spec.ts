import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsPage } from './maps.page';
import { Router, ActivatedRoute } from '@angular/router';
import { AnuncioService } from 'src/app/anuncio.service';
import { Platform } from '@ionic/angular';

describe('MapsPage', () => {
  let component: MapsPage;
  let fixture: ComponentFixture<MapsPage>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    const anuncioServiceSpy = jasmine.createSpyObj('AnuncioService', ['saveLocal','loadLocal']);
    
    TestBed.configureTestingModule({
      declarations: [ MapsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        Platform,
        {provide: ActivatedRoute, useValue: activatedRouteSpy},
        {provide: Router, useValue: routerSpy},
        {provide: AnuncioService, useValue: anuncioServiceSpy},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
