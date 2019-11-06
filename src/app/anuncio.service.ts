import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Anuncio } from './anuncio';
import { Observable, forkJoin, of, from, combineLatest } from 'rxjs';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  anuncioLocal:Anuncio

  constructor(private _db: AngularFirestore) { }

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
}
