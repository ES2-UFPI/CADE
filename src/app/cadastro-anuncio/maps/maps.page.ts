import { Component, OnInit} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  ILatLng,
  GoogleMapOptions,
  MyLocation
} from '@ionic-native/google-maps/ngx';
import { Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from 'src/app/anuncio.service';
import { Anuncio } from 'src/app/anuncio';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: GoogleMap
  location: ILatLng
  anuncio: Anuncio
  
  constructor(
    private platform: Platform,
    private _route: ActivatedRoute,
    private _router: Router,
    private _anuncioService: AnuncioService,
    ) { }
  
  async ngOnInit() {
    console.log('INIT')
    this.anuncio = this._anuncioService.loadLocal()
    if(this.anuncio){
      this.location = this.anuncio.geolocalizacao
      if(!this.location){
        const data:MyLocation = this._route.snapshot.data.location
        this.location = data.latLng
      }
    }else{
      const data:MyLocation = this._route.snapshot.data.location
      this.location = data.latLng
    }
    await this.platform.ready()
    console.log('ready')
    console.log(this.location)
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
    
    this.map = GoogleMaps.create('map_canvas', options)
  }

  choosePlace(){
    this.anuncio.geolocalizacao = this.map.getCameraPosition().target
    this._anuncioService.saveLocal(this.anuncio)
    console.log(this._anuncioService.loadLocal().geolocalizacao)
    this._router.navigate(['/cad-anuncio']);
  }
}
