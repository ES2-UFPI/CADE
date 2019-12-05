import { TestBed } from '@angular/core/testing';

import { AnunciosVistosService } from './anuncios-vistos.service';
import { Storage } from '@ionic/storage';
import { of } from 'rxjs';

describe('AnunciosVistosService', () => {
  const spy = jasmine.createSpyObj('Storage', ['get','set'])

  spy.get = () =>{
    return of([] as string[])
  }

  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      {provide: Storage, useValue: spy},
    ],
  }));

  it('should be created', () => {
    const service: AnunciosVistosService = TestBed.get(AnunciosVistosService);
    expect(service).toBeTruthy();
  });
});
