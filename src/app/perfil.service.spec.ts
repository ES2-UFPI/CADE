import { TestBed } from '@angular/core/testing';

import { PerfilService } from './perfil.service';
import { Storage } from '@ionic/storage';
import { Perfil } from './perfil';
import { of } from 'rxjs';

describe('PerfilService', () => {
  const spy = jasmine.createSpyObj('Storage', ['get','set'])

  spy.get = () =>{
    return of({raio:501, categorias:['Noticias']} as Perfil)
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: Storage, useValue: spy},
      ],
    })
  })

  it('should be created', () => {
    const service: PerfilService = TestBed.get(PerfilService);
    expect(service).toBeTruthy();
  });
});
