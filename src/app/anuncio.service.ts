import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Anuncio } from './anuncio';
import { Observable, combineLatest, from } from 'rxjs';
import { Perfil } from './perfil';
import { ILatLng } from '@ionic-native/google-maps/ngx';
import { map } from 'rxjs/operators';
import { GeolocationService } from './geolocation.service';
import { Storage } from '@ionic/storage';
import { StorageInterface } from './storageInterface';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncioLocal: Anuncio;
  anunciosVistosIds: string[] = [];

  constructor(
    private _db: AngularFirestore,
    private _locationService: GeolocationService,
    @Inject('storageViewed')private _storage: StorageInterface,
  ) {
    this.loadViewedStorage();
  }

  saveLocal(an: Anuncio) {
    this.anuncioLocal = an;
  }

  loadLocal(): Anuncio {
    return this.anuncioLocal;
  }

  async saveViewedStorage() {
    this._storage.save('viewed', this.anunciosVistosIds);
  }

  loadViewedStorage() {
    this.anunciosVistosIds = this._storage.load('viewed');
  }

  checkViewed(anuncio: Anuncio): boolean {
    const filtered = this.anunciosVistosIds.filter(an => an === anuncio.id);
    // return filtered.length >= 1 ? true : false
    if (filtered.length >= 1) {
      return true;
    } else {
      this.anunciosVistosIds.push(anuncio.id);
      this.saveViewedStorage();
      this.view(anuncio);
      return false;
    }
  }

  save(anuncio: Anuncio) {
    if (anuncio.id) {
      this._db.collection('anuncios').doc(anuncio.id).set(anuncio);
    } else {
      anuncio.views = 0;
      this._db.collection('anuncios').add(anuncio);
    }
  }

  view(anuncio: Anuncio) {
    console.log('view');
    anuncio.views++;
    this._db.collection('anuncios').doc(anuncio.id).set(anuncio);
  }

  /* USAGE:
  findAll().subscribe(anuncios=>{
    //do something with anuncios
  })
  */
  findAll(): Observable<Anuncio[]> {
    return this._db.collection('anuncios').valueChanges({idField: 'id'}) as Observable<Anuncio[]>;
  }

  findByPerfil(perfil: Perfil): Observable<Anuncio[][]> {
    const observables: Observable<Anuncio[]>[] = [];
    perfil.categorias.forEach(cat => {
      observables.push(this._db.collection('anuncios', ref => ref.where('categoria', '==', cat))
      .valueChanges({idField: 'id'}) as Observable<Anuncio[]>);
    });
    return combineLatest(observables);
  }

  findByLocationAndPerfil(perfil: Perfil, location: ILatLng): Observable<Anuncio[][]> {
    const observables: Observable<Anuncio[]>[] = [];
    perfil.categorias.forEach(cat => {
      observables.push(
        (
          this._db.collection('anuncios', ref => ref.where('categoria', '==', cat))
          .valueChanges({idField: 'id'}) as Observable<Anuncio[]>
        ).pipe(
          map(array => array.filter(
            anuncio => {
               this.consoleLog(location, anuncio, perfil);
               return (this._locationService.distance(location, anuncio.geolocalizacao) <= perfil.raio);
            }))
        )
      );
    });
    return combineLatest(observables);
  }

  private consoleLog(location: ILatLng, anuncio: Anuncio, perfil: Perfil) {
    console.log('LoCATION ' + location.lat);
    console.log('ANUNCIO LOCATION ' + anuncio.geolocalizacao.lat);
    console.log('RESULTADO ' + (this._locationService.distance(location, anuncio.geolocalizacao) <= perfil.raio));
  }
}
