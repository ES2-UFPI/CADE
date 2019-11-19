import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { LocationService, Spherical, ILatLng } from '@ionic-native/google-maps/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements Resolve<any> {
  map: Spherical
  
  constructor() { }
  
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.getPos()
  }

  getPos(){
    return from(LocationService.getMyLocation())
  }

  distance(from:ILatLng, to: ILatLng):Number{
    const distance = this.map.computeDistanceBetween(from,to)
    return distance
  }

}
