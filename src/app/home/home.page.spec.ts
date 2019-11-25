import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '@ionic-native/google-maps/ngx';
import { PerfilService } from '../perfil.service';
import { AnuncioService } from '../anuncio.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
    const perfilServiceSpy = jasmine.createSpyObj('PerfilService', ['loadStorage']);
    const locationServiceSpy = jasmine.createSpyObj('LocationService', ['distance']);
    const anuncioServiceSpy = jasmine.createSpyObj('AnuncioService', ['findAll','findByLocationAndPerfil']);

    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers:[
        {provide: ActivatedRoute, useValue: activatedRouteSpy},
        {provide: PerfilService, useValue: perfilServiceSpy},
        {provide: LocationService, useValue: locationServiceSpy},
        {provide: AnuncioService, useValue: anuncioServiceSpy},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
