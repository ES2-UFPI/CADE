import { Component, OnInit, Input} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  ILatLng,
  GroundOverlay,
  Marker,
  GoogleMapOptions,
  LocationService,
  MyLocation
} from '@ionic-native/google-maps/ngx';
import { Platform, ModalController } from '@ionic/angular';
import { GeolocationService } from 'src/app/geolocation.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: GoogleMap;
  @Input() location: ILatLng;
  
  constructor(
    private platform: Platform,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }
  
  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    const data:MyLocation = this._route.snapshot.data.location
    this.location = data.latLng
    // this.location = {lat: data.coords.latitude, lng: data.coords.longitude}
    await this.platform.ready()
    console.log('ready')
    await this.loadMap()
  }

  loadMap() {
    let bounds: ILatLng[] = [
      this.location,
    ]

    const options: GoogleMapOptions = {
      controls: {
        'compass': true,
        'myLocationButton': true,
        'myLocation': true,   // (blue dot)
        // 'indoorPicker': true,
        'zoom': true,          // android only
        'mapToolbar': true     // android only
      },
    
      gestures: {
        scroll: true,
        // tilt: true,
        zoom: true,
        rotate: true
      },
    
      camera: {
        target: [
          this.location
        ]
      },
    
      preferences: {
        zoom: {
          // minZoom: 15,
          maxZoom: 18,
        },
        building: false
      }
    }
    
    console.log('aki')
    this.map = GoogleMaps.create('map_canvas', options)
  }

  choosePlace(){
    let navigationExtras: NavigationExtras = {
      state: {
        location: this.map.getCameraPosition().target
      }
    };
    this._router.navigate(['/cad-anuncio'],navigationExtras);
    // this._modal.dismiss(this.map.getCameraPosition().target)
  }

  voltar() {
    this._router.navigate(['/home'])
  }

}
