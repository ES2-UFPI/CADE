import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { LocationService } from '@ionic-native/google-maps/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements Resolve<any> {
  
  constructor() { }
  
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    return this.getPos()
  }

  getPos(){
    return from(LocationService.getMyLocation())
  }
}
