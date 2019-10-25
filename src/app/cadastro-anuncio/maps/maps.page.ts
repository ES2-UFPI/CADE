import { Component, OnInit } from '@angular/core';
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
import { Platform } from '@ionic/angular';
import { GeolocationService } from 'src/app/geolocation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: GoogleMap;
  groundOverlay: GroundOverlay;
  marker1: Marker;
  marker2: Marker;
  location
  
  constructor(private platform: Platform, private _geo: GeolocationService, private _route: ActivatedRoute) { }
  
  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    const data:MyLocation = this._route.snapshot.data.location
    this.location = data.latLng
    // this.location = {lat: data.coords.latitude, lng: data.coords.longitude}
    await this.platform.ready();
    console.log('ready')
    await this.loadMap();
  }

  loadMap() {
    let bounds: ILatLng[] = [
      this.location,
    ];

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
    };
    
    console.log('aki')
    this.map = GoogleMaps.create('map_canvas', options);

    // const marker1 = this.map.addMarkerSync({
    //   'position': this.map.getCameraPosition().target,
    //   'draggable': true
    // });

    // marker1.

    // this.marker2 = this.map.addMarkerSync({
    //   'position': bounds[1],
    //   'draggable': true
    // });
    // this.marker1.on('position_changed').subscribe(this.redrawGroundOverlay.bind(this));
    // this.marker2.on('position_changed').subscribe(this.redrawGroundOverlay.bind(this));
    // this.marker1.trigger(GoogleMapsEvent.MARKER_CLICK);

    // this.groundOverlay = this.map.addGroundOverlaySync({
    //   'url': 'assets/imgs/newark_nj_1922.jpg',
    //   'bounds': bounds,
    //   'opacity': 0.5,
    //   'clickable': true  // default = false
    // });

    // // Catch the GROUND_OVERLAY_CLICK event
    // this.groundOverlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(() => {
    //   this.groundOverlay.setImage('assets/imgs/newark_nj_1922_2.jpg');
    // });

  }

  redrawGroundOverlay() {
    this.groundOverlay.setBounds([
      this.marker1.getPosition(),
      this.marker2.getPosition()
    ]);
  }

}
