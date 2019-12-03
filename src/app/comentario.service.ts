import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Comentario } from './comentario';
import { Observable, forkJoin, of, from, combineLatest } from 'rxjs';
import { Anuncio } from './anuncio';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  comentarioLocal:Comentario

  constructor(private _db: AngularFirestore) { }

  svLocal(co:Comentario){
    this.comentarioLocal = co
  }
  
  ldLocal():Comentario{
    return this.comentarioLocal
  }

  sv(comentario: Comentario) {
    if(comentario.id){
      this._db.collection('comentarios').doc(comentario.id).set(comentario);
    }else{
      this._db.collection('comentarios').add(comentario);
    }
  }

  findByAnuncioID(anuncio: Anuncio):Observable<Comentario[]>{
    //var observables:Observable<Comentario[]>[] = []

      /* observables.push(this._db.collection('comentarios',ref => ref.where(comentario.id_do_anuncio, '==', anuncio.id))
      .valueChanges({idField:'id'}) as Observable<Comentario[]>) */

      return this._db.collection('comentarios',ref => ref.where('id_do_anuncio', '==', anuncio.id))
      .valueChanges({idField:'id'}) as Observable<Comentario[]>

    //return combineLatest(observables)
  }
}
