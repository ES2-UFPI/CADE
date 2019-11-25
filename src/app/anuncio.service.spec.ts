import { TestBed } from '@angular/core/testing';

import { AnuncioService } from './anuncio.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { GeolocationService } from './geolocation.service';

describe('AnuncioService', () => {
  const angularFirestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection'])
  const geolocationServiceSpy = jasmine.createSpyObj('GeolocationService', ['distance'])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: AngularFirestore, useValue: angularFirestoreSpy},
        {provide: GeolocationService, useValue: geolocationServiceSpy},
      ],
    })
  }
)

  it('should be created', () => {
    const service: AnuncioService = TestBed.get(AnuncioService);
    expect(service).toBeTruthy();
  });
});
