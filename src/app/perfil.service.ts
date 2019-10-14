import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Perfil } from './perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private _storage: Storage) { }

  save(perfil:Perfil){
    this._storage.set('perfil',perfil)
  }

  load(){
    return this._storage.get('perfil')
  }

}
