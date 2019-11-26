import { TestBed } from '@angular/core/testing';

import { PerfilService } from './perfil.service';
import { Storage } from '@ionic/storage';

describe('PerfilService', () => {
  const spy = jasmine.createSpyObj('Storage', ['get','set'])

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
