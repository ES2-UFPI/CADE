import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import { of } from 'rxjs';
import { Perfil } from '../perfil';
import { Storage } from '@ionic/storage';

describe('HomeService', () => {
  const spy = jasmine.createSpyObj('Storage', ['get','set'])

  spy.get = () =>{
    return of({raio:501, categorias:['Noticias']} as Perfil)
  }

  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      {provide: Storage, useValue: spy},
    ],
  }));

  it('should be created', () => {
    const service: HomeService = TestBed.get(HomeService);
    expect(service).toBeTruthy();
  });
});
