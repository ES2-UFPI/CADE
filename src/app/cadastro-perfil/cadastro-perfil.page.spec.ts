import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPerfilPage } from './cadastro-perfil.page';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PerfilService } from '../perfil.service';
import { AlertController } from '@ionic/angular';

describe('CadastroPerfilPage', () => {
  let component: CadastroPerfilPage;
  let fixture: ComponentFixture<CadastroPerfilPage>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const perfilServiceSpy = jasmine.createSpyObj('PerfilService', ['saveStorage']);

    TestBed.configureTestingModule({
      declarations: [ CadastroPerfilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {provide: Router, useValue: routerSpy},
        {provide: PerfilService, useValue: perfilServiceSpy},
        AlertController,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
