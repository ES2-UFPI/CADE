import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Perfil } from './perfil';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfil:Perfil

  constructor(private _storage: Storage) { }

  saveStorage(perfil:Perfil){
    this._storage.set('perfil',perfil)
    this.saveLocal(perfil)
  }

  loadStorage(){
    return from(this._storage.get('perfil'))
  }

  saveLocal(perfil:Perfil){
    this.perfil = perfil
  }

  loadLocal(){
    return this.perfil
  }

}
