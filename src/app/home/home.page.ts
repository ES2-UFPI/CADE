import { Component, Inject } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio';
import { ComentarioService } from '../comentario.service';
import { Comentario } from '../comentario';
import { Perfil } from '../perfil';
import { PerfilService } from '../perfil.service';
import { ILatLng, MyLocation } from '@ionic-native/google-maps/ngx';
import { ActivatedRoute } from '@angular/router';
import { GeolocationService } from '../geolocation.service';
import { HomeService } from './home.service';

import * as firebase from 'firebase';
import { StorageInterface } from '../storageInterface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  anuncios: Anuncio[] = []
  comentarios: Comentario[] = []
  perfil:Perfil
  location:ILatLng

  constructor(
    // private _homeService: HomeService,
    private _anuncioService: AnuncioService,
    @Inject('storagePerfil')private _perfilService: StorageInterface,
    private _locationService: GeolocationService,
    private _route: ActivatedRoute,
    private _comentarioService: ComentarioService
  ) {  }

  ngOnInit(){
  }
  
  ionViewWillEnter(){
    this.perfil = this._perfilService.load('perfil')
    // this.anuncios = this._homeService.load()
    const data:MyLocation = this._route.snapshot.data.location
    this.location = data.latLng
    console.log(this.location)
    this.search()
  }
  
  search(){
    if(!this.perfil || !this.location){
      this.perfil = {raio:500, categorias:[]}
      this.location = {lat:-5.115061, lng:-42.811459}
    }
    this.findAnunciosByPerfil()
  }
  
  findAnunciosByPerfil(){
    this._anuncioService.findByLocationAndPerfil(this.perfil, this.location)
    .subscribe(anunciosMatrix =>{
      this.anuncios = []
      anunciosMatrix.forEach(anuncios=>{
        anuncios.forEach(anuncio=>{
          this.anuncios.push(anuncio)
          if(!this._anuncioService.checkViewed(anuncio)){
            
            // this._homeService.save(this.anuncios)
          }
        })
      })
      console.log(this.anuncios)
    })
  }

  findComentariosByAnuncioID(anuncio:Anuncio){
    this._comentarioService.findByAnuncioID(anuncio).subscribe(lista => {this.comentarios = lista})
  }
    message: string = ""
    sendMessage(id_do_anuncio){
      firebase.database().ref('comentarios/' + id_do_anuncio).set({
        comentario: this.message,
      });
    }
  
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
