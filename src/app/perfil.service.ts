import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Perfil } from './perfil';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfil:Perfil

  constructor(private _storage: Storage) { 
    this.loadStorage()
  }

  saveStorage(perfil:Perfil){
    this._storage.set('perfil',perfil)
    this.saveLocal(perfil)
  }

  loadStorage(){
    from(this._storage.get('perfil')).subscribe(perfil =>{
      this.perfil = perfil
    })
  }

  saveLocal(perfil:Perfil){
    this.perfil = perfil
  }

  loadLocal(){
    return this.perfil
  }

}
