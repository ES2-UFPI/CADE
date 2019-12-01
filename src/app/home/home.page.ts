import { Component } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';
import { Perfil } from '../perfil';
import { PerfilService } from '../perfil.service';
import { ILatLng, MyLocation } from '@ionic-native/google-maps/ngx';
import { ActivatedRoute } from '@angular/router';
import { GeolocationService } from '../geolocation.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  anuncios: Anuncio[] = []
  perfil:Perfil
  location:ILatLng

  constructor(
    private _homeService: HomeService,
    private _anuncioService: AnuncioService,
    private _perfilService: PerfilService,
    private _locationService: GeolocationService,
    private _route: ActivatedRoute,
  ) {}

  ngOnInit(){
    this._perfilService.loadStorage().subscribe(perfil =>{
      this.perfil = perfil
    })
  }
  
  ionViewWillEnter(){
    this.perfil = this._perfilService.loadLocal()
    this.anuncios = this._homeService.load()
    const data:MyLocation = this._route.snapshot.data.location
    this.location = data.latLng
    this.search()
  }
  
  search(){
    if(this.perfil && this.location){
      this.findAnunciosByPerfil()
    }else{
      this.findAllAnuncios()
    }

  }
  
  findAllAnuncios(){
    console.log('findall')
    this.anuncios = []
    this._anuncioService.findAll()
    .subscribe(anuncios =>{
      this.anuncios = anuncios
      this._homeService.save(this.anuncios)
    })
  }
  findAnunciosByPerfil(){
    this._anuncioService.findByLocationAndPerfil(this.perfil, this.location)
    .subscribe(anunciosMatrix =>{
      anunciosMatrix.forEach(anuncios=>{
        anuncios.forEach(anuncio=>{
          console.log(anuncio)
          console.log(this.anuncios.includes(anuncio))
          if(!this._anuncioService.checkViewed(anuncio)){
            if(!this.anuncios.includes(anuncio)){
              this.anuncios.push(anuncio)
              this._homeService.save(this.anuncios)
            }
          }
        })
      })
    })
  }
  // findAnunciosByPerfil(perfil:Perfil){
  //   this.anuncios = []
  //   this._anuncioService.findByPerfil(perfil)
  //   .subscribe(anunciosMatrix =>{
  //     anunciosMatrix.forEach(anuncios=>{
  //       anuncios.forEach(anuncio=>{
  //         this.anuncios.push(anuncio)
  //       })
  //     })
  //   })
  // }
  
  distance(an:Anuncio){
    const distance = this._locationService.distance(this.location, an.geolocalizacao)
    if(distance < 1000){
      return String(distance.toFixed(0) + 'm')
    }else{
      const km = distance.valueOf() / 1000.0
      return String(km.toFixed(1) + 'km')
    }
  }

  doRefresh(event) {
    this.search()

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
