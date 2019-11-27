import { TestBed} from '@angular/core/testing';

import { GeolocationService } from './geolocation.service';
import { Spherical } from '@ionic-native/google-maps/ngx';

describe('GeolocationService', () => {
  let service:GeolocationService 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: Spherical},
      ],
    })
    service = TestBed.get(GeolocationService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate distance', () => {
    spyOn(Spherical, 'computeDistanceBetween').and.returnValue(850.0)

    const from = {lat:-5.115061, lng:-42.811459}
    const to = {lat:-5.107449, lng:-42.812046}

    const distance = service.distance(from,to)

    expect(distance).toEqual(850.0);
  });

});
