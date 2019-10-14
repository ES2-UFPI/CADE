import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Anuncio } from './anuncio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(private _db: AngularFirestore) { }

  save(anuncio: Anuncio) {
    this._db.collection('anuncios').add(anuncio);
  }

  /* USAGE:
  findAll().subscribe(anuncios=>{
    //do something with anuncios
  })
  */
  findAll(): Observable<Anuncio[]> {
    return this._db.collection('anuncios').valueChanges({idField: 'id'}) as Observable<Anuncio[]>;
  }
}
