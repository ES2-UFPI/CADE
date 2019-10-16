import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Anuncio } from './anuncio';
import { Observable, forkJoin } from 'rxjs';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private _db:AngularFirestore) { }

  save(anuncio:Anuncio){
    this._db.collection('anuncios').add(anuncio)
  }

  /* USAGE:
  findAll().subscribe(anuncios=>{
    //do something with anuncios
  })
  */
  findAll():Observable<Anuncio[]>{
    return this._db.collection('anuncios').valueChanges({idField:'id'}) as Observable<Anuncio[]>
  }
  
  findByPerfil(perfil:Perfil):Observable<Anuncio[][]>{
    var observables:Observable<Anuncio[]>[] = []
    perfil.categories.forEach(cat => {
      observables.push(this._db.collection('anuncios',ref => ref.where('category', '==', cat))
        .valueChanges({idField:'id'}) as Observable<Anuncio[]>)
    });
    return forkJoin(observables)
  }
}
