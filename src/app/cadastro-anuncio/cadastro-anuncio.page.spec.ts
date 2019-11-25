import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAnuncioPage } from './cadastro-anuncio.page';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';
import { AnuncioService } from '../anuncio.service';

describe('CadastroAnuncioPage', () => {
  let component: CadastroAnuncioPage;
  let fixture: ComponentFixture<CadastroAnuncioPage>;

  beforeEach(async(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    // const formBuilderSpy = jasmine.createSpyObj('FormBuilder', ['group']);
    const anuncioServiceSpy = jasmine.createSpyObj('AnuncioService', ['save']);

    TestBed.configureTestingModule({
      declarations: [ CadastroAnuncioPage ],
      imports: [FormsModule, ReactiveFormsModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        FormBuilder,
        // {provide: FormBuilder, useValue: formBuilderSpy},
        {provide: Router, useValue: routerSpy},
        {provide: AnuncioService, useValue: anuncioServiceSpy},
        AlertController,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
