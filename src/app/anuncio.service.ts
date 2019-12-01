import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Anuncio } from './anuncio';
import { Observable, combineLatest, from } from 'rxjs';
import { Perfil } from './perfil';
import { ILatLng } from '@ionic-native/google-maps/ngx';
import { map, filter } from 'rxjs/operators';
import { GeolocationService } from './geolocation.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncioLocal:Anuncio
  anunciosVistosIds:string[] = []

  constructor(
    private _db: AngularFirestore,
    private _locationService:GeolocationService,
    private _storage:Storage,
  ) {
    this.loadViewedStorage()
  }

  saveLocal(an:Anuncio){
    this.anuncioLocal = an
  }
  
  loadLocal():Anuncio{
    return this.anuncioLocal
  }

  async saveViewedStorage(){
    this._storage.set('viewed',this.anunciosVistosIds)
  }
  
  loadViewedStorage(){
    return from(this._storage.get('viewed')).subscribe(obj =>{
      this.anunciosVistosIds = obj ? obj : []
    })
  }

  checkViewed(anuncio:Anuncio):boolean{
    const filtered = this.anunciosVistosIds.filter(an => an == anuncio.id)
    // return filtered.length >= 1 ? true : false
    if(this.anunciosVistosIds.includes(anuncio.id)){
      return true
    }else{
      this.anunciosVistosIds.push(anuncio.id)
      this.saveViewedStorage()
      return false
    }
  }

  save(anuncio: Anuncio) {
    if(anuncio.id){
      this._db.collection('anuncios').doc(anuncio.id).set(anuncio)
    }else{
      anuncio.views = 0
      this._db.collection('anuncios').add(anuncio)
    }
  }
  
  view(anuncio:Anuncio){
    anuncio.views++
    this._db.collection('anuncios').doc(anuncio.id).set(anuncio)
  }

  /* USAGE:
  findAll().subscribe(anuncios=>{
    //do something with anuncios
  })
  */
  findAll(): Observable<Anuncio[]> {
    return this._db.collection('anuncios').valueChanges({idField: 'id'}) as Observable<Anuncio[]>;
  }
  
  findByPerfil(perfil:Perfil):Observable<Anuncio[][]>{
    var observables:Observable<Anuncio[]>[] = []
    perfil.categorias.forEach(cat => {
      observables.push(this._db.collection('anuncios',ref => ref.where('categoria', '==', cat))
      .valueChanges({idField:'id'}) as Observable<Anuncio[]>)
    });
    return combineLatest(observables)
  }
  
  findByLocationAndPerfil(perfil:Perfil, location: ILatLng):Observable<Anuncio[][]>{
    var observables:Observable<Anuncio[]>[] = []
    perfil.categorias.forEach(cat => {
      observables.push(
        (
          this._db.collection('anuncios',ref => ref.where('categoria', '==', cat))
          .valueChanges({idField:'id'}) as Observable<Anuncio[]>
        ).pipe(
          map(array => array.filter(
            anuncio => {
              // console.log('LoCATION '+location.lat)
              // console.log('ANUNCIO LOCATION '+anuncio.geolocalizacao.lat)
              // console.log('RESULTADO '+(this._locationService.distance(location,anuncio.geolocalizacao) <= perfil.raio))
              return (this._locationService.distance(location,anuncio.geolocalizacao) <= perfil.raio)
            }))
        )
      )
    });
    return combineLatest(observables)
  }
}
