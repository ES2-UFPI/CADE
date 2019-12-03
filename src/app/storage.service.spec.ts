import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage';

describe('StorageService', () => {
  const spy = jasmine.createSpyObj('Storage', ['get','set'])

  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      {provide: Storage, useValue: spy},
    ],
  }));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });
});
