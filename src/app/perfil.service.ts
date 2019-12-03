import { Injectable } from '@angular/core';
import { Perfil } from './perfil';
import { StorageInterface } from './storageInterface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService implements StorageInterface{
  perfil:Perfil
  
  constructor(private _storage: StorageService) { 
    _storage.load('perfil').subscribe(obj => {
      this.perfil = obj
    })
  }
  
  save(chave: string, obj: Perfil): void {
    this.perfil = obj
    this._storage.save('perfil',obj)
  }

  load(chave: string): Perfil{
    console.log(this.perfil)
    return this.perfil
  }

  // saveLocal(perfil: Perfil){
  //   this.save('perfil',perfil)
  // }

  // loadLocal(perfil: Perfil){
  //   this.load('perfil',perfil)
  // }

}
