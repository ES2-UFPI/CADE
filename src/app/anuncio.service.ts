import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Anuncio } from './anuncio';
import { Observable, combineLatest } from 'rxjs';
import { Perfil } from './perfil';
import { ILatLng } from '@ionic-native/google-maps/ngx';
import { map, filter } from 'rxjs/operators';
import { GeolocationService } from './geolocation.service';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncioLocal:Anuncio

  constructor(private _db: AngularFirestore, private _locationService:GeolocationService) { }

  saveLocal(an:Anuncio){
    this.anuncioLocal = an
  }
  
  loadLocal():Anuncio{
    return this.anuncioLocal
  }

  save(anuncio: Anuncio) {
    if(anuncio.id){
      this._db.collection('anuncios').doc(anuncio.id).set(anuncio);
    }else{
      this._db.collection('anuncios').add(anuncio);
    }
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
