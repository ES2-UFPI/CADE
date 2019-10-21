import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Perfil } from './perfil';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private _storage: Storage) { }

  save(perfil:Perfil){
    this._storage.set('perfil',perfil)
  }

  load(){
    return from(this._storage.get('perfil'))
  }

}
